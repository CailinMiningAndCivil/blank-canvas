import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Award, ArrowRight } from "lucide-react";

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
  return (
    <Layout>
      <SEO
        title="Mining & Civil Recruitment Portal Perth | Cailin Mining & Civil"
        description="Looking for mining or civil construction work in Perth and WA? Submit your details to the Cailin recruitment portal to connect with industry opportunities."
        path="/recruitment"
      />
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Recruitment Portal</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Your Career In Mining & Civil Starts Here
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

            <iframe
              src="https://link.cailinminingcivil.com/widget/form/iby4GFge0DUMLO4ARaSE"
              style={{ width: "100%", height: "100%", border: "none" }}
              id="iby4GFge0DUMLO4ARaSE"
              title="Recruitment Enquiry Form"
              className="min-h-[900px] rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recruitment;
