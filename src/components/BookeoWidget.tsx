import { useEffect, useRef, useState } from "react";

const BookeoWidgetInner = ({ course }: { course?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !positionRef.current) return;

    setIsLoading(true);
    setLoadFailed(false);

    // Remove any old Bookeo scripts
    document.querySelectorAll('script[src*="bookeo.com/widget.js"]').forEach(s => s.remove());

    // Bookeo's script looks for this exact id and injects the iframe into it.
    positionRef.current.innerHTML = '';

    const observer = new MutationObserver(() => {
      const iframe = positionRef.current?.querySelector('iframe');
      const text = positionRef.current?.textContent?.trim();
      const iframeHeight = Number(iframe?.getAttribute('height')) || iframe?.getBoundingClientRect().height || 0;

      if (iframe) {
        iframe.style.width = '100%';
        iframe.style.minWidth = '100%';
        iframe.setAttribute('title', 'Bookeo booking calendar');
      }

      if ((iframe && iframeHeight > 120) || text) {
        setIsLoading(false);
      }
    });

    observer.observe(positionRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['height', 'style'],
    });

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const params = new URLSearchParams({
        a: '3351CC6YAJ18E89A53D33',
        _: Date.now().toString(),
      });

      if (course) params.set('type', course);

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://bookeo.com/widget.js?${params.toString()}`;
      script.onerror = () => {
        setIsLoading(false);
        setLoadFailed(true);
      };
      containerRef.current.appendChild(script);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.querySelectorAll('script[src*="bookeo.com/widget.js"]').forEach(s => s.remove());
      if (positionRef.current) positionRef.current.innerHTML = '';
    };
  }, [course]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible rounded-lg border border-border bg-card">
      {isLoading && !loadFailed ? (
        <div className="absolute inset-x-0 top-0 z-0 flex min-h-[520px] items-center justify-center px-4 text-center text-muted-foreground">
          Loading booking calendar...
        </div>
      ) : null}
      {loadFailed ? (
        <div className="p-6 text-center text-muted-foreground">
          The booking calendar couldn't load. Please refresh the page and try again.
        </div>
      ) : null}
      <div
        id="bookeo_position"
        ref={positionRef}
        className={`relative z-10 w-full overflow-visible bg-card ${isLoading ? 'min-h-[520px]' : 'min-h-0'}`}
      />
    </div>
  );
};

// Wrapper that forces full remount when course changes via key
export const BookeoWidget = ({ course }: { course?: string }) => {
  return <BookeoWidgetInner key={course} course={course} />;
};
