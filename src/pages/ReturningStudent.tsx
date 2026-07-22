import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroImage } from "@/components/ui/hero-image";
import { ArrowRight, XCircle, Loader2, CheckCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";

const CLOUD_BASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const VERIFY_RETURNING_STUDENT_ENDPOINT = `${CLOUD_BASE_URL}/functions/v1/verify-returning-student`;
const RETURNING_STUDENT_SUBMISSIONS_ENDPOINT = `${CLOUD_BASE_URL}/rest/v1/returning_student_submissions`;
const FREE_RETURN_REDIRECT_URL = "https://live.cailintraining.com.au/free_return_practice";

const cloudHeaders = {
  "Content-Type": "application/json",
  apikey: PUBLISHABLE_KEY,
  Authorization: `Bearer ${PUBLISHABLE_KEY}`,
};

type VerificationResponse = {
  matched?: boolean;
  hasPromoTag?: boolean;
  eligible?: boolean;
  error?: string;
};

const verifyReturningStudent = async (email: string): Promise<VerificationResponse> => {
  const response = await fetch(VERIFY_RETURNING_STUDENT_ENDPOINT, {
    method: "POST",
    headers: cloudHeaders,
    body: JSON.stringify({ email }),
  });
  const data = (await response.json().catch(() => ({}))) as VerificationResponse;
  if (!response.ok) throw new Error(data.error || "Verification failed. Please try again.");
  return data;
};

const saveSubmission = async (submission: {
  full_name: string;
  email: string;
  matched: boolean;
}) => {
  try {
    await fetch(RETURNING_STUDENT_SUBMISSIONS_ENDPOINT, {
      method: "POST",
      headers: { ...cloudHeaders, Prefer: "return=minimal" },
      body: JSON.stringify(submission),
    });
  } catch {
    /* best effort */
  }
};

const ReturningStudent = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notEligible, setNotEligible] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      toast({ title: "Please enter your full name", variant: "destructive" });
      return;
    }
    if (!trimmedEmail) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    setNotEligible(false);

    try {
      const data = await verifyReturningStudent(trimmedEmail);
      const matched = data.matched ?? false;
      void saveSubmission({ full_name: trimmedName, email: trimmedEmail, matched });

      if (matched && data.hasPromoTag) {
        setRedirecting(true);
        // Open in new tab per project rule for external links
        window.open(FREE_RETURN_REDIRECT_URL, "_blank", "noopener,noreferrer");
        return;
      }

      setNotEligible(true);
    } catch (err) {
      console.error("Free returns verification error:", err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Free Return Machine Training Sessions Perth | Cailin Mining & Civil"
        description="Eligible Cailin students can claim a free return machine training session in Perth. Verify your details to continue."
        path="/free-returns"
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <HeroImage
          src={trainerSiteSafety}
          alt="Cailin trainer on site"
          overlayClassName="bg-gradient-to-r from-background via-background/90 to-background/60"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up">
              Already trained with us?
            </p>
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up">
              Free <span className="text-gradient">Returns</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground animate-fade-up">
              Verify your details to claim your free return practice session.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            {redirecting ? (
              <div className="text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  You're eligible for a Free Return!
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6">
                  We've opened your Free Return booking page in a new tab. If it didn't open, click below to continue.
                </p>
                <Button asChild size="lg" variant="hero">
                  <a href={FREE_RETURN_REDIRECT_URL} target="_blank" rel="noopener noreferrer">
                    Continue to Free Return Booking
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            ) : notEligible ? (
              <div className="text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card">
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Not Eligible for Free Returns
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6">
                  Our records don't show an active Free Return Promo on your account. You can book a Full Day Course now to get qualified.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/courses/full-day">
                      Book a Full Day Course Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setNotEligible(false);
                      setEmail("");
                    }}
                  >
                    Try a different email
                  </Button>
                </div>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
              >
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    maxLength={120}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter the email used when you booked"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    autoComplete="email"
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll check our records for an active Free Return Promo.
                  </p>
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
                      Checking...
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Not eligible for Free Returns?{" "}
                  <Link to="/courses/full-day" className="text-primary underline">
                    Book Now
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturningStudent;
