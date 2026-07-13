import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, Banknote, HelpCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BookLink } from "@/components/BookLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DiscoveryCallButton } from "@/components/DiscoveryCallButton";

import itcAsset from "@/assets/integrated-tool-carrier.jpg.asset.json";

const itcImage = itcAsset.url;

const courseOptions = [
  {
    title: "$600 Course",
    duration: "Short course",
    price: "$600",
    description: "Fork attachment operation on an Integrated Tool Carrier",
    bookingUrl: "https://live.cailintraining.com.au/short_course_integrated_tool_carrier",
    highlight: true,
    badge: "SHORT COURSE",
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "/rpl#rpl-form",
    highlight: false,
  },
];

const skills = [
  "Pre-start inspections on the ITC and fork attachment",
  "Safe load handling with the fork attachment",
  "Correct operating procedures for the fork attachment",
  "Hazard awareness and site safety",
  "Safe work practices while using the ITC",
  "Understanding load limits and stability",
];

const faqs = [
  {
    question: "What does this course cover?",
    answer:
      "This course covers safe operation of the fork attachment on an Integrated Tool Carrier — including pre-start inspections, load handling, operating procedures, hazard awareness, and safe work practices.",
  },
  {
    question: "Does this include bucket operation?",
    answer:
      "No. This course covers fork attachment operation only. Bucket operation falls under the Loader qualification — check out our Front End Loader training if that's what you need.",
  },
  {
    question: "Are there prerequisites?",
    answer:
      "Yes. Participants should already hold a Loader qualification or be competent in operating a loader before enrolling in this course.",
  },
  {
    question: "Is a full-day option available?",
    answer:
      "No. This course is delivered as a short course only — a full-day training option is not available for the Integrated Tool Carrier fork attachment.",
  },
];

const IntegratedToolCarrier = () => {
  return (
    <Layout>
      <SEO
        title="Integrated Tool Carrier (ITC) Fork Training Perth | Cailin"
        description="ITC fork attachment training in Perth. $600 short course covering pre-start checks, load handling, operating procedures and safe work practices. RPL available."
        path="/courses/integrated-tool-carrier"
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={itcImage} alt="Integrated Tool Carrier with fork attachment" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Machine Training
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Integrated Tool Carrier Training
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Fork attachment operation on an Integrated Tool Carrier (ITC). Learn safe
              load handling, pre-start inspections and site-ready operating procedures.
            </p>
            <p className="text-sm text-primary font-medium">
              RIIHAN311F
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Fork attachment operation only
            </p>
          </div>
        </div>
      </section>

      {/* CTF Funding */}
      <section className="py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Banknote className="w-8 h-8 text-primary shrink-0" />
            <div>
              <p className="text-foreground font-semibold">Government Funding Available</p>
              <p className="text-muted-foreground text-sm">
                CTF funding may cover your training costs – ask us how
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Prerequisite Notice */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-5">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div className="text-sm text-foreground">
              <strong>Prerequisite:</strong> Participants should already hold a Loader
              qualification or be competent in operating a loader. This course covers{" "}
              <strong>fork operation only</strong> — bucket operation falls under the
              Loader qualification.
            </div>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Training Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivered as a short course only. A full-day training option is not available.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {courseOptions.map((option) => (
              <div
                key={option.title}
                className={`bg-card border rounded-2xl p-6 ${
                  option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"
                } relative`}
              >
                {option.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                    {option.badge}
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="font-display text-xl text-foreground mb-1">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.duration}</p>
                </div>
                <p className="font-display text-3xl text-primary text-center mb-4">
                  {option.price}
                </p>
                <p className="text-foreground text-sm text-center mb-4">{option.description}</p>
                {option.title === "$600 Course" && (
                  <div className="flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4">
                    <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-foreground text-xs">
                      Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible.
                    </p>
                  </div>
                )}
                <Button
                  variant={option.highlight ? "hero" : "outline"}
                  className="w-full"
                  onClick={() => {
                    if (option.title === "RPL Assessment") {
                      window.location.href = "/rpl#rpl-form";
                    } else {
                      window.open(option.bookingUrl, "_blank");
                    }
                  }}
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">What You'll Learn</h2>
              <p className="text-muted-foreground mb-8">
                This course is designed for operators who use the fork attachment on an
                Integrated Tool Carrier. It focuses on the safe, correct and confident use
                of the fork attachment in a working environment.
              </p>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={itcImage}
                alt="Integrated Tool Carrier with fork attachment on site"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Cailin */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">1:1 Training Ratio</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">RTO 46489</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Live Mine Site Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
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

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Ready to Book Your ITC Fork Training?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Secure your spot in Perth's most hands-on Integrated Tool Carrier fork
            attachment course.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <BookLink>Book Now</BookLink>
            </Button>
            <DiscoveryCallButton asChild>
              <Button variant="outline" size="xl">
                Free Consultation
              </Button>
            </DiscoveryCallButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IntegratedToolCarrier;
