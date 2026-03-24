import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Users, Briefcase, Award, ArrowRight } from "lucide-react";

const CLOUD_BASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";

const benefits = [
  {
    icon: Briefcase,
    title: "Connect With Top Employers",
    description:
      "We partner with leading mining and civil companies across Western Australia actively seeking skilled operators.",
  },
  {
    icon: Users,
    title: "Personalised Placement",
    description:
      "Our recruitment team works one-on-one with you to match your skills and experience to the right opportunity.",
  },
  {
    icon: Award,
    title: "Industry-Ready Candidates",
    description:
      "Whether you're a fresh graduate or experienced operator, we help bridge the gap between training and employment.",
  },
];

const Recruitment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: `[Recruitment Portal Enquiry]\n\n${formData.message || "No additional details provided."}`,
      };

      const res = await fetch(
        `${CLOUD_BASE_URL}/rest/v1/contact_submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: PUBLISHABLE_KEY,
            Authorization: `Bearer ${PUBLISHABLE_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!res.ok) throw new Error("Insert failed");

      // Trigger GHL webhook
      fetch(`${CLOUD_BASE_URL}/functions/v1/notify-submission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          record: { ...submissionData, created_at: new Date().toISOString() },
        }),
      }).catch(() => {});

      toast.success("Your enquiry has been submitted! We'll be in touch soon.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-6">
              Recruitment Portal
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Career In{" "}
              <span className="text-primary">Mining & Civil</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Submit your details and our recruitment partners will connect you
              with employers looking for skilled operators across Western
              Australia.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() =>
                document
                  .getElementById("enquiry-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Your Interest <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Register With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl border border-border bg-background text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Register Your Interest
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and a recruitment partner will be in
                touch to discuss opportunities that match your experience.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl border border-border bg-card"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Tell us about your experience & what you're looking for
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="E.g. machines you're experienced with, preferred work location, availability..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recruitment;
