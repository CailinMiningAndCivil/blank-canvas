import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  src: string;
  alt?: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export const HeroImage = ({
  src,
  alt = "Hero background",
  className,
  overlayClassName = "bg-background/85",
  priority = true,
}: HeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Preload image
    const img = new Image();
    
    if (priority) {
      img.fetchPriority = "high";
    }
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.src = src;
    
    return () => {
      img.onload = null;
    };
  }, [src, priority]);

  return (
    <>
      {/* Shimmer placeholder */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-secondary to-muted" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      
      {/* Actual image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
        }}
        role="img"
        aria-label={alt}
      />
      
      {/* Overlay */}
      <div className={cn("absolute inset-0", overlayClassName)} />
    </>
  );
};
