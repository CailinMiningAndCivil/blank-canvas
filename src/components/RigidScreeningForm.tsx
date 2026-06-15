import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, AlertTriangle, Loader2, CreditCard, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Source = "traineeship" | "booking";

interface Props {
  source: Source;
  /** What to show qualified applicants */
  qualifiedCta: {
    label: string;
    href: string;
    note?: string;
  };
}

// AU phone: optional +61 or 0 prefix, total 9-10 digits after normalising
const auPhoneRegex = /^(\+?61|0)[2-478](?:[ -]?\d){8}$/;
const auPostcodeRegex = /^(0[289][0-9]{2}|[1-9][0-9]{3})$/;

const baseSchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(auPhoneRegex, "Enter a valid Australian phone number"),
  postcode: z
    .string()
    .trim()
    .regex(auPostcodeRegex, "Enter a valid Australian postcode (4 digits)"),
});

export const RigidScreeningForm = ({ source, qualifiedCta }: Props) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { qualified: boolean; reason?: string }>(null);

  // form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [hasExperience, setHasExperience] = useState<"" | "yes" | "no">("");
  const [machines, setMachines] = useState("");
  const [hasHrLicence, setHasHrLicence] = useState<"" | "yes" | "no">("");
  const [evidenceFile, setEvidenceFile] = useState<File | null>(null);
  const [hrLicenceFile, setHrLicenceFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const uploadFile = async (file: File, prefix: string): Promise<string | null> => {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${prefix}/${Date.now()}-${safeName}`;
    const { error } = await supabase.storage
      .from("haul-truck-applications")
      .upload(path, file, { upsert: false });
    if (error) {
      console.error("upload error", error);
      return null;
    }
    return path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = baseSchema.safeParse({
      full_name: fullName,
      email,
      phone: phone.replace(/\s+/g, ""),
      postcode,
    });

    const newErrors: Record<string, string> = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        newErrors[issue.path[0] as string] = issue.message;
      }
    }
    if (!hasExperience) newErrors.hasExperience = "Please answer this question";
    if (hasExperience === "yes") {
      if (!machines.trim()) newErrors.machines = "List the machines you have operated";
      if (!evidenceFile) newErrors.evidenceFile = "Upload a resume and/or tickets";
    }
    if (hasExperience === "no") {
      if (!hasHrLicence) newErrors.hasHrLicence = "Please answer this question";
      if (hasHrLicence === "yes" && !hrLicenceFile) {
        newErrors.hrLicenceFile = "Upload proof of your HR Licence";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    try {
      // Determine qualification
      const phoneOk = auPhoneRegex.test(phone.replace(/\s+/g, ""));
      const postcodeOk = auPostcodeRegex.test(postcode);
      let qualified = false;
      let reason = "";

      if (!phoneOk || !postcodeOk) {
        reason = "Phone or postcode is not Australian.";
      } else if (hasExperience === "yes") {
        qualified = Boolean(machines.trim() && evidenceFile);
        if (!qualified) reason = "Missing machine list or evidence.";
      } else if (hasExperience === "no" && hasHrLicence === "yes") {
        qualified = Boolean(hrLicenceFile);
        if (!qualified) reason = "Missing HR Licence proof.";
      } else {
        reason = "No machinery experience and no HR Licence.";
      }

      // Upload files (best effort)
      let evidencePath: string | null = null;
      let hrPath: string | null = null;
      if (evidenceFile) evidencePath = await uploadFile(evidenceFile, "evidence");
      if (hrLicenceFile) hrPath = await uploadFile(hrLicenceFile, "hr-licence");

      const record = {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        postcode: postcode.trim(),
        previous_experience: hasExperience === "yes",
        experience_details:
          hasExperience === "yes"
            ? `Machines: ${machines.trim()}`
            : hasHrLicence === "yes"
            ? "No machinery experience. Holds HR Licence."
            : "No machinery experience. No HR Licence.",
        machines_operated: hasExperience === "yes" ? machines.trim() : null,
        has_hr_licence: hasExperience === "no" ? hasHrLicence === "yes" : null,
        evidence_file_path: evidencePath,
        hr_licence_file_path: hrPath,
        qualified,
        source,
      };

      const { error: insertError } = await supabase
        .from("haul_truck_applications")
        .insert(record);

      if (insertError) {
        console.error("insert error", insertError);
        throw insertError;
      }

      // Forward to GHL via notify-submission for record-keeping
      try {
        await supabase.functions.invoke("notify-submission", {
          body: {
            record: {
              name: fullName.trim(),
              email: email.trim(),
              phone: phone.trim(),
              message: `[Rigid Haul Truck Screening - ${source}]\nPostcode: ${postcode}\nExperience: ${hasExperience}\nMachines: ${machines || "n/a"}\nHR Licence: ${hasHrLicence || "n/a"}\nQualified: ${qualified ? "YES" : "NO"}${reason ? ` (${reason})` : ""}`,
            },
          },
        });
      } catch (err) {
        console.warn("notify-submission failed", err);
      }

      setResult({ qualified, reason: qualified ? undefined : reason });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (result) {
    if (result.qualified) {
      return (
        <div className="bg-card border-2 border-primary/40 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-2">You're pre-qualified</h3>
          <p className="text-muted-foreground mb-6">
            Thanks {fullName.split(" ")[0]} — based on your answers you meet our screening criteria.
            {qualifiedCta.note ? ` ${qualifiedCta.note}` : ""}
          </p>
          <a
            href={qualifiedCta.href}
            target={qualifiedCta.href.startsWith("http") ? "_blank" : undefined}
            rel={qualifiedCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition"
          >
            {source === "booking" ? <CreditCard className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            {qualifiedCta.label}
          </a>
        </div>
      );
    }
    return (
      <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-7 h-7 text-muted-foreground" />
        </div>
        <h3 className="font-display text-2xl text-foreground mb-2">Application received</h3>
        <p className="text-muted-foreground">
          Thanks for applying. Based on the current screening criteria, we are unable to offer you a place at this time.
          Your details have been recorded and we will be in touch if a suitable opportunity becomes available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="full_name">Full name *</Label>
          <Input
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            maxLength={100}
            required
          />
          {errors.full_name && <p className="text-sm text-destructive mt-1">{errors.full_name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            required
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Australian phone number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="04XX XXX XXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="postcode">Australian postcode *</Label>
          <Input
            id="postcode"
            inputMode="numeric"
            maxLength={4}
            placeholder="e.g. 6000"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.replace(/\D/g, ""))}
            required
          />
          {errors.postcode && <p className="text-sm text-destructive mt-1">{errors.postcode}</p>}
        </div>
      </div>

      <div>
        <Label>Do you have machinery / equipment operating experience? *</Label>
        <RadioGroup
          value={hasExperience}
          onValueChange={(v) => setHasExperience(v as "yes" | "no")}
          className="flex gap-6 mt-2"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem id="exp-yes" value="yes" />
            <Label htmlFor="exp-yes" className="font-normal cursor-pointer">Yes</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="exp-no" value="no" />
            <Label htmlFor="exp-no" className="font-normal cursor-pointer">No</Label>
          </div>
        </RadioGroup>
        {errors.hasExperience && <p className="text-sm text-destructive mt-1">{errors.hasExperience}</p>}
      </div>

      {hasExperience === "yes" && (
        <div className="space-y-4 border-l-2 border-primary/30 pl-4">
          <div>
            <Label htmlFor="machines">List the machines you have operated *</Label>
            <Textarea
              id="machines"
              value={machines}
              onChange={(e) => setMachines(e.target.value)}
              placeholder="e.g. Excavator, Wheel Loader, Dump Truck..."
              rows={3}
              maxLength={1000}
            />
            {errors.machines && <p className="text-sm text-destructive mt-1">{errors.machines}</p>}
          </div>
          <div>
            <Label htmlFor="evidence">Upload resume and/or tickets *</Label>
            <Input
              id="evidence"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={(e) => setEvidenceFile(e.target.files?.[0] || null)}
            />
            <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG or DOC (max 10MB)</p>
            {errors.evidenceFile && <p className="text-sm text-destructive mt-1">{errors.evidenceFile}</p>}
          </div>
        </div>
      )}

      {hasExperience === "no" && (
        <div className="space-y-4 border-l-2 border-primary/30 pl-4">
          <div>
            <Label>Do you hold an HR (Heavy Rigid) Licence? *</Label>
            <RadioGroup
              value={hasHrLicence}
              onValueChange={(v) => setHasHrLicence(v as "yes" | "no")}
              className="flex gap-6 mt-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hr-yes" value="yes" />
                <Label htmlFor="hr-yes" className="font-normal cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="hr-no" value="no" />
                <Label htmlFor="hr-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
            {errors.hasHrLicence && <p className="text-sm text-destructive mt-1">{errors.hasHrLicence}</p>}
          </div>
          {hasHrLicence === "yes" && (
            <div>
              <Label htmlFor="hr-file">Upload proof of HR Licence *</Label>
              <Input
                id="hr-file"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setHrLicenceFile(e.target.files?.[0] || null)}
              />
              <p className="text-xs text-muted-foreground mt-1">Photo or scan of your HR Licence</p>
              {errors.hrLicenceFile && <p className="text-sm text-destructive mt-1">{errors.hrLicenceFile}</p>}
            </div>
          )}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          "Submit screening form"
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Submitting does not guarantee acceptance. Qualified applicants will be shown the next step immediately.
      </p>
    </form>
  );
};
