import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, CheckCircle2, Clock, AlertCircle, FileText, ExternalLink, Pencil } from "lucide-react";

const ADMIN_KEY_STORAGE = "signature_admin_key";

export default function LogbookAdmin() {
  const [adminKey, setAdminKey] = useState<string>(() => localStorage.getItem(ADMIN_KEY_STORAGE) ?? "");
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"all" | "pending" | "signed">("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [editingEntry, setEditingEntry] = useState<any | null>(null);
  const [form, setForm] = useState({
    session_date: "",
    session_type: "",
    machine: "",
    hours: "",
    notes: "",
  });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  function openEdit(e: any) {
    setEditingEntry(e);
    setForm({
      session_date: e.session_date ?? "",
      session_type: e.session_type ?? "",
      machine: e.machine ?? "",
      hours: e.hours === null || e.hours === undefined ? "" : String(e.hours),
      notes: e.notes ?? "",
    });
    setSaveError(null);
  }

  async function saveEdit() {
    if (!editingEntry) return;
    setSaving(true);
    setSaveError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("logbook-update", {
        headers: { "x-admin-key": adminKey },
        body: {
          entry_id: editingEntry.id,
          session_date: form.session_date,
          session_type: form.session_type,
          machine: form.machine,
          hours: form.hours === "" ? null : form.hours,
          notes: form.notes,
        },
      });
      if (fnError || data?.error) throw new Error(data?.error ?? "Could not save changes");
      setEntries((prev) => prev.map((e) => (e.id === editingEntry.id ? { ...e, ...data.entry } : e)));
      setEditingEntry(null);
    } catch (e: any) {
      setSaveError(e?.message ?? "Could not save changes");
    } finally {
      setSaving(false);
    }
  }


  function saveKey(v: string) {
    setAdminKey(v);
    if (v) localStorage.setItem(ADMIN_KEY_STORAGE, v);
    else localStorage.removeItem(ADMIN_KEY_STORAGE);
  }

  async function load() {
    if (!adminKey.trim()) {
      setError("Paste the admin key first.");
      setEntries([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("logbook-list", {
        headers: { "x-admin-key": adminKey },
        body: { status },
      });
      if (fnError) throw fnError;
      setEntries((data?.entries ?? []) as any[]);
    } catch (e: any) {
      setError(e?.message ?? "Could not load entries");
      setEntries([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (adminKey) load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, adminKey]);

  const filtered = entries.filter((e) => {
    const term = search.toLowerCase();
    if (!term) return true;
    return (
      (e.student?.full_name ?? "").toLowerCase().includes(term) ||
      (e.student?.email ?? "").toLowerCase().includes(term) ||
      (e.session_type ?? "").toLowerCase().includes(term) ||
      (e.machine ?? "").toLowerCase().includes(term) ||
      (e.trainer_name ?? "").toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-background p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold">Digital Training Logbook</h1>
        <Link to="/admin/signature-backfill" className="text-sm text-primary hover:underline">
          ← Signature Backfill
        </Link>
      </div>
      <p className="text-muted-foreground mb-8">
        View student logbook entries and trainer sign-off status.
      </p>

      <section className="border rounded-lg p-6 space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Admin key</h2>
        <p className="text-sm text-muted-foreground">
          Same key used for the signature webhook. Stored locally.
        </p>
        <div className="flex gap-3">
          <Input
            type="password"
            value={adminKey}
            onChange={(e) => saveKey(e.target.value)}
            placeholder="Paste admin key"
            className="max-w-md"
          />
          <Button onClick={load} disabled={loading || !adminKey.trim()}>
            {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Refresh
          </Button>
        </div>
      </section>

      <section className="border rounded-lg p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">
            Entries{" "}
            <span className="text-muted-foreground text-sm font-normal">
              ({filtered.length} of {entries.length})
            </span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="space-y-1">
              <Label htmlFor="search" className="sr-only">Search</Label>
              <Input
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search student, course, trainer..."
                className="w-64"
              />
            </div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All statuses</option>
              <option value="pending">Pending</option>
              <option value="signed">Signed</option>
            </select>
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
                  <th className="py-3 px-4">Link</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr key={e.id} className="border-t align-top">
                    <td className="py-3 px-4">
                      <div className="font-medium text-foreground">{e.student?.full_name ?? "—"}</div>
                      <div className="text-xs text-muted-foreground">{e.student?.email ?? ""}</div>
                      {e.student?.phone && (
                        <div className="text-xs text-muted-foreground">{e.student.phone}</div>
                      )}
                    </td>
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
                      <div className="flex flex-col gap-1">
                        <a
                          href={`/sign-logbook/${e.sign_token}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" /> Signing link
                        </a>
                        {e.signature_url && (
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
                              <FileText className="h-3 w-3" /> View signature
                            </span>
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => openEdit(e)}
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <Pencil className="h-3 w-3" /> Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Dialog open={!!editingEntry} onOpenChange={(o) => !o && setEditingEntry(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit entry — {editingEntry?.student?.full_name ?? ""}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="a-date">Training date</Label>
                <Input
                  id="a-date"
                  type="date"
                  value={form.session_date}
                  onChange={(ev) => setForm({ ...form, session_date: ev.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="a-hours">Hours</Label>
                <Input
                  id="a-hours"
                  type="number"
                  step="0.5"
                  min="0"
                  max="24"
                  value={form.hours}
                  onChange={(ev) => setForm({ ...form, hours: ev.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="a-course">Course</Label>
                <Input
                  id="a-course"
                  value={form.session_type}
                  onChange={(ev) => setForm({ ...form, session_type: ev.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="a-machine">Machine</Label>
                <Input
                  id="a-machine"
                  value={form.machine}
                  onChange={(ev) => setForm({ ...form, machine: ev.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="a-notes">Comments / notes</Label>
              <Textarea
                id="a-notes"
                rows={4}
                value={form.notes}
                onChange={(ev) => setForm({ ...form, notes: ev.target.value })}
              />
            </div>
            {saveError && <p className="text-sm text-destructive">{saveError}</p>}
            <div className="flex gap-2">
              <Button onClick={saveEdit} disabled={saving}>
                {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Save changes
              </Button>
              <Button variant="outline" onClick={() => setEditingEntry(null)} disabled={saving}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
