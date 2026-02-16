import { useEffect, useRef } from "react";

const BookeoWidgetInner = ({ course }: { course?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any old Bookeo scripts
    document.querySelectorAll('script[src*="bookeo.com"]').forEach(s => s.remove());

    // Clear previous widget content
    const widgetDiv = document.getElementById('bookeo_widget');
    if (widgetDiv) widgetDiv.innerHTML = '';

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://bookeo.com/widget.js?a=3351CC6YAJ18E89A53D33&type=${course}&_=${Date.now()}`;
      containerRef.current.appendChild(script);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('script[src*="bookeo.com"]').forEach(s => s.remove());
      const w = document.getElementById('bookeo_widget');
      if (w) w.innerHTML = '';
    };
  }, [course]);

  return (
    <div ref={containerRef} className="w-full min-h-[600px]">
      <div id="bookeo_widget" style={{ position: 'relative', zIndex: 9999, backgroundColor: 'transparent' }} />
    </div>
  );
};

// Wrapper that forces full remount when course changes via key
export const BookeoWidget = ({ course }: { course?: string }) => {
  return <BookeoWidgetInner key={course} course={course} />;
};
