import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { 
  CheckCircle, 
  DollarSign, 
  FileCheck, 
  Users, 
  Building2, 
  MapPin,
  Phone,
  ArrowRight,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTFEligibilityForm } from "@/components/CTFEligibilityForm";

import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";
import staffPortraitDumptruck from "@/assets/photos/staff-portrait-dumptruck.jpg";

const benefits = [
  {
    icon: DollarSign,
    title: "Up to 70% Rebate",
    description: "CTF covers up to 70% of approved training costs, significantly reducing your out-of-pocket expenses.",
  },
  {
    icon: MapPin,
    title: "Regional Bonus",
    description: "Regional workers can claim up to $1,700 per course, compared to $1,300 for metro workers.",
  },
  {
    icon: FileCheck,
    title: "Multiple Claims",
    description: "Claim rebates for as many approved courses as you complete — there's no limit.",
  },
  {
    icon: Users,
    title: "Workers & Employers",
    description: "Both individual workers and employers can claim CTF funding for approved training.",
  },
];

const eligibilityCriteria = [
  "Work in Western Australia's building and construction industry",
  "Demonstrate primary and substantial involvement in on-site construction, installation, or fabrication",
  "Complete training with a Registered Training Organisation (RTO) like Cailin",
  "Successfully pass the course and obtain certification",
  "Submit claim within 12 months of course completion",
];

const notEligible = [
  "Government department employees (local, state, or commonwealth)",
  "Resources exploration or operational workers",
  "Manufacturing, supply, or transport of building products",
  "Routine maintenance or repair workers (post-construction)",
  "Carpet laying or floor covering contractors",
];

const claimSteps = [
  {
    step: "1",
    title: "Complete Your Training",
    description: "Finish your approved course with Cailin and receive your Statement of Attainment.",
  },
  {
    step: "2",
    title: "Gather Documents",
    description: "Collect your proof of payment (paid invoice) and certificate of attainment.",
  },
  {
    step: "3",
    title: "Lodge Your Claim",
    description: "Submit your claim through the CTF portal within 12 months of completion.",
  },
  {
    step: "4",
    title: "Receive Rebate",
    description: "CTF processes your claim and pays the rebate directly to you or your employer.",
  },
];

const faqs = [
  {
    question: "How much can I claim back?",
    answer: "CTF provides rebates of up to 70% of course costs. Metro workers can claim up to $1,300 per course, while regional workers can claim up to $1,700 per course.",
  },
  {
    question: "Are Cailin's courses CTF-approved?",
    answer: "Yes! Cailin Training is a Registered Training Organisation (RTO 46489) and our courses are eligible for CTF funding. Contact us to confirm eligibility for your specific situation.",
  },
  {
    question: "Can I claim if I'm currently unemployed?",
    answer: "Yes, but you'll need to secure employment in WA's construction industry within 12 months of completing the training to receive the rebate.",
  },
  {
    question: "How long does the claim process take?",
    answer: "CTF processes most claims within a few weeks. Ensure all documentation is complete and accurate to avoid delays.",
  },
  {
    question: "Can my employer claim on my behalf?",
    answer: "Yes! Employers can claim CTF rebates for training their employees. They'll need to provide proof of payment and your certificate of attainment.",
  },
];

const CTFFunding = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={trainerSiteSafety} alt="Construction training on site" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Government Funding Available</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              CTF Funding
            </h1>
            <p className="text-muted-foreground text-lg">
              The Construction Training Fund (CTF) helps WA construction workers offset training costs 
              with rebates of up to 70%. Our courses are CTF-approved — you could save hundreds on your qualification.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border rounded-2xl p-6">
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is CTF */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                What is the Construction Training Fund?
              </h2>
              <p className="text-muted-foreground mb-4">
                The Construction Training Fund (CTF) is a Western Australian government initiative that 
                provides funding for upskilling and short-course training for people who work in construction.
              </p>
              <p className="text-muted-foreground mb-4">
                CTF's Upskilling & Short Course Funding program helps diversify your expertise and build 
                a safer, more sustainable future. Rebates cover up to 70% of approved training costs.
              </p>
              <p className="text-muted-foreground mb-8">
                Our courses at Cailin are delivered by a Registered Training Organisation and qualify 
                for CTF funding — meaning you could get a significant portion of your training costs back.
              </p>
              <Button asChild variant="heroOutline" size="lg">
                <a href="https://ctf.wa.gov.au" target="_blank" rel="noopener noreferrer">
                  Visit CTF Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <div>
              <img 
                src={staffPortraitDumptruck} 
                alt="Cailin trainer with equipment" 
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-foreground mb-4">Who's Eligible?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                CTF funding is available to workers in Western Australia's building and construction industry. 
                Here's what you need to qualify.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Eligible */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">You're Eligible If You:</h3>
                </div>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Eligible */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">Not Eligible:</h3>
                </div>
                <ul className="space-y-3">
                  {notEligible.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground text-sm text-center mt-8">
              Not sure if you're eligible? Contact CTF directly on (08) 9244 0100 or ask our team for guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <CTFEligibilityForm />
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">How to Claim Your Rebate</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After completing your training with Cailin, follow these simple steps to claim your CTF rebate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {claimSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < claimSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="xl">
              <a href="https://ctf.powerappsportals.com/" target="_blank" rel="noopener noreferrer">
                Lodge Claim with CTF <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-foreground font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl text-foreground mb-6">
              Ready to Start Training?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book your course with Cailin, then claim your CTF rebate after completion. 
              Our team can help guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/courses">
                  View Our Courses
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CTFFunding;
