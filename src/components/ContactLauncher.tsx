import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE_NUMBER = "0483951501";
const PHONE_DISPLAY = "0483 951 501";

/**
 * Floating launcher that lets visitors choose between live chat
 * (LeadConnector widget already loaded in index.html) or a phone call.
 * Hides the default LC chat bubble so this menu is the single entry point.
 */
export const ContactLauncher = () => {
  const [open, setOpen] = useState(false);

  // Hide default LC chat bubble; keep the widget mounted so we can open it on demand.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const style = document.createElement("style");
    style.setAttribute("data-contact-launcher", "true");
    style.innerHTML = `
      lc-chat-widget, chat-widget, #chat-widget, .lc-chat-widget,
      [id^="lc_chat_widget"], [class*="lc-chat"] {
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      lc-chat-widget.cml-open, chat-widget.cml-open {
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  const openChat = () => {
    setOpen(false);
    // Try to programmatically open the LeadConnector chat widget.
    const widget =
      document.querySelector("lc-chat-widget") ||
      document.querySelector("chat-widget");
    if (widget) {
      widget.classList.add("cml-open");
      // LC widget listens for a click on its internal launcher; simulate it.
      const btn = (widget as HTMLElement).shadowRoot?.querySelector(
        "button, [role='button']"
      ) as HTMLElement | null;
      btn?.click();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl bg-background/95 p-2 shadow-2xl border border-border backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col text-left">
              <span className="text-sm font-semibold text-foreground">Call us</span>
              <span className="text-xs text-muted-foreground">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <button
            type="button"
            onClick={openChat}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted transition-colors text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Live chat</span>
              <span className="text-xs text-muted-foreground">Reply in minutes</span>
            </span>
          </button>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-105",
          open && "rotate-90"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
