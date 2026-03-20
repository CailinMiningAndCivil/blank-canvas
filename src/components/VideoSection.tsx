import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">See It In Action</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Training on a Live Mine Site
          </h2>
        </div>
        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-card">
            <video
              ref={videoRef}
              className="w-full aspect-[9/16] object-cover"
              src="https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c6bffa418b3236e88bc34.mp4"
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
            />
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-background/20 hover:bg-background/30 transition-colors group"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-primary-foreground" />
                ) : (
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
