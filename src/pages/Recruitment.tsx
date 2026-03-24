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
const CONTACT_SUBMISSIONS_ENDPOINT = `${CLOUD_BASE_URL}/rest/v1/contact_submissions`;
const NOTIFY_SUBMISSION_ENDPOINT = `${CLOUD_BASE_URL}/functions/v1/notify-submission`;

type RecruitmentSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

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

const insertContactSubmission = async (submissionData: RecruitmentSubmission) => {
  const response = await fetch(CONTACT_SUBMISSIONS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
      Authorization: `Bearer ${PUBLISHABLE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(submissionData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to save submission");
  }
};

const triggerSubmissionNotification = async (submissionData: RecruitmentSubmission) => {
  const response = await fetch(NOTIFY_SUBMISSION_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
      Authorization: `Bearer ${PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({
      record: {
        ...submissionData,
        created_at: new Date().toISOString(),
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Recruitment notify submission failed:", errorText);
  }
};

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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData: RecruitmentSubmission = {
        name: formData.fullName.trim().slice(0, 100),
        email: formData.email.trim().toLowerCase().slice(0, 255),
        phone: formData.phone.trim().slice(0, 20),
        message: `[Recruitment Portal Enquiry]\n\n${(formData.message.trim() || "No additional details provided.").slice(0, 2000)}`,
      };

      await insertContactSubmission(submissionData);
      await triggerSubmissionNotification(submissionData);

      toast.success("Your enquiry has been submitted! We'll be in touch soon.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Recruitment submission failed:", error);
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Recruitment Portal
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Your Career In <span className="text-primary">Mining & Civil</span> Starts Here
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Submit your details and our recruitment partners will connect you with employers looking for skilled operators across Western Australia.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register Your Interest <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Register With Us?
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-background p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Register Your Interest
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and a recruitment partner will be in touch to discuss opportunities that match your experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                    maxLength={100}
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
                    placeholder="you@example.com"
                    maxLength={255}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                  maxLength={20}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your experience & what you're looking for</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="E.g. machines you're experienced with, preferred work location, availability..."
                  rows={5}
                  maxLength={2000}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
