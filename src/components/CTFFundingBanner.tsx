import { Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTFFundingBannerProps {
  variant?: "full" | "compact";
}

export const CTFFundingBanner = ({ variant = "full" }: CTFFundingBannerProps) => {
  if (variant === "compact") {
    return (
      <Link 
        to="/ctf-funding" 
        className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg hover:bg-primary/20 transition-colors"
      >
        <Banknote className="w-4 h-4 text-primary shrink-0" />
        <span className="text-sm text-foreground font-medium">CTF Funding Available</span>
      </Link>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <Banknote className="w-8 h-8 text-primary shrink-0" />
          <div>
            <p className="text-foreground font-semibold">Government Funding Available</p>
            <p className="text-muted-foreground text-sm">
              CTF (Construction Training Fund) funding may cover your training costs – ask us how
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="ml-0 md:ml-4">
            <Link to="/ctf-funding">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const CTFFundingBadge = () => {
  return (
    <Link 
      to="/ctf-funding" 
      className="bg-card border border-border rounded-xl p-4 text-center block hover:border-primary/50 transition-colors"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
        <Banknote className="w-6 h-6 text-primary" />
      </div>
      <p className="font-semibold text-foreground text-sm">CTF Funding</p>
      <p className="text-xs text-muted-foreground">May cover costs</p>
    </Link>
  );
};
