import { useEffect, useRef, useState } from "react";

const ACCOUNT = "3351CC6YAJ18E89A53D33";

const BookeoWidgetInner = ({ course }: { course?: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [course]);

  const params = new URLSearchParams({ a: ACCOUNT });
  if (course) params.set("type", course);
  const src = `https://secure.bookeo.com/bookingfrm?${params.toString()}`;

  return (
    <div className="relative w-full overflow-visible rounded-lg border border-border bg-card">
      {isLoading && (
        <div className="absolute inset-x-0 top-0 z-0 flex min-h-[600px] items-center justify-center px-4 text-center text-muted-foreground">
          Loading booking calendar...
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title="Bookeo booking calendar"
        onLoad={() => setIsLoading(false)}
        className="relative z-10 block w-full border-0 bg-card"
        style={{ minHeight: 1100, height: 1100 }}
        scrolling="auto"
        allow="payment; clipboard-write"
      />
    </div>
  );
};

// Wrapper that forces full remount when course changes via key
export const BookeoWidget = ({ course }: { course?: string }) => {
  return <BookeoWidgetInner key={course} course={course} />;
};
