import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroImage } from "@/components/ui/hero-image";
import { ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";

const REDIRECT_URL = "https://live.cailintraining.com.au/returnsession";

const ReturningStudent = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    setNotFound(false);

    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast({
          title: data?.error || "Verification failed. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data?.matched) {
        window.location.href = REDIRECT_URL;
        return;
      }

      setNotFound(true);
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
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
              Returning <span className="text-gradient">Student</span> Verification
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground animate-fade-up">
              Enter the email address you used when you booked your original course to continue.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            {!notFound ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
              >
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
                    We'll check our records to verify you're a previous student.
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
              </form>
            ) : (
              <div className="text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card">
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Email Not Found
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6">
                  We couldn't find that email in our previous student records. Please double-check
                  the email address you used when you originally booked your course.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setNotFound(false);
                    setEmail("");
                  }}
                >
                  Try a different email
                </Button>
              </div>
            )}

            <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>
                Your email is checked securely against our student records. We don't store anything
                you enter on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturningStudent;
