import { useState } from "react";

// Maps Bookeo product type IDs to the standalone widget HTML pages in /public/bookeo.
// Each page contains a single Bookeo widget script — no React, no Layout — so
// Bookeo never sees "multiple copies of the widget" on the same page.
const PAGE_BY_TYPE: Record<string, string> = {
  "3351RT4KM419DB8B8E5C5": "/bookeo/moxy.html",
  "3351CXRKYN19DB8EDB768": "/bookeo/loader.html",
  "3351TY49AP19DB8F33801": "/bookeo/watercart.html",
  "3351LUU3UW19DB8F7B9C5": "/bookeo/roller.html",
  "3351LWH36P19DB8EF9BE4": "/bookeo/excavator.html",
};

export const BookeoWidget = ({ course }: { course?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const src = course ? PAGE_BY_TYPE[course] : undefined;

  if (!src) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-border bg-card p-6 text-center text-muted-foreground">
        Booking page not available for this machine. Please contact us.
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-white">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center text-muted-foreground">
          Loading booking calendar...
        </div>
      )}
      <iframe
        key={src}
        src={src}
        title="Bookeo booking calendar"
        onLoad={() => setIsLoading(false)}
        className="w-full"
        style={{ minHeight: 1100, height: 1100, border: 0, display: "block" }}
      />
    </div>
  );
};
