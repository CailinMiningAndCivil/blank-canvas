import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroImage } from "@/components/ui/hero-image";
import { ArrowRight, XCircle, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";

const MACHINES: { label: string; url: string }[] = [
  { label: "ADT Moxy", url: "https://live.cailintraining.com.au/moxy_returnsession" },
  { label: "Wheel Loader", url: "https://live.cailintraining.com.au/wheel_loader_returnsession" },
  { label: "Watercart", url: "https://live.cailintraining.com.au/watercart_returnsession" },
  { label: "Roller", url: "https://live.cailintraining.com.au/roller_returnsession" },
  { label: "Excavator", url: "https://live.cailintraining.com.au/excavator_returnsession" },
];

const ReturningStudent = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [verified, setVerified] = useState(false);

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
    setNotFound(false);

    try {
      const { data, error } = await supabase.functions.invoke("verify-returning-student", {
        body: { email: trimmedEmail },
      });

      if (error) {
        toast({
          title: (data as { error?: string } | null)?.error || "Verification failed. Please try again.",
          variant: "destructive",
        });
        return;
      }

      const matched = (data as { matched?: boolean } | null)?.matched ?? false;

      // Store submission for record-keeping (best effort)
      await supabase.from("returning_student_submissions").insert({
        full_name: trimmedName,
        email: trimmedEmail,
        matched,
      });

      if (matched) {
        setVerified(true);
        return;
      }

      setNotFound(true);
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMachineSelect = async (label: string, url: string) => {
    // Record selection (best effort) then redirect
    try {
      await supabase.from("returning_student_submissions").insert({
        full_name: fullName.trim(),
        email: email.trim(),
        matched: true,
        selected_machine: label,
      });
    } catch {
      // ignore — proceed with redirect regardless
    }
    window.open(url, "_blank", "noopener,noreferrer");
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
              Confirm your details to choose the machine you'd like to book your return session for.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            {verified ? (
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card">
                <div className="text-center mb-8">
                  <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    You're verified, {fullName.trim().split(" ")[0]}!
                  </h2>
                  <p className="text-muted-foreground">
                    Select the machine you'd like to book your return session for.
                  </p>
                </div>
                <div className="grid gap-3">
                  {MACHINES.map((m) => (
                    <Button
                      key={m.label}
                      variant="outline"
                      size="lg"
                      className="w-full justify-between text-base py-6"
                      onClick={() => handleMachineSelect(m.label, m.url)}
                    >
                      <span>{m.label}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            ) : !notFound ? (
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturningStudent;
