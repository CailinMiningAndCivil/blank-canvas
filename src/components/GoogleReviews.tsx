import { useEffect } from "react";

export const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.cailinminingcivil.com/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Google Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            What Our Students Say
          </h2>
        </div>
        <iframe
          className="lc_reviews_widget"
          src="https://link.cailinminingcivil.com/reputation/widgets/review_widget/rHdckncf62VIX9k55LFy"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%" }}
          title="Google Reviews"
        />
      </div>
    </section>
  );
};
