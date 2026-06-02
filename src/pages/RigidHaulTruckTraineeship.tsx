import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroImage } from "@/components/ui/hero-image";
import {
  Mountain,
  Users,
  FileCheck,
  ShieldCheck,
  Briefcase,
  Star,
  ArrowRight,
  AlertTriangle,
  Truck,
  Construction,
  Globe,
  Award,
  Target,
  CircleCheck,
} from "lucide-react";

import rigidHaulTruck from "@/assets/photos/rigid-haul-truck.jpg";

const keyInfo = [
  {
    icon: Mountain,
    title: "Live Mine Site Training",
    description: "Gain real-world experience on an active mine site, not a simulated environment.",
  },
  {
    icon: Users,
    title: "Limited Intake",
    description: "Places are extremely limited. Only suitable applicants will be selected.",
  },
  {
    icon: FileCheck,
    title: "Application Required",
    description: "All candidates must apply and be assessed before acceptance.",
  },
  {
    icon: ShieldCheck,
    title: "No Prior Rigid Haul Truck Experience",
    description: "You do not need previous rigid haul truck experience to apply.",
  },
  {
    icon: Briefcase,
    title: "Transferable Skills Considered",
    description: "Related experience and skills from other industries are valued.",
  },
  {
    icon: Target,
    title: "Selection Based on Suitability",
    description: "Applicants are reviewed on qualifications, experience, attitude, and overall fit.",
  },
];

const lookingFor = [
  { icon: Award, label: "HR Licence" },
  { icon: Truck, label: "Previous machine operating experience" },
  { icon: Construction, label: "Construction experience" },
  { icon: Mountain, label: "Civil experience" },
  { icon: Briefcase, label: "Heavy vehicle experience" },
  { icon: Globe, label: "Relevant overseas experience" },
  { icon: Star, label: "Transferable skills from related industries" },
  { icon: ShieldCheck, label: "Strong work ethic and willingness to learn" },
];

const selectionSteps = [
  {
    step: "01",
    title: "Submit Your Application",
    description:
      "Complete the application form below with your details, experience, and why you believe you are a suitable candidate.",
  },
  {
    step: "02",
    title: "Application Review",
    description:
      "Our team carefully reviews your experience, qualifications, and overall suitability for the program.",
  },
  {
    step: "03",
    title: "Further Assessment",
    description:
      "Suitable applicants may be contacted for additional assessment or an interview.",
  },
  {
    step: "04",
    title: "Selection & Next Steps",
    description:
      "Selected applicants will receive detailed information regarding the traineeship opportunity and commencement.",
  },
];

const RigidHaulTruckTraineeship = () => {
  useEffect(() => {
    const existing = document.getElementById("ghl-form-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "ghl-form-embed-script";
      script.src = "https://link.cailinminingcivil.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      const script = document.getElementById("ghl-form-embed-script");
      if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Rigid Haul Truck Traineeship | Cailin Mining & Civil"
        description="Apply for a rare rigid haul truck traineeship on a live mine site. Limited places. No prior experience required. Applications now open."
        path="/rigid-haul-truck-traineeship"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage
          src={rigidHaulTruck}
          alt="Rigid haul truck on a live mine site"
          overlayClassName="bg-background/80"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Pilot Program
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Australia's Only Rigid Haul Truck <span className="text-primary">Traineeship</span> You Can Pay to Attend
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-6">
              Train on a live mine site approximately 5 hours north of Perth and learn to operate rigid haul trucks in a real production mining environment.
              Places are extremely limited and applicants will be assessed before acceptance into the program.
            </p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto">
              No previous rigid haul truck experience is required, however applicants must demonstrate why they are a suitable candidate and capable of succeeding in a mining environment.
              Only successful applicants will be contacted and offered a place.
            </p>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Key Information
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about this exclusive traineeship opportunity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Who We Are Looking For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strong applicants may have one or more of the following. These are not mandatory, but may
                strengthen your application.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lookingFor.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium pt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Selection Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our selection process is designed to identify the most suitable candidates for this program.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {selectionSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="bg-card border border-border rounded-2xl p-6 relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg font-bold">
                      {step.step}
                    </div>
                    <ArrowRight className="hidden md:block w-5 h-5 text-primary/50" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">Important Notice</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Submitting an application does not guarantee acceptance into the program.</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>
                        Due to the limited number of places available, applicants will be assessed based on their
                        qualifications, experience, transferable skills and overall suitability.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>
                        Training will take place on a live mine site located approximately 5.5 hours from Perth.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <CircleCheck className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>
                        This is a pilot program and not all applicants will be accepted.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Apply Now
            </h2>
            <p className="text-muted-foreground">
              Complete the form below to submit your application for the Rigid Haul Truck Traineeship.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <iframe
                src="https://link.cailinminingcivil.com/widget/form/UT7WP0nsC6r4oALUoFND"
                style={{ width: "100%", border: "none" }}
                id="inline-UT7WP0nsC6r4oALUoFND"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Rigid Traineeship Form"
                data-height="921"
                data-layout-iframe-id="inline-UT7WP0nsC6r4oALUoFND"
                data-form-id="UT7WP0nsC6r4oALUoFND"
                title="Rigid Traineeship Form"
                className="min-h-[921px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RigidHaulTruckTraineeship;
