import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroImage } from "@/components/ui/hero-image";
import { BookeoWidget } from "@/components/BookeoWidget";
import { AlertTriangle, Phone, Mail, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/photos/rigid-haul-truck.jpg";

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

  return (
    <Layout>
      <SEO
        title="Rigid Haul Truck Private Booking | Cailin Mining & Civil"
        description="Private booking and payment page for approved Rigid Haul Truck Traineeship applicants."
        path="/rigid-haul-truck-booking"
      />

      <section className="relative py-24 overflow-hidden">
        <HeroImage src={heroImage} alt="Rigid haul truck" overlayClassName="bg-background/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Approved Applicants Only
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Rigid Haul Truck <span className="text-primary">Private Booking</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Secure your place in the Rigid Haul Truck Traineeship below. This page is for approved applicants who have received a private booking link.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl text-foreground mb-2">Training Dates Confirmed After Payment</h2>
                  <p className="text-muted-foreground">
                    Training dates will be confirmed by our team after your payment has been received. You will be contacted directly with full details including the start date, location and what to bring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-2xl text-foreground mb-4">Course Details</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Live mine site training (not simulated) with a real mining company</li>
                <li>• Location: approximately 5–6 hours drive or 1 hour flight from Perth</li>
                <li>• Hands-on rigid haul truck operation in a real production environment</li>
                <li>• Limited places — secure yours below</li>
              </ul>
              <div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground bg-secondary/40 border border-border rounded-lg p-4">
                <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Travel, accommodation and food are not included.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl text-foreground mb-2">Book & Pay</h2>
              <p className="text-muted-foreground">Complete your booking and payment below to secure your place.</p>
            </div>
            <BookeoWidget course="3351MPEJXE18EE1709583" />
          </div>
        </div>
      </section>

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
                <a href="mailto:admin@cailintraining.com.au" className="text-primary hover:underline text-sm break-all">
                  admin@cailintraining.com.au
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
