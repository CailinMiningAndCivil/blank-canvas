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
      window.bookeo_start?.();
      window.setTimeout(() => window.bookeo_start?.(), 150);
    };
    script.onerror = () => {
      setIsLoading(false);
      setLoadFailed(true);
    };

    widgetNode.appendChild(script);

    return () => {
      observer.disconnect();
      widgetNode.innerHTML = "";
    };
  }, [course]);

  return (
    <div className="relative w-full overflow-visible rounded-lg border border-border bg-card p-0">
      {isLoading && (
        <div className="flex min-h-[600px] items-center justify-center px-4 text-center text-muted-foreground">
          Loading booking calendar...
        </div>
      )}
      {loadFailed && (
        <div className="flex min-h-[320px] items-center justify-center px-4 text-center text-muted-foreground">
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
