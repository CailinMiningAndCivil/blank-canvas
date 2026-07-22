import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const PROMPT_DISMISSED_KEY = "cml-help-prompt-dismissed";

const CHAT_WIDGET_ID = "678ec21d13097fe2db1b8d7f";
const CALL_WIDGET_ID = "6a5f050afd9ec29d7c9eb092";

/**
 * Floating launcher: choose between LeadConnector live chat or LC call widget.
 * Both LC widgets are loaded in index.html; we hide their default bubbles and
 * open the correct one on demand.
 */
export const ContactLauncher = () => {
  const [open, setOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const style = document.createElement("style");
    style.setAttribute("data-contact-launcher", "true");
    style.innerHTML = `
      chat-widget, lc-chat-widget {
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      chat-widget.cml-open, lc-chat-widget.cml-open {
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

  const openWidget = (widgetId: string) => {
    setOpen(false);
    const widgets = Array.from(
      document.querySelectorAll("chat-widget, lc-chat-widget")
    ) as HTMLElement[];
    const target = widgets.find(
      (w) => w.getAttribute("widget-id") === widgetId || w.id?.includes(widgetId)
    );
    if (!target) return;
    target.classList.add("cml-open");
    const btn = target.shadowRoot?.querySelector(
      "button, [role='button']"
    ) as HTMLElement | null;
    btn?.click();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl bg-background/95 p-2 shadow-2xl border border-border backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
          <button
            type="button"
            onClick={() => openWidget(CALL_WIDGET_ID)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted transition-colors text-left"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Call us</span>
              <span className="text-xs text-muted-foreground">Request a live call</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => openWidget(CHAT_WIDGET_ID)}
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
