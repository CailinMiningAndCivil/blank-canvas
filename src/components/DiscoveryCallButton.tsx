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
      <DialogContent className="flex max-h-[94dvh] w-[calc(100vw-1rem)] max-w-4xl flex-col gap-0 overflow-hidden p-0 sm:w-full">
        <DialogHeader className="shrink-0 px-6 pt-6 pb-2">
          <DialogTitle>Book Your Free Consultation</DialogTitle>
        </DialogHeader>
        <div ref={containerRef} className="min-h-0 flex-1 overflow-y-auto px-2 pb-4">
          <iframe
            src="https://link.cailinminingcivil.com/widget/booking/piPnpnZ0UqdmekdW9Jsk"
            className="h-[82dvh] min-h-[760px] w-full"
            style={{ border: "none", overflow: "auto" }}
            scrolling="yes"
            id="aHGnZe8ngh7CkTC1bmHF_1777611570281"
            title="Book a Discovery Call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
