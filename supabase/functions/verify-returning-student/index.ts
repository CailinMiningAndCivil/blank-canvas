import { corsHeaders } from "@supabase/supabase-js/cors";

const SPREADSHEET_ID = "1w8o5ZQ-HhYTpro3qo6Vdn_RYqlfK6ttLc73_VDU0PlY";
const RANGE = "'**RTO DOCS**'!B2:B";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
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

    const url = new URL(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values:batchGet`);
    url.searchParams.append("ranges", RANGE);
    url.searchParams.set("majorDimension", "COLUMNS");

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

    const column: string[] = data?.valueRanges?.[0]?.values?.[0] ?? [];
    const emails = new Set(
      column
        .map((v) => (typeof v === "string" ? v.trim().toLowerCase() : ""))
        .filter((v) => v.length > 0),
    );

    const matched = emails.has(rawEmail);

    return new Response(JSON.stringify({ matched }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("verify-returning-student error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ matched: false, error: "Verification failed. Please try again." , detail: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
