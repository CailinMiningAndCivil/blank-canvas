import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignatureBackfill() {
  const [contactId, setContactId] = useState("");
  const [limit, setLimit] = useState("10");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string>("");
  const [nextSearchAfter, setNextSearchAfter] = useState<unknown[] | null>(null);

  async function run(payload: Record<string, unknown>) {
    setBusy(true);
    setLog("Running…");
    try {
      const { data, error } = await supabase.functions.invoke("extract-student-signature", {
        body: payload,
      });
      if (error) throw error;
      if (data && typeof data === "object" && "nextSearchAfter" in data) {
        setNextSearchAfter((data.nextSearchAfter as unknown[] | null) ?? null);
      }
      setLog(JSON.stringify(data, null, 2));
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
        const { data, error } = await supabase.functions.invoke("extract-student-signature", {
          body: {
            backfill: true,
            limit: Number(limit),
            maxPages: 10,
            ...(cursor ? { searchAfter: cursor } : {}),
          },
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
      </div>
    </div>
  );
}
