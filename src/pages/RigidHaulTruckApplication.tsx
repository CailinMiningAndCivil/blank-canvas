import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroImage } from "@/components/ui/hero-image";
import heroImage from "@/assets/photos/rigid-haul-truck.jpg";

const RigidHaulTruckApplication = () => {
  return (
    <Layout>
      <SEO
        title="Rigid Haul Truck Application | Cailin Mining & Civil"
        description="Apply for the Rigid Haul Truck Traineeship. Submit your details and supporting evidence for review."
        path="/rigid-haul-truck-application"
      />

      <section className="relative py-24 overflow-hidden">
        <HeroImage src={heroImage} alt="Rigid haul truck" overlayClassName="bg-background/85" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Rigid Haul Truck <span className="text-primary">Application</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Submit your application and supporting evidence below. Our team will review and contact approved applicants with a private booking link.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <iframe
                src="https://link.cailinminingcivil.com/widget/form/CrdwHldfXJHsaFElngw2"
                style={{ width: "100%", height: "775px", border: "none" }}
                id="inline-CrdwHldfXJHsaFElngw2"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Rigid Application Form"
                data-height="775"
                data-layout-iframe-id="inline-CrdwHldfXJHsaFElngw2"
                data-form-id="CrdwHldfXJHsaFElngw2"
                title="Rigid Application Form"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RigidHaulTruckApplication;
