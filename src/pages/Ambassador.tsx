import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { UserPlus, MessageCircle, Link2, DollarSign, ArrowRight } from "lucide-react";
import affiliateHero from "@/assets/photos/affiliate-hero.jpg";

const steps = [
  {
    icon: UserPlus,
    title: "1. Sign Up",
    description: "Register as an Ambassador using our existing Affiliate Program.",
  },
  {
    icon: MessageCircle,
    title: "2. Share Your Experience",
    description:
      "You may be connected with prospective students who would like to speak with a past Cailin student about their training experience.",
  },
  {
    icon: Link2,
    title: "3. Refer",
    description:
      "If they decide Cailin is right for them, use your unique affiliate referral link when referring them to book their training.",
  },
  {
    icon: DollarSign,
    title: "4. Earn 5% Commission",
    description:
      "When an eligible referral results in a successful sale, you receive 5% commission. Commissions are processed at the end of each month.",
  },
];

const scrollToForm = () =>
  document.getElementById("ambassador-form")?.scrollIntoView({ behavior: "smooth" });

const Ambassador = () => (
  <Layout>
    <SEO
      title="Student Ambassador Program | Cailin Mining & Civil"
      description="Past Cailin Mining & Civil students: share your training experience with future students and earn 5% commission on successful referrals."
      path="/ambassador"
    />

    <section className="relative py-32 overflow-hidden">
      <HeroImage src={affiliateHero} alt="Workers walking on a mine site" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Student Ambassador Program</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Become a Cailin Student Ambassador
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Share your experience, help future students make informed training decisions, and earn
            commission when your referrals turn into successful bookings.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            Become an Ambassador <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Have you trained with Cailin Mining &amp; Civil?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're inviting past students to become Cailin Student Ambassadors and share their real
            training experience with people considering training with us.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Prospective students may want to speak with someone who has already completed training at
            Cailin before making their decision. As an Ambassador, you can share your own experience,
            answer questions about your training journey, and help them understand what to expect.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl font-bold text-foreground">
          How It Works
        </h2>
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-background p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="ambassador-form" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-display text-3xl md:text-4xl font-bold text-foreground">
              Ready to Become an Ambassador?
            </h2>
            <p className="text-muted-foreground">
              Complete the signup below to join the program and receive your unique referral link.
            </p>
          </div>
          <iframe
            src="https://link.cailinminingcivil.com/widget/form/2m4ENY68qqsHufO37s59"
            style={{ width: "100%", height: "100%", border: "none" }}
            id="inline-2m4ENY68qqsHufO37s59"
            title="Ambassador Form"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-height="969"
            data-layout-iframe-id="inline-2m4ENY68qqsHufO37s59"
            data-form-id="2m4ENY68qqsHufO37s59"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            allow="payment; clipboard-read; clipboard-write; autoplay; camera; microphone"
            sandbox="allow-top-navigation allow-scripts allow-same-origin allow-forms allow-popups"
            className="min-h-[969px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default Ambassador;
