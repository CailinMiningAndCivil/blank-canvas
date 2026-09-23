import { FileText, Target, RefreshCcw, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONNEX_URL = "https://resume.cailinconnex.com.au/";

const highlights = [
  {
    icon: Target,
    title: "ATS Compatibility Score",
    description: "See exactly how applicant tracking software reads your resume against the job ad.",
  },
  {
    icon: FileText,
    title: "Keyword Gap Analysis",
    description: "Find the role-specific keywords your resume is missing before you apply.",
  },
  {
    icon: RefreshCcw,
    title: "Optimised Rewrite",
    description: "Upgrade to a professionally optimised, ATS-formatted resume whenever you're ready.",
  },
];

export const ConnexSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Cailin Connex</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Free ATS Resume Check
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Applicant tracking software filters out most resumes before a recruiter ever opens them.
            Upload your resume, paste the job ad, and see exactly what the system sees — free.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="xl">
            <a href={CONNEX_URL} target="_blank" rel="noopener noreferrer">
              Check My Resume Free <ArrowRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary" />
            Free to check · Pay only for a professionally optimised rewrite
          </p>
        </div>
      </div>
    </section>
  );
};
