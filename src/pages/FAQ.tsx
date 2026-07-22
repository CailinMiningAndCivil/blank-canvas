import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { faqSchema } from "@/lib/schemas";
import { HeroImage } from "@/components/ui/hero-image";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import machinesCollage from "@/assets/photos/machines-collage.png";

const faqs = [
  {
    question: 'What does "1:1" mean in mining and civil training?',
    answer:
      "\"1:1\" means one student working directly with one trainer for the entire session. You are the only person on that machine, so every minute of training is focused on your progress and skill level. This gives you far more hands-on seat time than group classes where several students share one trainer.",
  },
  {
    question: "Who offers 1:1 mining and civil training in Perth?",
    answer:
      "Cailin Mining & Civil offers 1:1 mining and civil training in Perth and across Western Australia. We deliver one-on-one instruction on live mine sites for excavators, wheel loaders, articulated dump trucks (moxy), rollers, watercarts and other machines.",
  },
  {
    question: "How is Cailin Mining & Civil different from other Perth training providers?",
    answer:
      "Cailin focuses on practical training on real mine sites rather than classroom or simulated-yard courses. Every session is 1:1 with an industry-experienced trainer, so you get direct coaching and maximum seat time. We also support students with resumes, references, employer lists and coaching calls to help you move into the industry.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="Mining & Civil Training FAQ | Cailin Mining & Civil Perth"
        description="Answers to common questions about 1:1 mining and civil training in Perth, who offers it, and how Cailin Mining & Civil differs from other training providers."
        path="/faq"
        jsonLd={faqSchema(faqs)}
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeroImage src={machinesCollage} alt="Mining and civil training machines" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Questions Answered</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Clear answers about 1:1 mining and civil training in Perth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-4xl text-foreground">Common Questions</h2>
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
    </Layout>
  );
};

export default FAQ;
