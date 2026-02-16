import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, Clock, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { GoogleReviews } from "@/components/GoogleReviews";
import { MachineCard } from "@/components/MachineCard";

// Real Cailin photos
import fleetLineupWide from "@/assets/photos/fleet-lineup-wide.jpg";
import excavatorTraining1on1 from "@/assets/photos/excavator-training-1on1.jpg";
import excavatorNew from "@/assets/photos/excavator-new.jpg";
import wheelloaderHero from "@/assets/photos/wheelloader-hero.jpg";
import wheelloaderFullBucket from "@/assets/photos/wheelloader-full-bucket.jpg";
import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import rollerArtistic from "@/assets/photos/roller-artistic.jpg";
import loaderDumptruckWide from "@/assets/photos/loader-dumptruck-wide.jpg";


const features = [
  {
    icon: Users,
    title: "1:1 Training",
    description: "Personal, 1:1 instruction — not 15 students to 1 trainer",
  },
  {
    icon: Award,
    title: "Live Mine Site",
    description: "Real training on a real site — not a concrete yard",
  },
  {
    icon: Clock,
    title: "Maximum Seat Time",
    description: "Full course seat time — not 15-45 minutes like typical providers",
  },
  {
    icon: Briefcase,
    title: "100+ Employers",
    description: "Only training recognised as work experience",
  },
];

const impactStats = [
  { value: "$180M+", label: "Income Generated for Students" },
  { value: "2,000+", label: "Students Trained" },
  { value: "60%", label: "Employment Rate" },
  { value: "100+", label: "Affiliate Employers" },
];

const individualMachines = [
  {
    id: "excavator",
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorNew,
    link: "/courses/excavator",
  },
  {
    id: "wheel-loader",
    title: "Front End Loader Ticket",
    code: "RIIMPO304E",
    description: "Master wheeled front-end loader operations for mining and construction roles.",
    image: wheelloaderFullBucket,
    link: "/courses/wheel-loader",
  },
  {
    id: "moxy",
    title: "Articulated Haul Truck (Moxy)",
    code: "RIIMPO337E",
    description: "Dump Truck training for articulated haul truck operations. Essential for mining and civil sites.",
    image: articulatedDumptruck,
    link: "/courses/moxy",
  },
  {
    id: "roller",
    title: "Roller Ticket",
    code: "RIIMPO317F",
    description: "Roller operator certification for compaction work in construction and road building.",
    image: rollerArtistic,
    link: "/courses/roller",
  },
  {
    id: "watercart",
    title: "Watercart Ticket",
    code: "RIIMPO206D",
    description: "Bulk water truck operations training for dust suppression and site maintenance.",
    image: loaderDumptruckWide,
    link: "/courses/watercart",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/msgsndr/rHdckncf62VIX9k55LFy/media/698d915dcfbcd7fc23808e29.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              The Only 1:1 Training on a Live Mine Site
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
              Real Training.
              <br />
              <span className="text-primary">Real Site.</span>
              <br />
              Real Results.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join 2,000+ graduates who've launched their mining & civil careers. 
              Recognised by 100+ employers. 60% employment rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/courses">View Courses</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/discovery-call">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Expert Training for Mining & Civil Careers
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                The only machine training provider in Perth offering 1:1 training on a live mine site. 
                We specialise in delivering civil construction and mining machinery training with job 
                placement assistance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Practical, job-ready experience on live mine sites",
                  "Nationally recognised qualifications",
                  "Unlimited training hours to build confidence",
                  "Direct job placement assistance",
                  "Recognition of Prior Learning (RPL) available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="lg">
                <Link to="/about" className="group">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={excavatorTraining1on1}
                alt="1:1 excavator training with trainer instructing student in cab"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow">
                <p className="font-display text-4xl">2,000+</p>
                <p className="text-sm font-medium">Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Why We're Different</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Cailin vs Typical Providers
            </h2>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="text-left p-5 text-muted-foreground font-medium">Typical Providers</th>
                  <th className="text-left p-5 text-primary font-display text-lg">Cailin Mining & Civil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-5 text-muted-foreground">Up to 15 students per trainer</td>
                  <td className="p-5 text-foreground font-medium">✓ 1:1 dedicated training</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-5 text-muted-foreground">15-45 minutes seat time</td>
                  <td className="p-5 text-foreground font-medium">✓ Full course seat time</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-5 text-muted-foreground">Training in a concrete yard</td>
                  <td className="p-5 text-foreground font-medium">✓ Training on a live mine site</td>
                </tr>
                <tr>
                  <td className="p-5 text-muted-foreground">Certificate only</td>
                  <td className="p-5 text-foreground font-medium">✓ Employers actively recruit our graduates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Training Courses - Individual Machines */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Training Courses
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get certified on industry-standard machinery with 1:1 experience on a live mine site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {individualMachines.map((machine) => (
              <MachineCard
                key={machine.id}
                title={machine.title}
                code={machine.code}
                description={machine.description}
                image={machine.image}
                link={machine.link}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Ready to Start Your Career?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Book a free consultation to learn how we can help you get started in the mining and civil industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/discovery-call">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:0483951501">Call 0483 951 501</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
