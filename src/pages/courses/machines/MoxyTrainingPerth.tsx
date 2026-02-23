import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, Banknote, HelpCircle, Phone, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { BookLink } from "@/components/BookLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import articulatedDumptruck from "@/assets/photos/articulated-dumptruck.jpg";
import dumptruckTrayRaised from "@/assets/photos/dumptruck-tray-raised.jpg";
import loaderDumptruckAction from "@/assets/photos/loader-dumptruck-action.jpg";
import catDumptruckLoaderPair from "@/assets/photos/cat-dumptruck-loader-pair.jpg";

const courseOptions = [
  {
    title: "$600 Short Course",
    duration: "1-4 hours",
    price: "$600",
    description: "Quick moxy certification with national qualification and work referral",
    bookingUrl: "https://live.cailintraining.com.au/short_course_moxy-book",
    highlight: false,
  },
  {
    title: "Full Day Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 moxy training on a live mine site until you're confident and job-ready",
    bookingUrl: "https://live.cailintraining.com.au/moxy_day_course",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing formal moxy certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-moxy-book",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Jake M.",
    role: "Now working at Roy Hill",
    text: "The live mine site training made all the difference. I walked onto my first job confident because I'd already operated on a real site. Best investment I've made.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    role: "Civil Construction Operator",
    text: "As a woman entering the industry, I was nervous. The 1:1 training meant I got personalised attention and never felt rushed. Got my moxy ticket and a job within two weeks.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Mining Operator",
    text: "Did the full day moxy training in Perth and got placed on a mine site straight after. The trainers actually care about getting you work-ready, not just ticking boxes.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What qualification do I get from moxy training in Perth?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO337E — Conduct articulated haul truck operations. This qualification is accepted across all Australian mine sites and civil construction projects.",
  },
  {
    question: "How long does moxy training take?",
    answer: "Our short course runs 1–4 hours for those with some experience. Full day training has unlimited hours — we train until you're genuinely confident and competent. There's no rushed timeframe.",
  },
  {
    question: "What's the difference between a Moxy and a rigid dump truck?",
    answer: "A Moxy (articulated dump truck) has a pivot point between the cab and tray, allowing for superior manoeuvrability on rough, uneven terrain. They're widely used in mining and civil construction across Perth and WA for hauling material across sites.",
  },
  {
    question: "Why is live mine site training better than simulation?",
    answer: "Simulation can't replicate real terrain, dust, gradient changes, or working alongside other heavy equipment. Our Perth moxy training takes place on an active mine site, so you experience genuine conditions from day one — making you immediately employable.",
  },
  {
    question: "Do you help with job placement after training?",
    answer: "Yes! We have a 60% job placement rate. Our industry connections across Perth's mining sector mean we actively refer graduates to employers looking for certified moxy operators.",
  },
  {
    question: "Is government funding available for moxy training?",
    answer: "CTF (Construction Training Fund) funding may cover your training costs if you're eligible. We can help you check eligibility and apply — just ask when you book.",
  },
  {
    question: "Can I bundle moxy training with other machine tickets?",
    answer: "Absolutely. The Moxy is included in our Starter Bundle ($2,500) with Roller and Watercart training. We also offer custom bundles — check our bundles page for the best value.",
  },
];

const MoxyTrainingPerth = () => {
  useEffect(() => {
    document.title = "Moxy Training Perth | Articulated Dump Truck Course | Live Mine Site";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Perth's #1 live mine site moxy training. Get certified on real articulated dump trucks. 1:1 instruction, 60% job placement. Book now - 0483 951 501");
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.cailinminingcivil.com/courses/moxy-training-perth");
    }

    // Course schema markup
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Moxy Training Perth - Articulated Dump Truck Certification",
      "description": "Live mine site moxy (articulated dump truck) training in Perth. Nationally recognised RIIMPO337E certification with 1:1 instruction.",
      "provider": {
        "@type": "Organization",
        "name": "Cailin Mining & Civil",
        "url": "https://www.cailinminingcivil.com",
        "telephone": "0483 951 501",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU",
        },
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
            "name": "Live Mine Site, Perth WA",
          },
        },
      ],
      "offers": [
        { "@type": "Offer", "price": "600", "priceCurrency": "AUD", "name": "Short Course" },
        { "@type": "Offer", "price": "2500", "priceCurrency": "AUD", "name": "Full Day Training" },
        { "@type": "Offer", "price": "350", "priceCurrency": "AUD", "name": "RPL Assessment" },
      ],
      "educationalCredentialAwarded": "RIIMPO337E — Conduct Articulated Haul Truck Operations",
    });
    document.head.appendChild(schema);

    return () => {
      document.head.removeChild(schema);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={articulatedDumptruck} alt="Moxy training Perth - articulated dump truck on live mine site" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Perth's #1 Live Mine Site Training</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Moxy Training Perth — Live Mine Site Certification
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Get certified to operate articulated dump trucks on a real mine site in Perth. 
              1:1 instruction, nationally recognised RIIMPO337E qualification, and 60% job placement rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <BookLink>Book Moxy Training Now</BookLink>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:0483951501" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 0483 951 501
                </a>
              </Button>
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
              <p className="text-muted-foreground text-sm">CTF funding may cover your moxy training costs — ask us how</p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Moxy Training */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">What Is Moxy Training?</h2>
              <p className="text-muted-foreground mb-4">
                A Moxy — also known as an articulated dump truck — is one of the most widely used machines across 
                Perth's mining and civil construction sectors. These powerful vehicles feature a pivot point between 
                the cab and tray, allowing them to navigate rough, uneven terrain that rigid trucks simply can't handle.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Moxy training in Perth</strong> teaches you to safely operate these machines on 
                real mine sites. You'll learn pre-operational checks, safe loading and unloading procedures, navigating 
                haul roads, tipping techniques, and how to work safely alongside other heavy equipment.
              </p>
              <p className="text-muted-foreground">
                Upon completion, you'll receive a nationally recognised Statement of Attainment for 
                <strong className="text-foreground"> RIIMPO337E — Conduct Articulated Haul Truck Operations</strong>, 
                which is accepted at every mine site and civil project across Australia.
              </p>
            </div>
            <div>
              <img
                src={dumptruckTrayRaised}
                alt="Articulated dump truck tipping material on Perth mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Live Mine Site */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={loaderDumptruckAction}
                alt="Heavy equipment operating on live mine site during moxy training Perth"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Live Mine Site Training Beats Simulation
              </h2>
              <p className="text-muted-foreground mb-4">
                Most training providers in Perth use controlled yards or simulators. While these tick a compliance box, 
                they don't prepare you for the reality of operating a moxy on an active mine site — the dust, gradients, 
                radio communication, traffic management, and working alongside excavators and loaders.
              </p>
              <p className="text-muted-foreground mb-6">
                At Cailin Mining & Civil, our <strong className="text-foreground">moxy training in Perth</strong> happens 
                exclusively on live mine sites. This means from your first session, you're building real-world skills 
                that employers actually value. It's why our graduates have a 60% job placement rate — they arrive on 
                site already experienced.
              </p>
              <ul className="space-y-3">
                {[
                  "Train on real terrain with genuine site conditions",
                  "Experience working alongside other heavy equipment",
                  "Learn radio protocols and traffic management",
                  "Build confidence that translates directly to employment",
                ].map((item) => (
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

      {/* Course Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-foreground mb-4">Moxy Training Perth — Course Options & Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the training path that matches your experience. Every option includes nationally recognised 
              certification and professional work referral.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courseOptions.map((option) => (
              <div
                key={option.title}
                className={`bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`}
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
          <p className="text-center text-muted-foreground text-sm mt-6">
            * RPL pricing may vary based on evidence and assessment requirements.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">What's Included in Your Moxy Training</h2>
              <ul className="space-y-4">
                {[
                  "1:1 personalised instruction (never group-based)",
                  "Training on a live, active mine site in Perth",
                  "Nationally recognised RIIMPO337E Statement of Attainment",
                  "All PPE and safety equipment provided",
                  "Professional work referral upon completion",
                  "Pre-operational checks and maintenance procedures",
                  "Safe loading, hauling, and tipping operations",
                  "Radio communication and site safety protocols",
                  "Working in all weather and terrain conditions",
                  "Unlimited training hours (full day option)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={catDumptruckLoaderPair}
                alt="Dump truck and loader pair on Perth training mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perth Mining Jobs */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-4xl text-foreground mb-6 text-center">
            Job Opportunities for Moxy Operators in Perth
          </h2>
          <p className="text-muted-foreground mb-4">
            Perth is the gateway to Western Australia's booming mining sector — and articulated dump truck operators 
            are in constant demand. From iron ore operations in the Pilbara to gold mines in the Goldfields and 
            lithium projects across the state, certified moxy operators are among the most sought-after roles.
          </p>
          <p className="text-muted-foreground mb-4">
            Entry-level moxy operators in Perth typically earn between <strong className="text-foreground">$80,000 – $120,000 per year</strong>, 
            with experienced operators on FIFO rosters earning significantly more. The combination of a moxy ticket 
            with complementary qualifications like roller and watercart makes you even more employable.
          </p>
          <p className="text-muted-foreground mb-6">
            At Cailin Mining & Civil, we don't just train you — we actively connect graduates with employers. 
            Our <strong className="text-foreground">moxy training Perth</strong> program has a 60% job placement rate because 
            employers trust that our graduates have genuine, hands-on experience from live mine site training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">Pilbara Iron Ore</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">Goldfields Mining</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">Perth Metro Civil</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">Lithium & Critical Minerals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-foreground mb-12 text-center">
            What Our Moxy Training Graduates Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 italic">"{t.text}"</p>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cailin Stats */}
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
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">60% Job Placement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-foreground mb-4 text-center">
            Combine Your Moxy Ticket for Maximum Employability
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Employers prefer operators with multiple machine tickets. These courses pair perfectly with moxy training.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/courses/roller" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Roller Training</h3>
              <p className="text-muted-foreground text-sm mb-3">Essential for civil construction and road works</p>
              <span className="text-primary text-sm font-medium">View Course →</span>
            </Link>
            <Link to="/courses/watercart" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Watercart Training</h3>
              <p className="text-muted-foreground text-sm mb-3">High demand across all mine sites for dust suppression</p>
              <span className="text-primary text-sm font-medium">View Course →</span>
            </Link>
            <Link to="/courses/bundles" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Starter Bundle</h3>
              <p className="text-muted-foreground text-sm mb-3">Moxy + Roller + Watercart for $2,500 — best value</p>
              <span className="text-primary text-sm font-medium">View Bundles →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">Moxy Training Perth — FAQs</h2>
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Ready to Start Your Moxy Training in Perth?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of graduates who've launched mining careers through Perth's leading live mine site 
            moxy training program. Book today or call us for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <BookLink>Book Moxy Training Now</BookLink>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/discovery-call">Free Consultation</Link>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Or call us directly: <a href="tel:0483951501" className="text-primary font-medium">0483 951 501</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default MoxyTrainingPerth;
