import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, ArrowRight, Banknote, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { BookLink } from "@/components/BookLink";

// Real Cailin photos
import excavatorOperation from "@/assets/photos/excavator-operation.jpg";
import wheelloaderFullBucket from "@/assets/photos/wheelloader-full-bucket.jpg";
import loaderMoxyBundle from "@/assets/photos/loader-moxy-bundle.png";
import trainerWatchingLoader from "@/assets/photos/trainer-watching-loader.jpg";
import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import starterBundleImg from "@/assets/photos/starter-bundle.jpg";
import loaderDumptruckPair from "@/assets/photos/loader-dumptruck-pair.jpg";
import topconGpsExcavator from "@/assets/photos/topcon-gps-excavator.jpg";
import interstateBundleImg from "@/assets/photos/interstate-bundle.jpg";

const bundles = [
  {
    id: "starter-bundle",
    title: "Starter Bundle",
    subtitle: "Moxy + Watercart + Roller",
    codes: ["RIIMPO337E", "RIIMPO206D", "RIIMPO317F"],
    description:
      "Perfect for beginners wanting versatility. Get certified in Articulated Haul Truck (Moxy), Watercart, and Roller operations — the most in-demand entry-level combination.",
    price: "$2,500",
    image: starterBundleImg,
    bookingUrl: "https://live.cailintraining.com.au/starter_bundle_moxy_roller_watercart",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    id: "excavator-loader-bundle",
    title: "Excavator + Loader Bundle",
    subtitle: "Excavator + Wheel Loader",
    codes: ["RIIMPO320F", "RIIMPO304E"],
    description:
      "Master two of the most versatile machines on any site. Perfect for operators wanting maximum job opportunities across mining and civil.",
    price: "$2,500",
    image: excavatorOperation,
    bookingUrl: "https://live.cailintraining.com.au/excavator-loader-bundle",
    highlight: false,
  },
  {
    id: "loader-moxy-bundle",
    title: "Loader + Moxy Bundle",
    subtitle: "Wheel Loader + Articulated Truck",
    codes: ["RIIMPO304E", "RIIMPO337E"],
    description:
      "A powerful combination for material handling roles. Load and haul with confidence on any mining or civil construction site.",
    price: "$2,500",
    image: loaderMoxyBundle,
    bookingUrl: "https://live.cailintraining.com.au/loader_moxy_bundle",
    highlight: false,
  },
  {
    id: "interstate-bundle",
    title: "Interstate Bundle",
    subtitle: "Moxy + Watercart + Roller",
    codes: ["RIIMPO337E", "RIIMPO206D", "RIIMPO317F"],
    description:
      "Designed for interstate visitors with accommodation-friendly scheduling. Same great training, flexible timing.",
    price: "$2,500",
    image: interstateBundleImg,
    bookingUrl: "https://live.cailintraining.com.au/interstate_bundle_moxy_roller_watercart",
    highlight: false,
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "3x More Employable",
    description: "Multiple tickets dramatically increase your job opportunities across sites",
  },
  {
    icon: Users,
    title: "1:1 Training Ratio",
    description: "Personal instruction — not 15 students to 1 trainer",
  },
  {
    icon: Award,
    title: "Live Mine Site",
    description: "Real training on a real site — not a concrete yard",
  },
  /*{
    icon: Clock,
    title: "Unlimited Hours",
    description: "Train until you're confident — no rushed timeframes",
  }, */
];

const TicketsTraining = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={trainerWatchingLoader} alt="Trainer watching loader operation" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Full Training Programs</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">Training Bundles</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Double or triple your employment opportunities by bundling your courses. Become 2-3x more employable with
              multiple machine certifications.
            </p>
            <div className="inline-block bg-primary/10 px-8 py-4 rounded-xl">
              <span className="text-primary font-display text-4xl">$2,500</span>
              <span className="text-foreground ml-2">per bundle</span>
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
              <p className="text-muted-foreground text-sm">CTF funding may cover your training costs – ask us how</p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Choose Your Bundle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each bundle includes multiple machine certifications, 1:1 training on a live mine site, and professional
              work referrals to help you secure employment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`bg-card border rounded-2xl overflow-hidden hover:border-primary transition-colors ${bundle.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`}
              >
                {bundle.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold z-10">
                    {bundle.badge}
                  </div>
                )}
                {bundle.image && <img src={bundle.image} alt={bundle.title} className="w-full h-48 object-cover" />}
                <div className="p-6">
                  <p className="text-primary text-sm font-medium mb-2">{bundle.codes.join(" + ")}</p>
                  <h3 className="font-display text-2xl text-foreground mb-2">{bundle.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{bundle.subtitle}</p>
                  <p className="text-foreground text-sm mb-4">{bundle.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-2xl text-primary">{bundle.price}</span>
                  </div>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => {
                      window.open(bundle.bookingUrl, "_blank");
                    }}
                  >
                    Book Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPS Training */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-primary font-medium tracking-widest uppercase mb-2">Specialist Training</p>
                <h2 className="font-display text-3xl text-foreground mb-4">Topcon GPS Excavator Training</h2>
                <p className="text-muted-foreground mb-6">
                  Western Australia's only private Topcon GPS excavator training program. Master the most widely used
                  GPS system in civil construction for career advancement.
                </p>
                <ul className="space-y-3 mb-6">
                  {["1 Day intensive training", "1:1 GPS technology experience", "Industry-standard equipment"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.open("https://live.cailintraining.com.au/topcon_excavator_1_day_course", "_blank");
                  }}
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={topconGpsExcavator}
                  alt="Topcon GPS Excavator on site"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">Not Sure Which Bundle Is Right for You?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Book a free consultation and our team will help you choose the best bundle for your career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/discovery-call">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TicketsTraining;
