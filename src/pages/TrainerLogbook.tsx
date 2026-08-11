import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function TrainerLogbook() {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"all" | "pending" | "signed">("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<any | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("logbook-list", {
        body: { status },
      });
      if (fnError) throw fnError;
      setEntries((data?.entries ?? []) as any[]);
    } catch {
      setError("Could not load logbook entries. Please try again.");
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
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
    let hours = 0;
    for (const e of entries) hours += Number(e.hours) || 0;
    return {
      hours,
      signed: entries.filter((e) => e.status === "signed").length,
      pending: entries.filter((e) => e.status !== "signed").length,
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
        Student training logs, hours and trainer sign-offs. Click an entry to see the full notes and signature.
      </p>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="border rounded-lg p-4">
          <div className="text-sm text-muted-foreground">Total hours logged</div>
          <div className="text-2xl font-bold">{totals.hours}</div>
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
            <Button variant="outline" onClick={load} disabled={loading}>
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

        {loading && entries.length === 0 && (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Loading entries…
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
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr
                    key={e.id}
                    onClick={() => setSelected(e)}
                    className="border-t align-top cursor-pointer hover:bg-muted/50"
                  >
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selected?.student?.full_name ?? "Logbook entry"}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-muted-foreground text-xs">Training date</div>
                  <div>{selected.session_date ?? "—"}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Hours</div>
                  <div>{selected.hours ?? "—"}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Course</div>
                  <div>{selected.session_type ?? "—"}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs">Machine</div>
                  <div>{selected.machine ?? "—"}</div>
                </div>
              </div>

              <div>
                <div className="text-muted-foreground text-xs mb-1">Comments / notes</div>
                <p className="whitespace-pre-wrap rounded-md border bg-muted/40 p-3">
                  {selected.notes || "No notes recorded."}
                </p>
              </div>

              <div>
                <div className="text-muted-foreground text-xs mb-1">Trainer sign-off</div>
                {selected.status === "signed" ? (
                  <div className="space-y-2">
                    <div>
                      {selected.trainer_name ?? "Trainer"} —{" "}
                      {selected.signed_at ? new Date(selected.signed_at).toLocaleString() : ""}
                    </div>
                    {selected.signature_url && (
                      <img
                        src={selected.signature_url}
                        alt={`Signature by ${selected.trainer_name ?? "trainer"}`}
                        className="h-24 w-auto rounded border bg-white object-contain p-2"
                      />
                    )}
                  </div>
                ) : (
                  <div className="text-amber-600">Awaiting trainer signature.</div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
