import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681adc6417c9f21e78eb992c.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c7055417f8b6e62837f76.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c711e417f8b04b5838075.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c6cc27fc2d2c38623b104.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04368796628e8d43c81e.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef3b5015b7fb.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba81bcc3fc813.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e730e4ce3c23a.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef28fb15b7f5.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e805b728667cb.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef54c315b7f7.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef22c615b7f6.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e7369d6e3c23b.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba8de8f3fc810.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba80d1e3fc80e.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef251315b7fa.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e043687966223d943c81c.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e7379d1e3c238.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73af9fe3c237.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8084b38667cc.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8004e88667c9.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e80c7248667ca.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef75b515b7f9.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436879662076c43c81d.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73288fe3c239.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860efe37b15b7f8.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04368796620fb143c81b.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8028be8667c8.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba8f6c43fc80f.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba813273fc812.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba858f43fc811.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba83a593fc814.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73b281e3c236.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c6bffa418b3236e88bc34.mp4",
];

const VideoCard = ({ src, onPlayChange }: { src: string; onPlayChange: (playing: boolean) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    const willPlay = !isPlaying;
    if (willPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(willPlay);
    onPlayChange(willPlay);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-card bg-card flex-shrink-0">
      <video
        ref={videoRef}
        className="w-full aspect-[9/16] object-cover"
        src={src}
        playsInline
        preload="metadata"
        onEnded={() => { setIsPlaying(false); onPlayChange(false); }}
      />
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'} bg-background/20 hover:bg-background/30 transition-colors group`}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          )}
        </div>
      </button>
    </div>
  );
};

export const VideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [anyVideoPlaying, setAnyVideoPlaying] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>();

  // Responsive: 1 on mobile, 2 on sm, 3 on md, 5 on lg+
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 5;
  }, []);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);

  const maxIndex = Math.max(0, videos.length - visibleCount);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [next]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Success Stories</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Hear From Our Graduates
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            aria-label="Next videos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {videos.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 16) / visibleCount}px)` }}
                >
                  <VideoCard src={src} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: Math.ceil(videos.length / visibleCount) }).map((_, i) => {
              const pageIndex = i * visibleCount;
              const isActive = currentIndex >= pageIndex && currentIndex < pageIndex + visibleCount;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(Math.min(pageIndex, maxIndex))}
                  className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
