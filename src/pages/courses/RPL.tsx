import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Award, FileCheck, ArrowRight, Banknote, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { HeroImage } from "@/components/ui/hero-image";
import { RPLApplicationForm } from "@/components/RPLApplicationForm";

// Real Cailin photos
import trainerRadioSignaling from "@/assets/photos/trainer-radio-signaling.jpg";
import rollerInspection from "@/assets/photos/roller-inspection.jpg";

const benefits = [
  "Turn prior experience into recognised qualifications",
  "Fast-track your certification",
  "Competency assessment only - no lengthy training",
  "Professional work referral upon completion",
  "Valid across all Australian civil and mine sites",
  "Access to our 100+ employer recruitment network",
];

const eligibility = [
  "Prior industry experience in machine operation",
  "Expired machine tickets needing renewal",
  "International qualifications requiring Australian recognition",
  "Workplace learning and practical experience",
];

const RPL = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={trainerRadioSignaling} alt="Trainer with radio signaling on mine site" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Assessments Only</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Recognition of Prior Learning (RPL)
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Already have experience and don't require training? Turn your prior industry experience, 
              expired machine tickets, or international qualifications into recognised qualifications 
              across all Australian civil and mine sites.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-primary font-display text-3xl">$350*</span>
              </div>
              <div className="bg-card border border-border px-6 py-3 rounded-lg">
                <span className="text-foreground font-medium">Per Machine Assessment</span>
              </div>
            </div>
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
              <p className="text-muted-foreground text-sm">CTF funding may cover your assessment costs – ask us how</p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Learn More</Link>
            </Button>
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

      {/* Image + Process Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src={rollerInspection}
                  alt="Pre-start inspection and assessment"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">How It Works</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Apply", desc: "Submit an inquiry to check your eligibility" },
                    { step: "2", title: "Get Invited", desc: "Receive your Course Invite if deemed suitable" },
                    { step: "3", title: "Get Certified", desc: "Complete your assessment and gain recognition" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display text-lg shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Eligibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="font-display text-3xl text-foreground">Benefits</h2>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-6 h-6 text-primary" />
                <h2 className="font-display text-3xl text-foreground">Who's Eligible?</h2>
              </div>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RPL Application Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://link.cailinminingcivil.com/widget/form/nsriBVOc4K3Y6O26x8zw"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="nsriBVOc4K3Y6O26x8zw"
              title="RPL Application Form"
              className="rounded-2xl bg-card min-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-muted-foreground mb-8">
              Not sure if you qualify? Contact our team for a free assessment of your experience 
              and qualifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/discovery-call">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:0483951501">
                  Call Us <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              *Price subject to eligibility assessment
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RPL;
