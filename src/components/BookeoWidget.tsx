import { useEffect, useRef } from "react";

export const BookeoWidget = ({ course }: { course?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any previously injected script
    const oldScript = containerRef.current.querySelector('script');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://bookeo.com/widget.js?a=3351CC6YAJ18E89A53D33&type=${course}&_=${Date.now()}`;
    containerRef.current.appendChild(script);

    return () => {
      const s = containerRef.current?.querySelector('script');
      if (s) s.remove();
    };
  }, [course]);

  return (
    <div ref={containerRef} className="w-full min-h-[600px]">
      <div id="bookeo_widget" style={{ position: 'relative', zIndex: 9999 }} />
    </div>
  );
};
