import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cailinLogo from "@/assets/cailin-logo.svg";

// Real Cailin photos
import trainerSiteSafety from "@/assets/photos/trainer-site-safety.jpg";
import loaderDumpingAction from "@/assets/photos/loader-dumping-action.jpg";

const benefits = [
  "Join 2,000+ students who've launched successful careers in mining & civil construction.",
  "Learn how our graduates earn on average $150k per year — we've helped generate $180M+ in income.",
  "Get trained on a LIVE mine site with 1:1 student to trainer ratio — not a concrete yard.",
  "Access our network of 100+ employers who actively recruit our graduates.",
  "Discover CTF government funding that may cover your training costs.",
  "Find out why we're different from typical providers — maximum seat time, unlimited return training.",
];

const DiscoveryCall = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <HeroImage
          src={trainerSiteSafety}
          alt="Trainer on mining site"
          overlayClassName="bg-gradient-to-r from-background via-background/90 to-background/60"
          priority
        />
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Looking to get trained as a machine operator to enter the Civil & Mining industries?
            </p>
            
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Book Your <span className="text-gradient">Free Consultation</span> With Our Team
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <span className="text-primary">60%</span> of our graduates secure employment — let us show you how!
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg py-6 px-8 shadow-glow animate-fade-up"
              style={{ animationDelay: "0.4s" }}
              asChild
            >
              <a href="https://live.cailintraining.com.au/discovery_call_qualification_page" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-5 h-5 mr-2" />
                Book a Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits List */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
                Why Choose <span className="text-gradient">Cailin?</span>
              </h2>
              
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="lg:sticky lg:top-28">
              <div className="bg-gradient-card rounded-xl p-6 md:p-8 shadow-card border border-border">
                <img 
                  src={loaderDumpingAction}
                  alt="Wheel loader loading articulated truck"
                  className="w-full h-56 object-cover rounded-lg mb-6"
                />
                
                <h3 className="text-xl md:text-2xl font-bold font-display text-center mb-2">
                  Ready to Start Your Career?
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Speak with our team today — no obligation, just expert guidance.
                </p>
                
                <Button 
                  size="lg" 
                  variant="hero"
                  className="w-full text-lg py-6 shadow-glow"
                  asChild
                >
                  <a href="https://live.cailintraining.com.au/discovery_call_qualification_page" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Book a Call Now
                  </a>
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  *This is not an employment service. For employment opportunities{" "}
                  <Link to="/careers" className="text-primary hover:underline font-semibold">
                    click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Take the First Step Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to guide you through every step of your training journey.
          </p>
          <Button size="lg" variant="hero" className="shadow-glow" asChild>
            <a href="https://live.cailintraining.com.au/discovery_call_qualification_page" target="_blank" rel="noopener noreferrer">
              <ArrowRight className="w-5 h-5 mr-2" />
              Book a Call Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default DiscoveryCall;
