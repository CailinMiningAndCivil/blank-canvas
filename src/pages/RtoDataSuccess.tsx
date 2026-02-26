import { useEffect } from "react";

const REDIRECT_URL = "https://live.cailintraining.com.au/thankyougeneral";

const RtoDataSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content={`2;url=${REDIRECT_URL}`} />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground animate-pulse">Redirecting to thank you page...</p>
      </div>
    </>
  );
};

export default RtoDataSuccess;
