const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SPREADSHEET_ID = "1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY";
// RTO DOCS: B=Email, E=Date of Original Booking, F=Course Purchased
const RTO_RANGE = "**RTO DOCS**!B2:F";
// Return Sessions: C=Email, E=Appointment Date
const RETURN_RANGE = "Return Sessions!C2:E";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const GHL_API_BASE = "https://services.leadconnectorhq.com";
const PROMO_TAG = "eligible - free return promo";

const MACHINE_KEYS = ["moxy", "watercart", "roller", "loader", "excavator"] as const;
type MachineKey = typeof MACHINE_KEYS[number];

function detectMachines(courseText: string): MachineKey[] {
  const t = courseText.toLowerCase();
  const found: MachineKey[] = [];
  if (t.includes("moxy")) found.push("moxy");
  if (t.includes("watercart") || t.includes("water cart")) found.push("watercart");
  if (t.includes("roller")) found.push("roller");
  if (t.includes("loader")) found.push("loader");
  if (t.includes("excavator")) found.push("excavator");
  return found;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

// Parses "Tuesday, 5 May 2026 9:00 AM" or ISO strings. Returns Date or null.
function parseDateLoose(raw: string): Date | null {
  if (!raw) return null;
  const direct = new Date(raw);
  if (!isNaN(direct.getTime())) return direct;
  const m = raw.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:\s+(\d{1,2}):(\d{2})\s*(AM|PM)?)?/i);
  if (!m) return null;
  const [, d, monStr, y, hh, mm, ap] = m;
  const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  const month = months.indexOf(monStr.slice(0,3).toLowerCase());
  if (month < 0) return null;
  let hour = hh ? parseInt(hh,10) : 0;
  const minute = mm ? parseInt(mm,10) : 0;
  if (ap) { if (ap.toUpperCase()==="PM" && hour<12) hour+=12; if (ap.toUpperCase()==="AM" && hour===12) hour=0; }
  return new Date(Date.UTC(parseInt(y,10), month, parseInt(d,10), hour, minute));
}

function startOfWeek(d: Date): Date {
  // Monday as start of week, in UTC
  const day = d.getUTCDay(); // 0=Sun..6=Sat
  const diff = (day === 0 ? -6 : 1 - day);
  const r = new Date(d);
  r.setUTCDate(d.getUTCDate() + diff);
  r.setUTCHours(0,0,0,0);
  return r;
}
function sameWeek(a: Date, b: Date): boolean {
  return startOfWeek(a).getTime() === startOfWeek(b).getTime();
}
function dayDiff(a: Date, b: Date): number {
  const ad = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()));
  const bd = new Date(Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()));
  return Math.round((ad.getTime() - bd.getTime()) / 86400000);
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const ipHits = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

async function fetchSheetRange(range: string, lovableKey: string, sheetsKey: string): Promise<string[][]> {
  const url = new URL(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${range}`);
  url.searchParams.set("majorDimension", "ROWS");
  const resp = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${lovableKey}`, "X-Connection-Api-Key": sheetsKey },
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(`Sheets ${range} failed [${resp.status}]: ${JSON.stringify(data)}`);
  return data?.values ?? [];
}

async function fetchGhlTags(email: string, token: string, locationId: string): Promise<string[] | null> {
  try {
    const url = `${GHL_API_BASE}/contacts/search`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId,
        pageLimit: 5,
        filters: [{ field: "email", operator: "eq", value: email }],
      }),
    });
    if (!resp.ok) {
      console.error("GHL search failed", resp.status, await resp.text());
      return null;
    }
    const data = await resp.json();
    const contacts = data?.contacts ?? [];
    const tags = new Set<string>();
    for (const c of contacts) {
      for (const t of (c?.tags ?? [])) tags.add(String(t).toLowerCase());
    }
    return [...tags];
  } catch (e) {
    console.error("GHL fetch error", e);
    return null;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ matched: false, error: "Too many attempts. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    const GHL_API_TOKEN = Deno.env.get("GHL_API_TOKEN");
    const GHL_LOCATION_ID = Deno.env.get("GHL_LOCATION_ID");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    const body = await req.json().catch(() => ({}));
    const rawEmail = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!isValidEmail(rawEmail)) {
      return new Response(JSON.stringify({ matched: false, error: "Please enter a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 1. Look up training tracker
    const rows = await fetchSheetRange(RTO_RANGE, LOVABLE_API_KEY, GOOGLE_SHEETS_API_KEY);
    const matchedMachines = new Set<MachineKey>();
    let matched = false;
    let hasEligibleCourse = false;
    let latestCourseDate: Date | null = null;

    for (const row of rows) {
      const email = (row?.[0] ?? "").toString().trim().toLowerCase();
      if (!email || email !== rawEmail) continue;
      matched = true;
      const dateStr = (row?.[3] ?? "").toString(); // col E (offset 3 from B)
      const course = (row?.[4] ?? "").toString();   // col F
      const lc = course.toLowerCase();
      const isVocOrAssessmentOnly =
        (lc.includes("voc") || lc.includes("assessment only")) &&
        !lc.includes("bundle") && !lc.includes("short course") && !lc.includes("full day");
      if (isVocOrAssessmentOnly) continue;
      hasEligibleCourse = true;
      const d = parseDateLoose(dateStr);
      if (d && (!latestCourseDate || d > latestCourseDate)) latestCourseDate = d;
      for (const m of detectMachines(course)) matchedMachines.add(m);
    }

    const machines = matched && hasEligibleCourse && matchedMachines.size === 0
      ? [...MACHINE_KEYS] : [...matchedMachines];

    if (!matched || !hasEligibleCourse) {
      return new Response(JSON.stringify({ matched, machines, eligible: hasEligibleCourse }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 2. Check GHL tag
    let hasPromoTag = false;
    if (GHL_API_TOKEN && GHL_LOCATION_ID) {
      const tags = await fetchGhlTags(rawEmail, GHL_API_TOKEN, GHL_LOCATION_ID);
      if (tags) hasPromoTag = tags.includes(PROMO_TAG.toLowerCase());
    }

    // No promo tag → proceed to machine selection
    if (!hasPromoTag) {
      return new Response(JSON.stringify({
        matched: true, machines, eligible: true, hasPromoTag: false,
      }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 3. 6-month window check (from latest course date)
    const now = new Date();
    let windowExpired = false;
    if (latestCourseDate) {
      const sixMonths = new Date(latestCourseDate);
      sixMonths.setUTCMonth(sixMonths.getUTCMonth() + 6);
      if (now > sixMonths) windowExpired = true;
    }

    if (windowExpired) {
      return new Response(JSON.stringify({
        matched: true, machines, eligible: true, hasPromoTag: true,
        windowExpired: true, courseDate: latestCourseDate?.toISOString() ?? null,
      }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // 4. Booking frequency check from Return Sessions
    const returnRows = await fetchSheetRange(RETURN_RANGE, LOVABLE_API_KEY, GOOGLE_SHEETS_API_KEY);
    const userBookings: Date[] = [];
    for (const r of returnRows) {
      const email = (r?.[0] ?? "").toString().trim().toLowerCase();
      if (email !== rawEmail) continue;
      const d = parseDateLoose((r?.[2] ?? "").toString());
      if (d) userBookings.push(d);
    }

    let weeklyBlocked = false;
    let consecutiveBlocked = false;
    for (const b of userBookings) {
      if (b < new Date(now.getTime() - 14 * 86400000)) continue; // ignore old past bookings
      if (sameWeek(b, now)) { weeklyBlocked = true; }
      // Consecutive: any existing booking within 1 day of "now" (we can't know proposed date yet,
      // so we just flag if a recent booking exists this week — covered by weeklyBlocked).
      const diff = Math.abs(dayDiff(b, now));
      if (diff <= 1) consecutiveBlocked = true;
    }

    return new Response(JSON.stringify({
      matched: true, machines, eligible: true, hasPromoTag: true,
      windowExpired: false, weeklyBlocked, consecutiveBlocked,
      upcomingBookings: userBookings.filter(b => b >= new Date(now.getTime() - 7*86400000))
        .map(b => b.toISOString()),
      courseDate: latestCourseDate?.toISOString() ?? null,
    }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  } catch (error: unknown) {
    console.error("verify-returning-student error:", error);
    return new Response(JSON.stringify({ matched: false, error: "Verification failed. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
