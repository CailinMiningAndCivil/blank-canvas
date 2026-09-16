import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Search,
  UserPlus,
  Share2,
  Trophy,
  Instagram,
  Facebook,
  ArrowRight,
  FileText,
  BadgeCheck,
} from "lucide-react";
import fleetLineupWide from "@/assets/photos/fleet-lineup-wide.jpg";

const SITE_URL = "https://www.cailinminingcivil.com";

const socials = [
  {
    name: "Instagram",
    handle: "@cailinminingciviltraining",
    url: "https://www.instagram.com/cailinminingciviltraining/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "CailinTraining",
    url: "https://www.facebook.com/CailinTraining/",
    icon: Facebook,
  },
  {
    name: "TikTok",
    handle: "@operatortrainingperth",
    url: "https://www.tiktok.com/@operatortrainingperth",
    icon: null, // TikTok glyph rendered inline below
  },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Spot the Cailin Mining & Civil vehicle",
    description: "Keep an eye out for a Cailin Mining & Civil vehicle out on the road or on site.",
  },
  {
    icon: Camera,
    step: "Step 2",
    title: "Take a photo",
    description: "Snap your best photo of the Cailin Mining & Civil vehicle where you found the QR code.",
  },
  {
    icon: UserPlus,
    step: "Step 3",
    title: "Follow Cailin Mining & Civil",
    description: "Follow us on Instagram, Facebook or TikTok so we can contact you if you win.",
  },
  {
    icon: Share2,
    step: "Step 4",
    title: "Post your photo & tag Cailin Mining & Civil",
    description: "Post your photo on your social media account and tag Cailin Mining & Civil.",
  },
  {
    icon: Trophy,
    step: "Step 5",
    title: "You're in the running",
    description: "The best photo wins $1,000. It could be yours.",
  },
];

const Competition = () => {
  const scrollToEnter = () => {
    document.getElementById("how-to-enter")?.scrollIntoView({ behavior: "smooth" });
  };

  // Hide the global GHL chat widgets on this standalone campaign page.
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent =
      "chat-widget, lc-chat-widget, #chat-widget-container { display: none !important; }";
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Spot the Cailin Mining & Civil Car & Win $1,000 | Cailin Mining & Civil Competition"
        description="Found our Cailin Mining & Civil car? Snap it, share it and tag us for your chance to win $1,000."
        path="/competition"
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={fleetLineupWide}
            alt="Cailin Mining & Civil vehicle fleet"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-fade-in">
              <Camera className="h-4 w-4" />
              Photo Competition
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide animate-fade-up">
              SPOT THE CAILIN MINING &amp; CIVIL CAR
              <br />
              <span className="text-gradient">&amp; WIN $1,000</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
              Found our Cailin Mining &amp; Civil car? Snap it, share it and you
              could win <span className="text-primary font-semibold">$1,000</span>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
              <Button
                size="lg"
                onClick={scrollToEnter}
                className="bg-gradient-orange text-primary-foreground hover:shadow-glow transition-shadow text-base px-8 h-14 w-full sm:w-auto"
              >
                Enter the Competition
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO ENTER ============ */}
      <section id="how-to-enter" className="py-16 md:py-24 bg-dark-surface/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              How to Enter
            </h2>
            <p className="mt-3 text-muted-foreground">
              Five simple steps — all from your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isFinal = index === steps.length - 1;
              return (
                <div
                  key={item.step}
                  className={`relative rounded-xl border p-6 shadow-card transition-transform hover:-translate-y-1 ${
                    isFinal
                      ? "bg-gradient-orange text-primary-foreground border-primary/50 sm:col-span-2 lg:col-span-1"
                      : "bg-gradient-card border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isFinal ? "text-primary-foreground/80" : "text-primary"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`font-display font-bold text-2xl ${
                        isFinal ? "text-primary-foreground/40" : "text-muted-foreground/30"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <Icon
                    className={`h-8 w-8 mb-4 ${
                      isFinal ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  <h3
                    className={`font-display font-semibold text-lg mb-2 ${
                      isFinal ? "text-primary-foreground" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isFinal ? "text-primary-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FOLLOW CMC ============ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Follow Cailin Mining &amp; Civil
            </h2>
            <p className="mt-3 text-muted-foreground">
              Step 3 — follow us on your favourite platform. You'll need to be
              following so we can reach you if you win.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center rounded-xl border border-border bg-gradient-card p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="h-14 w-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground text-primary">
                    {Icon ? (
                      <Icon className="h-7 w-7" />
                    ) : (
                      <TikTokIcon className="h-7 w-7" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg">{social.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{social.handle}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold">
                    Follow us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ COMPETITION DETAILS ============ */}
      <section className="py-16 md:py-24 bg-dark-surface/40 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-1 rounded-xl border border-primary/40 bg-gradient-card p-8 text-center shadow-glow flex flex-col items-center justify-center">
              <Trophy className="h-10 w-10 text-primary mb-4" />
              <div className="font-display font-bold text-5xl md:text-6xl text-gradient">
                $1,000
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Prize
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-border bg-gradient-card p-6 flex items-start gap-4">
                <Camera className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-lg">Best photo wins</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    One winner takes the $1,000 prize with the best photo of a
                    Cailin Mining &amp; Civil vehicle.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-gradient-card p-6 flex items-start gap-4">
                <BadgeCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-lg">
                    Follow &amp; tag to qualify
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Entrants must follow Cailin Mining &amp; Civil on social
                    media and tag Cailin Mining &amp; Civil in their photo
                    post.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Ready to win <span className="text-gradient">$1,000</span>?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Snap the Cailin Mining &amp; Civil car, follow us, post and tag — that's all it takes.
          </p>
          <Button
            size="lg"
            onClick={scrollToEnter}
            className="mt-8 bg-gradient-orange text-primary-foreground hover:shadow-glow transition-shadow text-base px-8 h-14"
          >
            Enter the Competition
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ============ TERMS ============ */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/60 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-xl">
                Competition Terms &amp; Conditions
              </h2>
            </div>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Full competition terms and conditions are being finalised and
                will be published on this page.
              </p>
              <p>
                In the meantime, the entry requirements are: take a photo of a
                Cailin Mining &amp; Civil vehicle, follow Cailin Mining &amp;
                Civil on social media, post the photo to your own social media
                account and tag Cailin Mining &amp; Civil. The best photo wins
                the $1,000 prize.
              </p>
              <p className="text-xs italic text-muted-foreground/70">
                [Placeholder — approved competition terms &amp; conditions to be
                inserted here.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competition;
