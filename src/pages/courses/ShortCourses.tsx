import { Layout } from "@/components/layout/Layout";
import { AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Award, ArrowRight, HelpCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTFFundingBanner } from "@/components/CTFFundingBanner";
import { MachineCard } from "@/components/MachineCard";


// Real Cailin photos
import machinesCollage from "@/assets/photos/machines-collage.png";
import excavatorOperation from "@/assets/photos/excavator-operation.jpg";
import wheelloaderFullBucket from "@/assets/photos/wheelloader-full-bucket.jpg";
import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import rollerArtistic from "@/assets/photos/roller-artistic.jpg";
import watercartNew from "@/assets/photos/watercart-new.jpg";
import { DiscoveryCallButton } from "@/components/DiscoveryCallButton";
import itcAsset from "@/assets/integrated-tool-carrier.jpg.asset.json";

const machines = [
  {
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorOperation,
    link: "/courses/excavator",
  },
  {
    title: "Front End Loader Ticket",
    code: "RIIMPO304E",
    description: "Master wheeled front-end loader operations for mining and construction roles.",
    image: wheelloaderFullBucket,
    link: "/courses/wheel-loader",
  },
  {
    title: "Watercart Ticket",
    code: "RIIMPO206D",
    description: "Bulk water truck operations training for dust suppression and site maintenance.",
    image: watercartNew,
    link: "/courses/watercart",
  },
  {
    title: "Articulated Haul Truck (Moxy)",
    code: "RIIMPO337E",
    description: "Dump Truck training for articulated haul truck operations. Essential for mining and civil sites.",
    image: articulatedDumptruck,
    link: "/courses/moxy",
  },
  {
    title: "Roller Ticket",
    code: "RIIMPO317F",
    description: "Roller operator certification for compaction work in construction and road building.",
    image: rollerArtistic,
    link: "/courses/roller",
  },
  {
    title: "Integrated Tool Carrier Fork Ticket",
    code: "RIIHAN311F",
    description: "Fork attachment operation on an Integrated Tool Carrier. Prerequisite: Loader qualification required.",
    image: itcAsset.url,
    link: "/courses/integrated-tool-carrier",
  },
];

const faqs = [
  {
    question: "How long does the course take?",
    answer: "The course typically takes 1.5 hours initial. Unlimited access is available when you book maximum training time — contact our team for details.",
  },
  {
    question: "What are the pre-requisites to undertake this course?",
    answer: "Driver's license - for best results, transferable skills from similar industries are beneficial but this is an awesome way to explore machine operating without making a full day investment.",
  },
  {
    question: "What do I learn?",
    answer: "You will have to show to our assessors that you have the fundamental skills required to operate on a mine site through workplace learning. For more info google 'Course assessment criteria' on training.gov.",
  },
  {
    question: "What do I receive at the end of the course?",
    answer: "A nationally recognised Statement of Attainment and a professional work referral from us to help you secure employment.",
  },
];

const benefits = [
  "Nationally recognised qualification",
  "Professional work referral included",
  "1.5 hours initial assessment",
  "Upgrade options available",
  "Ideal for career exploration",
  
];

const ShortCourses = () => {
  return (
    <Layout>
      
      <SEO
        title="$600 Short Courses | Cailin Mining & Civil Perth"
        description="Quick nationally recognised machine operator certification from $600. Perfect for career exploration or fast-tracked tickets."
        path="/courses/short-courses"
      />
      {/* Hero Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={machinesCollage} alt="Mining and civil machinery collage" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Quick Certification</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              $600 Courses
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Get a recognised national qualification and professional work referral needed to secure 
              an operating role in Civil Construction or Mining industry.
            </p>
            <div className="inline-block bg-primary/10 px-8 py-4 rounded-xl">
              <span className="text-primary font-display text-4xl">$600</span>
              <span className="text-foreground ml-2">per machine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Return for Free Eligibility Notice */}
      <section className="py-6 bg-destructive/5 border-b border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto">
            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-foreground text-sm">
              Please note: These courses do not include Return for Free eligibility. Additional training hours may be required before becoming eligible.
            </p>
          </div>
        </div>
      </section>

      {/* CTF Funding Notice */}
      <CTFFundingBanner />

      {/* Why Choose Cailin */}
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
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Career Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Machines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Available Machines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your machine and book your short course assessment today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {machines.map((machine) => (
              <MachineCard
                key={machine.title}
                title={machine.title}
                code={machine.code}
                description={machine.description}
                image={machine.image}
                link={machine.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Unlimited Access Notice */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <Award className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-3">Unlimited Access Available</h3>
            <p className="text-muted-foreground mb-6">
              Get unlimited access when you book maximum training time on each course. 
              Train until you're fully confident with no time limits.
            </p>
            <Button asChild variant="hero">
              <Link to="/courses/full-day">View Full Day Courses</Link>
            </Button>
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
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Our short courses are the quickest way to get certified and start your career in mining or civil construction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <DiscoveryCallButton asChild>
              <Button variant="hero" size="xl">Contact Us</Button>
            </DiscoveryCallButton>
            <Button asChild variant="outline" size="xl">
              <a href="tel:0483951501">
                Call 0483 951 501
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShortCourses;
