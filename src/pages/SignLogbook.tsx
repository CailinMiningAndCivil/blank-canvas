import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, RotateCcw } from "lucide-react";

const FN_URL = `${
  import.meta.env.VITE_SUPABASE_URL || "https://opdxvpqimcfhawcznxyc.supabase.co"
}/functions/v1/logbook-sign`;

type Entry = {
  id: string;
  student_name: string;
  session_date: string;
  session_type: string;
  machine: string | null;
  hours: number | null;
  notes: string | null;
  status: string;
  trainer_name: string | null;
  signed_at: string | null;
};

type Trainer = { id: string; full_name: string };

const SignLogbook = () => {
  const { token } = useParams<{ token: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [entry, setEntry] = useState<Entry | null>(null);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [trainerId, setTrainerId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [hasInk, setHasInk] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${FN_URL}?token=${encodeURIComponent(token ?? "")}`);
        const data = await res.json();
        if (!active) return;
        if (!res.ok) {
          setError(data?.error ?? "This signing link is not valid");
        } else {
          setEntry(data.entry);
          setTrainers(data.trainers ?? []);
          if (data.entry?.status === "signed") {
            setDone(data.entry.trainer_name ?? "a trainer");
          }
        }
      } catch {
        if (active) setError("Could not load this logbook entry. Please try again.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [token]);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111111";
  }, []);

  useEffect(() => {
    if (!entry || done) return;
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, [entry, done, setupCanvas]);

  const pos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawing.current = true;
    const { x, y } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const { x, y } = pos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasInk(true);
  };

  const end = () => {
    drawing.current = false;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasInk(false);
  };

  const submit = async () => {
    if (!trainerId) {
      setError("Please select your name from the list.");
      return;
    }
    if (!hasInk) {
      setError("Please draw your signature in the box.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const signature = canvasRef.current?.toDataURL("image/png");
      const res = await fetch(FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, trainer_id: trainerId, signature }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Could not save your signature. Please try again.");
      } else {
        setDone(data.trainer_name);
      }
    } catch {
      setError("Could not save your signature. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Trainer Sign-Off</h1>

        {!entry && error && (
          <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">
            {error}
          </div>
        )}

        {entry && (
          <div className="rounded-xl border border-border bg-card p-6 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">{entry.student_name}</h2>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Date</dt>
                  <dd className="font-medium text-foreground">{entry.session_date}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Session</dt>
                  <dd className="font-medium text-foreground">{entry.session_type}</dd>
                </div>
                {entry.machine && (
                  <div>
                    <dt className="text-muted-foreground">Machine</dt>
                    <dd className="font-medium text-foreground">{entry.machine}</dd>
                  </div>
                )}
                {entry.hours !== null && (
                  <div>
                    <dt className="text-muted-foreground">Seat time (hours)</dt>
                    <dd className="font-medium text-foreground">{entry.hours}</dd>
                  </div>
                )}
                {entry.notes && (
                  <div className="col-span-2">
                    <dt className="text-muted-foreground">Notes</dt>
                    <dd className="font-medium text-foreground whitespace-pre-line">
                      {entry.notes}
                    </dd>
                  </div>
                )}
              </dl>

              {done ? (
                <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm text-foreground">
                    This entry has been signed by <strong>{done}</strong>. No further action is
                    needed.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Trainer</label>
                    <select
                      value={trainerId}
                      onChange={(e) => setTrainerId(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your name</option>
                      {trainers.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground">Signature</label>
                      <Button type="button" variant="ghost" size="sm" onClick={clear}>
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Clear
                      </Button>
                    </div>
                    <canvas
                      ref={canvasRef}
                      onPointerDown={start}
                      onPointerMove={move}
                      onPointerUp={end}
                      onPointerLeave={end}
                      className="w-full h-40 rounded-lg border border-border bg-card touch-none cursor-crosshair"
                    />
                    <p className="text-xs text-muted-foreground">
                      Draw your signature using your finger, stylus or mouse.
                    </p>
                  </div>

                  {error && <p className="text-sm text-destructive">{error}</p>}

                  <Button onClick={submit} disabled={submitting} className="w-full">
                    {submitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    Sign this entry
                  </Button>
                </>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignLogbook;
