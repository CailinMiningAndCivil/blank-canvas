import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroImage } from "@/components/ui/hero-image";
import { RigidScreeningForm } from "@/components/RigidScreeningForm";
import { BookeoWidget } from "@/components/BookeoWidget";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Phone,
  Mail,
  Award,
  HardHat,
  Briefcase,
  TrendingUp,
  Car,
  Plane,
  BedDouble,
  Clock,
} from "lucide-react";
import heroImage from "@/assets/photos/rigid-haul-truck.jpg";

const STRIPE_DEPOSIT_URL = "https://buy.stripe.com/cNi9ATeXf0lI9Vh2w00000s";

const RigidHaulTruckBooking = () => {
  useEffect(() => {
    const metas = [
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" },
    ];
    const elements = metas.map(({ httpEquiv, content }) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = httpEquiv;
      meta.content = content;
      document.head.appendChild(meta);
      return meta;
    });
    return () => elements.forEach((el) => el.remove());
  }, []);

  const outcomes = [
    {
      icon: Award,
      title: "RIIMPO338E Qualification",
      body: "Conduct Rigid Haul Truck Operations — nationally recognised on successful completion.",
    },
    {
      icon: HardHat,
      title: "Production Mining Experience",
      body: "Not a simulator. Not a paddock. A live, working mine with active crews and real loads.",
    },
    {
      icon: Briefcase,
      title: "Real Life Work References",
      body: "Pre-starts, circuits, dump cycles and shutdown — real operational tasks logged on a live production site.",
    },
    {
      icon: TrendingUp,
      title: "Potential Work Opportunities",
      body: "Be the first in line for the next rigid haul truck role with the mining company hosting us.",
    },
  ];

  const faqs = [
    {
      q: "What ticket do I receive?",
      a: "On successful completion you'll be issued RIIMPO338E — Conduct Rigid Haul Truck Operations.",
    },
    {
      q: "Is more seat time included?",
      a: "No. This is the 2-day initial. Additional hours or a job offer are negotiated directly with the mining company — that's on you.",
    },
    {
      q: "Can I get a refund?",
      a: "Deposit secures your slot. Missed sessions (including PPE failures at pre-start) are non-refundable.",
    },
    {
      q: "Where exactly is the site?",
      a: "Site location: Chapman Valley, approximately 20–30 minutes from Geraldton. Exact location is shared upon booking.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Rigid Haul Truck Private Booking | Cailin Mining & Civil"
        description="Private booking and deposit page for approved Rigid Haul Truck 2-Day Initial applicants."
        path="/rigid-haul-truck-booking"
      />

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <HeroImage src={heroImage} alt="CAT 777G rigid haul truck on a live mine site near Geraldton, Western Australia" overlayClassName="bg-background/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Approved Applicants Only
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Rigid Haul Truck <span className="text-primary">2-Day Initial</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Walk away with your RIIMPO338E – Conduct Rigid Haul Truck Operations and real-world experience in a production mining environment.
            </p>

            <a
              href="#screening-form"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition"
            >
              Start screening form →
            </a>

            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary" />
              Complete the quick screening below to unlock the deposit link.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU WALK AWAY WITH */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">02 — Outcomes</p>
            <h2 className="font-display text-3xl text-foreground mb-10">What you walk away with</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">0{i + 1}</p>
                      <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
                      <p className="text-muted-foreground text-sm">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground text-center max-w-2xl mx-auto">
              This is a 2-day initial course. Upon completion, participants will receive nationally recognised training and practical experience in a live production environment.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">03 — Logistics</p>
            <h2 className="font-display text-3xl text-foreground mb-10">Getting there</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <Car className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs uppercase tracking-wider text-primary mb-1">Recommended</p>
                <h3 className="font-display text-lg text-foreground mb-2">Drive from Perth</h3>
                <p className="text-muted-foreground text-sm">Easy, safe drive. You arrive with your own wheels, which makes the 20–30 min run from Geraldton out to Chapman Valley straightforward.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <Plane className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Alternative</p>
                <h3 className="font-display text-lg text-foreground mb-2">Fly in (≈ 1 hr)</h3>
                <p className="text-muted-foreground text-sm">Quick flight from Perth — but you must organise your own transport from Geraldton out to the mine site in Chapman Valley (20–30 min from town) and back, both days.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <BedDouble className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Stay</p>
                <h3 className="font-display text-lg text-foreground mb-2">Accommodation</h3>
                <p className="text-muted-foreground text-sm">You must arrange your own accommodation in Geraldton (Gero).</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hours & Site</p>
                <h3 className="font-display text-lg text-foreground mb-2">0600 – 1800 Daily</h3>
                <p className="text-muted-foreground text-sm">Site location: Chapman Valley. Exact location shared upon booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">04 — Preparation</p>
            <h2 className="font-display text-3xl text-foreground mb-10">What to bring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Food & Water</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Snacks</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Plenty of water</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Lunch for the day</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl text-foreground mb-4">PPE (Mandatory)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Hi-vis long sleeve shirt</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Hi-vis long pants</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Hard hat</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Steel-cap boots</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Eye protection</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Work gloves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENING + LOCK IT IN */}
      <section id="screening-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">05 — Lock it in</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Quick screening, then pay the deposit</h2>
            <p className="text-muted-foreground mb-10">
              $1,500 deposit confirms your slot. The remaining $2,499 is due on commencement, day one. Complete the screening below — qualified applicants are shown the secure Stripe deposit link straight away.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Deposit Today</p>
                <p className="font-display text-2xl text-primary">$1,500</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">On Commencement</p>
                <p className="font-display text-2xl text-foreground">$2,499</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Total</p>
                <p className="font-display text-2xl text-foreground">$3,999</p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-left">

            <RigidScreeningForm
              source="booking"
              qualifiedCta={{
                label: "Pick your date below",
                href: "#",
                note: "Choose your preferred course date using the live calendar below. The $1,500 deposit is collected during the Bookeo checkout.",
              }}
              qualifiedSlot={
                <div>
                  <h4 className="font-display text-xl text-foreground mb-4 text-center">Select your preferred date</h4>
                  <BookeoWidget course="3351MPEJXE18EE1709583" />
                </div>
              }
            />
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">06 — FAQ</p>
            <h2 className="font-display text-3xl text-foreground mb-8">Frequently asked</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* HELP */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl text-foreground mb-6">Need Help?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Call Us</p>
                <a href="tel:0483951501" className="text-primary hover:underline">0483 951 501</a>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Email Us</p>
                <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline text-sm break-all">
                  info@cailinminingcivil.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RigidHaulTruckBooking;
