import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, FileCheck, Award, ArrowRight, HelpCircle, Users, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { BookLink } from "@/components/BookLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Real Cailin photos
import safetyEquipmentCheck from "@/assets/photos/safety-equipment-check.jpg";
import graderCabinAccess from "@/assets/photos/grader-cabin-access.jpg";
import excavatorNew from "@/assets/photos/excavator-new.jpg";
import wheelloaderProfile from "@/assets/photos/wheelloader-profile.jpg";
import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import rollerNew from "@/assets/photos/roller-new.jpg";
import watercartNew from "@/assets/photos/watercart-new.jpg";
import skidSteerLoader from "@/assets/photos/skid-steer-loader.jpg";
import dozer from "@/assets/photos/dozer.jpg";
import rigidHaulTruck from "@/assets/photos/rigid-haul-truck.jpg";
import integratedToolCarrier from "@/assets/photos/integrated-tool-carrier.jpg";

const machines = [
  {
    name: "Excavator",
    image: excavatorNew,
    bookingUrl: "https://live.cailintraining.com.au/VOC-excavator-book",
  },
  {
    name: "Wheel Loader",
    image: wheelloaderProfile,
    bookingUrl: "https://live.cailintraining.com.au/voc-wheel_loader-book",
  },
  {
    name: "Moxy",
    image: articulatedDumptruck,
    bookingUrl: "https://live.cailintraining.com.au/voc-moxy-book",
  },
  {
    name: "Roller",
    image: rollerNew,
    bookingUrl: "https://live.cailintraining.com.au/voc-roller-book",
  },
  {
    name: "Watercart",
    image: watercartNew,
    bookingUrl: "https://live.cailintraining.com.au/voc-watercart-book",
  },
  {
    name: "Skid Steer Loader",
    image: skidSteerLoader,
    bookingUrl: "https://live.cailintraining.com.au/voc-skid_loader-book",
  },
  {
    name: "Grader",
    image: graderCabinAccess,
    bookingUrl: "https://live.cailintraining.com.au/voc-grader-book",
  },
  {
    name: "Dozer",
    image: dozer,
    bookingUrl: "https://live.cailintraining.com.au/voc-dozer-book",
  },
  {
    name: "Rigid Haul Truck",
    image: rigidHaulTruck,
    bookingUrl: "https://live.cailintraining.com.au/voc-rigid_haul_truck-book",
  },
  {
    name: "Integrated Tool Carrier",
    image: integratedToolCarrier,
    bookingUrl: "https://live.cailintraining.com.au/voc-integratedtoolcarrier-book",
  },
];

const faqs = [
  {
    question: "How long does the course take?",
    answer: "VOC assessments typically take about 30 minutes plus the time it takes for the candidate to complete any documentation.",
  },
  {
    question: "What are the pre-requisites to undertake this course?",
    answer: "Candidate must present documentation proving previous qualification/experience. You need to have an existing valid qualification for the machine.",
  },
  {
    question: "What do I learn?",
    answer: "You will demonstrate to our assessors that you have the fundamental skills required to operate on a mine site through workplace learning. For more info google 'Course assessment criteria' on training.gov.",
  },
  {
    question: "What do I receive at the end of the course?",
    answer: "Upon successful completion, you receive a professional work reference from us that validates your competency to potential employers.",
  },
];

const requirements = [
  "Valid driver's license",
  "Existing qualification or certification for the machine",
  "Documentation proving previous experience",
  "Ability to demonstrate practical competency",
];

const benefits = [
  "Quick 30-minute assessment",
  "Professional work reference",
  "Industry-recognised verification",
  "Boost your employability",
  "Validate your existing skills",
  "Access to our 100+ employer network",
];

const VOC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={safetyEquipmentCheck} alt="Safety equipment check" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Skills Verification</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Verification of Competency (VOC)
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Already qualified? Get a professional work reference from us to boost your employment prospects.
            </p>
            <p className="text-foreground font-semibold text-lg mb-8">
              Receive a Professional Work Reference From Us
            </p>
            <div className="inline-block bg-primary/10 px-8 py-4 rounded-xl">
              <span className="text-primary font-display text-4xl">Quick Assessment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cailin */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">1:1 Assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">RTO 46489</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">100+ Employers</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is VOC */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={graderCabinAccess}
                  alt="Grader cabin access during training"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-3xl text-foreground">What is VOC?</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Verification of Competency (VOC) is a practical assessment for operators who already 
                    hold recognised qualifications. It verifies that you have the skills required to 
                    operate safely and competently on site.
                  </p>
                  <p className="text-muted-foreground">
                    Successful candidates will receive a professional work referral from us, 
                    demonstrating to employers that your skills have been recently validated.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="font-display text-2xl text-foreground">Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    {requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 bg-card border border-border p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Machines */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Available VOC Assessments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your machine and book your VOC assessment. You must have an existing 
              qualification for the machine you wish to be assessed on.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
              >
                <img src={machine.image} alt={machine.name} className="w-full h-32 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-display text-base text-foreground mb-2">{machine.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">~30 mins</span>
                  </div>
                  <Button variant="hero" size="sm" className="w-full" onClick={() => window.open(machine.bookingUrl, '_blank')}>
                    Book VOC
                  </Button>
                </div>
              </div>
            ))}
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
            Questions About VOC?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Not sure if VOC is right for you? Contact our team to discuss your qualifications and requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/discovery-call">Contact Us</Link>
            </Button>
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

export default VOC;
