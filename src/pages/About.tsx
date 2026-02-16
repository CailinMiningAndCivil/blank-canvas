import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { Award, Target, Users, Heart, CheckCircle } from "lucide-react";

// Real Cailin photos
import femaleTrainerInstructing from "@/assets/photos/female-trainer-instructing.jpg";
import fleetLineupWide from "@/assets/photos/fleet-lineup-wide.jpg";
import cabinInteriorControls from "@/assets/photos/cabin-interior-controls.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in training delivery and student outcomes.",
  },
  {
    icon: Users,
    title: "Personal Approach",
    description: "1:1 training ensures every student gets the attention they need to succeed.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our qualifications are nationally recognised and respected by employers.",
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your career success is our priority, from training through to job placement.",
  },
];

const milestones = [
  { year: "2015", event: "Cailin established in Sydney" },
  { year: "2019", event: "Cailin Mining & Civil founded in Perth" },
  { year: "2020", event: "Launched mine site training facility" },
  { year: "2021", event: "Launched job placement program" },
  { year: "2023", event: "Leased our own mine site" },
  { year: "2024", event: "Won Western Australia's Crystal Vision Award" },
  { year: "2025", event: "Won Australia's Crystal Vision Award in Sydney" },
  { year: "2025", event: "Became Registered Training Organisation (RTO 46489)" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={fleetLineupWide} alt="Fleet of mining equipment lined up" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Cailin Mining & Civil
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Australia's only award-winning live mine site machine operator training provider, 
            dedicated to launching careers in the mining and civil construction industries.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-display text-4xl text-foreground mb-6">
                Expert Training for Mining & Civil Careers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cailin Mining & Civil was founded with a simple mission: to provide the highest 
                  quality machine operator training in Australia. Based in Perth, we are the only 
                  training provider offering 1:1 experience on a live mine site.
                </p>
                <p>
                  Our unique approach combines nationally recognised qualifications with unlimited 
                  training hours, ensuring our graduates are fully prepared for real-world challenges. 
                  We don't just train operators – we launch careers.
                </p>
                <p>
                  As a Registered Training Organisation (Cailin Training RTO 46489), we deliver 
                  specialised civil construction and mining machinery training with comprehensive 
                  job placement assistance. We've helped generate over $180 million in income for our graduates.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={femaleTrainerInstructing}
                alt="Female trainer instructing student with radio on mine site"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow">
                <p className="font-display text-4xl">2,000+</p>
                <p className="text-sm font-medium">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-display text-4xl text-primary">$180M+</p>
              <p className="text-muted-foreground text-sm">Income Generated for Students</p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">2,000+</p>
              <p className="text-muted-foreground text-sm">Students Trained</p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">60%</p>
              <p className="text-muted-foreground text-sm">Employment Rate</p>
            </div>
            <div>
              <p className="font-display text-4xl text-primary">100+</p>
              <p className="text-muted-foreground text-sm">Affiliate Employers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8 rounded-2xl border border-border text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={cabinInteriorControls}
                alt="Inside the cabin - 1:1 training at the controls"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-medium tracking-widest uppercase mb-4">Why Choose Us?</p>
              <h2 className="font-display text-4xl text-foreground mb-6">
                What Sets Us Apart
              </h2>
              <ul className="space-y-4">
                {[
                  "Only training provider in Perth with live mine site access",
                  "Unlimited training hours – practice until you're confident",
                  "1:1 personal instruction from experienced operators",
                  "Nationally recognised qualifications (RTO 46489)",
                  "Only training recognised as work experience",
                  "Comprehensive job placement with 100+ employers",
                  "Direct connections with mining employers",
                  "Recognition of Prior Learning (RPL) available",
                  "Flexible scheduling to suit your needs",
                  "Can supply work references",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase mb-4">Our Journey</p>
              <h2 className="font-display text-4xl text-foreground">Key Milestones</h2>
            </div>
            <div className="bg-secondary p-8 rounded-2xl border border-border">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-primary font-semibold">{milestone.year}</p>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTO Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Registered Training Organisation</p>
          <h2 className="font-display text-4xl text-foreground mb-6">
            Cailin Training
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We are a Registered Training Organisation delivering nationally recognised 
            qualifications. All Statements of Attainment are issued by Cailin Training.
          </p>
          <div className="inline-block bg-card px-8 py-4 rounded-xl border border-border">
            <p className="font-display text-2xl text-foreground">RTO 46489</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our training programs and how we can help 
            launch your career in the mining and civil construction industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
