import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SaturdayPopupProps {
  open?: boolean;
  onClose?: () => void;
}

export const SaturdayPopup = ({ open: controlledOpen, onClose }: SaturdayPopupProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const controlled = controlledOpen !== undefined;

  useEffect(() => {
    if (controlled) return;
    const timer = setTimeout(() => setInternalOpen(true), 1500);
    return () => clearTimeout(timer);
  }, [controlled]);

  const handleClose = () => {
    if (!controlled) setInternalOpen(false);
    onClose?.();
  };

  const isOpen = controlled ? controlledOpen : internalOpen;

  if (!isOpen) return null;

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
          aria-label="Close Saturday availability notice"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Now Available</span>
          </div>
          <h2 className="font-display text-2xl leading-tight">
            Courses Available All Saturdays
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-foreground text-base leading-relaxed">
            Training on your schedule — every Saturday, book a 1:1 live mine site
            session with the same trainer and same machines.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Same trainer, same machines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>Limited weekend spots available</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button asChild className="flex-1" onClick={handleClose}>
              <Link to="/courses">Book Now</Link>
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
