const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SPREADSHEET_ID = "1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY";
// B = Email, F = Course Purchased
const RANGE = "'**RTO DOCS**'!B2:F";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ matched: false, error: "Too many attempts. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    const body = await req.json().catch(() => ({}));
    const rawEmail = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!isValidEmail(rawEmail)) {
      return new Response(
        JSON.stringify({ matched: false, error: "Please enter a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const url = new URL(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}`);
    url.searchParams.set("majorDimension", "ROWS");

    const resp = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
      },
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(`Sheets API failed [${resp.status}]: ${JSON.stringify(data)}`);
    }

    const rows: string[][] = data?.values ?? [];
    const matchedMachines = new Set<MachineKey>();
    let matched = false;

    for (const row of rows) {
      const email = (row?.[0] ?? "").toString().trim().toLowerCase();
      if (!email || email !== rawEmail) continue;
      matched = true;
      const course = (row?.[4] ?? "").toString();
      for (const m of detectMachines(course)) matchedMachines.add(m);
    }

    // If email matched but no recognizable course found, allow all machines as fallback
    const machines = matched && matchedMachines.size === 0
      ? [...MACHINE_KEYS]
      : [...matchedMachines];

    return new Response(JSON.stringify({ matched, machines }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("verify-returning-student error:", error);
    return new Response(
      JSON.stringify({ matched: false, error: "Verification failed. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
