import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, Award, Users, Banknote, HelpCircle, Phone, MapPin, Star, Briefcase } from "lucide-react";
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
import loaderDumptruckWide from "@/assets/photos/loader-dumptruck-wide.jpg";
import loaderDumptruckFramed from "@/assets/photos/loader-dumptruck-framed.jpg";
import rigidHaulTruck from "@/assets/photos/rigid-haul-truck.jpg";

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
    text: "The live mine site moxy training in Perth made all the difference. I walked onto my first job confident because I'd already operated on a real site. Best investment I've made.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    role: "Civil Construction Operator",
    text: "As a woman entering the industry, I was nervous about moxy training. The 1:1 instruction in Perth meant I got personalised attention and never felt rushed. Got my moxy ticket and a job within two weeks.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Mining Operator — Pilbara FIFO",
    text: "Did the full day moxy training in Perth and got placed on a mine site straight after. The trainers actually care about getting you work-ready, not just ticking boxes. Now earning $130K on a 2/1 roster.",
    rating: 5,
  },
  {
    name: "Priya N.",
    role: "Civil Operator — Perth Metro",
    text: "I compared every moxy training provider in Perth before choosing Cailin. The live mine site experience is unmatched — I felt prepared from day one on the job. Highly recommend.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What qualification do I get from moxy training in Perth?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO337E — Conduct articulated haul truck operations. This qualification is accepted across all Australian mine sites and civil construction projects. It's the standard moxy ticket required by Perth mining employers.",
  },
  {
    question: "How long does moxy training in Perth take?",
    answer: "Our short course runs 1–4 hours for those with some experience. Full day moxy training in Perth has unlimited hours — we train until you're genuinely confident and competent. There's no rushed timeframe, unlike other Perth providers who cap seat time at 15–45 minutes.",
  },
  {
    question: "What's the difference between a Moxy and a rigid dump truck?",
    answer: "A Moxy (articulated dump truck) has a pivot point between the cab and tray, allowing for superior manoeuvrability on rough, uneven terrain. They're widely used across Perth's mining and civil construction sectors for hauling material across challenging sites where rigid trucks can't safely operate.",
  },
  {
    question: "Why is live mine site moxy training in Perth better than simulation?",
    answer: "Simulation can't replicate real terrain, dust, gradient changes, or working alongside other heavy equipment. Our Perth moxy training takes place on an active mine site, so you experience genuine conditions from day one — making you immediately employable. Perth employers specifically value live site experience.",
  },
  {
    question: "Do you help with job placement after moxy training?",
    answer: "Yes! We have a 60% job placement rate for our Perth moxy training graduates. Our industry connections across Perth's mining sector mean we actively refer graduates to employers looking for certified moxy operators. Many of our graduates are working within weeks of completing training.",
  },
  {
    question: "Is government funding available for moxy training in Perth?",
    answer: "CTF (Construction Training Fund) funding may cover your moxy training costs if you're eligible. Many Perth residents qualify. We can help you check eligibility and apply — just ask when you book your moxy training.",
  },
  {
    question: "Can I bundle moxy training with other machine tickets in Perth?",
    answer: "Absolutely. The Moxy is included in our Starter Bundle ($2,500) with Roller and Watercart training — the most popular combination for Perth mining jobs. We also offer custom bundles. Check our bundles page for the best value.",
  },
  {
    question: "Where does moxy training take place in Perth?",
    answer: "Our moxy training in Perth takes place on a live, active mine site — not a concrete yard or controlled environment. This is what sets Cailin apart from other Perth training providers. You'll train on real terrain with real equipment, building genuine operational experience.",
  },
  {
    question: "What should I bring to moxy training in Perth?",
    answer: "We provide all PPE and safety equipment for your moxy training. Just bring enclosed steel-cap boots, long pants, a long-sleeve shirt, lunch, and plenty of water. Sunscreen and a hat are also recommended for Perth's outdoor conditions.",
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
    const courseSchema = document.createElement("script");
    courseSchema.type = "application/ld+json";
    courseSchema.text = JSON.stringify({
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
    document.head.appendChild(courseSchema);

    // LocalBusiness schema markup
    const businessSchema = document.createElement("script");
    businessSchema.type = "application/ld+json";
    businessSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cailin Mining & Civil",
      "description": "Perth's leading moxy and articulated dump truck training provider. Live mine site training with 1:1 instruction and nationally recognised certification.",
      "url": "https://www.cailinminingcivil.com",
      "telephone": "+61483951501",
      "image": "https://www.cailinminingcivil.com/images/social.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "Western Australia",
        "addressCountry": "AU",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9505,
        "longitude": 115.8605,
      },
      "areaServed": {
        "@type": "State",
        "name": "Western Australia",
        "description": "WA mining sites including Pilbara, Goldfields, and Perth metro civil projects",
      },
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moxy / Articulated Dump Truck Training",
          "description": "Live mine site moxy training in Perth with RIIMPO337E certification. 1:1 instruction, unlimited hours, and 60% job placement rate.",
          "serviceType": "Vocational Training",
        },
      },
      "priceRange": "$350 - $2,500",
      "openingHours": "Mo-Fr 07:00-17:00",
      "sameAs": [
        "https://www.facebook.com/cailinminingcivil",
        "https://www.instagram.com/cailinminingcivil",
      ],
    });
    document.head.appendChild(businessSchema);

    return () => {
      document.head.removeChild(courseSchema);
      document.head.removeChild(businessSchema);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={articulatedDumptruck} alt="Moxy training Perth — articulated dump truck on live mine site" />
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
              <p className="text-muted-foreground text-sm">CTF funding may cover your moxy training costs in Perth — ask us how</p>
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
              <h2 className="font-display text-4xl text-foreground mb-6">What Is Moxy Training in Perth?</h2>
              <p className="text-muted-foreground mb-4">
                A Moxy — also known as an articulated dump truck — is one of the most widely used machines across 
                Perth's mining and civil construction sectors. These powerful vehicles feature a pivot point between 
                the cab and tray, allowing them to navigate rough, uneven terrain that rigid trucks simply can't handle.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Moxy training in Perth</strong> teaches you to safely operate these machines on 
                real mine sites. You'll learn pre-operational checks, safe loading and unloading procedures, navigating 
                haul roads, tipping techniques, and how to work safely alongside other heavy equipment on Perth's active sites.
              </p>
              <p className="text-muted-foreground mb-4">
                Perth is the operational hub for Western Australia's mining industry, making it the ideal location for 
                moxy training. Our training sites are located within easy reach of Perth's northern and southern suburbs, 
                meaning you can complete your certification without travelling to remote locations.
              </p>
              <p className="text-muted-foreground">
                Upon completion of your <strong className="text-foreground">moxy training in Perth</strong>, you'll receive a nationally recognised Statement of Attainment for 
                <strong className="text-foreground"> RIIMPO337E — Conduct Articulated Haul Truck Operations</strong>, 
                which is accepted at every mine site and civil project across Australia.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src={dumptruckTrayRaised}
                alt="Moxy training Perth — articulated dump truck tipping material on mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <img
                src={loaderDumptruckFramed}
                alt="Moxy training Perth — dump truck and loader operating together on site"
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
                alt="Moxy training Perth — heavy equipment operating on live mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Perth's Best Moxy Training Happens on a Live Mine Site
              </h2>
              <p className="text-muted-foreground mb-4">
                Most moxy training providers in Perth use controlled yards or simulators. While these tick a compliance box, 
                they don't prepare you for the reality of operating on an active mine site — the dust, gradients, 
                radio communication, traffic management, and working alongside excavators and loaders.
              </p>
              <p className="text-muted-foreground mb-4">
                At Cailin Mining & Civil, our <strong className="text-foreground">moxy training in Perth</strong> happens 
                exclusively on live mine sites. This means from your first session, you're building real-world skills 
                that Perth mining employers actually value. It's why our graduates have a 60% job placement rate — they arrive on 
                site already experienced.
              </p>
              <p className="text-muted-foreground mb-6">
                Perth mining companies like BHP, Rio Tinto, FMG, and Roy Hill specifically seek operators trained on 
                live sites. When you complete your <strong className="text-foreground">moxy training in Perth</strong> with Cailin, 
                your experience is immediately recognised as genuine operational competency — not just a paper qualification.
              </p>
              <ul className="space-y-3">
                {[
                  "Train on real terrain with genuine Perth mine site conditions",
                  "Experience working alongside other heavy equipment operators",
                  "Learn radio protocols and traffic management used on WA sites",
                  "Build confidence that translates directly to Perth mining employment",
                  "1:1 instruction — your trainer's full attention, every session",
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
              Choose the moxy training path that matches your experience. Every option includes nationally recognised 
              certification and professional work referral across Perth's mining sector.
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
              <h2 className="font-display text-4xl text-foreground mb-6">What's Included in Your Moxy Training in Perth</h2>
              <ul className="space-y-4">
                {[
                  "1:1 personalised instruction (never group-based)",
                  "Training on a live, active mine site in Perth",
                  "Nationally recognised RIIMPO337E Statement of Attainment",
                  "All PPE and safety equipment provided",
                  "Professional work referral to Perth mining employers",
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
            <div className="space-y-4">
              <img
                src={catDumptruckLoaderPair}
                alt="Moxy training Perth — dump truck and loader pair on training mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <img
                src={rigidHaulTruck}
                alt="Haul truck on Perth mine site — moxy training comparison"
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="font-display text-4xl text-foreground">
              Moxy Operator Job Opportunities in Perth
            </h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Perth is the gateway to Western Australia's booming mining sector — and articulated dump truck operators 
            are in constant demand. From iron ore operations in the Pilbara to gold mines in the Goldfields and 
            lithium projects across the state, certified moxy operators are among the most sought-after roles in Perth.
          </p>
          <p className="text-muted-foreground mb-4">
            Entry-level moxy operators in Perth typically earn between <strong className="text-foreground">$80,000 – $120,000 per year</strong>, 
            with experienced operators on FIFO rosters earning <strong className="text-foreground">$150,000+</strong>. The combination of a moxy ticket 
            with complementary qualifications like roller and watercart makes you even more employable across Perth's mining sector.
          </p>
          <p className="text-muted-foreground mb-4">
            Major Perth-based employers including BHP, Rio Tinto, FMG, Roy Hill, and numerous labour hire companies 
            are actively recruiting certified moxy operators year-round. Civil construction projects across Perth metro — 
            including road works, subdivisions, and infrastructure projects — also rely heavily on articulated dump truck operators.
          </p>
          <p className="text-muted-foreground mb-6">
            At Cailin Mining & Civil, we don't just provide <strong className="text-foreground">moxy training in Perth</strong> — we actively connect graduates with employers. 
            Our program has a 60% job placement rate because 
            employers trust that our graduates have genuine, hands-on experience from live mine site training.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">Pilbara Iron Ore — BHP, Rio Tinto, FMG</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">Goldfields — Gold & Nickel Mining</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">Perth Metro — Civil Construction & Roads</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">Lithium & Critical Minerals Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-foreground mb-12 text-center">
            What Our Perth Moxy Training Graduates Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      {/* Perth-specific training details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Perth Chooses Cailin for Moxy Training
              </h2>
              <p className="text-muted-foreground mb-4">
                With over 2,000 graduates and counting, Cailin Mining & Civil is Perth's most trusted provider of 
                moxy training. We're the only training provider in Perth offering genuine 1:1 instruction on a live 
                mine site — not a controlled yard, not a simulator, and not a group session with 15 other students.
              </p>
              <p className="text-muted-foreground mb-4">
                Our Perth moxy training is recognised by over 100 affiliate employers across Western Australia. 
                When you graduate from Cailin, you don't just get a certificate — you get a direct pathway to employment 
                through our extensive industry network spanning the Pilbara, Goldfields, and Perth metro regions.
              </p>
              <p className="text-muted-foreground">
                We're a registered training organisation (RTO 46489) delivering nationally recognised qualifications. 
                Our trainers are experienced mining professionals who've spent years operating on WA mine sites — 
                they understand what Perth employers need and train you accordingly.
              </p>
            </div>
            <div>
              <img
                src={loaderDumptruckWide}
                alt="Moxy training Perth — wide view of articulated dump truck operations on mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Cailin Stats */}
      <section className="py-12 border-y border-border">
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
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Perth, Western Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-foreground mb-4 text-center">
            Combine Your Moxy Ticket for Maximum Employability in Perth
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Perth mining employers prefer operators with multiple machine tickets. These courses pair perfectly with your moxy training.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/courses/roller" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Roller Training</h3>
              <p className="text-muted-foreground text-sm mb-3">Essential for civil construction and road works across Perth</p>
              <span className="text-primary text-sm font-medium">View Course →</span>
            </Link>
            <Link to="/courses/watercart" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Watercart Training</h3>
              <p className="text-muted-foreground text-sm mb-3">High demand across all WA mine sites for dust suppression</p>
              <span className="text-primary text-sm font-medium">View Course →</span>
            </Link>
            <Link to="/courses/excavator-training-perth" className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
              <h3 className="font-display text-xl text-foreground mb-2">Excavator Training Perth</h3>
              <p className="text-muted-foreground text-sm mb-3">The most in-demand machine ticket in Perth's mining sector</p>
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
      <section className="py-20">
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
      <section className="py-20 bg-secondary">
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
