import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Phone, ArrowRight, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import cailinLogo from "@/assets/cailin-logo.svg";

// Real Cailin photos
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";
import loaderDumpingAction from "@/assets/photos/loader-dumping-action.jpg";

const SUPABASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";

const benefits = [
  "Personalised career strategy session with Niamh.",
  "A full recap and action plan emailed to you directly after the call.",
  "Expert advice tailored to your situation.",
  "Perfect if you're outside of Australia.",
  "Ideal if you're not looking for training — just want a job.",
  "Great if you're still exploring your options or not yet ready to invest in a course.",
];

type FormState = "form" | "qualified" | "not-qualified";

const DiscoveryCall = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hasFlights, setHasFlights] = useState<string>("");
  const [isEnglishFluent, setIsEnglishFluent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim() || !hasFlights || !isEnglishFluent) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    const qualified = hasFlights === "yes" && isEnglishFluent === "yes";
    setIsSubmitting(true);

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/discovery_call_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          has_flights_or_visa: hasFlights === "yes",
          is_english_fluent: isEnglishFluent === "yes",
          qualified,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      if (qualified) {
        window.location.href = "https://link.cailinminingcivil.com/widget/booking/w0QHdI6U4F0SzOF5pThM";
        return;
      }
      setFormState("not-qualified");
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroImage
          src={trainerSiteSafety}
          alt="Trainer on mining site"
          overlayClassName="bg-gradient-to-r from-background via-background/90 to-background/60"
          priority
        />
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Don't need a course? Just want a job?
            </p>
            
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Book Your <span className="text-gradient">1:1 Paid Coaching Call</span> With Niamh
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Get a personalised plan to break into the Mining & Civil industry — no matter where you are in the world.
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg py-6 px-8 shadow-glow animate-fade-up"
              style={{ animationDelay: "0.4s" }}
              onClick={() => document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits List */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
                What's <span className="text-gradient">Included</span>
              </h2>
              
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="lg:sticky lg:top-28">
              <div className="bg-gradient-card rounded-xl p-6 md:p-8 shadow-card border border-border">
                <img 
                  src={loaderDumpingAction}
                  alt="Wheel loader loading articulated truck"
                  className="w-full h-56 object-cover rounded-lg mb-6"
                />
                
                <h3 className="text-xl md:text-2xl font-bold font-display text-center mb-2">
                  Ready to Map Out Your Path?
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Book a 1:1 paid coaching call with Niamh and walk away with a clear, personalised action plan.
                </p>
                
                <Button 
                  size="lg" 
                  variant="hero"
                  className="w-full text-lg py-6 shadow-glow"
                  onClick={() => document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  *This is not an employment service. For employment opportunities{" "}
                  <Link to="/recruitment" className="text-primary hover:underline font-semibold">
                    click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Qualification Form / Booking Widget Section */}
      <section id="booking-widget" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {formState === "form" && (
              <>
                <div className="mb-10 text-center">
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Quick <span className="text-gradient">Pre-Qualification</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Answer a few quick questions so we can best prepare for your call with Niamh.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={20}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={255}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Do you have flights booked or a visa secured?</Label>
                    <RadioGroup value={hasFlights} onValueChange={setHasFlights} className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="flights-yes" />
                        <Label htmlFor="flights-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="flights-no" />
                        <Label htmlFor="flights-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Is your English fluent?</Label>
                    <RadioGroup value={isEnglishFluent} onValueChange={setIsEnglishFluent} className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="english-yes" />
                        <Label htmlFor="english-yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="english-no" />
                        <Label htmlFor="english-no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="hero"
                    className="w-full text-lg py-6 shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Continue"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                </form>
              </>
            )}


            {formState === "not-qualified" && (
              <div className="text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card">
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Unfortunately, You Don't Qualify Yet
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Sorry, you must have flights booked or a visa secured and be fluent in English before booking a call.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Take the First Step Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to guide you through every step of your training journey.
          </p>
          <Button 
            size="lg" 
            variant="hero" 
            className="shadow-glow"
            onClick={() => document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoveryCall;
