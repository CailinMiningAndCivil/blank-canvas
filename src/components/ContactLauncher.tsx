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
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(PROMPT_DISMISSED_KEY)) return;
    const timer = setTimeout(() => setShowPrompt(true), 2500);
    const autoHide = setTimeout(() => {
      setShowPrompt(false);
      localStorage.setItem(PROMPT_DISMISSED_KEY, "1");
    }, 12500);
    return () => {
      clearTimeout(timer);
      clearTimeout(autoHide);
    };
  }, []);

  useEffect(() => {
    if (open && showPrompt) {
      setShowPrompt(false);
      localStorage.setItem(PROMPT_DISMISSED_KEY, "1");
    }
  }, [open, showPrompt]);

  const findWidget = (widgetId: string): HTMLElement | null => {
    // The LC loader script has data-widget-id + data-loader-instance.
    // The rendered <chat-widget> has data-loader-instance-id matching that instance.
    const script = document.querySelector(
      `script[data-widget-id="${widgetId}"]`
    ) as HTMLElement | null;
    const instance = script?.getAttribute("data-loader-instance");
    const widgets = Array.from(
      document.querySelectorAll("chat-widget, lc-chat-widget")
    ) as HTMLElement[];
    if (instance) {
      const match = widgets.find(
        (w) => w.getAttribute("data-loader-instance-id") === instance
      );
      if (match) return match;
    }
    return (
      widgets.find(
        (w) => w.getAttribute("widget-id") === widgetId || w.id?.includes(widgetId)
      ) || null
    );
  };

  const closeAllWidgets = () => {
    const all = Array.from(
      document.querySelectorAll("chat-widget, lc-chat-widget")
    ) as HTMLElement[];
    all.forEach((w) => w.classList.remove("cml-open"));
  };


  const openWidget = (widgetId: string) => {
    if (activeWidget === widgetId) {
      setOpen(false);
      return;
    }
    setOpen(false);
    setActiveWidget(widgetId);
    // Hide the other widget so only the chosen one is interactive/visible.
    closeAllWidgets();

    const target = findWidget(widgetId);
    if (!target) {
      console.warn("[ContactLauncher] widget not found for", widgetId);
      setActiveWidget(null);
      return;
    }
    target.classList.add("cml-open");

    const tryClick = (attempt = 0) => {
      const root = target.shadowRoot;
      const btn = root?.querySelector(
        "button, [role='button'], .chat-bubble, [class*='bubble'], [class*='launcher']"
      ) as HTMLElement | null;
      if (btn) {
        btn.click();
        return;
      }
      if (attempt < 20) setTimeout(() => tryClick(attempt + 1), 150);
    };
    tryClick();
  };

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    if (activeWidget) {
      // Return to the menu so they can pick the other option.
      closeAllWidgets();
      setActiveWidget(null);
      setOpen(true);
      return;
    }
    setOpen(true);
  };

  return (

    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl bg-background/95 p-2 shadow-2xl border border-border backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
          {activeWidget && (
            <div className="px-3 pt-1 text-xs font-medium text-muted-foreground">
              Choose another option
            </div>
          )}
          <button
            type="button"
            onClick={() => openWidget(CALL_WIDGET_ID)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted transition-colors text-left",
              activeWidget === CALL_WIDGET_ID && "bg-muted ring-1 ring-primary/30"
            )}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                Call us {activeWidget === CALL_WIDGET_ID && "(active)"}
              </span>
              <span className="text-xs text-muted-foreground">Request a live call</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => openWidget(CHAT_WIDGET_ID)}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted transition-colors text-left",
              activeWidget === CHAT_WIDGET_ID && "bg-muted ring-1 ring-primary/30"
            )}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                Live chat {activeWidget === CHAT_WIDGET_ID && "(active)"}
              </span>
              <span className="text-xs text-muted-foreground">Reply in minutes</span>
            </span>
          </button>
        </div>
      )}

      {showPrompt && (

        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setShowPrompt(false);
            localStorage.setItem(PROMPT_DISMISSED_KEY, "1");
          }}
          className="group relative mb-1 mr-1 animate-in fade-in slide-in-from-bottom-2"
          aria-label="Need help? Open contact options"
        >
          <div className="relative flex items-center gap-3 rounded-2xl bg-primary px-4 py-2.5 text-primary-foreground shadow-2xl">
            <span className="text-sm font-medium">Need help?</span>
            <span className="text-xs opacity-90">Chat or call us</span>
            <X className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
            <span
              className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-primary"
              aria-hidden="true"
            />
          </div>
        </button>
      )}

      <button
        type="button"
        aria-label={
          open
            ? "Close contact options"
            : activeWidget
            ? "Back to contact options"
            : "Open contact options"
        }
        onClick={handleToggle}
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
