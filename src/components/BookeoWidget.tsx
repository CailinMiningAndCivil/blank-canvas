import { useEffect, useRef } from "react";

export const BookeoWidget = ({ course }: { course?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'bookeo_widget';
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://bookeo.com/widget.js?a=3351CC6YAJ18E89A53D33&type=${course}`;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [course]);

  return <div ref={containerRef} className="w-full min-h-[600px]" />;
};
