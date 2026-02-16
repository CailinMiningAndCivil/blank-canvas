import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTFFundingBanner } from "@/components/CTFFundingBanner";
import { BookeoWidget } from "@/components/BookeoWidget";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { HeroImage } from "@/components/ui/hero-image";
import heroImage from "@/assets/photos/loader-dumptruck-wide.jpg";


const Book = () => {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course") || undefined;

  useEffect(() => {
    // Set cache-control meta tags to prevent caching
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <HeroImage
          src={heroImage}
          alt="Mining equipment training"
          overlayClassName="bg-background/90"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Book Your <span className="text-primary">Training</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Select your course and preferred date below. All courses include hands-on machine time with our experienced trainers.
            </p>
          </div>
        </div>
      </section>

      {/* CTF Funding Banner */}
      <CTFFundingBanner />

      {/* Booking Widget Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <BookeoWidget course={courseParam} />
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl text-foreground text-center mb-8">
              Prefer to talk with us first?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Call Us</p>
                <a href="tel:0483951501" className="text-primary hover:underline">
                  0483 951 501
                </a>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Email Us</p>
                <a href="mailto:admin@cailintraining.com.au" className="text-primary hover:underline text-sm break-all">
                  admin@cailintraining.com.au
                </a>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Location</p>
                <p className="text-muted-foreground text-sm">Perth, Western Australia</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-1">Hours</p>
                <p className="text-muted-foreground text-sm">Mon-Fri: 7am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl text-foreground text-center mb-8">
              Booking FAQs
            </h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What happens after I book?</h3>
                <p className="text-muted-foreground">
                  You'll receive a confirmation email with all the details including location, what to bring, and what to expect on the day.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I reschedule my booking?</h3>
                <p className="text-muted-foreground">
                  Yes, you can reschedule up to 48 hours before your training date at no extra cost. Contact us to arrange a new date.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is CTF funding available?</h3>
                <p className="text-muted-foreground">
                  Yes! Construction Training Fund (CTF) funding may cover your training costs. Ask us about eligibility when you book.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What do I need to bring?</h3>
                <p className="text-muted-foreground">
                  Bring photo ID, closed-toe boots, long pants, and a high-vis shirt. We provide all safety equipment and PPE for training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
