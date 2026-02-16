import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface BookeoWidgetProps {
  accountId: string;
  course?: string;
}

export const BookeoWidget = ({ accountId, course }: BookeoWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!accountId || !containerRef.current) return;

    setIsLoading(true);

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create the bookeo_widget div that the script looks for
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'bookeo_widget';
    containerRef.current.appendChild(widgetDiv);

    // Create and inject the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    
    let scriptUrl = `https://bookeo.com/widget.js?a=${accountId}`;
    if (course) {
      scriptUrl += `&type=${course}`;
    }
    
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {
      // Give the widget a moment to render after script loads
      setTimeout(() => setIsLoading(false), 2000);
    };
    script.onerror = () => setIsLoading(false);
    
    containerRef.current.appendChild(script);

    // Fallback: hide loader after 10 seconds regardless
    const timeout = setTimeout(() => setIsLoading(false), 10000);

    return () => {
      clearTimeout(timeout);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [accountId, course]);

  if (!accountId) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <p className="text-muted-foreground">
          Booking widget is being configured. Please check back soon or call us to book.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-muted-foreground">Loading booking calendar...</p>
        </div>
      )}
      <div 
        ref={containerRef}
        className={`bookeo-container w-full ${isLoading ? 'min-h-0' : ''}`}
      />
    </div>
  );
};
