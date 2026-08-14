import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL || "https://opdxvpqimcfhawcznxyc.supabase.co"}/functions/v1/student-logbook`;

interface LogbookEntry {
  id: string;
  session_date: string;
  session_type: string | null;
  machine: string | null;
  hours: number | null;
  tasks: string | null;
  trainer_name: string | null;
  signed_at: string;
  status: string;
}

interface Meta {
  student_name: string;
  reference: string;
  entries: LogbookEntry[];
  entries_count: number;
  total_hours: number;
  last_updated: string;
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

function fmtHours(h: number | null | undefined) {
  const n = typeof h === "number" ? h : Number(h);
  if (!isFinite(n) || n <= 0) return "—";
  return `${Number.isInteger(n) ? n : n.toFixed(1)}`;
}

function courseLabel(entry: LogbookEntry) {
  return entry.machine || entry.session_type || "Training session";
}

const MyLogbook = () => {
  const { token } = useParams<{ token: string }>();
  const [meta, setMeta] = useState<Meta | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const pdfUrl = `${FUNCTIONS_URL}?token=${token ?? ""}`;

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${pdfUrl}&format=json`);
        const data = await res.json();
        if (!active) return;
        if (!res.ok) setError(data?.error ?? "This logbook link is not valid.");
        else setMeta(data);
      } catch {
        if (active) setError("Unable to load your training logbook right now.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [pdfUrl]);

  return (
    <Layout>
      <SEO
        title="My Training Logbook | Cailin Mining & Civil"
        description="Access your personal Cailin Mining & Civil training logbook."
        path={`/my-logbook/${token ?? ""}`}
      />
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Student Training Logbook
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                RTO 46489
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {loading && (
            <p className="text-muted-foreground">Loading your logbook…</p>
          )}

          {!loading && error && (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </p>
          )}

          {!loading && meta && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Student Name</p>
                <p className="text-lg font-semibold">{meta.student_name}</p>
              </div>

              <div className="rounded-lg border bg-card shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] text-left text-sm">
                    <thead>
                      <tr className="border-b bg-secondary/60">
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Date
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Course / Machine
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Hours
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Tasks Completed
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Trainer
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 font-semibold text-foreground">
                          Sign-Off
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {meta.entries.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-4 py-8 text-center text-muted-foreground"
                          >
                            <FileText className="mx-auto mb-2 h-6 w-6 opacity-50" />
                            No signed training entries have been recorded yet.
                          </td>
                        </tr>
                      ) : (
                        meta.entries.map((entry) => (
                          <tr
                            key={entry.id}
                            className="border-b last:border-b-0 hover:bg-secondary/30"
                          >
                            <td className="whitespace-nowrap px-4 py-3 align-top">
                              {fmtDate(entry.session_date)}
                            </td>
                            <td className="px-4 py-3 align-top font-medium">
                              {courseLabel(entry)}
                            </td>
                            <td className="whitespace-nowrap px-4 py-3 align-top">
                              {fmtHours(entry.hours)}
                            </td>
                            <td className="max-w-xs px-4 py-3 align-top text-muted-foreground">
                              <div className="whitespace-pre-line leading-relaxed">
                                {entry.tasks || "—"}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-3 align-top">
                              {entry.trainer_name || "—"}
                            </td>
                            <td className="whitespace-nowrap px-4 py-3 align-top">
                              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                                Signed
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border bg-card p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">
                  Logbook reference: <span className="font-medium text-foreground">{meta.reference}</span>
                </p>
                <p className="text-base font-semibold">
                  Total Training Hours: <span className="text-primary">{meta.total_hours || 0}</span>
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                Keep this link — it always shows your latest logbook, including any future training.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyLogbook;
