import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { HeroImage } from "@/components/ui/hero-image";
import { BookeoWidget } from "@/components/BookeoWidget";
import { ArrowRight, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";

type MachineKey = "moxy" | "loader" | "watercart" | "roller" | "excavator";

const MACHINES: { key: MachineKey; label: string; bookeoType: string }[] = [
  { key: "moxy", label: "ADT Moxy", bookeoType: "3351RT4KM419DB8B8E5C5" },
  { key: "loader", label: "Wheel Loader", bookeoType: "3351CXRKYN19DB8EDB768" },
  { key: "watercart", label: "Watercart", bookeoType: "3351TY49AP19DB8F33801" },
  { key: "roller", label: "Roller", bookeoType: "3351LUU3UW19DB8F7B9C5" },
  { key: "excavator", label: "Excavator", bookeoType: "3351LWH36P19DB8EF9BE4" },
];

const ACK_TEXT =
  "I understand that this booking does not include a qualification, Statement of Attainment, VOC, assessment, or ticket. This booking provides machine operating time and/or refresher training only.";

const CLOUD_BASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const REFRESHER_REQUESTS_ENDPOINT = `${CLOUD_BASE_URL}/rest/v1/refresher_training_requests`;

const RefresherTraining = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [machineKey, setMachineKey] = useState<MachineKey | "">("");
  const [notes, setNotes] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedMachine, setConfirmedMachine] = useState<{
    label: string;
    bookeoType: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      toast({ title: "Please complete name, email and phone", variant: "destructive" });
      return;
    }
    if (!machineKey) {
      toast({ title: "Please select the machine you need", variant: "destructive" });
      return;
    }
    if (!acknowledged) {
      toast({ title: "Please tick the acknowledgement to continue", variant: "destructive" });
      return;
    }

    const machine = MACHINES.find((m) => m.key === machineKey);
    if (!machine) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(REFRESHER_REQUESTS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: PUBLISHABLE_KEY,
          Authorization: `Bearer ${PUBLISHABLE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          full_name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          machine: machine.label,
          notes: notes.trim() || null,
          acknowledged: true,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to save request");
      }

      setConfirmedMachine({ label: machine.label, bookeoType: machine.bookeoType });
    } catch (err) {
      console.error("Refresher submit error:", err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Refresher / Hourly Machine Training | Cailin Mining & Civil"
        description="Book additional machine operating time or refresher training with a Cailin trainer. No qualifications or assessments — operating time only."
        path="/refresher-training"
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <HeroImage
          src={trainerSiteSafety}
          alt="Cailin trainer assisting on machine"
          overlayClassName="bg-gradient-to-r from-background via-background/90 to-background/60"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up">
              Extra seat time, refreshers and trainer assistance
            </p>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up">
              Refresher / <span className="text-gradient">Hourly</span> Machine Training
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground animate-fade-up">
              For students who need refresher training, trainer assistance or additional machine operating time.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className={`mx-auto ${confirmedMachine ? "max-w-5xl" : "max-w-2xl"}`}>
            {confirmedMachine ? (
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card">
                <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setConfirmedMachine(null)}
                    className="-ml-2"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Change details
                  </Button>
                  <h2 className="font-display text-lg md:text-xl font-bold text-foreground">
                    {confirmedMachine.label} – Refresher / Hourly Booking
                  </h2>
                </div>
                <div className="mb-6 p-4 rounded-lg bg-muted/40 border border-border">
                  <p className="text-sm text-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Your request has been sent to our team. Please complete your booking below — this is for machine operating time and/or refresher training only.
                    </span>
                  </p>
                </div>
                <BookeoWidget course={confirmedMachine.bookeoType} />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
              >
                <div className="space-y-1 mb-2">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Request a Refresher / Hourly Session
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    For students who require refresher training, trainer assistance, additional machine operating time, or individuals who are not eligible for Return for Free.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      maxLength={120}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={40}
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="machine">Machine Required</Label>
                  <select
                    id="machine"
                    value={machineKey}
                    onChange={(e) => setMachineKey(e.target.value as MachineKey)}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select a machine
                    </option>
                    {MACHINES.map((m) => (
                      <option key={m.key} value={m.key}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={2000}
                    rows={4}
                    placeholder="Anything our trainers should know — experience level, focus areas, dates that suit, etc."
                  />
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={acknowledged}
                      onCheckedChange={(v) => setAcknowledged(v === true)}
                      className="mt-1"
                    />
                    <span className="text-sm text-foreground">
                      <strong>Acknowledgement:</strong> {ACK_TEXT}
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="hero"
                  className="w-full text-lg py-6 shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Continue to Booking
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefresherTraining;
