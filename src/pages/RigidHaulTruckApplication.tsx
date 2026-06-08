import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroImage } from "@/components/ui/hero-image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import heroImage from "@/assets/photos/rigid-haul-truck.jpg";

const schema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  previousExperience: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  experienceDetails: z.string().trim().max(2000).optional(),
});

const MAX_FILE_MB = 10;

const RigidHaulTruckApplication = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    previousExperience: "" as "" | "yes" | "no",
    experienceDetails: "",
  });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      toast({ title: "File too large", description: `Max ${MAX_FILE_MB}MB.`, variant: "destructive" });
      return;
    }
    setFile(f);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);

    // Always fire the webhook first so leads reach GHL even if storage/DB fails
    const fireWebhook = (extra: Record<string, unknown> = {}) =>
      fetch(
        "https://services.leadconnectorhq.com/hooks/rHdckncf62VIX9k55LFy/webhook-trigger/140f57a4-abd6-4127-8e7b-f9f56dbdd021",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            form: "Rigid Haul Truck Application",
            full_name: parsed.data.fullName,
            email: parsed.data.email,
            phone: parsed.data.phone,
            previous_experience: parsed.data.previousExperience === "yes" ? "Yes" : "No",
            experience_details: parsed.data.experienceDetails || "",
            submitted_at: new Date().toISOString(),
            source_url: window.location.href,
            ...extra,
          }),
        }
      ).catch((whErr) => console.error("Webhook failed", whErr));

    // Send immediately (without file URL) so GHL always gets the lead
    fireWebhook();

    try {
      let evidencePath: string | null = null;
      if (file) {
        const ext = file.name.split(".").pop() || "bin";
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("haul-truck-applications")
          .upload(path, file, { contentType: file.type || undefined });
        if (upErr) throw upErr;
        evidencePath = path;
      }
      const { error } = await supabase.from("haul_truck_applications").insert({
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        previous_experience: parsed.data.previousExperience === "yes",
        experience_details: parsed.data.experienceDetails || null,
        evidence_file_path: evidencePath,
      });
      if (error) throw error;

      // Follow-up webhook with the evidence file link, if any
      if (evidencePath) {
        let evidenceUrl: string | null = null;
        const { data: signed } = await supabase.storage
          .from("haul-truck-applications")
          .createSignedUrl(evidencePath, 60 * 60 * 24 * 7);
        evidenceUrl = signed?.signedUrl ?? null;
        fireWebhook({ evidence_file_path: evidencePath, evidence_file_url: evidenceUrl, follow_up: true });
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      toast({ title: "Submission failed", description: "Please try again or contact us.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Rigid Haul Truck Application | Cailin Mining & Civil"
        description="Apply for the Rigid Haul Truck Traineeship. Submit your details and supporting evidence for review."
        path="/rigid-haul-truck-application"
      />

      <section className="relative py-24 overflow-hidden">
        <HeroImage src={heroImage} alt="Rigid haul truck" overlayClassName="bg-background/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Rigid Haul Truck <span className="text-primary">Application</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Submit your application and supporting evidence below. Our team will review and contact approved applicants with a private booking link.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-2xl text-foreground mb-4">Application Received</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you. Your application has been received and will be reviewed by our team.
                  If approved, you will be sent a private booking/payment link to secure your place.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="mt-2" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label>Have you previously operated trucks or machinery? *</Label>
                  <RadioGroup
                    className="mt-3 flex gap-6"
                    value={form.previousExperience}
                    onValueChange={(v) => setForm({ ...form, previousExperience: v as "yes" | "no" })}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="exp-yes" />
                      <Label htmlFor="exp-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="exp-no" />
                      <Label htmlFor="exp-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="details">Briefly describe your relevant experience (optional)</Label>
                  <Textarea
                    id="details"
                    value={form.experienceDetails}
                    onChange={(e) => setForm({ ...form, experienceDetails: e.target.value })}
                    className="mt-2"
                    rows={4}
                    placeholder="Tickets, machines operated, industries, years of experience..."
                  />
                </div>

                <div>
                  <Label htmlFor="evidence">Upload supporting evidence (resume, tickets, qualifications)</Label>
                  <p className="text-xs text-muted-foreground mt-1 mb-2">PDF, DOC, DOCX, JPG or PNG. Max {MAX_FILE_MB}MB.</p>
                  <label
                    htmlFor="evidence"
                    className="flex items-center gap-3 border-2 border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    {file ? (
                      <>
                        <FileText className="w-5 h-5 text-primary" />
                        <span className="text-sm text-foreground truncate">{file.name}</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Click to choose a file</span>
                      </>
                    )}
                  </label>
                  <input
                    id="evidence"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFile}
                  />
                </div>

                <Button type="submit" disabled={submitting} className="w-full" size="lg">
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Submitting an application does not guarantee acceptance. Approved applicants will be sent a private booking link.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RigidHaulTruckApplication;
