// Public, token-gated logbook signing endpoint.
//
// GET  ?token=<sign_token>   -> entry summary + trainer dropdown options
// POST { token, trainer_id, signature }  -> records the signature (first signer wins)

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const PIT = Deno.env.get("GHL_PIT_TOKEN") ?? "";
const LOCATION_ID = Deno.env.get("GHL_LOCATION_ID") ?? "";
const SITE_URL = "https://www.cailinminingcivil.com";
const STUDENT_FIELD_NAME = "Student Logbook URL";

function ghlHeaders() {
  return {
    Authorization: `Bearer ${PIT}`,
    Version: GHL_VERSION,
    Accept: "application/json",
  };
}

// After a successful sign-off, make sure the student's consolidated logbook URL
// is present on their GHL contact. Never allowed to break the signing flow.
async function syncStudentLogbookUrl(entryId: string) {
  let student: { id: string; ghl_contact_id: string | null; logbook_token: string } | null = null;
  try {
    const { data: entry } = await supabase
      .from("logbook_entries")
      .select("students(id, ghl_contact_id, logbook_token)")
      .eq("id", entryId)
      .maybeSingle();

    const s = (entry as any)?.students;
    student = Array.isArray(s) ? s[0] : s;
    if (!student) return;

    const logbookUrl = `${SITE_URL}/my-logbook/${student.logbook_token}`;
    if (!student.ghl_contact_id || !PIT || !LOCATION_ID) return;

    const fieldsRes = await fetch(`${GHL_BASE}/locations/${LOCATION_ID}/customFields`, {
      headers: ghlHeaders(),
    });
    if (!fieldsRes.ok) throw new Error(`customFields ${fieldsRes.status}`);
    const fields = await fieldsRes.json();
    const field = (fields.customFields ?? []).find((f: any) => f.name === STUDENT_FIELD_NAME);
    if (!field) throw new Error(`Custom field "${STUDENT_FIELD_NAME}" not found in GHL`);

    const upd = await fetch(`${GHL_BASE}/contacts/${student.ghl_contact_id}`, {
      method: "PUT",
      headers: { ...ghlHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ customFields: [{ id: field.id, field_value: logbookUrl }] }),
    });
    if (!upd.ok) throw new Error(`updateContact ${upd.status}`);
  } catch (e) {
    console.error("student logbook sync failed", e);
    try {
      await supabase.from("student_logbook_errors").insert({
        student_id: student?.id ?? null,
        ghl_contact_id: student?.ghl_contact_id ?? null,
        error: String((e as Error)?.message ?? e).slice(0, 500),
      });
    } catch (_) {
      // swallow
    }
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isValidToken(t: unknown): t is string {
  return typeof t === "string" && /^[a-f0-9]{20,80}$/i.test(t);
}

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; ext: string } | null {
  const m = dataUrl.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/i);
  if (!m) return null;
  const binary = atob(m[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  if (bytes.length < 500 || bytes.length > 3_000_000) return null;
  return { bytes, ext: m[1].toLowerCase() === "png" ? "png" : "jpg" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (req.method === "GET") {
      const token = new URL(req.url).searchParams.get("token");
      if (!isValidToken(token)) return json({ error: "Invalid link" }, 400);

      const { data: entry } = await supabase
        .from("logbook_entries")
        .select(
          "id, session_date, session_type, machine, hours, notes, status, trainer_name, signed_at, token_expires_at, students(full_name)",
        )
        .eq("sign_token", token)
        .maybeSingle();

      if (!entry) return json({ error: "This signing link is not valid" }, 404);
      if (new Date(entry.token_expires_at) < new Date()) {
        return json({ error: "This signing link has expired" }, 410);
      }

      const { data: trainers } = await supabase
        .from("trainers")
        .select("id, full_name")
        .eq("active", true)
        .order("full_name");

      return json({
        entry: {
          id: entry.id,
          student_name: (entry as any).students?.full_name ?? "Student",
          session_date: entry.session_date,
          session_type: entry.session_type,
          machine: entry.machine,
          hours: entry.hours,
          notes: entry.notes,
          status: entry.status,
          trainer_name: entry.trainer_name,
          signed_at: entry.signed_at,
        },
        trainers: trainers ?? [],
      });
    }

    if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

    const body = await req.json().catch(() => null);
    if (!body) return json({ error: "Invalid request" }, 400);

    const { token, trainer_id, signature } = body as Record<string, unknown>;
    if (!isValidToken(token)) return json({ error: "Invalid link" }, 400);
    if (typeof trainer_id !== "string" || trainer_id.length < 10) {
      return json({ error: "Please select your name" }, 400);
    }
    if (typeof signature !== "string") return json({ error: "Signature is required" }, 400);

    const img = dataUrlToBytes(signature);
    if (!img) return json({ error: "Signature image is not valid" }, 400);

    const { data: entry } = await supabase
      .from("logbook_entries")
      .select("id, status, token_expires_at, trainer_name")
      .eq("sign_token", token)
      .maybeSingle();

    if (!entry) return json({ error: "This signing link is not valid" }, 404);
    if (entry.status === "signed") {
      return json(
        { error: `This entry has already been signed by ${entry.trainer_name ?? "a trainer"}` },
        409,
      );
    }
    if (entry.status !== "pending") return json({ error: "This entry is no longer open" }, 409);
    if (new Date(entry.token_expires_at) < new Date()) {
      return json({ error: "This signing link has expired" }, 410);
    }

    const { data: trainer } = await supabase
      .from("trainers")
      .select("id, full_name")
      .eq("id", trainer_id)
      .eq("active", true)
      .maybeSingle();
    if (!trainer) return json({ error: "Please select your name" }, 400);

    const path = `${entry.id}/${Date.now()}.${img.ext}`;
    const { error: upErr } = await supabase.storage
      .from("logbook-signatures")
      .upload(path, img.bytes, {
        contentType: img.ext === "png" ? "image/png" : "image/jpeg",
        upsert: false,
      });
    if (upErr) throw new Error(`upload failed: ${upErr.message}`);

    // First signer wins: only update while still pending
    const { data: updated, error: updErr } = await supabase
      .from("logbook_entries")
      .update({
        status: "signed",
        trainer_id: trainer.id,
        trainer_name: trainer.full_name,
        trainer_signature_path: path,
        signed_at: new Date().toISOString(),
        signed_ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
      })
      .eq("id", entry.id)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();

    if (updErr) throw new Error(updErr.message);
    if (!updated) {
      await supabase.storage.from("logbook-signatures").remove([path]);
      return json({ error: "This entry was just signed by another trainer" }, 409);
    }

    return json({ ok: true, trainer_name: trainer.full_name });
  } catch (e) {
    console.error("logbook-sign error", e);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});
