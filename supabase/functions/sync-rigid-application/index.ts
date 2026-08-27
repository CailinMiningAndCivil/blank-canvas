import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const SPREADSHEET_ID = '1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY';
const SHEET_NAME = 'Rigid Training Application Form';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';
const BUCKET = 'haul-truck-applications';
const SIGNED_URL_TTL = 60 * 60 * 24 * 30; // 30 days
const FRESH_WINDOW_MS = 30 * 60 * 1000;

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY') ?? '';
const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY') ?? '';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const isUuid = (v: unknown): v is string =>
  typeof v === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

const AU_PHONE = /^(\+?61|0)[2-478](?:[ -]?\d){8}$/;
const AU_POSTCODE = /^\d{4}$/;

async function signed(path?: string | null): Promise<string> {
  if (!path) return '';
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(path, SIGNED_URL_TTL);
  if (error || !data) return '';
  return data.signedUrl;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      console.error('Missing gateway credentials');
      return json({ success: false, error: 'Gateway credentials not configured' }, 500);
    }

    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
    const applicationId = body?.application_id;
    if (!isUuid(applicationId)) {
      return json({ success: false, error: 'Not authorised' }, 401);
    }

    // Only sync applications that really exist; never trust client-supplied values.
    const { data: app } = await supabase
      .from('haul_truck_applications')
      .select(
        'full_name, email, phone, postcode, previous_experience, machines_operated, has_hr_licence, evidence_file_path, hr_licence_file_path, source, created_at, pre_existing_injuries, under_100kg, paid_employment_experience, previous_employer'
      )
      .eq('id', applicationId)
      .maybeSingle();

    if (!app) return json({ success: false, error: 'Application not found' }, 404);

    if (app.created_at && Date.now() - new Date(app.created_at).getTime() > FRESH_WINDOW_MS) {
      return json({ success: false, error: 'Application expired' }, 409);
    }

    const evidenceUrl = await signed(app.evidence_file_path);
    const hrUrl = await signed(app.hr_licence_file_path);

    // Recompute qualification server-side — the client flag is never trusted.
    const phoneOk = AU_PHONE.test(String(app.phone ?? '').replace(/\s+/g, ''));
    const postcodeOk = AU_POSTCODE.test(String(app.postcode ?? '').trim());
    let qualified = false;
    if (phoneOk && postcodeOk) {
      if (app.previous_experience) {
        qualified = Boolean(String(app.machines_operated ?? '').trim() && app.evidence_file_path);
      } else if (app.has_hr_licence === true) {
        qualified = Boolean(app.hr_licence_file_path);
      }
    }

    // Keep the stored record consistent with the server-side outcome.
    await supabase
      .from('haul_truck_applications')
      .update({ qualified })
      .eq('id', applicationId);

    const supportingDocs = [
      evidenceUrl && `Evidence: ${evidenceUrl}`,
      hrUrl && `HR Licence: ${hrUrl}`,
    ]
      .filter(Boolean)
      .join('\n');

    let machineCell = '';
    if (app.previous_experience) {
      machineCell = app.machines_operated || '';
    } else if (app.has_hr_licence === true) {
      machineCell = 'No machinery experience — HR Licence: YES';
    } else if (app.has_hr_licence === false) {
      machineCell = 'No machinery experience — HR Licence: NO';
    }

    const qualifiedTag = qualified ? '✅ QUALIFIED' : '⛔ NOT QUALIFIED';
    const source = String(app.source ?? 'website').slice(0, 60);
    machineCell = `[${qualifiedTag}] [${source}] ${machineCell}`.trim();

    const row = [
      app.full_name,
      app.phone,
      app.email,
      app.previous_experience ? 'Yes' : 'No',
      supportingDocs,
      app.postcode ?? '',
      machineCell,
    ];

    const range = `${SHEET_NAME}!A:G`;
    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const sheetsRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': GOOGLE_SHEETS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!sheetsRes.ok) {
      const txt = await sheetsRes.text();
      console.error('Sheets append failed', sheetsRes.status, txt);
      return json({ success: false, error: 'An internal error occurred. Please try again.' }, 502);
    }

    await sheetsRes.text();

    return json({ success: true, qualified });
  } catch (err) {
    console.error('sync-rigid-application error', err);
    return json({ success: false, error: 'An internal error occurred. Please try again.' }, 500);
  }
});
