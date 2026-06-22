import { useEffect, useRef, useState } from "react";

const ACCOUNT = "3351CC6YAJ18E89A53D33";

declare global {
  interface Window {
    bookeo_start?: () => void;
  }
}

const BookeoWidgetInner = ({ course }: { course?: string }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setLoadFailed(false);

    const widgetNode = widgetRef.current;
    if (!widgetNode) return;

    widgetNode.innerHTML = "";
    let active = true;

    const observer = new MutationObserver(() => {
      const iframe = widgetNode.querySelector("iframe");
      const hasError = widgetNode.textContent?.toLowerCase().includes("unauthorized ip address");
      if (iframe || hasError) setIsLoading(false);
    });

    observer.observe(widgetNode, { childList: true, subtree: true });

    const params = new URLSearchParams({ a: ACCOUNT });
    if (course) params.set("type", course);

    const script = document.createElement("script");
    script.src = `https://bookeo.com/widget.js?${params.toString()}`;
    script.async = true;
    script.onload = () => {
      if (!active) return;
      window.bookeo_start?.();
    };
    script.onerror = () => {
      if (!active) return;
      setIsLoading(false);
      setLoadFailed(true);
    };

    widgetNode.appendChild(script);

    return () => {
      active = false;
      observer.disconnect();
      widgetNode.innerHTML = "";
    };
  }, [course]);

  return (
    <div className="relative min-h-[900px] w-full overflow-visible rounded-lg border border-border bg-card p-0">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-muted-foreground">
          Loading booking calendar...
        </div>
      )}
      {loadFailed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-muted-foreground">
          The booking calendar couldn't load. Please refresh the page and try again.
        </div>
      )}
      <div id="bookeo_position" ref={widgetRef} className="w-full min-h-[900px] bg-card" />
    </div>
  );
};

// Wrapper that forces full remount when course changes via key
export const BookeoWidget = ({ course }: { course?: string }) => {
  return <BookeoWidgetInner key={course} course={course} />;
};
