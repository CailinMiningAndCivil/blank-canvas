import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { User, Briefcase, Mail, Phone, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const workTypes = [
  { value: "construction", label: "Construction work", eligible: true },
  { value: "exploration", label: "Exploration for resources", eligible: false },
  { value: "resources_operational", label: "Resources operational work", eligible: false },
  { value: "ships", label: "Building or maintenance of ships", eligible: false },
  { value: "elevators", label: "Work on elevators and escalators", eligible: false },
  { value: "maintenance", label: "Minor/routine maintenance", eligible: false },
];

const workLocations = [
  { value: "sites", label: "Sites" },
  { value: "workshop", label: "Workshop" },
  { value: "combination", label: "Combination of sites and workshop" },
];

export const CTFEligibilityForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    workingInConstruction: "",
    workLocation: "",
    workType: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const selectedWorkType = workTypes.find((w) => w.value === formData.workType);
  const isEligible = formData.workingInConstruction === "yes" && selectedWorkType?.eligible;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone (basic Australian format)
    const phoneClean = formData.phone.replace(/\s/g, "");
    if (phoneClean.length < 10) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Build the message with eligibility details
      const workTypeLabel = workTypes.find((w) => w.value === formData.workType)?.label || "Not specified";
      const workLocationLabel = workLocations.find((w) => w.value === formData.workLocation)?.label || "Not specified";
      
      const eligibilityStatus = isEligible ? "LIKELY ELIGIBLE" : "MAY NOT BE ELIGIBLE";
      
      const message = `[CTF Eligibility Check - ${eligibilityStatus}]

Job Title: ${formData.jobTitle || "Not specified"}

Work Status:
- Working in WA construction: ${formData.workingInConstruction === "yes" ? "Yes" : "No"}
- Work location: ${workLocationLabel}
- Type of work: ${workTypeLabel}

This person has submitted the CTF eligibility form and would like more information about funding options.`;

      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.fullName.trim().slice(0, 100),
        email: formData.email.trim().toLowerCase().slice(0, 255),
        phone: formData.phone.trim().slice(0, 20),
        message: message.slice(0, 2000),
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: isEligible 
          ? "Great news! You appear to be eligible. We'll be in touch soon."
          : "Thank you for your submission. We'll review your details and contact you.",
      });

      // Reset form
      setFormData({
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        workingInConstruction: "",
        workLocation: "",
        workType: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl text-foreground mb-2">
          CTF <span className="text-primary">Eligibility Check</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          Complete this form to check your eligibility for Construction Training Fund subsidies.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg text-foreground">Personal Details</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="e.g., Carpenter, Labourer"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  maxLength={255}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="04XX XXX XXX"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  maxLength={20}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Work Status Questions */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg text-foreground">Work Status Questions</h3>
          </div>
          
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="space-y-3">
              <Label className="text-foreground">
                1. At the time of training, were you working in the WA building and construction industry? *
              </Label>
              <RadioGroup
                value={formData.workingInConstruction}
                onValueChange={(value) => handleInputChange("workingInConstruction", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="construction-yes" />
                  <Label htmlFor="construction-yes" className="cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="construction-no" />
                  <Label htmlFor="construction-no" className="cursor-pointer">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2 */}
            <div className="space-y-3">
              <Label className="text-foreground">
                2. Was the majority of this work undertaken in: *
              </Label>
              <RadioGroup
                value={formData.workLocation}
                onValueChange={(value) => handleInputChange("workLocation", value)}
                className="flex flex-col gap-2"
              >
                {workLocations.map((location) => (
                  <div key={location.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={location.value} id={`location-${location.value}`} />
                    <Label htmlFor={`location-${location.value}`} className="cursor-pointer">
                      {location.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Question 3 */}
            <div className="space-y-3">
              <Label className="text-foreground">
                3. Select ONE type of work you undertook the majority of the time: *
              </Label>
              <RadioGroup
                value={formData.workType}
                onValueChange={(value) => handleInputChange("workType", value)}
                className="flex flex-col gap-2"
              >
                {workTypes.map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={type.value} id={`type-${type.value}`} />
                    <Label 
                      htmlFor={`type-${type.value}`} 
                      className="cursor-pointer flex items-center gap-2"
                    >
                      {type.label}
                      {type.eligible ? (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                          Eligible
                        </span>
                      ) : (
                        <span className="text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full font-medium">
                          Not eligible
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Eligibility Preview */}
        {formData.workingInConstruction && formData.workType && (
          <div className={`p-4 rounded-xl border ${
            isEligible 
              ? "bg-primary/10 border-primary/20" 
              : "bg-destructive/10 border-destructive/20"
          }`}>
            <div className="flex items-center gap-3">
              {isEligible ? (
                <>
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground text-sm">
                    <span className="font-semibold">Good news!</span> Based on your answers, you appear to be eligible for CTF funding.
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-foreground text-sm">
                    Based on your answers, you may not be eligible for CTF funding. Submit anyway and our team can review your situation.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Eligibility Application"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Info Box */}
        <div className="bg-secondary rounded-xl p-4">
          <h4 className="font-semibold text-foreground text-sm mb-2">What is CTF Funding?</h4>
          <p className="text-muted-foreground text-xs">
            The Construction Training Fund provides subsidies up to 70-80% of course costs for 
            eligible workers in WA's construction industry. Metro workers can receive up to $1,300 
            per course, while regional workers can receive up to $1,700.
          </p>
        </div>
      </form>
    </div>
  );
};
