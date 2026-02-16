import React, { forwardRef } from "react";

/**
 * A link that navigates to the /book page using a full page reload
 * instead of React Router's client-side navigation.
 * This ensures the Bookeo widget script executes fresh each time.
 */
export const BookLink = forwardRef<
  HTMLAnchorElement,
  {
    course?: string;
    children: React.ReactNode;
    className?: string;
  }
>(({ course, children, className, ...props }, ref) => {
  const href = course ? `/book?course=${course}` : "/book";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <a ref={ref} href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
});

BookLink.displayName = "BookLink";
