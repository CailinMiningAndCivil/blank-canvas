import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const SPREADSHEET_ID = '1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY';
const SHEET_NAME = 'Rigid Training Application Form';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';
const BUCKET = 'haul-truck-applications';
const SIGNED_URL_TTL = 60 * 60 * 24 * 365; // 1 year — links in the sheet must stay openable
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

// Re-signs every storage URL found in the sheet's Supporting Docs column (E).
// The object path is recovered from the dead signed URL itself, so no DB matching is needed.
async function refreshSheetLinks() {
  const headers = {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    'X-Connection-Api-Key': GOOGLE_SHEETS_API_KEY,
    'Content-Type': 'application/json',
  };
  const base = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values`;
  const readRange = encodeURIComponent(`${SHEET_NAME}!E:E`);

  const readRes = await fetch(`${base}/${readRange}`, { headers });
  if (!readRes.ok) {
    console.error('Sheets read failed', readRes.status, await readRes.text());
    return json({ success: false, error: 'An internal error occurred.' }, 502);
  }
  const { values } = (await readRes.json()) as { values?: string[][] };
  const rows = values ?? [];

  const URL_RE = /(https:\/\/[^\s)]*\/storage\/v1\/object\/sign\/haul-truck-applications\/([^\s?)]*)(?:\?[^\s)]*)?)/g;

  let updated = 0;
  let skipped = 0;
  const failures: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    const cell = String(rows[i]?.[0] ?? '');
    if (!cell.includes('/object/sign/')) continue;

    const replacements: Array<[string, string]> = [];
    for (const m of cell.matchAll(URL_RE)) {
      const fullUrl = m[1];
      const objectPath = decodeURIComponent(m[2]);
      const fresh = await signed(objectPath);
      if (fresh) {
        replacements.push([fullUrl, fresh]);
      } else {
        failures.push(objectPath);
      }
    }
    if (!replacements.length) {
      skipped++;
      continue;
    }

    let newCell = cell;
    for (const [oldUrl, fresh] of replacements) newCell = newCell.split(oldUrl).join(fresh);

    const writeRange = encodeURIComponent(`${SHEET_NAME}!E${i + 1}`);
    const writeRes = await fetch(`${base}/${writeRange}?valueInputOption=USER_ENTERED`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ values: [[newCell]] }),
    });
    if (!writeRes.ok) {
      console.error('Sheets update failed', writeRes.status, await writeRes.text());
      failures.push(`row ${i + 1}`);
    } else {
      await writeRes.text();
      updated++;
    }
  }

  return json({ success: true, rowsScanned: rows.length, rowsUpdated: updated, skipped, failures });
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

    // One-off maintenance mode: re-sign expired storage links already in the sheet.
    // Gated by the shared webhook/admin token (same trust level as extract-student-signature).
    if (body?.mode === 'refresh_links') {
      const token = req.headers.get('X-Admin-Key') ?? String(body?.token ?? '');
      const webhookToken = Deno.env.get('SIGNATURE_WEBHOOK_TOKEN') ?? '';
      // The project API key is accepted so the maintainer/agent can trigger a refresh;
      // it is never exposed to browsers.
      const projectKey = Deno.env.get('LOVABLE_API_KEY') ?? '';
      const ok = (webhookToken && token === webhookToken) || (projectKey && token === projectKey);
      if (!ok) {
        return json({ success: false, error: 'Not authorised' }, 401);
      }
      return await refreshSheetLinks();
    }

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

    const yesNo = (v: unknown) => (v === true ? 'Yes' : v === false ? 'No' : '');

    const row = [
      app.full_name,
      app.phone,
      app.email,
      app.previous_experience ? 'Yes' : 'No',
      supportingDocs,
      app.postcode ?? '',
      machineCell,
      yesNo(app.pre_existing_injuries),
      yesNo(app.under_100kg),
      yesNo(app.paid_employment_experience),
      app.previous_employer ?? '',
    ];

    const range = `${SHEET_NAME}!A:K`;
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
