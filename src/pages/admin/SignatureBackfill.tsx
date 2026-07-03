import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ADMIN_KEY_STORAGE = "signature_admin_key";

export default function SignatureBackfill() {
  const [adminKey, setAdminKey] = useState<string>(() => localStorage.getItem(ADMIN_KEY_STORAGE) ?? "");
  const [contactId, setContactId] = useState("");
  const [limit, setLimit] = useState("10");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string>("");
  const [nextSearchAfter, setNextSearchAfter] = useState<unknown[] | null>(null);
  const [errors, setErrors] = useState<Array<{ id: string; contact_id: string; name: string | null; email: string | null; error: string; created_at: string }>>([]);

  function saveKey(v: string) {
    setAdminKey(v);
    if (v) localStorage.setItem(ADMIN_KEY_STORAGE, v);
    else localStorage.removeItem(ADMIN_KEY_STORAGE);
  }

  async function invoke(body: Record<string, unknown>) {
    return supabase.functions.invoke("extract-student-signature", {
      body,
      headers: adminKey ? { "x-admin-key": adminKey } : {},
    });
  }

  async function loadErrors() {
    if (!adminKey) {
      setErrors([]);
      return;
    }
    const { data, error } = await invoke({ listErrors: true, limit: 100 });
    if (error) return;
    setErrors(((data as any)?.errors ?? []) as any);
  }

  useEffect(() => {
    loadErrors();
    const t = setInterval(loadErrors, 30000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]);

  async function run(payload: Record<string, unknown>) {
    setBusy(true);
    setLog("Running…");
    try {
      const { data, error } = await invoke(payload);
      if (error) throw error;
      if (data && typeof data === "object" && "nextSearchAfter" in data) {
        setNextSearchAfter((data.nextSearchAfter as unknown[] | null) ?? null);
      }
      setLog(JSON.stringify(data, null, 2));
      loadErrors();
    } catch (e: any) {
      setLog(`ERROR: ${e?.message ?? String(e)}`);
    } finally {
      setBusy(false);
    }
  }


  async function runFullBackfill() {
    setBusy(true);
    let cursor: unknown[] | null = nextSearchAfter;
    const totals = {
      scanned: 0,
      processed: 0,
      succeeded: 0,
      skipped: 0,
      failed: 0,
      chunks: 0,
      done: false,
      nextSearchAfter: cursor,
      results: [] as unknown[],
    };

    setLog("Running full scan…");
    try {
      while (!totals.done && totals.chunks < 100) {
        const { data, error } = await invoke({
          backfill: true,
          limit: Number(limit),
          maxPages: 10,
          ...(cursor ? { searchAfter: cursor } : {}),
        });
        if (error) throw error;


        totals.chunks += 1;
        totals.scanned += Number(data?.scanned ?? 0);
        totals.processed += Number(data?.processed ?? 0);
        totals.succeeded += Number(data?.succeeded ?? 0);
        totals.skipped += Number(data?.skipped ?? 0);
        totals.failed += Number(data?.failed ?? 0);
        totals.results.push(...(Array.isArray(data?.results) ? data.results : []));
        totals.done = Boolean(data?.done);
        cursor = (data?.nextSearchAfter as unknown[] | null) ?? null;
        totals.nextSearchAfter = cursor;
        setNextSearchAfter(cursor);
        setLog(JSON.stringify(totals, null, 2));

        if (!cursor) break;
      }
    } catch (e: any) {
      setLog(`${JSON.stringify(totals, null, 2)}\n\nERROR: ${e?.message ?? String(e)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-background p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Student Signature Backfill</h1>
      <p className="text-muted-foreground mb-8">
        Extracts the signature image from GHL signed PDFs and saves the URL to the{" "}
        <code>Signature Student Declaration URL TXT</code> custom field.
      </p>

      <div className="space-y-8">
        <section className="border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Run for one contact</h2>
          <div>
            <Label htmlFor="cid">GHL Contact ID</Label>
            <Input
              id="cid"
              value={contactId}
              onChange={(e) => setContactId(e.target.value)}
              placeholder="e.g. abc123XYZ..."
            />
          </div>
          <Button
            disabled={busy || !contactId}
            onClick={() => run({ contactId })}
          >
            Extract signature
          </Button>
        </section>

        <section className="border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Backfill all missing</h2>
          <p className="text-sm text-muted-foreground">
            Filters GHL contacts where <code>On-Site Course Purchased</code> is not empty,
            has a signed document URL, and <code>Signature Student Declaration URL TXT</code>{" "}
            is empty. Each chunk scans up to 1,000 contacts to avoid timeouts.
          </p>
          <div>
            <Label htmlFor="lim">Batch limit</Label>
            <Input
              id="lim"
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="w-32"
            />
          </div>
          <Button
            disabled={busy}
            onClick={() => run({ backfill: true, limit: Number(limit), maxPages: 10, ...(nextSearchAfter ? { searchAfter: nextSearchAfter } : {}) })}
          >
            Run next scan chunk
          </Button>
          <Button
            disabled={busy}
            variant="secondary"
            onClick={runFullBackfill}
          >
            Run full scan
          </Button>
          {nextSearchAfter && (
            <Button
              disabled={busy}
              variant="outline"
              onClick={() => setNextSearchAfter(null)}
            >
              Restart scan from newest
            </Button>
          )}
        </section>

        {log && (
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Result</h2>
            <pre className="text-xs bg-muted p-4 rounded overflow-auto max-h-[500px]">
              {log}
            </pre>
          </section>
        )}

        <section className="border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Extraction errors {errors.length > 0 && <span className="text-muted-foreground text-sm">({errors.length})</span>}
            </h2>
            <Button variant="outline" size="sm" onClick={loadErrors}>Refresh</Button>
          </div>
          {errors.length === 0 ? (
            <p className="text-sm text-muted-foreground">No errors logged.</p>
          ) : (
            <div className="overflow-auto max-h-[500px]">
              <table className="w-full text-sm">
                <thead className="text-left text-xs uppercase text-muted-foreground border-b">
                  <tr>
                    <th className="py-2 pr-4">When</th>
                    <th className="py-2 pr-4">Contact ID</th>
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Email</th>
                    <th className="py-2">Error</th>
                  </tr>
                </thead>
                <tbody>
                  {errors.map((e) => (
                    <tr key={e.id} className="border-b align-top">
                      <td className="py-2 pr-4 whitespace-nowrap text-xs text-muted-foreground">
                        {new Date(e.created_at).toLocaleString()}
                      </td>
                      <td className="py-2 pr-4 font-mono text-xs">{e.contact_id}</td>
                      <td className="py-2 pr-4">{e.name || "—"}</td>
                      <td className="py-2 pr-4">{e.email || "—"}</td>
                      <td className="py-2 text-xs text-destructive">{e.error}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

    </div>
  );
}
