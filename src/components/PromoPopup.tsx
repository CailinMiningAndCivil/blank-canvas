import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PromoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("promoPopupDismissed") === "true") return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("promoPopupDismissed", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/60 hover:bg-background text-foreground transition-colors"
          aria-label="Close promotion"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Limited Time Offer</span>
          </div>
          <h2 className="font-display text-2xl leading-tight">
            Unlimited Free Returns
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-foreground text-base leading-relaxed">
            Book <span className="font-semibold">any bundle</span> and unlock{" "}
            <span className="font-semibold">unlimited free returns</span> on your training.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 flex items-center gap-3">
            <Timer className="h-5 w-5 text-primary shrink-0" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">
              Offer Ends 30th April 2026
            </span>
          </div>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>All bundles eligible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>No extra cost to come back and refresh</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button asChild className="flex-1" onClick={handleClose}>
              <Link to="/courses/bundles">View Bundles</Link>
            </Button>
            <Button variant="outline" onClick={handleClose} className="flex-1">
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
