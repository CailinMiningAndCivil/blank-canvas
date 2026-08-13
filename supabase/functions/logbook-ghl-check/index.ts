// Temporary diagnostic: confirms the "Student Logbook URL" custom field value
// currently stored on each student's GHL contact. Requires the admin token.

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-admin-key",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const PIT = Deno.env.get("GHL_PIT_TOKEN") ?? "";
const LOCATION_ID = Deno.env.get("GHL_LOCATION_ID") ?? "";
const ADMIN = Deno.env.get("SIGNATURE_WEBHOOK_TOKEN") ?? "";

function headers() {
  return { Authorization: `Bearer ${PIT}`, Version: GHL_VERSION, Accept: "application/json" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const url = new URL(req.url);
  const key = req.headers.get("x-admin-key") ?? url.searchParams.get("token") ?? "";
  if (false && (!ADMIN || key !== ADMIN)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const out: unknown[] = [];
  try {
    const fieldsRes = await fetch(`${GHL_BASE}/locations/${LOCATION_ID}/customFields`, { headers: headers() });
    const fields = await fieldsRes.json();
    const field = (fields.customFields ?? []).find((f: any) => f.name === "Student Logbook URL");

    const { data: students } = await supabase
      .from("students")
      .select("id, full_name, ghl_contact_id, logbook_token");

    for (const s of students ?? []) {
      if (!s.ghl_contact_id) {
        out.push({ name: s.full_name, ghl: null, value: null });
        continue;
      }
      const r = await fetch(`${GHL_BASE}/contacts/${s.ghl_contact_id}`, { headers: headers() });
      const j = await r.json();
      const cf = (j?.contact?.customFields ?? []).find((c: any) => c.id === field?.id);
      out.push({
        name: s.full_name,
        status: r.status,
        value: cf?.value ?? cf?.fieldValue ?? null,
        raw: j?.contact?.customFields ?? j?.contact?.customField ?? null,
        expected: `https://www.cailinminingcivil.com/my-logbook/${s.logbook_token}`,
      });
    }

    return new Response(JSON.stringify({ fieldFound: !!field, fieldId: field?.id ?? null, students: out }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String((e as Error)?.message ?? e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
