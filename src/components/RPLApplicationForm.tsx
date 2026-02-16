import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Upload } from "lucide-react";

const machineOptions = [
  "Roller",
  "Excavator",
  "Front End Wheel Loader",
  "Skid Steer Loader",
  "Grader",
  "Watercart",
  "ADT (Moxy)",
  "Telehandler",
  "Integrated Tool Carrier (IT)",
  "Dozer",
  "Rigid Haul Truck",
];

export const RPLApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    otherInfo: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [referencesFile, setReferencesFile] = useState<File | null>(null);
  const [ticketsFile, setTicketsFile] = useState<File | null>(null);

  const toggleMachine = (machine: string) => {
    setSelectedMachines((prev) =>
      prev.includes(machine)
        ? prev.filter((m) => m !== machine)
        : [...prev, machine]
    );
  };

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${folder}/${timestamp}_${safeName}`;

    const { error } = await supabase.storage
      .from("rpl-documents")
      .upload(path, file);

    if (error) {
      return null;
    }
    return path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (selectedMachines.length === 0) {
      toast.error("Please select at least one machine");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload files
      const uploadedFiles: string[] = [];
      if (resumeFile) {
        const path = await uploadFile(resumeFile, "resumes");
        if (path) uploadedFiles.push(`Resume: ${path}`);
        else uploadedFiles.push(`Resume: ${resumeFile.name} (upload failed)`);
      }
      if (referencesFile) {
        const path = await uploadFile(referencesFile, "references");
        if (path) uploadedFiles.push(`References: ${path}`);
        else uploadedFiles.push(`References: ${referencesFile.name} (upload failed)`);
      }
      if (ticketsFile) {
        const path = await uploadFile(ticketsFile, "tickets");
        if (path) uploadedFiles.push(`Tickets: ${path}`);
        else uploadedFiles.push(`Tickets: ${ticketsFile.name} (upload failed)`);
      }

      const message = [
        `[RPL Assessment Enquiry]`,
        ``,
        `Machines: ${selectedMachines.join(", ")}`,
        `Address: ${formData.address || "Not provided"}`,
        ``,
        uploadedFiles.length > 0
          ? `Uploaded Documents:\n${uploadedFiles.join("\n")}`
          : "No documents uploaded",
        ``,
        formData.otherInfo
          ? `Other Information: ${formData.otherInfo}`
          : "",
      ]
        .filter(Boolean)
        .join("\n");

      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message,
      });

      if (error) throw error;

      toast.success("Your RPL enquiry has been submitted! We'll be in touch soon.");
      setFormData({ fullName: "", email: "", phone: "", address: "", otherInfo: "" });
      setSelectedMachines([]);
      setResumeFile(null);
      setReferencesFile(null);
      setTicketsFile(null);
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="font-display text-2xl text-foreground mb-6">
          Are You Eligible? Apply Here:
        </h3>
      </div>

      {/* Personal Details */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Phone"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Address"
          />
        </div>
      </div>

      {/* Machine Selection */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-2">
          Which Machines Are You Interested In? *
        </h4>
        <p className="text-muted-foreground text-sm mb-4">Select all that apply</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {machineOptions.map((machine) => (
            <label
              key={machine}
              className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                selectedMachines.includes(machine)
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <Checkbox
                checked={selectedMachines.includes(machine)}
                onCheckedChange={() => toggleMachine(machine)}
              />
              <span className="text-foreground text-sm font-medium">{machine}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Resume & References */}
      <div>
        <h4 className="font-display text-lg text-foreground mb-4">Resume & References</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Upload Most Current Resume *</Label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-card cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground truncate">
                {resumeFile ? resumeFile.name : "Choose file..."}
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>
          <div className="space-y-2">
            <Label>Upload Any References</Label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-card cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground truncate">
                {referencesFile ? referencesFile.name : "Choose file..."}
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={(e) => setReferencesFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>
          <div className="space-y-2">
            <Label>Upload Old/International Tickets</Label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-card cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground truncate">
                {ticketsFile ? ticketsFile.name : "Choose file..."}
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={(e) => setTicketsFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Other Info */}
      <div className="space-y-2">
        <Label htmlFor="otherInfo">Other Relevant Information</Label>
        <Textarea
          id="otherInfo"
          value={formData.otherInfo}
          onChange={(e) => setFormData({ ...formData, otherInfo: e.target.value })}
          placeholder="Add any other information that may be relevant to your prior learning"
          rows={4}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Assessment Enquiry"
        )}
      </Button>
    </form>
  );
};
