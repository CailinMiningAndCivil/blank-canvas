import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, Banknote, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BookLink } from "@/components/BookLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import rollerArtistic from "@/assets/photos/roller-artistic.jpg";
import rollerInspection from "@/assets/photos/roller-inspection.jpg";

const courseOptions = [
  {
    title: "$600 Course",
    duration: "1-4 hours",
    price: "$600",
    description: "Quick certification with national qualification and work referral",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-roller-book",
    highlight: false,
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/roller-courses",
    highlight: true,
    badge: "RECOMMENDED",
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-roller-book",
    highlight: false,
  },
];

const skills = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Compaction techniques and patterns",
  "Working on various soil types",
  "Operating vibratory and static rollers",
  "Working safely on road construction",
];

const faqs = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO317F (Conduct roller operations).",
  },
  {
    question: "What types of rollers will I learn on?",
    answer: "Training covers both vibratory and static rollers commonly used in civil construction and road building projects.",
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1-4 hours. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe.",
  },
  {
    question: "Is this included in any bundles?",
    answer: "Yes! The Roller is included in our Starter Bundle ($2,500) along with Moxy and Watercart training — a popular combination for entry-level operators.",
  },
];

const Roller = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={rollerArtistic} alt="Roller machine" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Machine Training</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Roller Training
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Get certified to operate rollers in civil construction and road building. 
              Nationally recognised qualification with professional work referral.
            </p>
            <p className="text-xs text-muted-foreground">
              RIIMPO317F
            </p>
          </div>
        </div>
      </section>

      {/* CTF Funding Notice */}
      <section className="py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Banknote className="w-8 h-8 text-primary shrink-0" />
            <div>
              <p className="text-foreground font-semibold">Government Funding Available</p>
              <p className="text-muted-foreground text-sm">CTF funding may cover your training costs – ask us how</p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Training Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the training path that suits your experience level and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courseOptions.map((option) => (
              <div
                key={option.title}
                className={`bg-card border rounded-2xl p-6 ${option.highlight ? 'border-primary ring-2 ring-primary/20' : 'border-border'} relative`}
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
                <p className="font-display text-3xl text-primary text-center mb-4">{option.price}</p>
                <p className="text-foreground text-sm text-center mb-6">{option.description}</p>
                <Button asChild variant={option.highlight ? "hero" : "outline"} className="w-full">
                  {option.title === "RPL Assessment" ? (
                    <Link to="/courses/rpl#rpl-form">Book Now</Link>
                  ) : (
                    <BookLink>Book Now</BookLink>
                  )}
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
                Our roller training covers all aspects of safe and efficient machine operation, 
                preparing you for real-world roles in civil construction and road building.
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
                src={rollerInspection} 
                alt="Roller training session" 
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">Frequently Asked Questions</h2>
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Ready to Get Your Roller Ticket?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Start your roller training today with Western Australia's leading operator training provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <BookLink>
                Book Now
              </BookLink>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/discovery-call">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roller;
