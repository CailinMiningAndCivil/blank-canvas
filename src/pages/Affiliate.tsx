import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { DollarSign, Link2, Share2, ArrowRight, CheckCircle } from "lucide-react";
import affiliateHero from "@/assets/photos/affiliate-hero.jpg";

const benefits = [
  {
    icon: Share2,
    title: "Share Your Unique Link",
    description:
      "Once you sign up, you'll receive a personalised referral link via email that you can share with your network.",
  },
  {
    icon: Link2,
    title: "Track Your Referrals",
    description:
      "When someone signs up through your link and books a course, the referral is automatically tracked to you.",
  },
  {
    icon: DollarSign,
    title: "Earn 5% Commission",
    description:
      "You earn 5% of every course sale made through your referral link — it's that simple.",
  },
];

const steps = [
  "Sign up using the form below",
  "Receive your unique referral link via email",
  "Share your link with friends, colleagues, or your audience",
  "Earn 5% commission on every course booked through your link",
];

const Affiliate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={affiliateHero} alt="Workers walking on a mine site" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Affiliate Program
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Earn Money Referring <span className="text-primary">Future Operators</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Join our affiliate program and earn 5% commission on every course sale made through your referral link.
            </p>
            <Button
              variant="hero"
              size="xl"
              onClick={() =>
                document.getElementById("affiliate-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Become an Affiliate <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-display text-3xl md:text-4xl font-bold text-foreground">
            How It Works
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

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-10 text-center font-display text-3xl md:text-4xl font-bold text-foreground">
              Get Started in 4 Easy Steps
            </h2>
            <ul className="space-y-5">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-foreground text-lg pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="affiliate-form" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-display text-3xl md:text-4xl font-bold text-foreground">
                Sign Up as an Affiliate
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll send you your unique referral link via email.
              </p>
            </div>

            <iframe
              src="https://link.cailinminingcivil.com/widget/form/BQ6mVYXXnRkiLSMQ1ma8"
              style={{ width: "100%", height: "100%", border: "none" }}
              id="BQ6mVYXXnRkiLSMQ1ma8"
              title="Affiliate Signup Form"
              className="min-h-[900px] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Got Questions?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Reach out to our team and we'll walk you through the affiliate program.
          </p>
          <Button asChild variant="hero" size="xl">
            <a href="https://live.cailintraining.com.au/discovery_call_landing_page" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Affiliate;
