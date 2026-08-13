import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download, FileText, Clock, ShieldCheck } from "lucide-react";
import logo from "@/assets/cailin-logo.svg";

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL || "https://opdxvpqimcfhawcznxyc.supabase.co"}/functions/v1/student-logbook`;

interface Meta {
  student_name: string;
  reference: string;
  entries: number;
  total_hours: number;
  last_updated: string;
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
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <img src={logo} alt="Cailin Mining & Civil" className="mb-6 h-14 w-auto rounded bg-foreground/90 p-2" />
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Student Training Logbook
            </h1>
            <p className="mt-2 text-muted-foreground">
              Your official, up-to-date record of signed training with Cailin Mining &amp; Civil (RTO 46489).
            </p>

            {loading && <p className="mt-8 text-muted-foreground">Loading your logbook…</p>}

            {!loading && error && (
              <p className="mt-8 rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                {error}
              </p>
            )}

            {!loading && meta && (
              <>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border bg-background p-4">
                    <FileText className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs uppercase text-muted-foreground">Student</p>
                    <p className="font-semibold">{meta.student_name}</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <ShieldCheck className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs uppercase text-muted-foreground">Signed entries</p>
                    <p className="font-semibold">{meta.entries}</p>
                  </div>
                  <div className="rounded-lg border bg-background p-4">
                    <Clock className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs uppercase text-muted-foreground">Total hours</p>
                    <p className="font-semibold">{meta.total_hours || 0}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  Logbook reference: <span className="font-medium text-foreground">{meta.reference}</span>
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      View / download my logbook
                    </a>
                  </Button>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Keep this link — it always shows your latest logbook, including any future training.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyLogbook;
