import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroImage } from "@/components/ui/hero-image";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Real Cailin photos
import workersSiteOffice from "@/assets/photos/workers-site-office.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0483 951 501",
    href: "tel:0483951501",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@cailinminingcivil.com",
    href: "mailto:info@cailinminingcivil.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Perth, Western Australia",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Sat: 7am - 5pm",
    href: null,
  },
];

const faqs = [
  {
    question: "How long does training take?",
    answer: "Training duration varies depending on the course and your experience level. We offer unlimited training hours, so you can practice until you're confident.",
  },
  {
    question: "What qualifications will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment issued by Cailin Training (RTO 46489), which is recognised by employers across Australia.",
  },
  {
    question: "Do you help with job placement?",
    answer: "Yes! We have 100+ affiliate employers. After completing your training, you'll have access to our recruitment portal with direct job referrals and references. 60% of our graduates secure employment.",
  },
  {
    question: "What if I already have experience?",
    answer: "We offer Recognition of Prior Learning (RPL) for experienced operators. This allows you to fast-track your qualification through competency assessment.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={workersSiteOffice} alt="Workers at site office" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about our training programs? Ready to book a consultation? 
              We're here to help you start your career in mining and civil construction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <info.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm mb-1">{info.title}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-card border-border"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-card border-border"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card border-border"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card border-border resize-none"
                    placeholder="Tell us about your training goals..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-card p-6 rounded-xl border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl border border-border text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation with our team. We'll answer all your questions and help 
              you choose the right training path for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="tel:0483951501">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0483 951 501
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
