import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const SPREADSHEET_ID = '1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY';
const SHEET_NAME = 'Rigid Training Application Form';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4';
const BUCKET = 'haul-truck-applications';
const SIGNED_URL_TTL = 60 * 60 * 24 * 30; // 30 days

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY') ?? '';
const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY') ?? '';

interface Payload {
  full_name: string;
  email: string;
  phone: string;
  postcode: string;
  previous_experience: boolean;
  machines_operated?: string | null;
  has_hr_licence?: boolean | null;
  evidence_file_path?: string | null;
  hr_licence_file_path?: string | null;
  qualified: boolean;
  source: string;
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

async function signed(path?: string | null): Promise<string> {
  if (!path) return '';
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(path, SIGNED_URL_TTL);
  if (error || !data) return '';
  return data.signedUrl;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      console.error('Missing gateway credentials');
      return new Response(
        JSON.stringify({ success: false, error: 'Gateway credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = (await req.json()) as Payload;

    const evidenceUrl = await signed(body.evidence_file_path);
    const hrUrl = await signed(body.hr_licence_file_path);

    const supportingDocs = [
      evidenceUrl && `Evidence: ${evidenceUrl}`,
      hrUrl && `HR Licence: ${hrUrl}`,
    ]
      .filter(Boolean)
      .join('\n');

    const row = [
      body.full_name,
      body.phone,
      body.email,
      body.previous_experience ? 'Yes' : 'No',
      supportingDocs,
      body.postcode ?? '',
      body.machines_operated ?? '',
      body.has_hr_licence === null || body.has_hr_licence === undefined
        ? ''
        : body.has_hr_licence
        ? 'Yes'
        : 'No',
      body.qualified ? 'QUALIFIED' : 'NOT QUALIFIED',
      body.source,
      new Date().toISOString(),
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
      return new Response(
        JSON.stringify({ success: false, error: `Sheets ${sheetsRes.status}: ${txt}` }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    await sheetsRes.text();

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('sync-rigid-application error', err);
    return new Response(
      JSON.stringify({ success: false, error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
