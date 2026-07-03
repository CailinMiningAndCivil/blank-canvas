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

function ghlPublicDocumentHeaders() {
  return {
    channel: "APP",
    source: "WEB_USER",
    version: GHL_VERSION,
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
  const sources = [contact.customFields, contact.customField, contact.custom_field].filter(Boolean);

  for (const source of sources) {
    if (Array.isArray(source)) {
      for (const f of source) {
        const id = f.id ?? f.fieldId ?? f.field_id ?? f.customFieldId ?? f.custom_field_id;
        if (id === fieldId) {
          const value = f.value ?? f.fieldValue ?? f.field_value ?? f.values ?? "";
          return Array.isArray(value) ? value.join(", ") : value.toString();
        }
      }
      continue;
    }

    if (typeof source === "object" && source !== null && Object.prototype.hasOwnProperty.call(source, fieldId)) {
      const value = source[fieldId];
      return Array.isArray(value) ? value.join(", ") : (value ?? "").toString();
    }
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

function dataUrlToBytes(dataUrl: string): { bytes: Uint8Array; ext: "png" | "jpg" } {
  const m = dataUrl.match(/^data:(image\/(png|jpeg|jpg));base64,(.+)$/i);
  if (!m) throw new Error("Signature image is not a supported data URL");
  const binary = atob(m[3]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return { bytes, ext: m[2].toLowerCase() === "png" ? "png" : "jpg" };
}

async function extractSignatureFromPublicDocument(docFieldValue: string): Promise<{ bytes: Uint8Array; ext: "png" | "jpg" } | null> {
  const referenceId = extractDocumentId(docFieldValue);
  if (!referenceId) return null;

  const url = new URL(`${GHL_BASE}/proposals/document/public`);
  url.searchParams.set("referenceId", referenceId);

  const r = await fetch(url.toString(), { headers: ghlPublicDocumentHeaders() });
  if (!r.ok) throw new Error(`public document ${r.status}: ${await r.text()}`);
  const data = await r.json();
  const recipients = data?.document?.recipients ?? [];
  const signer = recipients.find((recipient: any) => recipient?.hasCompleted && typeof recipient?.imgUrl === "string")
    ?? recipients.find((recipient: any) => typeof recipient?.imgUrl === "string");
  const imgUrl = signer?.imgUrl;
  if (!imgUrl) throw new Error("No completed recipient signature image found in public document");

  if (imgUrl.startsWith("data:")) return dataUrlToBytes(imgUrl);

  const img = await fetch(imgUrl);
  if (!img.ok) throw new Error(`signature image ${img.status}`);
  const ct = img.headers.get("content-type") ?? "";
  return {
    bytes: new Uint8Array(await img.arrayBuffer()),
    ext: ct.includes("jpeg") || ct.includes("jpg") ? "jpg" : "png",
  };
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

  const publicSignature = await extractSignatureFromPublicDocument(docUrl);
  let img: Uint8Array;
  let ext: "png" | "jpg";
  if (publicSignature) {
    img = publicSignature.bytes;
    ext = publicSignature.ext;
  } else {
    const pdf = await downloadPdf(docUrl);
    img = await extractSignaturePng(pdf);
    // Heuristic: PNG starts with 89 50 4E 47; JPEG starts with FF D8 FF
    ext = img[0] === 0xff && img[1] === 0xd8 ? "jpg" : "png";
  }
  const url = await uploadSignature(contactId, img, ext);
  await updateContactField(contactId, fields[SIGNATURE_FIELD_NAME], url);
  return { contactId, ok: true, url };
}

function hasValue(value: unknown): boolean {
  if (value == null) return false;
  if (Array.isArray(value)) return value.length > 0;
  return String(value).trim().length > 0;
}

function shouldBackfillContact(contact: any, fields: Record<string, string>): boolean {
  return hasValue(getCustomFieldValue(contact, fields[ONSITE_FIELD_NAME]))
    && hasValue(getCustomFieldValue(contact, fields[DOC_URL_FIELD_NAME]))
    && !hasValue(getCustomFieldValue(contact, fields[SIGNATURE_FIELD_NAME]));
}

async function findBackfillContacts(fields: Record<string, string>, limit: number) {
  // GHL rejects empty/not_empty operators for some custom-field types, so fetch pages and filter locally.
  const results: string[] = [];
  let searchAfter: any = null;
  const pageLimit = 100;
  const maxPages = Math.max(10, Math.min(500, Math.ceil(limit / pageLimit) + 100));
  let pagesFetched = 0;
  while (results.length < limit && pagesFetched < maxPages) {
    const body: any = {
      locationId: LOCATION_ID,
      pageLimit,
      sort: [{ field: "dateAdded", direction: "desc" }],
    };
    if (searchAfter) body.searchAfter = searchAfter;

    const r = await fetch(`${GHL_BASE}/contacts/search`, {
      method: "POST",
      headers: { ...ghlHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`search ${r.status}: ${await r.text()}`);
    const j = await r.json();
    const contacts = j.contacts ?? [];
    if (contacts.length === 0) break;
    for (const c of contacts) {
      if (!shouldBackfillContact(c, fields)) continue;
      results.push(c.id);
      if (results.length >= limit) break;
    }
    const last = contacts[contacts.length - 1];
    const nextCursor = last?.searchAfter ?? last?.search_after;
    pagesFetched++;
    if (!nextCursor || contacts.length < pageLimit) break;
    searchAfter = nextCursor;
  }
  return results;
}

async function auditContacts(fields: Record<string, string>, opts: { searchAfter?: any; maxPages?: number; state?: any } = {}) {
  const pageLimit = 100;
  let searchAfter: any = opts.searchAfter;
  const maxPages = opts.maxPages ?? 10;
  const state = opts.state ?? {
    totalContactsScanned: 0,
    onSiteCoursePurchased: 0,
    onSiteWithDocLink: 0,
    onSiteWithSignature: 0,
    missingSignatureContacts: [] as any[],
  };
  let pagesFetched = 0;
  let done = false;
  while (pagesFetched < maxPages) {
    const body: any = { locationId: LOCATION_ID, pageLimit, sort: [{ field: "dateAdded", direction: "desc" }] };
    if (searchAfter) body.searchAfter = searchAfter;
    const r = await fetch(`${GHL_BASE}/contacts/search`, {
      method: "POST",
      headers: { ...ghlHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`search ${r.status}: ${await r.text()}`);
    const j = await r.json();
    const contacts = j.contacts ?? [];
    if (contacts.length === 0) { done = true; break; }
    state.totalContactsScanned += contacts.length;
    for (const c of contacts) {
      if (!hasValue(getCustomFieldValue(c, fields[ONSITE_FIELD_NAME]))) continue;
      state.onSiteCoursePurchased++;
      const hasDoc = hasValue(getCustomFieldValue(c, fields[DOC_URL_FIELD_NAME]));
      const hasSig = hasValue(getCustomFieldValue(c, fields[SIGNATURE_FIELD_NAME]));
      if (hasDoc) state.onSiteWithDocLink++;
      if (hasSig) state.onSiteWithSignature++;
      if (hasDoc && !hasSig) {
        state.missingSignatureContacts.push({
          id: c.id,
          name: `${c.firstName ?? ""} ${c.lastName ?? ""}`.trim(),
          email: c.email,
        });
      }
    }
    const last = contacts[contacts.length - 1];
    const nextCursor = last?.searchAfter ?? last?.search_after;
    pagesFetched++;
    if (!nextCursor || contacts.length < pageLimit) { done = true; break; }
    searchAfter = nextCursor;
  }
  return {
    ...state,
    missingSignature: state.missingSignatureContacts.length,
    done,
    nextSearchAfter: done ? null : searchAfter,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const fields = await getFieldIds();

    for (const name of [DOC_URL_FIELD_NAME, SIGNATURE_FIELD_NAME, ONSITE_FIELD_NAME]) {
      if (!fields[name]) throw new Error(`Custom field not found in GHL: "${name}"`);
    }

    if (body.audit) {
      const result = await auditContacts(fields, {
        searchAfter: body.searchAfter,
        maxPages: body.maxPages ?? 10,
        state: body.state,
      });
      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
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
