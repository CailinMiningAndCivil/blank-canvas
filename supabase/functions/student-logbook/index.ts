// Student-facing consolidated Training Logbook.
//
// GET ?token=<students.logbook_token>            -> PDF download
// GET ?token=<...>&format=json                   -> light metadata for the web page
//
// Read-only. Regenerated fresh from Supabase on every request, so the same URL
// always returns the student's latest signed training history.

import { createClient } from "npm:@supabase/supabase-js@2.45.0";
import { PDFDocument, StandardFonts, rgb } from "npm:pdf-lib@1.17.1";
import { CAILIN_LOGO_PNG_BASE64 } from "../_shared/logo.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const NAVY = rgb(0.137, 0.122, 0.125);
const ORANGE = rgb(0.96, 0.51, 0.13);
const TEXT = rgb(0.13, 0.15, 0.19);
const MUTED = rgb(0.42, 0.45, 0.5);
const LINE = rgb(0.85, 0.87, 0.9);
const CARD = rgb(0.97, 0.98, 0.99);

// A4 landscape
const PAGE_W = 841.89;
const PAGE_H = 595.28;
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isValidToken(t: unknown): t is string {
  return typeof t === "string" && /^[a-f0-9]{20,80}$/i.test(t);
}

function b64ToBytes(b64: string) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function fmtDate(d: string | null | undefined) {
  if (!d) return "—";
  const dt = new Date(d.length <= 10 ? `${d}T00:00:00Z` : d);
  if (isNaN(dt.getTime())) return d;
  return dt.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Perth",
  });
}

function fmtHours(h: unknown) {
  const n = typeof h === "number" ? h : Number(h);
  if (!isFinite(n) || n <= 0) return "—";
  return `${Number.isInteger(n) ? n : n.toFixed(1)} ${n === 1 ? "hour" : "hours"}`;
}

function splitNotes(notes: string | null) {
  if (!notes) return { tasks: null as string | null, comments: null as string | null };
  const tasksMatch = notes.match(/Tasks completed:\s*([\s\S]*?)(?:\n\nAdditional notes:|$)/i);
  const addMatch = notes.match(/Additional notes:\s*([\s\S]*)$/i);
  if (tasksMatch || addMatch) {
    return {
      tasks: tasksMatch?.[1]?.trim() || null,
      comments: addMatch?.[1]?.trim() || null,
    };
  }
  return { tasks: notes.trim(), comments: null };
}

function wrap(text: string, font: any, size: number, maxWidth: number): string[] {
  const lines: string[] = [];
  for (const rawLine of String(text).split(/\r?\n/)) {
    const words = rawLine.split(/\s+/).filter(Boolean);
    if (!words.length) {
      lines.push("");
      continue;
    }
    let cur = "";
    for (const w of words) {
      const candidate = cur ? `${cur} ${w}` : w;
      if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
        cur = candidate;
      } else {
        if (cur) lines.push(cur);
        // very long single word
        let chunk = w;
        while (font.widthOfTextAtSize(chunk, size) > maxWidth && chunk.length > 1) {
          let cut = chunk.length;
          while (cut > 1 && font.widthOfTextAtSize(chunk.slice(0, cut), size) > maxWidth) cut--;
          lines.push(chunk.slice(0, cut));
          chunk = chunk.slice(cut);
        }
        cur = chunk;
      }
    }
    if (cur) lines.push(cur);
  }
  return lines;
}

function sanitize(s: unknown): string {
  // StandardFonts are WinAnsi only — strip anything outside that range.
  return String(s ?? "")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "GET") return json({ error: "Method not allowed" }, 405);

  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!isValidToken(token)) return json({ error: "Invalid logbook link" }, 400);

  try {
    const { data: student } = await supabase
      .from("students")
      .select("id, full_name, created_at")
      .eq("logbook_token", token)
      .maybeSingle();

    if (!student) return json({ error: "This logbook link is not valid" }, 404);

    const { data: entriesRaw } = await supabase
      .from("logbook_entries")
      .select(
        "id, session_date, session_type, machine, hours, notes, trainer_name, trainer_signature_path, signed_at",
      )
      .eq("student_id", student.id)
      .eq("status", "signed")
      .order("session_date", { ascending: true })
      .order("signed_at", { ascending: true });

    const entries = entriesRaw ?? [];
    const reference = `CMC-LB-${String(student.id).slice(0, 8).toUpperCase()}`;
    const totalHours = entries.reduce((s, e) => s + (Number(e.hours) || 0), 0);

    if (url.searchParams.get("format") === "json") {
      return json({
        student_name: student.full_name,
        reference,
        entries: entries.map((e) => {
          const { tasks, comments } = splitNotes(e.notes);
          return {
            id: e.id,
            session_date: e.session_date,
            session_type: e.session_type,
            machine: e.machine,
            hours: e.hours,
            tasks: tasks ?? comments,
            trainer_name: e.trainer_name,
            signed_at: e.signed_at,
            status: "signed",
          };
        }),
        entries_count: entries.length,
        total_hours: totalHours,
        last_updated: new Date().toISOString(),
      });
    }


    // ---- Build PDF (A4 landscape, printable training register) ----
    const pdf = await PDFDocument.create();
    pdf.setTitle(`Cailin Mining & Civil Training Logbook - ${student.full_name}`);
    pdf.setAuthor("Cailin Mining & Civil");
    pdf.setSubject("Student Training Logbook");

    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const logo = await pdf.embedPng(b64ToBytes(CAILIN_LOGO_PNG_BASE64));

    // Pre-load signatures
    const sigMap = new Map<string, any>();
    for (const e of entries) {
      if (!e.trainer_signature_path || sigMap.has(e.id)) continue;
      try {
        const { data: file } = await supabase.storage
          .from("logbook-signatures")
          .download(e.trainer_signature_path);
        if (file) {
          const bytes = new Uint8Array(await file.arrayBuffer());
          sigMap.set(
            e.id,
            e.trainer_signature_path.toLowerCase().endsWith(".png")
              ? await pdf.embedPng(bytes)
              : await pdf.embedJpg(bytes),
          );
        }
      } catch (_) { /* ignore */ }
    }

    const COLS = [
      { key: "date", label: "DATE", w: 78 },
      { key: "machine", label: "COURSE / MACHINE", w: 132 },
      { key: "hours", label: "HOURS", w: 46 },
      { key: "tasks", label: "TASKS COMPLETED", w: 285 },
      { key: "trainer", label: "TRAINER", w: 90 },
      { key: "sign", label: "SIGN-OFF", w: 130.89 },
    ];
    const colX: number[] = [];
    {
      let x = MARGIN;
      for (const c of COLS) {
        colX.push(x);
        x += c.w;
      }
    }
    const TABLE_BOTTOM = 58;
    const PAD = 6;
    const FS = 8.5;
    const LH = 11;

    let page = pdf.addPage([PAGE_W, PAGE_H]);
    let y = PAGE_H;

    const drawHeader = (withDetails: boolean) => {
      const lw = 118;
      const lh = (logo.height / logo.width) * lw;
      page.drawImage(logo, { x: MARGIN, y: PAGE_H - 30 - lh, width: lw, height: lh });

      page.drawText("STUDENT TRAINING LOGBOOK", {
        x: PAGE_W - MARGIN - bold.widthOfTextAtSize("STUDENT TRAINING LOGBOOK", 14),
        y: PAGE_H - 42,
        size: 14,
        font: bold,
        color: NAVY,
      });
      page.drawText("RTO 46489", {
        x: PAGE_W - MARGIN - font.widthOfTextAtSize("RTO 46489", 9.5),
        y: PAGE_H - 56,
        size: 9.5,
        font,
        color: ORANGE,
      });

      let hy = PAGE_H - 30 - Math.max(lh, 40) - 10;
      page.drawLine({
        start: { x: MARGIN, y: hy },
        end: { x: PAGE_W - MARGIN, y: hy },
        thickness: 1.2,
        color: ORANGE,
      });
      hy -= 18;

      if (withDetails) {
        const fields: [string, string][] = [
          ["Student Name", sanitize(student.full_name)],
          ["Logbook Reference", reference],
          ["Last Updated", fmtDate(new Date().toISOString())],
        ];
        let fx = MARGIN;
        for (const [k, v] of fields) {
          page.drawText(`${k}:`, { x: fx, y: hy, size: 9, font, color: MUTED });
          page.drawText(v, {
            x: fx + font.widthOfTextAtSize(`${k}: `, 9),
            y: hy,
            size: 9.5,
            font: bold,
            color: TEXT,
          });
          fx += 270;
        }
        hy -= 20;
      } else {
        page.drawText(
          `${sanitize(student.full_name)}  |  ${reference}  (continued)`,
          { x: MARGIN, y: hy, size: 9, font, color: MUTED },
        );
        hy -= 20;
      }
      y = hy;
    };

    const drawTableHead = () => {
      const h = 20;
      page.drawRectangle({
        x: MARGIN,
        y: y - h,
        width: CONTENT_W,
        height: h,
        color: NAVY,
      });
      COLS.forEach((c, i) => {
        page.drawText(c.label, {
          x: colX[i] + PAD,
          y: y - h + 7,
          size: 7.5,
          font: bold,
          color: rgb(1, 1, 1),
        });
      });
      y -= h;
    };

    const drawFooters = () => {
      const pages = pdf.getPages();
      pages.forEach((p, i) => {
        p.drawLine({
          start: { x: MARGIN, y: 40 },
          end: { x: PAGE_W - MARGIN, y: 40 },
          thickness: 0.5,
          color: LINE,
        });
        p.drawText(
          `Cailin Mining & Civil  |  RTO 46489  |  cailinminingcivil.com  |  ${reference}`,
          { x: MARGIN, y: 28, size: 7.5, font, color: MUTED },
        );
        const label = `Page ${i + 1} of ${pages.length}`;
        p.drawText(label, {
          x: PAGE_W - MARGIN - font.widthOfTextAtSize(label, 7.5),
          y: 28,
          size: 7.5,
          font,
          color: MUTED,
        });
      });
    };

    drawHeader(true);
    drawTableHead();

    if (!entries.length) {
      const h = 30;
      page.drawRectangle({
        x: MARGIN,
        y: y - h,
        width: CONTENT_W,
        height: h,
        borderColor: LINE,
        borderWidth: 0.75,
      });
      page.drawText("No signed training entries have been recorded yet.", {
        x: MARGIN + PAD,
        y: y - 19,
        size: 9,
        font,
        color: MUTED,
      });
      y -= h;
    } else {
      let zebra = false;
      for (const e of entries) {
        const { tasks, comments } = splitNotes(e.notes);
        const taskText = [tasks, comments].filter(Boolean).join("\n");
        const taskLines = taskText
          ? wrap(sanitize(taskText), font, FS, COLS[3].w - PAD * 2)
          : ["—"];
        const machineLines = wrap(
          sanitize(e.machine || e.session_type || "Training session"),
          font,
          FS,
          COLS[1].w - PAD * 2,
        );
        const trainerLines = wrap(
          sanitize(e.trainer_name || "—"),
          font,
          FS,
          COLS[4].w - PAD * 2,
        );

        const sigImg = sigMap.get(e.id);
        const sigW = sigImg ? Math.min(COLS[5].w - PAD * 2, 96) : 0;
        const sigH = sigImg ? Math.min(26, (sigImg.height / sigImg.width) * sigW) : 0;

        const textH =
          Math.max(taskLines.length, machineLines.length, trainerLines.length) * LH;
        const signBlockH = (sigImg ? sigH + 3 : 0) + LH + LH; // signature + "Signed" + date
        const rowH = Math.max(textH, signBlockH) + PAD * 2;

        // page break
        if (y - rowH < TABLE_BOTTOM) {
          page = pdf.addPage([PAGE_W, PAGE_H]);
          drawHeader(false);
          drawTableHead();
        }

        const top = y;
        if (zebra) {
          page.drawRectangle({
            x: MARGIN,
            y: top - rowH,
            width: CONTENT_W,
            height: rowH,
            color: CARD,
          });
        }
        zebra = !zebra;

        // borders
        page.drawRectangle({
          x: MARGIN,
          y: top - rowH,
          width: CONTENT_W,
          height: rowH,
          borderColor: LINE,
          borderWidth: 0.75,
        });
        for (let i = 1; i < COLS.length; i++) {
          page.drawLine({
            start: { x: colX[i], y: top },
            end: { x: colX[i], y: top - rowH },
            thickness: 0.5,
            color: LINE,
          });
        }

        const cellTop = top - PAD - FS;

        page.drawText(fmtDate(e.session_date), {
          x: colX[0] + PAD,
          y: cellTop,
          size: FS,
          font,
          color: TEXT,
        });

        machineLines.forEach((l, i) => {
          page.drawText(l, {
            x: colX[1] + PAD,
            y: cellTop - i * LH,
            size: FS,
            font: bold,
            color: NAVY,
          });
        });

        page.drawText(fmtHours(e.hours).replace(/ hours?$/, ""), {
          x: colX[2] + PAD,
          y: cellTop,
          size: FS,
          font,
          color: TEXT,
        });

        taskLines.forEach((l, i) => {
          page.drawText(l, {
            x: colX[3] + PAD,
            y: cellTop - i * LH,
            size: FS,
            font,
            color: TEXT,
          });
        });

        trainerLines.forEach((l, i) => {
          page.drawText(l, {
            x: colX[4] + PAD,
            y: cellTop - i * LH,
            size: FS,
            font,
            color: TEXT,
          });
        });

        // Sign-off cell
        let sy = cellTop;
        page.drawText("Signed", {
          x: colX[5] + PAD,
          y: sy,
          size: FS,
          font: bold,
          color: ORANGE,
        });
        sy -= LH;
        page.drawText(fmtDate(e.signed_at), {
          x: colX[5] + PAD,
          y: sy,
          size: 7.5,
          font,
          color: MUTED,
        });
        if (sigImg) {
          sy -= 3;
          page.drawImage(sigImg, {
            x: colX[5] + PAD,
            y: sy - sigH,
            width: sigW,
            height: sigH,
          });
        }

        y = top - rowH;
      }

      // Totals row
      const totH = 24;
      if (y - totH < TABLE_BOTTOM) {
        page = pdf.addPage([PAGE_W, PAGE_H]);
        drawHeader(false);
        drawTableHead();
      }
      page.drawRectangle({
        x: MARGIN,
        y: y - totH,
        width: CONTENT_W,
        height: totH,
        color: rgb(1, 1, 1),
        borderColor: NAVY,
        borderWidth: 1,
      });
      page.drawText("TOTAL TRAINING HOURS", {
        x: colX[1] + PAD,
        y: y - 16,
        size: 9.5,
        font: bold,
        color: NAVY,
      });
      page.drawText(
        totalHours > 0 ? String(Number.isInteger(totalHours) ? totalHours : totalHours.toFixed(1)) : "—",
        { x: colX[2] + PAD, y: y - 16, size: 9.5, font: bold, color: NAVY },
      );
      page.drawText(`${entries.length} signed ${entries.length === 1 ? "entry" : "entries"}`, {
        x: colX[3] + PAD,
        y: y - 16,
        size: 8.5,
        font,
        color: MUTED,
      });
      y -= totH;
    }

    drawFooters();


    const bytes = await pdf.save();
    const safeName = sanitize(student.full_name).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return new Response(bytes, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safeName || "student"}-training-logbook.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error("student-logbook error", e);
    return json({ error: "Unable to generate the training logbook right now" }, 500);
  }
});
