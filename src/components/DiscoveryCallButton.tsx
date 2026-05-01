import { useEffect, useRef, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slot } from "@radix-ui/react-slot";

interface DiscoveryCallButtonProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

const SCRIPT_SRC = "https://link.cailinminingcivil.com/js/form_embed.js";

export const DiscoveryCallButton = ({ children, asChild, className }: DiscoveryCallButtonProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const Comp = asChild ? Slot : "button";

  useEffect(() => {
    if (!open) return;

    // Inject the GHL embed script once after the iframe mounts
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Comp className={className}>{children}</Comp>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>Book Your Free Consultation</DialogTitle>
        </DialogHeader>
        <div ref={containerRef} className="px-2 pb-4 max-h-[80vh] overflow-y-auto">
          <iframe
            src="https://link.cailinminingcivil.com/widget/booking/piPnpnZ0UqdmekdW9Jsk"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
            scrolling="no"
            id="aHGnZe8ngh7CkTC1bmHF_1777611570281"
            title="Book a Discovery Call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
