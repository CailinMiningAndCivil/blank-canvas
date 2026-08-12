// Edit a logbook entry.
//
// POST { token?, entry_id?, session_date?, session_type?, machine?, hours?, notes? }
//  - With the admin key (x-admin-key header or ?token=): may edit ANY entry by entry_id.
//  - With a valid sign_token: may edit that entry only while it is still pending.
// Signed entries are locked for trainers.

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const ADMIN_KEY = Deno.env.get("SIGNATURE_WEBHOOK_TOKEN") ?? "";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const isSignToken = (t: unknown): t is string =>
  typeof t === "string" && /^[a-f0-9]{20,80}$/i.test(t);
const isUuid = (v: unknown): v is string =>
  typeof v === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

function cleanText(v: unknown, max: number): string | null | undefined {
  if (v === undefined) return undefined;
  if (v === null) return null;
  if (typeof v !== "string") return undefined;
  const s = v.trim();
  if (!s) return null;
  return s.slice(0, max);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const url = new URL(req.url);
    const provided = req.headers.get("x-admin-key") ?? url.searchParams.get("key") ?? "";
    const isAdmin = !!ADMIN_KEY && provided === ADMIN_KEY;

    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) return json({ error: "Invalid request" }, 400);

    // Locate the entry
    let entry: any = null;
    if (isAdmin && isUuid(body.entry_id)) {
      const { data } = await supabase
        .from("logbook_entries")
        .select("id, status, token_expires_at")
        .eq("id", body.entry_id)
        .maybeSingle();
      entry = data;
    } else if (isSignToken(body.token)) {
      const { data } = await supabase
        .from("logbook_entries")
        .select("id, status, token_expires_at")
        .eq("sign_token", body.token)
        .maybeSingle();
      entry = data;
      if (entry && new Date(entry.token_expires_at) < new Date()) {
        return json({ error: "This link has expired" }, 410);
      }
      if (entry && entry.status === "signed") {
        return json({ error: "This entry has been signed and can no longer be edited" }, 409);
      }
    } else {
      return json({ error: "Not authorised" }, 401);
    }

    if (!entry) return json({ error: "Entry not found" }, 404);

    // Build the update
    const patch: Record<string, unknown> = {};

    if (body.session_date !== undefined) {
      const d = typeof body.session_date === "string" ? body.session_date.trim() : "";
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || Number.isNaN(Date.parse(d))) {
        return json({ error: "Training date must be a valid date" }, 400);
      }
      patch.session_date = d;
    }

    const sessionType = cleanText(body.session_type, 200);
    if (sessionType !== undefined) {
      if (!sessionType) return json({ error: "Course is required" }, 400);
      patch.session_type = sessionType;
    }

    const machine = cleanText(body.machine, 200);
    if (machine !== undefined) patch.machine = machine;

    const notes = cleanText(body.notes, 4000);
    if (notes !== undefined) patch.notes = notes;

    if (body.hours !== undefined) {
      if (body.hours === null || body.hours === "") {
        patch.hours = null;
      } else {
        const h = Number(body.hours);
        if (!Number.isFinite(h) || h < 0 || h > 24) {
          return json({ error: "Hours must be between 0 and 24" }, 400);
        }
        patch.hours = h;
      }
    }

    if (Object.keys(patch).length === 0) return json({ error: "Nothing to update" }, 400);

    let query = supabase.from("logbook_entries").update(patch).eq("id", entry.id);
    if (!isAdmin) query = query.eq("status", "pending");

    const { data: updated, error } = await query
      .select("id, session_date, session_type, machine, hours, notes, status")
      .maybeSingle();

    if (error) throw error;
    if (!updated) return json({ error: "This entry can no longer be edited" }, 409);

    return json({ ok: true, entry: updated });
  } catch (e) {
    console.error("logbook-update error", e);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});
