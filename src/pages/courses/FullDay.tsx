import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/ui/hero-image";
import { CheckCircle, Clock, ArrowRight, RefreshCw, Phone } from "lucide-react";

import loaderDumptruckAction from "@/assets/photos/loader-dumptruck-action.jpg";
import excavatorTraining1on1 from "@/assets/photos/excavator-training-1on1.jpg";

const returnTimeTable = [
  {
    machine: "Moxy (Articulated Dump Truck)",
    maxTime: "8 hours (1 day)",
    link: null,
  },
  {
    machine: "Excavator",
    maxTime: "16 hours (2 days)",
    link: null,
  },
  {
    machine: "Loader",
    maxTime: "8 hours (1 day)",
    link: null,
  },
  {
    machine: "Roller",
    maxTime: "4 hours (half day)",
    link: "/courses/short-courses",
    linkText: "See $600 Course",
  },
  {
    machine: "Watercart",
    maxTime: "4 hours (half day)",
    link: "/courses/short-courses",
    linkText: "See $600 Course",
  },
];

const features = [
  "1:1 personal instruction",
  "Live mine site training",
  "Nationally recognised qualification",
  "Work reference included",
  "Unlimited return training*",
  "100+ employer network access",
];

const FullDay = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={loaderDumptruckAction} alt="Loader and dump truck training on site" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Unlimited Return Training</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Full Day Course
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Master any single machine with unlimited return training. Train until you're fully confident 
              and job-ready — no rushing, no time limits.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-primary">$2,500</span>
              <span className="text-muted-foreground">per machine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Request Only Notice */}
      <section className="py-8 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <p className="text-foreground font-medium">
                This course is available by request only — contact us to enquire.
              </p>
            </div>
            <a 
              href="tel:0483951501" 
              className="text-primary font-semibold hover:underline"
            >
              0483 951 501
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">What's Included</h2>
              <ul className="space-y-4 mb-12">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Return Policy */}
              <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl text-foreground">Free Return Policy</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  With the Full Day course, you can return for free practice sessions up to the maximum 
                  training hours for each machine. Build real experience before your first job.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-foreground font-display text-sm">Machine</th>
                        <th className="text-left py-3 text-foreground font-display text-sm">Max Free Return Time</th>
                        <th className="py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {returnTimeTable.map((row) => (
                        <tr key={row.machine} className="border-b border-border/50">
                          <td className="py-3 text-foreground">{row.machine}</td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{row.maxTime}</span>
                            </div>
                          </td>
                          <td className="py-3 text-right">
                            {row.link && (
                              <Link 
                                to={row.link}
                                className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                              >
                                {row.linkText} <ArrowRight className="w-3 h-3" />
                              </Link>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  *Return training is subject to availability and must be booked in advance.
                </p>
              </div>

              {/* Image */}
              <img
                src={excavatorTraining1on1}
                alt="One-on-one excavator training"
                className="w-full rounded-2xl"
              />
            </div>

            {/* Right: CTA Card */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-8 sticky top-28">
                <h3 className="font-display text-2xl text-foreground mb-4">Interested in This Course?</h3>
                <p className="text-muted-foreground mb-6">
                  The Full Day course is available by request only. Get in touch with our team to discuss 
                  your training goals and we'll help you get started.
                </p>

                <div className="space-y-4">
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <Link to="/contact">
                      Contact Us to Enquire
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-muted-foreground text-sm">or call us directly</span>
                  </div>
                  
                  <Button asChild variant="heroOutline" size="lg" className="w-full">
                    <a href="tel:0483951501">
                      <Phone className="w-4 h-4 mr-2" />
                      0483 951 501
                    </a>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-display text-lg text-foreground mb-3">Quick Summary</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Price:</span>
                      <span className="text-primary font-semibold">$2,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duration:</span>
                      <span>Full day + free returns</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Format:</span>
                      <span>1-on-1 training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-foreground mb-4">Looking for Other Options?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We have training options for every budget and experience level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/courses/short-courses">$600 Courses</Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/courses/bundles">Training Bundles</Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FullDay;
