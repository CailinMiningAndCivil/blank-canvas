// Admin-only list endpoint for the Digital Training Logbook.
//
// POST { status?: "all" | "pending" | "signed" }
// Returns logbook entries with student info and signed signature URLs.

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

const WEBHOOK_TOKEN = Deno.env.get("SIGNATURE_WEBHOOK_TOKEN") ?? "";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isValidStatus(s: unknown): s is "all" | "pending" | "signed" {
  return s === "all" || s === "pending" || s === "signed";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const url = new URL(req.url);
  const provided = req.headers.get("x-admin-key") ?? url.searchParams.get("token") ?? "";
  if (!WEBHOOK_TOKEN || provided !== WEBHOOK_TOKEN) {
    return json({ error: "Unauthorized" }, 401);
  }

  let body: Record<string, unknown> = {};
  try {
    body = await req.json().catch(() => ({}));
  } catch {
    // ignore empty body
  }

  const status = isValidStatus(body.status) ? body.status : "all";

  try {
    let query = supabase
      .from("logbook_entries")
      .select(
        "id, session_date, session_type, machine, hours, notes, status, sign_token, trainer_id, trainer_name, trainer_signature_path, signed_at, signed_ip, created_at, students(id, full_name, email, phone)",
      )
      .order("created_at", { ascending: false });

    if (status !== "all") {
      query = query.eq("status", status);
    }

    const { data: entries, error } = await query;
    if (error) throw error;

    const rows = (entries ?? []).map((entry: any) => {
      const row = { ...entry } as Record<string, unknown>;
      // Generate a temporary signed URL for the signature image when present.
      if (entry.trainer_signature_path) {
        const { data } = supabase.storage
          .from("logbook-signatures")
          .createSignedUrl(entry.trainer_signature_path, 60 * 60); // 1 hour
        row.signature_url = data?.signedUrl ?? null;
      } else {
        row.signature_url = null;
      }
      return row;
    });

    return json({ entries: rows });
  } catch (e) {
    console.error("logbook-list error", e);
    return json({ error: "Failed to load logbook entries" }, 500);
  }
});
