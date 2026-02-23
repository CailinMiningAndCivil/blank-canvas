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

import excavatorOperation from "@/assets/photos/excavator-operation.jpg";
import trainerExcavatorDistance from "@/assets/photos/trainer-excavator-distance.jpg";
import excavatorTraining1on1 from "@/assets/photos/excavator-training-1on1.jpg";
import topconGpsExcavator from "@/assets/photos/topcon-gps-excavator.jpg";

const courseOptions = [
  {
    title: "$600 Short Course",
    duration: "1-4 hours",
    price: "$600",
    description: "Quick excavator certification with national qualification and work referral",
    bookingUrl: "https://live.cailintraining.com.au/short_course_excavator-book",
    highlight: false,
  },
  {
    title: "Full Day Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 excavator operator training on a live mine site until you're confident and job-ready",
    bookingUrl: "https://live.cailintraining.com.au/excavator-1day-course",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced excavator operators needing formal certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-excavator-book",
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Chris R.",
    role: "Now working at FMG",
    text: "The live mine site excavator training was incredible. Operating on a real site gave me the confidence I needed. Got placed within three weeks of finishing.",
    rating: 5,
  },
  {
    name: "Emma L.",
    role: "Civil Construction Operator",
    text: "I did my excavator operator training in Perth with Cailin and it was the best decision. The 1:1 instruction meant I could learn at my pace without any pressure.",
    rating: 5,
  },
  {
    name: "Matt S.",
    role: "Mining Operator — Pilbara",
    text: "Came in with zero experience and left as a certified excavator operator. The trainers are genuinely passionate about getting you work-ready, not just passing a test.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How do I become an excavator operator in Perth?",
    answer: "To become an excavator operator in Perth, you need to complete nationally recognised training and obtain your RIIMPO320F or RIIMPO301E certification. At Cailin Mining & Civil, we offer live mine site excavator training in Perth with 1:1 instruction. No prior experience is required for our full training program — we'll take you from beginner to certified excavator operator, ready for employment across Perth's mining and civil construction sectors.",
  },
  {
    question: "What qualifications do I need to be an excavator operator?",
    answer: "You need a nationally recognised Statement of Attainment for RIIMPO320F (Conduct civil construction excavator operations) and/or RIIMPO301E (Conduct excavator operations). Our excavator operator training in Perth covers both units. You'll also need a current White Card (construction induction) for most sites. We can guide you through the full process from training to employment.",
  },
  {
    question: "How long does excavator operator training take in Perth?",
    answer: "Training duration depends on your experience level. Our $600 short course runs 1–4 hours for those with some background. The full day excavator training in Perth has unlimited hours — we continue until you're genuinely confident and competent. There's no rushed timeframe. RPL assessment is available for experienced operators who just need formal certification.",
  },
  {
    question: "What's the job outlook for excavator operators in Perth?",
    answer: "Perth's mining and civil construction sectors are booming, with strong demand for qualified excavator operators across the Pilbara, Goldfields, and metro civil projects. Salaries for excavator operators in Perth typically range from $80,000 to $150,000+ depending on experience and roster. Our 60% job placement rate means we actively connect graduates with employers.",
  },
  {
    question: "Is GPS excavator training available?",
    answer: "Yes! We're WA's only private provider of specialist Topcon GPS excavator training. This is a highly sought-after skill that can significantly boost your earning potential as an excavator operator in Perth. It can be added to any of our excavator training packages.",
  },
  {
    question: "Is government funding available for excavator training in Perth?",
    answer: "CTF (Construction Training Fund) funding may cover your excavator training costs if you're eligible. We can help you check eligibility and apply — just ask when you book your excavator operator training.",
  },
  {
    question: "Can I bundle excavator training with other machine tickets?",
    answer: "Absolutely. We offer multi-machine bundles that include excavator training alongside other tickets like roller, watercart, and wheel loader. Check our bundles page for the best value packages.",
  },
];

const ExcavatorTrainingPerth = () => {
  useEffect(() => {
    document.title = "Excavator Operator Training Perth | Excavator Course | Cailin";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Become a certified excavator operator in Perth. Live mine site training, 1:1 instruction, RIIMPO certification. 60% job placement - Book now");
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.cailinminingcivil.com/courses/excavator-training-perth");
    }

    // Course schema
    const courseSchema = document.createElement("script");
    courseSchema.type = "application/ld+json";
    courseSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Excavator Operator Training Perth - RIIMPO Certification",
      "description": "Live mine site excavator operator training in Perth. Nationally recognised RIIMPO320F & RIIMPO301E certification with 1:1 instruction and 60% job placement.",
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
      "educationalCredentialAwarded": "RIIMPO320F & RIIMPO301E — Conduct Excavator Operations",
    });
    document.head.appendChild(courseSchema);

    // JobPosting schema
    const jobSchema = document.createElement("script");
    jobSchema.type = "application/ld+json";
    jobSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Excavator Operator",
      "description": "Certified excavator operators needed for mining and civil construction projects across Perth and Western Australia. RIIMPO320F qualification required.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Perth Mining & Civil Employers (via Cailin Mining & Civil job placement)",
        "sameAs": "https://www.cailinminingcivil.com",
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "Western Australia",
          "addressCountry": "AU",
        },
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "AUD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 80000,
          "maxValue": 150000,
          "unitText": "YEAR",
        },
      },
      "employmentType": "FULL_TIME",
      "industry": "Mining & Civil Construction",
      "qualifications": "RIIMPO320F — Conduct civil construction excavator operations",
      "datePosted": "2026-02-01",
      "validThrough": "2026-12-31",
    });
    document.head.appendChild(jobSchema);

    return () => {
      document.head.removeChild(courseSchema);
      document.head.removeChild(jobSchema);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={excavatorOperation} alt="Excavator training Perth — excavator operator on live mine site" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Perth's Leading Excavator Training</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Excavator Training Perth — Live Mine Site Certification
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Become a certified excavator operator in Perth with live mine site training.
              1:1 instruction, nationally recognised RIIMPO certification, and 60% job placement rate.
            </p>
            <p className="text-xs text-muted-foreground mb-6">RIIMPO320F & RIIMPO301E</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <BookLink>Book Excavator Training Now</BookLink>
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
              <p className="text-muted-foreground text-sm">CTF funding may cover your excavator training costs — ask us how</p>
            </div>
            <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
              <Link to="/ctf-funding">Check Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Excavator Operator Training Perth - H2 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-4xl text-foreground mb-6">Excavator Operator Training Perth</h2>
              <p className="text-muted-foreground mb-4">
                Excavators are the backbone of Perth's mining and civil construction industries. From trenching and 
                excavation to loading haul trucks, a skilled <strong className="text-foreground">excavator operator in Perth</strong> is 
                always in demand. Our excavator training in Perth equips you with the hands-on skills employers are actively seeking.
              </p>
              <p className="text-muted-foreground mb-4">
                Unlike classroom-based courses, our <strong className="text-foreground">excavator training in Perth</strong> takes place 
                entirely on live mine sites. You'll operate real machines in genuine conditions — learning to handle different soil 
                types, manage bucket loads, work safely around personnel, and communicate via radio with other operators.
              </p>
              <p className="text-muted-foreground">
                Upon completion, you'll receive a nationally recognised Statement of Attainment for 
                <strong className="text-foreground"> RIIMPO320F</strong> (civil construction excavator operations) and/or 
                <strong className="text-foreground"> RIIMPO301E</strong> (excavator operations), qualifying you to work as an 
                excavator operator across every mine site and civil project in Australia.
              </p>
            </div>
            <div>
              <img
                src={trainerExcavatorDistance}
                alt="Excavator operator Perth — trainee operating excavator on mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Live Mine Site Training */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={excavatorTraining1on1}
                alt="1:1 excavator training Perth — instructor guiding trainee on mine site"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl text-foreground mb-6">
                Why Live Mine Site Training Makes Better Excavator Operators
              </h2>
              <p className="text-muted-foreground mb-4">
                Simulation and controlled yards can't replicate the reality of operating an excavator on an active site — 
                the variable terrain, dust, working alongside dump trucks, and time-critical loading cycles. Our 
                excavator training in Perth happens exclusively on live mine sites.
              </p>
              <p className="text-muted-foreground mb-6">
                This approach produces genuinely competent excavator operators. Perth employers know that Cailin graduates 
                arrive on site ready to contribute from day one — which is why we maintain a 60% job placement rate.
              </p>
              <ul className="space-y-3">
                {[
                  "Operate real excavators on genuine mine site terrain",
                  "1:1 instruction — your trainer's full attention, every session",
                  "Learn GPS-guided excavation (Topcon specialist training available)",
                  "Build job-ready confidence that employers value",
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
            <h2 className="font-display text-4xl text-foreground mb-4">Excavator Training Perth — Course Options & Pricing</h2>
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

      {/* Job Opportunities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">Excavator Operator Jobs in Perth</h2>
            </div>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Perth's mining boom means qualified excavator operators are in constant demand. Whether you're targeting 
              FIFO roles in the Pilbara and Goldfields or civil construction projects across the Perth metro area, 
              your excavator operator certification opens doors to high-paying careers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <p className="font-display text-3xl text-primary mb-2">$80K–$150K+</p>
                <p className="text-foreground font-medium">Annual Salary Range</p>
                <p className="text-muted-foreground text-sm mt-1">For excavator operators in Perth & WA</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <p className="font-display text-3xl text-primary mb-2">60%</p>
                <p className="text-foreground font-medium">Job Placement Rate</p>
                <p className="text-muted-foreground text-sm mt-1">Graduates placed into excavator operator roles</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <p className="font-display text-3xl text-primary mb-2">High Demand</p>
                <p className="text-foreground font-medium">Industry Outlook</p>
                <p className="text-muted-foreground text-sm mt-1">Excavator operators needed across WA mining</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              As a certified excavator operator in Perth, you'll be eligible for roles with major mining companies, 
              civil contractors, and labour hire firms. Our industry connections help place you directly into work.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-foreground text-center mb-12">
            What Our Excavator Training Graduates Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 italic">"{t.text}"</p>
                <p className="text-foreground font-medium">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cailin strip */}
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
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Perth, Western Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">Excavator Training Perth — FAQs</h2>
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

      {/* Related Courses */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl text-foreground text-center mb-8">Related Training Courses</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/courses/roller">Roller Training</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses/watercart">Watercart Training</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses/wheel-loader">Wheel Loader Training</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses/moxy-training-perth">Moxy Training Perth</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/courses/bundles">Training Bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6">
            Ready to Become a Certified Excavator Operator in Perth?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Start your excavator training in Perth today with Western Australia's leading operator training provider. 
            Live mine site training, 1:1 instruction, and real job placement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <BookLink>Book Excavator Training Now</BookLink>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/discovery-call">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExcavatorTrainingPerth;
