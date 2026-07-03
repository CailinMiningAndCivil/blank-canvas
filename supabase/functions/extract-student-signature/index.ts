// Extract student signature from GHL signed PDF and save PNG URL back to a custom field.
// POST body: { contactId: string }  OR  { backfill: true, limit?: number }

import { createClient } from "npm:@supabase/supabase-js@2.45.0";
import { PDFDocument, PDFName, PDFRawStream, PDFDict, PDFArray } from "npm:pdf-lib@1.17.1";
import pako from "npm:pako@2.1.0";
import UPNG from "npm:upng-js@2.1.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const PIT = Deno.env.get("GHL_PIT_TOKEN")!;
const LOCATION_ID = Deno.env.get("GHL_LOCATION_ID")!;

const SIGNATURE_FIELD_NAME = "Signature Student Declaration URL TXT";
const DOC_URL_FIELD_NAME = "Student Declaration & Compliance Agreement URL";
const ONSITE_FIELD_NAME = "On-Site Course Purchased";

// Signature image dimensions expected for this template (px in the embedded XObject)
const SIG_MIN_W = 400;
const SIG_MAX_W = 1200;
const SIG_MIN_H = 80;
const SIG_MAX_H = 400;

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

let fieldCache: Record<string, string> | null = null;
async function getFieldIds(): Promise<Record<string, string>> {
  if (fieldCache) return fieldCache;
  const r = await fetch(`${GHL_BASE}/locations/${LOCATION_ID}/customFields`, {
    headers: ghlHeaders(),
  });
  if (!r.ok) throw new Error(`customFields ${r.status}: ${await r.text()}`);
  const j = await r.json();
  const map: Record<string, string> = {};
  for (const f of j.customFields ?? []) map[f.name] = f.id;
  fieldCache = map;
  return map;
}

async function getContact(contactId: string) {
  const r = await fetch(`${GHL_BASE}/contacts/${contactId}`, { headers: ghlHeaders() });
  if (!r.ok) throw new Error(`getContact ${r.status}: ${await r.text()}`);
  return (await r.json()).contact;
}

function getCustomFieldValue(contact: any, fieldId: string): string | null {
  const cf = contact.customFields ?? contact.customField ?? [];
  for (const f of cf) {
    if (f.id === fieldId) return (f.value ?? f.fieldValue ?? "").toString();
  }
  return null;
}

async function updateContactField(contactId: string, fieldId: string, value: string) {
  const r = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
    method: "PUT",
    headers: { ...ghlHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ customFields: [{ id: fieldId, field_value: value }] }),
  });
  if (!r.ok) throw new Error(`updateContact ${r.status}: ${await r.text()}`);
  return r.json();
}

function extractDocumentId(url: string): string | null {
  // https://link.cailinminingcivil.com/documents/v1/<uuid>?...  OR direct PDF url
  const m = url.match(/documents\/v1\/([a-f0-9-]{36})/i);
  return m ? m[1] : null;
}

async function downloadPdf(docFieldValue: string): Promise<Uint8Array> {
  // If it's already a PDF URL, download directly
  if (docFieldValue.toLowerCase().endsWith(".pdf") || docFieldValue.includes("/pdf")) {
    const r = await fetch(docFieldValue);
    if (!r.ok) throw new Error(`downloadPdf direct ${r.status}`);
    return new Uint8Array(await r.arrayBuffer());
  }

  const documentId = extractDocumentId(docFieldValue);
  if (!documentId) throw new Error(`Cannot parse documentId from URL: ${docFieldValue}`);

  // GHL Documents & Contracts API
  const r = await fetch(
    `${GHL_BASE}/documents/${documentId}/download?locationId=${LOCATION_ID}`,
    { headers: ghlHeaders() },
  );
  if (r.ok) {
    const ct = r.headers.get("content-type") ?? "";
    if (ct.includes("pdf") || ct.includes("octet-stream")) {
      return new Uint8Array(await r.arrayBuffer());
    }
    // Might be a JSON payload with a signed URL
    const j = await r.json();
    const url = j.url ?? j.downloadUrl ?? j.signedUrl;
    if (!url) throw new Error(`No download url in response: ${JSON.stringify(j)}`);
    const r2 = await fetch(url);
    if (!r2.ok) throw new Error(`follow url ${r2.status}`);
    return new Uint8Array(await r2.arrayBuffer());
  }

  // Fallback: try metadata endpoint
  const m = await fetch(`${GHL_BASE}/documents/${documentId}?locationId=${LOCATION_ID}`, {
    headers: ghlHeaders(),
  });
  if (!m.ok) throw new Error(`document meta ${m.status}: ${await m.text()}`);
  const meta = await m.json();
  const url = meta.document?.url ?? meta.document?.downloadUrl ?? meta.url;
  if (!url) throw new Error(`No PDF url in metadata: ${JSON.stringify(meta).slice(0, 300)}`);
  const r3 = await fetch(url);
  if (!r3.ok) throw new Error(`meta url ${r3.status}`);
  return new Uint8Array(await r3.arrayBuffer());
}

// Extract signature image PNG from PDF page 1 by walking XObjects
async function extractSignaturePng(pdfBytes: Uint8Array): Promise<Uint8Array> {
  const doc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const page = doc.getPage(0);
  const resources = page.node.Resources();
  if (!resources) throw new Error("Page 1 has no resources");
  const xObjectDict = resources.lookup(PDFName.of("XObject")) as PDFDict | undefined;
  if (!xObjectDict) throw new Error("No XObject dict on page 1");

  const entries = xObjectDict.entries();
  const candidates: { name: string; stream: PDFRawStream; w: number; h: number }[] = [];

  for (const [key, ref] of entries) {
    const obj = doc.context.lookup(ref);
    if (!(obj instanceof PDFRawStream)) continue;
    const dict = obj.dict;
    const subtype = dict.get(PDFName.of("Subtype"));
    if (subtype?.toString() !== "/Image") continue;
    const w = (dict.get(PDFName.of("Width")) as any)?.numberValue ?? 0;
    const h = (dict.get(PDFName.of("Height")) as any)?.numberValue ?? 0;
    candidates.push({ name: key.toString(), stream: obj, w, h });
  }

  // Pick image whose dimensions match the signature (excluding full-page ~1700x2200 and tiny icons)
  const sig = candidates.find(
    (c) => c.w >= SIG_MIN_W && c.w <= SIG_MAX_W && c.h >= SIG_MIN_H && c.h <= SIG_MAX_H,
  );
  if (!sig) {
    throw new Error(
      `No signature-sized image found. Candidates: ${candidates
        .map((c) => `${c.name}(${c.w}x${c.h})`)
        .join(", ")}`,
    );
  }

  const dict = sig.stream.dict;
  const filter = dict.get(PDFName.of("Filter"));
  const filterName = filter?.toString() ?? "";
  const raw = sig.stream.contents; // compressed bytes

  let pixels: Uint8Array;
  if (filterName.includes("FlateDecode")) {
    pixels = pako.inflate(raw);
  } else if (filterName.includes("DCTDecode")) {
    // JPEG bytes — repackage as JPEG (not PNG). PNG re-encode would need a decoder.
    // GHL will accept JPEG; return with a .jpg extension in caller.
    return raw;
  } else {
    throw new Error(`Unsupported image filter: ${filterName}`);
  }

  // Raw pixels are RGB (3 bytes per pixel, ICCBased/DeviceRGB). Convert to RGBA for UPNG.
  const w = sig.w;
  const h = sig.h;
  const expectRGB = w * h * 3;
  const expectGray = w * h;
  let rgba: Uint8Array;
  if (pixels.length === expectRGB) {
    rgba = new Uint8Array(w * h * 4);
    for (let i = 0, j = 0; i < pixels.length; i += 3, j += 4) {
      rgba[j] = pixels[i];
      rgba[j + 1] = pixels[i + 1];
      rgba[j + 2] = pixels[i + 2];
      rgba[j + 3] = 255;
    }
  } else if (pixels.length === expectGray) {
    rgba = new Uint8Array(w * h * 4);
    for (let i = 0, j = 0; i < pixels.length; i += 1, j += 4) {
      rgba[j] = rgba[j + 1] = rgba[j + 2] = pixels[i];
      rgba[j + 3] = 255;
    }
  } else {
    throw new Error(`Unexpected pixel length ${pixels.length} for ${w}x${h}`);
  }

  const png = UPNG.encode([rgba.buffer], w, h, 0);
  return new Uint8Array(png);
}

async function uploadSignature(contactId: string, png: Uint8Array, ext: string): Promise<string> {
  const path = `${contactId}/signature-${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from("student-signatures")
    .upload(path, png, {
      contentType: ext === "png" ? "image/png" : "image/jpeg",
      upsert: true,
    });
  if (error) throw new Error(`upload: ${error.message}`);
  // Long-lived signed URL (10 years)
  const { data, error: sErr } = await supabase.storage
    .from("student-signatures")
    .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (sErr) throw new Error(`sign: ${sErr.message}`);
  return data.signedUrl;
}

async function processOne(contactId: string, fields: Record<string, string>) {
  const contact = await getContact(contactId);
  const docUrl = getCustomFieldValue(contact, fields[DOC_URL_FIELD_NAME]);
  const existingSig = getCustomFieldValue(contact, fields[SIGNATURE_FIELD_NAME]);
  if (!docUrl) return { contactId, skipped: "no doc url" };
  if (existingSig) return { contactId, skipped: "already has signature url" };

  const pdf = await downloadPdf(docUrl);
  const isJpeg = false; // extractSignaturePng returns PNG (or JPEG bytes if DCTDecode)
  const img = await extractSignaturePng(pdf);
  // Heuristic: PNG starts with 89 50 4E 47; JPEG starts with FF D8 FF
  const ext = img[0] === 0xff && img[1] === 0xd8 ? "jpg" : "png";
  const url = await uploadSignature(contactId, img, ext);
  await updateContactField(contactId, fields[SIGNATURE_FIELD_NAME], url);
  return { contactId, ok: true, url };
}

async function findBackfillContacts(fields: Record<string, string>, limit: number) {
  // GHL contacts search API v2
  const results: string[] = [];
  let page = 1;
  const pageLimit = 100;
  while (results.length < limit) {
    const r = await fetch(`${GHL_BASE}/contacts/search`, {
      method: "POST",
      headers: { ...ghlHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        locationId: LOCATION_ID,
        page,
        pageLimit,
        filters: [
          {
            field: `customFields.${fields[ONSITE_FIELD_NAME]}`,
            operator: "not_empty",
          },
          {
            field: `customFields.${fields[DOC_URL_FIELD_NAME]}`,
            operator: "not_empty",
          },
          {
            field: `customFields.${fields[SIGNATURE_FIELD_NAME]}`,
            operator: "empty",
          },
        ],
      }),
    });
    if (!r.ok) throw new Error(`search ${r.status}: ${await r.text()}`);
    const j = await r.json();
    const contacts = j.contacts ?? [];
    if (contacts.length === 0) break;
    for (const c of contacts) {
      results.push(c.id);
      if (results.length >= limit) break;
    }
    if (contacts.length < pageLimit) break;
    page++;
  }
  return results;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const fields = await getFieldIds();

    for (const name of [DOC_URL_FIELD_NAME, SIGNATURE_FIELD_NAME, ONSITE_FIELD_NAME]) {
      if (!fields[name]) throw new Error(`Custom field not found in GHL: "${name}"`);
    }

    if (body.contactId) {
      const result = await processOne(body.contactId, fields);
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (body.backfill) {
      const limit = Math.min(Number(body.limit ?? 50), 200);
      const ids = await findBackfillContacts(fields, limit);
      const results: any[] = [];
      for (const id of ids) {
        try {
          results.push(await processOne(id, fields));
        } catch (e) {
          results.push({ contactId: id, error: (e as Error).message });
        }
      }
      return new Response(
        JSON.stringify({
          totalFound: ids.length,
          processed: results.length,
          succeeded: results.filter((r) => r.ok).length,
          skipped: results.filter((r) => r.skipped).length,
          failed: results.filter((r) => r.error).length,
          results,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ error: "Provide { contactId } or { backfill: true }" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
