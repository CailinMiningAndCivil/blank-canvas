import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail, Link2, DollarSign, ArrowRight } from "lucide-react";

const nextSteps = [
  {
    icon: Mail,
    title: "Check Your Email",
    description:
      "We've received your Ambassador application. Keep an eye on your inbox for a confirmation email from our team.",
  },
  {
    icon: Link2,
    title: "Receive Your Referral Link",
    description:
      "Once your application is approved, we'll send you your unique affiliate referral link to share with prospective students.",
  },
  {
    icon: DollarSign,
    title: "Start Earning",
    description:
      "When an eligible referral results in a successful sale, you receive 5% commission. Commissions are processed at the end of each month.",
  },
];

const AmbassadorThankYou = () => (
  <Layout>
    <SEO
      title="Thank You | Cailin Student Ambassador Program"
      description="Thanks for applying to become a Cailin Mining & Civil Student Ambassador. Here's what happens next."
      path="/ambassador/thank-you"
    />
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <section className="py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Student Ambassador Program
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Thank You for Applying!
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Your Ambassador signup has been received. We're excited to have you share your training
            experience with future Cailin students.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3 mt-6">
          {nextSteps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mb-3 font-display text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <Button asChild variant="hero" size="xl">
            <a href="/" rel="noopener noreferrer">
              Back to Home <ArrowRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default AmbassadorThankYou;
