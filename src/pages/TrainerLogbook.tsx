import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

const PIN_STORAGE = "trainer_logbook_pin";

export default function TrainerLogbook() {
  const [pin, setPin] = useState<string>(() => localStorage.getItem(PIN_STORAGE) ?? "");
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"all" | "pending" | "signed">("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  async function load(key = pin) {
    if (!key.trim()) {
      setError("Enter the trainer PIN first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("logbook-list", {
        headers: { "x-admin-key": key },
        body: { status },
      });
      if (fnError) throw fnError;
      setEntries((data?.entries ?? []) as any[]);
      setUnlocked(true);
      localStorage.setItem(PIN_STORAGE, key);
    } catch (e: any) {
      setError("Incorrect PIN or entries could not be loaded.");
      setEntries([]);
      setUnlocked(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (pin) load(pin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return entries.filter((e) =>
      !term
        ? true
        : (e.student?.full_name ?? "").toLowerCase().includes(term) ||
          (e.session_type ?? "").toLowerCase().includes(term) ||
          (e.machine ?? "").toLowerCase().includes(term) ||
          (e.trainer_name ?? "").toLowerCase().includes(term),
    );
  }, [entries, search]);

  const totals = useMemo(() => {
    const byTrainer = new Map<string, number>();
    let all = 0;
    for (const e of entries) {
      const h = Number(e.hours) || 0;
      all += h;
      const name = e.trainer_name || "Unassigned";
      byTrainer.set(name, (byTrainer.get(name) ?? 0) + h);
    }
    return {
      all,
      signed: entries.filter((e) => e.status === "signed").length,
      pending: entries.filter((e) => e.status !== "signed").length,
      byTrainer: [...byTrainer.entries()].sort((a, b) => b[1] - a[1]),
    };
  }, [entries]);

  return (
    <div className="min-h-screen bg-background p-6 sm:p-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Trainer Logbook | Cailin Mining and Civil</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">Trainer Logbook</h1>
      <p className="text-muted-foreground mb-8">
        Monitor training hours and sign-off status across all student logbook entries.
      </p>

      {!unlocked && (
        <section className="border rounded-lg p-6 space-y-4 max-w-md">
          <h2 className="text-xl font-semibold">Trainer PIN</h2>
          <p className="text-sm text-muted-foreground">
            Enter the shared trainer PIN. It is remembered on this device.
          </p>
          <div className="flex gap-3">
            <Input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && load()}
              placeholder="Enter PIN"
            />
            <Button onClick={() => load()} disabled={loading || !pin.trim()}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Unlock
            </Button>
          </div>
          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive flex items-start gap-2">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              {error}
            </div>
          )}
        </section>
      )}

      {unlocked && (
        <>
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Total hours logged</div>
              <div className="text-2xl font-bold">{totals.all}</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Signed entries</div>
              <div className="text-2xl font-bold text-green-600">{totals.signed}</div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Awaiting signature</div>
              <div className="text-2xl font-bold text-amber-600">{totals.pending}</div>
            </div>
          </div>

          {totals.byTrainer.length > 0 && (
            <section className="border rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-3">Hours by trainer</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {totals.byTrainer.map(([name, hours]) => (
                  <li key={name} className="flex justify-between text-sm border-b py-1">
                    <span>{name}</span>
                    <span className="font-medium">{hours} hrs</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="border rounded-lg p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">
                Entries{" "}
                <span className="text-muted-foreground text-sm font-normal">
                  ({filtered.length} of {entries.length})
                </span>
              </h2>
              <div className="flex items-center gap-3">
                <Label htmlFor="trainer-search" className="sr-only">Search</Label>
                <Input
                  id="trainer-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search student, course, trainer..."
                  className="w-56"
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="all">All statuses</option>
                  <option value="pending">Pending</option>
                  <option value="signed">Signed</option>
                </select>
                <Button variant="outline" onClick={() => load()} disabled={loading}>
                  {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Refresh
                </Button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive flex items-start gap-2">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            {!loading && entries.length === 0 && !error && (
              <p className="text-sm text-muted-foreground py-8">No entries found.</p>
            )}

            {entries.length > 0 && (
              <div className="overflow-auto rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="text-left text-xs uppercase text-muted-foreground bg-muted/50">
                    <tr>
                      <th className="py-3 px-4">Student</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Course / Machine</th>
                      <th className="py-3 px-4">Hours</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Trainer</th>
                      <th className="py-3 px-4">Signed</th>
                      <th className="py-3 px-4">Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((e) => (
                      <tr key={e.id} className="border-t align-top">
                        <td className="py-3 px-4 font-medium">{e.student?.full_name ?? "—"}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{e.session_date ?? "—"}</td>
                        <td className="py-3 px-4">
                          <div className="font-medium">{e.session_type ?? "—"}</div>
                          {e.machine && e.machine !== e.session_type && (
                            <div className="text-xs text-muted-foreground">{e.machine}</div>
                          )}
                        </td>
                        <td className="py-3 px-4">{e.hours ?? "—"}</td>
                        <td className="py-3 px-4">
                          {e.status === "signed" ? (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                              <CheckCircle2 className="h-3 w-3" /> Signed
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                              <Clock className="h-3 w-3" /> Pending
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4">{e.trainer_name ?? "—"}</td>
                        <td className="py-3 px-4 text-xs text-muted-foreground whitespace-nowrap">
                          {e.signed_at ? new Date(e.signed_at).toLocaleString() : "—"}
                        </td>
                        <td className="py-3 px-4">
                          {e.signature_url ? (
                            <a
                              href={e.signature_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex flex-col gap-1 text-xs text-primary hover:underline"
                            >
                              <img
                                src={e.signature_url}
                                alt={`Signature by ${e.trainer_name ?? "trainer"}`}
                                loading="lazy"
                                className="h-12 w-auto max-w-[140px] rounded border bg-white object-contain p-1"
                              />
                              <span className="inline-flex items-center gap-1">
                                <FileText className="h-3 w-3" /> View
                              </span>
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
