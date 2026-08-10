// Creates a pending logbook entry from a GHL form webhook and pushes the signing URL
// back onto the contact's custom field so GHL automations can notify the trainers.
//
// POST body (from GHL webhook):
// {
//   "contactId": "abc123",              // required
//   "full_name": "...",                 // optional (falls back to GHL contact)
//   "email": "...", "phone": "...",     // optional
//   "session_type": "Starter Bundle",   // optional
//   "machine": "Excavator",             // optional
//   "hours": 4,                         // optional
//   "notes": "..."                      // optional
// }
//
// Auth: X-Admin-Key header or ?token= query param must match SIGNATURE_WEBHOOK_TOKEN.

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const PIT = Deno.env.get("GHL_PIT_TOKEN")!;
const LOCATION_ID = Deno.env.get("GHL_LOCATION_ID")!;
const WEBHOOK_TOKEN = Deno.env.get("SIGNATURE_WEBHOOK_TOKEN") ?? "";

const SIGNING_FIELD_NAME = "Logbook Signing URL";
const SITE_URL = "https://www.cailinminingcivil.com";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

function ghlHeaders() {
  return {
    Authorization: `Bearer ${PIT}`,
    Version: GHL_VERSION,
    Accept: "application/json",
  };
}

async function getFieldId(name: string): Promise<string | null> {
  const r = await fetch(`${GHL_BASE}/locations/${LOCATION_ID}/customFields`, {
    headers: ghlHeaders(),
  });
  if (!r.ok) throw new Error(`customFields ${r.status}`);
  const j = await r.json();
  for (const f of j.customFields ?? []) if (f.name === name) return f.id;
  return null;
}

async function getContact(contactId: string) {
  const r = await fetch(`${GHL_BASE}/contacts/${contactId}`, { headers: ghlHeaders() });
  if (!r.ok) throw new Error(`getContact ${r.status}`);
  return (await r.json()).contact;
}

async function updateContactField(contactId: string, fieldId: string, value: string) {
  const r = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
    method: "PUT",
    headers: { ...ghlHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ customFields: [{ id: fieldId, field_value: value }] }),
  });
  if (!r.ok) throw new Error(`updateContact ${r.status}`);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function pickString(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length ? t.slice(0, 2000) : null;
}

function pickDate(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t) return null;
  const iso = /^\d{4}-\d{2}-\d{2}/.test(t);
  if (iso) return t.slice(0, 10);
  const parts = t.split(/[-\/]/);
  if (parts.length === 3) {
    const [a, b, c] = parts;
    if (a.length === 4) return `${a}-${b.padStart(2, "0")}-${c.padStart(2, "0")}`;
    if (c.length === 4) return `${c}-${b.padStart(2, "0")}-${a.padStart(2, "0")}`;
  }
  return null;
}

function buildNotes(tasks: string | null, additional: string | null): string | null {
  const parts: string[] = [];
  if (tasks) parts.push(`Tasks completed: ${tasks}`);
  if (additional) parts.push(`Additional notes: ${additional}`);
  return parts.length ? parts.join("\n\n") : null;
}


Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const url = new URL(req.url);
  const provided = req.headers.get("x-admin-key") ?? url.searchParams.get("token") ?? "";
  if (!WEBHOOK_TOKEN || provided !== WEBHOOK_TOKEN) {
    return json({ error: "Unauthorized" }, 401);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const contactId =
    pickString(body.contactId) ?? pickString(body.contact_id) ?? pickString(body.id);
  if (!contactId) return json({ error: "contactId is required" }, 400);

  try {
    let fullName = pickString(body.full_name) ?? pickString(body.name);
    let email = pickString(body.email);
    let phone = pickString(body.phone);

    if (!fullName || !email) {
      try {
        const c = await getContact(contactId);
        fullName = fullName ??
          [c?.firstName, c?.lastName].filter(Boolean).join(" ").trim() ??
          null;
        email = email ?? pickString(c?.email);
        phone = phone ?? pickString(c?.phone);
      } catch {
        // contact lookup is best-effort
      }
    }
    if (!fullName) fullName = "Unknown student";

    // Upsert student by GHL contact id
    const { data: existing } = await supabase
      .from("students")
      .select("id")
      .eq("ghl_contact_id", contactId)
      .maybeSingle();

    let studentId = existing?.id as string | undefined;
    if (studentId) {
      await supabase
        .from("students")
        .update({ full_name: fullName, email, phone })
        .eq("id", studentId);
    } else {
      const { data: created, error } = await supabase
        .from("students")
        .insert({ ghl_contact_id: contactId, full_name: fullName, email, phone })
        .select("id")
        .single();
      if (error) throw new Error(`student insert failed: ${error.message}`);
      studentId = created.id;
    }

    const hoursRaw = body.hours;
    const hours =
      typeof hoursRaw === "number"
        ? hoursRaw
        : typeof hoursRaw === "string" && hoursRaw.trim() !== "" && !isNaN(Number(hoursRaw))
        ? Number(hoursRaw)
        : null;

    const sessionDate = pickDate(body.training_date);
    const notes = buildNotes(pickString(body.tasks_completed), pickString(body.additional_notes));

    const insertPayload: Record<string, unknown> = {
      student_id: studentId,
      session_type: pickString(body.session_type) ?? "Training session",
      machine: pickString(body.machine),
      hours,
      notes,
    };
    if (sessionDate) insertPayload.session_date = sessionDate;

    const { data: entry, error: entryErr } = await supabase
      .from("logbook_entries")
      .insert(insertPayload)
      .select("id, sign_token")
      .single();
    if (entryErr) throw new Error(`entry insert failed: ${entryErr.message}`);


    const signingUrl = `${SITE_URL}/sign-logbook/${entry.sign_token}`;

    let fieldPushed = false;
    let fieldNote: string | null = null;
    try {
      const fieldId = await getFieldId(SIGNING_FIELD_NAME);
      if (fieldId) {
        await updateContactField(contactId, fieldId, signingUrl);
        fieldPushed = true;
      } else {
        fieldNote = `Custom field "${SIGNING_FIELD_NAME}" not found in GHL`;
      }
    } catch {
      fieldNote = "Failed to update the CRM custom field";
    }

    return json({
      ok: true,
      entryId: entry.id,
      studentId,
      signingUrl,
      fieldPushed,
      note: fieldNote,
    });
  } catch (e) {
    console.error("logbook-entry error", e);
    return json({ error: "Failed to create logbook entry" }, 500);
  }
});
