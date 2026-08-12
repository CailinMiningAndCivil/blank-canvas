import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RECIPIENTS = ["info@cailinminingcivil.com"];

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

// HTML-escape to prevent injection into admin notification emails
const esc = (s: unknown): string =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Cap field lengths server-side (defence-in-depth against spam/abuse)
const cap = (s: unknown, n: number): string => String(s ?? "").slice(0, n);

const isUuid = (v: unknown): v is string =>
  typeof v === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);

// Simple in-memory per-IP rate limiter (best-effort within a single instance)
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const ipHits = new Map<string, number[]>();
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
};

const FRESH_WINDOW_MS = 30 * 60 * 1000;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ success: false, error: "Rate limit exceeded" }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = await req.json().catch(() => null);
    if (!payload || typeof payload !== "object") {
      return new Response(JSON.stringify({ success: false, error: "Invalid request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const clientRecord = (payload as Record<string, unknown>).record as Record<string, unknown> | undefined;
    const submissionId = (payload as Record<string, unknown>).submission_id ?? clientRecord?.submission_id;
    const applicationId = (payload as Record<string, unknown>).application_id ?? clientRecord?.application_id;

    // Only notify for submissions that actually exist in the database.
    let name = "", email = "", phone = "", message = "", created_at = "";

    if (isUuid(submissionId)) {
      const { data } = await supabase
        .from("contact_submissions")
        .select("name, email, phone, message, created_at")
        .eq("id", submissionId)
        .maybeSingle();
      if (!data) {
        return new Response(JSON.stringify({ success: false, error: "Submission not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      name = cap(data.name, 120);
      email = cap(data.email, 255);
      phone = cap(data.phone, 40);
      message = cap(data.message, 5000);
      created_at = data.created_at;
    } else if (isUuid(applicationId)) {
      const { data } = await supabase
        .from("haul_truck_applications")
        .select(
          "full_name, email, phone, postcode, previous_experience, machines_operated, has_hr_licence, qualified, source, created_at",
        )
        .eq("id", applicationId)
        .maybeSingle();
      if (!data) {
        return new Response(JSON.stringify({ success: false, error: "Submission not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      name = cap(data.full_name, 120);
      email = cap(data.email, 255);
      phone = cap(data.phone, 40);
      created_at = data.created_at;
      message = cap(
        `[Rigid Haul Truck Screening - ${data.source ?? "website"}]\n` +
          `Postcode: ${data.postcode ?? ""}\n` +
          `Experience: ${data.previous_experience ? "yes" : "no"}\n` +
          `Machines: ${data.machines_operated || "n/a"}\n` +
          `HR Licence: ${data.has_hr_licence === null || data.has_hr_licence === undefined ? "n/a" : data.has_hr_licence ? "yes" : "no"}\n` +
          `Qualified: ${data.qualified ? "YES" : "NO"}`,
        5000,
      );
    } else {
      return new Response(JSON.stringify({ success: false, error: "Not authorised" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Reject stale references so old IDs cannot be replayed to spam the inbox.
    if (created_at && Date.now() - new Date(created_at).getTime() > FRESH_WINDOW_MS) {
      return new Response(JSON.stringify({ success: false, error: "Submission expired" }), {
        status: 409,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const subject = message?.startsWith("[RPL")
      ? `New RPL Enquiry from ${name}`
      : message?.startsWith("[Consultation")
        ? `New Consultation Booking from ${name}`
        : message?.startsWith("[CTF")
          ? `New CTF Enquiry from ${name}`
          : message?.startsWith("[Rigid")
            ? `New Rigid Haul Truck Screening from ${name}`
            : `New Contact Form Submission from ${name}`;

    // Send to GoHighLevel webhook (always attempt)
    const GHL_WEBHOOK_URL = Deno.env.get("GHL_WEBHOOK_URL");
    if (GHL_WEBHOOK_URL) {
      try {
        const ghlPayload: Record<string, string> = {
          name,
          email,
          phone,
          source: "Cailin Training Website",
          submitted_at: created_at,
        };

        // Whitelisted CTF context fields (capped)
        for (const key of ["job_title", "working_in_wa", "work_location", "type_of_work"]) {
          const v = clientRecord?.[key];
          if (typeof v === "string" && v.trim()) ghlPayload[key] = cap(v, 200);
        }
        if (message) ghlPayload.message = message;

        const ghlRes = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ghlPayload),
        });
        console.log("GHL webhook response:", ghlRes.status);
      } catch (ghlError) {
        console.error("GHL webhook error (non-blocking):", ghlError);
      }
    }

    // Send email via Resend (optional)
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4a017; border-bottom: 2px solid #d4a017; padding-bottom: 10px;">${esc(subject)}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name</td><td style="padding: 8px;">${esc(name)}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px;"><a href="mailto:${encodeURIComponent(email)}">${esc(email)}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px;"><a href="tel:${encodeURIComponent(phone)}">${esc(phone)}</a></td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Submitted</td><td style="padding: 8px;">${esc(new Date(created_at).toLocaleString("en-AU", { timeZone: "Australia/Perth" }))}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
            <p style="white-space: pre-wrap;">${esc(message)}</p>
          </div>
        </div>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Cailin Training <noreply@cailinminingcivil.com>",
          to: RECIPIENTS,
          subject,
          html: htmlBody,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error(`Resend API error [${res.status}]:`, data);
      } else {
        console.log("Email sent successfully:", data);
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to process submission" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
