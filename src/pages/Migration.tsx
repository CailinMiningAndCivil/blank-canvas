import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle, Globe, Award, CalendarCheck } from "lucide-react";
import { HeroImage } from "@/components/ui/hero-image";
import rplPageHero from "@/assets/photos/rpl-page-hero.png";

const BOOKING_WIDGET_ID = "aJC0g1ShRukSwglYc8x5";

const highlights = [
  "Turn overseas machine operating experience into recognised Australian qualifications",
  "One-on-one guidance on the pathway that fits your background",
  "Assessments valid across Australian civil and mine sites",
  "Trainers with real civil and mining industry experience",
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Book a Consultation",
    description:
      "Use the calendar below to lock in a time that suits you. We'll review your overseas experience, tickets and qualifications.",
  },
  {
    icon: Globe,
    title: "Skills Discussion",
    description:
      "We map your international experience against Australian requirements and identify any gaps before you commit.",
  },
  {
    icon: Award,
    title: "Recognition Pathway",
    description:
      "Where eligible, we guide you through Recognition of Prior Learning (RPL) so your experience is formally recognised in Australia.",
  },
];

const Migration = () => {
  useEffect(() => {
    const src = "https://link.cailinminingcivil.com/js/form_embed.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <SEO
        title="Migration Skills Assessment for Machine Operators | Cailin Mining & Civil"
        description="Overseas-trained machine operators: get your experience and qualifications recognised in Australia. Book a migration skills consultation with Cailin Mining & Civil in Perth."
        path="/migration"
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={rplPageHero} alt="Machine operator working on a civil site" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Overseas Skills Migration
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Migration Skills Assessment
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Trained as a machine operator overseas? Book a consultation and we'll help you
              understand how your experience and qualifications can be recognised in Australia —
              and the clear next steps to get you site-ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  Overseas experience welcome
                </span>
              </div>
              <div className="bg-card border border-border px-6 py-3 rounded-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">RTO 46489</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A simple three-step process, starting with a one-on-one consultation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-primary font-display text-sm mb-2">Step {i + 1}</p>
                  <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking calendar */}
      <section id="book-consultation" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-display text-3xl md:text-4xl font-bold text-foreground">
                Book Your Consultation
              </h2>
              <p className="text-muted-foreground">
                Choose a time below and we'll call you to discuss your overseas experience and
                the best pathway forward.
              </p>
            </div>
            <iframe
              {...({ allowpaymentrequest: "true" } as Record<string, string>)}
              src={`https://link.cailinminingcivil.com/widget/booking/${BOOKING_WIDGET_ID}`}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id={`booking-${BOOKING_WIDGET_ID}`}
              title="Migration Skills Consultation Booking"
              allow="payment; camera; microphone; geolocation; fullscreen"
              sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-scripts allow-same-origin allow-forms allow-popups"
              className="w-full min-h-[700px] rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Migration;
