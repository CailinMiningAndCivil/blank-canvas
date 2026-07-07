import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, GraduationCap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISCLAIMER_KEY = "cailin-disclaimer-accepted";

export const DisclaimerPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(DISCLAIMER_KEY);
    if (!accepted) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(DISCLAIMER_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div
        className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/60 hover:bg-background text-foreground transition-colors"
          aria-label="Close disclaimer notice"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Important Notice</span>
          </div>
          <h2 id="disclaimer-title" className="font-display text-2xl leading-tight">
            Training, Not Employment
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-foreground text-base leading-relaxed">
            Cailin Mining &amp; Civil is a <strong className="text-foreground">training company</strong>, not an employer. We deliver the most 1:1 seat time in the industry, with unlimited returns that give you genuine, workable experience and references for your resume.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>More 1:1 machine seat time than any other provider</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Unlimited returns to build real confidence and skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Training experience and references you can list on your resume</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>We guide and connect students toward work opportunities — we do not hire directly</span>
            </li>
          </ul>

          <div className="flex items-start gap-3 p-3 bg-secondary rounded-xl border border-border">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              If you are looking for a job placement, we recommend booking a consultation so we can discuss pathways and how our training can support your application.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button asChild variant="hero" className="flex-1" onClick={handleClose}>
              <Link to="/courses">View Courses</Link>
            </Button>
            <Button variant="outline" onClick={handleClose} className="flex-1">
              I Understand
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
