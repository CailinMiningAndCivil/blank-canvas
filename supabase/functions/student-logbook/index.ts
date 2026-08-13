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

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 48;
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
        entries: entries.length,
        total_hours: totalHours,
        last_updated: new Date().toISOString(),
      });
    }

    // ---- Build PDF ----
    const pdf = await PDFDocument.create();
    pdf.setTitle(`Cailin Mining & Civil Training Logbook - ${student.full_name}`);
    pdf.setAuthor("Cailin Mining & Civil");
    pdf.setSubject("Student Training Logbook");

    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const logo = await pdf.embedPng(b64ToBytes(CAILIN_LOGO_PNG_BASE64));

    let page = pdf.addPage([PAGE_W, PAGE_H]);
    let y = PAGE_H;

    const drawBanner = () => {
      const h = 96;
      page.drawRectangle({ x: 0, y: PAGE_H - h, width: PAGE_W, height: h, color: NAVY });
      page.drawRectangle({ x: 0, y: PAGE_H - h - 4, width: PAGE_W, height: 4, color: ORANGE });
      const lw = 150;
      const lh = (logo.height / logo.width) * lw;
      page.drawImage(logo, { x: MARGIN, y: PAGE_H - h / 2 - lh / 2, width: lw, height: lh });
      page.drawText("STUDENT TRAINING LOGBOOK", {
        x: PAGE_W - MARGIN - bold.widthOfTextAtSize("STUDENT TRAINING LOGBOOK", 12),
        y: PAGE_H - 48,
        size: 12,
        font: bold,
        color: rgb(1, 1, 1),
      });
      page.drawText("RTO 46489", {
        x: PAGE_W - MARGIN - font.widthOfTextAtSize("RTO 46489", 9),
        y: PAGE_H - 64,
        size: 9,
        font,
        color: ORANGE,
      });
      y = PAGE_H - h - 32;
    };

    const drawFooters = () => {
      const pages = pdf.getPages();
      pages.forEach((p, i) => {
        p.drawLine({
          start: { x: MARGIN, y: 46 },
          end: { x: PAGE_W - MARGIN, y: 46 },
          thickness: 0.5,
          color: LINE,
        });
        p.drawText("Cailin Mining & Civil  |  RTO 46489  |  cailinminingcivil.com", {
          x: MARGIN,
          y: 32,
          size: 8,
          font,
          color: MUTED,
        });
        const label = `Page ${i + 1} of ${pages.length}`;
        p.drawText(label, {
          x: PAGE_W - MARGIN - font.widthOfTextAtSize(label, 8),
          y: 32,
          size: 8,
          font,
          color: MUTED,
        });
      });
    };

    const newPage = () => {
      page = pdf.addPage([PAGE_W, PAGE_H]);
      drawBanner();
    };

    const ensure = (needed: number) => {
      if (y - needed < 70) newPage();
    };

    const text = (
      s: string,
      x: number,
      size: number,
      f = font,
      color = TEXT,
    ) => {
      page.drawText(sanitize(s), { x, y, size, font: f, color });
    };

    drawBanner();

    // Student details card
    const cardH = 88;
    page.drawRectangle({
      x: MARGIN,
      y: y - cardH,
      width: CONTENT_W,
      height: cardH,
      color: CARD,
      borderColor: LINE,
      borderWidth: 1,
    });
    page.drawRectangle({ x: MARGIN, y: y - cardH, width: 4, height: cardH, color: ORANGE });

    let cy = y - 24;
    page.drawText(sanitize(student.full_name), {
      x: MARGIN + 18,
      y: cy,
      size: 18,
      font: bold,
      color: NAVY,
    });
    cy -= 20;
    const details: [string, string][] = [
      ["Logbook Reference", reference],
      ["Last Updated", fmtDate(new Date().toISOString())],
      ["Signed Entries", String(entries.length)],
    ];
    for (const [k, v] of details) {
      page.drawText(`${k}:`, { x: MARGIN + 18, y: cy, size: 9.5, font, color: MUTED });
      page.drawText(sanitize(v), {
        x: MARGIN + 130,
        y: cy,
        size: 9.5,
        font: bold,
        color: TEXT,
      });
      cy -= 15;
    }
    y -= cardH + 30;

    // Training summary
    ensure(120);
    text("Training Summary", MARGIN, 13, bold, NAVY);
    y -= 8;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: MARGIN + CONTENT_W, y },
      thickness: 1,
      color: ORANGE,
    });
    y -= 22;

    if (!entries.length) {
      text(
        "No signed training entries have been recorded for this logbook yet.",
        MARGIN,
        10,
        font,
        MUTED,
      );
      y -= 20;
    } else {
      const totals = new Map<string, number>();
      for (const e of entries) {
        const key = (e.machine || e.session_type || "Training session").trim();
        totals.set(key, (totals.get(key) ?? 0) + (Number(e.hours) || 0));
      }

      const rowH = 20;
      // header row
      page.drawRectangle({
        x: MARGIN,
        y: y - 6,
        width: CONTENT_W,
        height: rowH,
        color: NAVY,
      });
      page.drawText("TRAINING / MACHINE", {
        x: MARGIN + 10,
        y,
        size: 8.5,
        font: bold,
        color: rgb(1, 1, 1),
      });
      page.drawText("TOTAL HOURS", {
        x: MARGIN + CONTENT_W - 110,
        y,
        size: 8.5,
        font: bold,
        color: rgb(1, 1, 1),
      });
      y -= rowH + 4;

      let odd = false;
      for (const [name, hrs] of totals) {
        ensure(rowH + 40);
        if (odd) {
          page.drawRectangle({
            x: MARGIN,
            y: y - 6,
            width: CONTENT_W,
            height: rowH,
            color: CARD,
          });
        }
        odd = !odd;
        const nameLines = wrap(sanitize(name), font, 10, CONTENT_W - 140);
        page.drawText(nameLines[0], { x: MARGIN + 10, y, size: 10, font, color: TEXT });
        page.drawText(hrs > 0 ? fmtHours(hrs) : "As recorded", {
          x: MARGIN + CONTENT_W - 110,
          y,
          size: 10,
          font,
          color: TEXT,
        });
        y -= rowH;
      }

      y -= 6;
      page.drawLine({
        start: { x: MARGIN, y: y + 8 },
        end: { x: MARGIN + CONTENT_W, y: y + 8 },
        thickness: 0.75,
        color: LINE,
      });
      y -= 8;
      page.drawText("Total Recorded Training", {
        x: MARGIN + 10,
        y,
        size: 10.5,
        font: bold,
        color: NAVY,
      });
      page.drawText(totalHours > 0 ? fmtHours(totalHours) : "As recorded", {
        x: MARGIN + CONTENT_W - 110,
        y,
        size: 10.5,
        font: bold,
        color: NAVY,
      });
      y -= 34;
    }

    // Detailed history
    if (entries.length) {
      ensure(60);
      text("Training History", MARGIN, 13, bold, NAVY);
      y -= 8;
      page.drawLine({
        start: { x: MARGIN, y },
        end: { x: MARGIN + CONTENT_W, y },
        thickness: 1,
        color: ORANGE,
      });
      y -= 24;

      for (const e of entries) {
        const { tasks, comments } = splitNotes(e.notes);
        const title = sanitize(e.machine || e.session_type || "Training session");
        const bodyWidth = CONTENT_W - 28;

        const taskLines = tasks ? wrap(sanitize(tasks), font, 9.5, bodyWidth) : [];
        const commentLines = comments ? wrap(sanitize(comments), font, 9.5, bodyWidth) : [];

        // signature image
        let sigImg: any = null;
        if (e.trainer_signature_path) {
          try {
            const { data: file } = await supabase.storage
              .from("logbook-signatures")
              .download(e.trainer_signature_path);
            if (file) {
              const bytes = new Uint8Array(await file.arrayBuffer());
              sigImg = e.trainer_signature_path.toLowerCase().endsWith(".png")
                ? await pdf.embedPng(bytes)
                : await pdf.embedJpg(bytes);
            }
          } catch (_) {
            sigImg = null;
          }
        }

        const sigW = 120;
        const sigH = sigImg ? Math.min(42, (sigImg.height / sigImg.width) * sigW) : 0;

        const height =
          46 + // header + meta row
          (taskLines.length ? 16 + taskLines.length * 12 : 0) +
          (commentLines.length ? 16 + commentLines.length * 12 : 0) +
          22 + // signature label block
          (sigImg ? sigH + 6 : 12) +
          18;

        ensure(height + 12);

        const top = y + 6;
        page.drawRectangle({
          x: MARGIN,
          y: top - height,
          width: CONTENT_W,
          height,
          color: rgb(1, 1, 1),
          borderColor: LINE,
          borderWidth: 1,
        });
        page.drawRectangle({
          x: MARGIN,
          y: top - height,
          width: 3,
          height,
          color: ORANGE,
        });

        let by = top - 20;
        page.drawText(title, { x: MARGIN + 16, y: by, size: 11.5, font: bold, color: NAVY });
        const dateLabel = fmtDate(e.session_date);
        page.drawText(dateLabel, {
          x: MARGIN + CONTENT_W - 16 - bold.widthOfTextAtSize(dateLabel, 10),
          y: by,
          size: 10,
          font: bold,
          color: TEXT,
        });
        by -= 15;
        page.drawText(`Hours trained: ${fmtHours(e.hours)}`, {
          x: MARGIN + 16,
          y: by,
          size: 9.5,
          font,
          color: MUTED,
        });
        by -= 16;

        if (taskLines.length) {
          page.drawText("Tasks completed", {
            x: MARGIN + 16,
            y: by,
            size: 9,
            font: bold,
            color: MUTED,
          });
          by -= 13;
          for (const l of taskLines) {
            page.drawText(l, { x: MARGIN + 16, y: by, size: 9.5, font, color: TEXT });
            by -= 12;
          }
          by -= 3;
        }

        if (commentLines.length) {
          page.drawText("Trainer comments", {
            x: MARGIN + 16,
            y: by,
            size: 9,
            font: bold,
            color: MUTED,
          });
          by -= 13;
          for (const l of commentLines) {
            page.drawText(l, { x: MARGIN + 16, y: by, size: 9.5, font, color: TEXT });
            by -= 12;
          }
          by -= 3;
        }

        page.drawLine({
          start: { x: MARGIN + 16, y: by + 2 },
          end: { x: MARGIN + CONTENT_W - 16, y: by + 2 },
          thickness: 0.5,
          color: LINE,
        });
        by -= 12;
        page.drawText(`Trainer: ${sanitize(e.trainer_name ?? "—")}`, {
          x: MARGIN + 16,
          y: by,
          size: 9.5,
          font: bold,
          color: TEXT,
        });
        const signedLabel = `Signed: ${fmtDate(e.signed_at)}`;
        page.drawText(signedLabel, {
          x: MARGIN + CONTENT_W - 16 - font.widthOfTextAtSize(signedLabel, 9.5),
          y: by,
          size: 9.5,
          font,
          color: MUTED,
        });
        by -= 6;
        if (sigImg) {
          page.drawImage(sigImg, {
            x: MARGIN + 16,
            y: by - sigH,
            width: sigW,
            height: sigH,
          });
        }

        y = top - height - 14;
      }
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
