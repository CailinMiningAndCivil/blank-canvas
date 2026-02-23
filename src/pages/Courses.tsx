import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, ArrowRight, FileCheck, Zap, Briefcase, RefreshCw } from "lucide-react";
import { MachineCard } from "@/components/MachineCard";
import { CTFFundingBanner } from "@/components/CTFFundingBanner";

// Real Cailin photos
import training1on1Dumptruck from "@/assets/photos/training-1on1-dumptruck.jpg";
import wheelloaderHero from "@/assets/photos/wheelloader-hero.jpg";
import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import loaderDumptruckAction from "@/assets/photos/loader-dumptruck-action.jpg";
import excavatorOperation from "@/assets/photos/excavator-operation.jpg";
import wheelloaderFullBucket from "@/assets/photos/wheelloader-full-bucket.jpg";
import rollerArtistic from "@/assets/photos/roller-artistic.jpg";
import loaderDumptruckWide from "@/assets/photos/loader-dumptruck-wide.jpg";

const courseCategories = [
  {
    id: "short-courses",
    title: "$600 Courses",
    subtitle: "Quick Certification",
    description: "Get a recognised national qualification and professional work referral in just 1-4 hours. Perfect for career exploration.",
    price: "$600",
    priceNote: "per machine",
    image: articulatedDumptruck,
    link: "/courses/short-courses",
    features: ["1-4 hour assessment", "National qualification", "Upgrade options available"],
    icon: Zap,
  },
  {
    id: "bundles",
    title: "Bundles",
    subtitle: "Full Training Programs",
    description: "Double or triple your employment opportunities. Get 1:1 training with unlimited hours on a live mine site.",
    price: "$2,500",
    priceNote: "CTF Funding Available",
    image: wheelloaderHero,
    link: "/courses/bundles",
    features: ["2-3x more employable", "1:1 instruction", "Multiple certifications"],
    icon: Users,
  },
  {
    id: "full-day",
    title: "Full Day Course",
    subtitle: "Unlimited Return Training",
    description: "Master any single machine with unlimited return sessions. Train until you're fully confident — no rushing, no time limits.",
    price: "$2,500",
    priceNote: "Request Only",
    image: training1on1Dumptruck,
    link: "/courses/full-day",
    features: ["Unlimited return training*", "1:1 instruction", "Work experience reference"],
    icon: RefreshCw,
  },
  {
    id: "rpl",
    title: "Assessments Only (RPL)",
    subtitle: "Already Experienced?",
    description: "Turn your prior industry experience, expired machine tickets, or international qualifications into recognised Australian qualifications.",
    price: "$350*",
    priceNote: "per machine assessment",
    image: training1on1Dumptruck,
    link: "/rpl",
    features: ["Fast-track certification", "No training required", "Work referral included"],
    icon: FileCheck,
  },
  {
    id: "voc",
    title: "Verification of Competency",
    subtitle: "Already Qualified?",
    description: "Get a professional work reference from us. Perfect for those with existing qualifications wanting to boost employability.",
    price: "Quick Assessment",
    priceNote: "~30 minutes",
    link: "/courses/voc",
    features: ["30-minute assessment", "Professional reference", "Boost your CV"],
    icon: Award,
  },
];

// Individual machine courses with images for cards
const individualMachines = [
  {
    id: "excavator",
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorOperation,
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
    title: "Moxy Training Perth — Articulated Dump Truck",
    code: "RIIMPO337E",
    description: "Live mine site moxy training in Perth for articulated haul truck operations. 1:1 instruction with job placement.",
    image: articulatedDumptruck,
    link: "/courses/moxy",
    alt: "Moxy training Perth — articulated dump truck on live mine site",
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

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={loaderDumptruckAction} alt="Loader and dumptruck in action on site" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Training Programs</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Machine Operator Courses
            </h1>
            <p className="text-muted-foreground text-lg">
              Get nationally recognised qualifications with training options to suit every experience level. 
              From complete beginners to experienced operators seeking certification.
            </p>
          </div>
        </div>
      </section>

      {/* CTF Funding Banner */}
      <CTFFundingBanner />

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

      {/* Course Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Choose Your Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the training option that matches your experience level and career goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courseCategories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-card"
              >
                {category.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.id === "short-courses" ? "Moxy training Perth — articulated dump truck course" : category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium text-sm">{category.subtitle}</span>
                      </div>
                    </div>
                  </div>
                )}
                {!category.image && (
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <category.icon className="w-16 h-16 text-primary/50" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-primary/10 px-3 py-1 rounded-lg">
                      <span className="text-primary font-semibold">{category.price}</span>
                    </div>
                    <div className="bg-secondary px-3 py-1 rounded-lg">
                      <span className="text-muted-foreground text-sm">{category.priceNote}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-primary font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Which Option Is Right for You?</h2>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-card border border-border rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-foreground font-display">Option</th>
                  <th className="text-left p-4 text-foreground font-display">Best For</th>
                  <th className="text-left p-4 text-foreground font-display">Duration</th>
                  <th className="text-left p-4 text-foreground font-display">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground font-medium">$600 Courses</td>
                  <td className="p-4 text-muted-foreground">Career exploration or quick certification</td>
                  <td className="p-4 text-muted-foreground">1-4 hours</td>
                  <td className="p-4 text-primary font-semibold">$600</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground font-medium">Bundles</td>
                  <td className="p-4 text-muted-foreground">2-3x more employable with multiple tickets</td>
                  <td className="p-4 text-muted-foreground">Unlimited hours</td>
                  <td className="p-4 text-primary font-semibold">$2,500</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground font-medium">Full Day Course</td>
                  <td className="p-4 text-muted-foreground">Single machine mastery with return training</td>
                  <td className="p-4 text-muted-foreground">Unlimited returns*</td>
                  <td className="p-4 text-primary font-semibold">$2,500</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 text-foreground font-medium">RPL</td>
                  <td className="p-4 text-muted-foreground">Experienced operators needing certification</td>
                  <td className="p-4 text-muted-foreground">Assessment only</td>
                  <td className="p-4 text-primary font-semibold">$350*</td>
                </tr>
                <tr>
                  <td className="p-4 text-foreground font-medium">VOC</td>
                  <td className="p-4 text-muted-foreground">Qualified operators needing reference</td>
                  <td className="p-4 text-muted-foreground">~30 mins</td>
                  <td className="p-4 text-primary font-semibold">Quick</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual Machine Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Individual Machine Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book training for a specific machine. All courses include nationally recognised certification 
              delivered by Cailin Training (RTO 46489).
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
                alt={machine.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Book a free consultation and our team will help you choose the best path for your career goals.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/discovery-call">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
