import ctfLogo from "@/assets/logos/ctf-logo.png";
import nrtLogo from "@/assets/logos/nrt-logo.png";
import cailinTrainingLogo from "@/assets/logos/cailin-training-logo.png";
import nawicLogo from "@/assets/logos/nawic-logo.png";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <img src={ctfLogo} alt="CTF Construction Training Fund" className="h-16 md:h-20 w-auto object-contain" />
            <img src={nrtLogo} alt="Nationally Recognised Training" className="h-16 md:h-20 w-auto object-contain" />
            <img src={cailinTrainingLogo} alt="Cailin Training" className="h-16 md:h-20 w-auto object-contain" />
            <img src={nawicLogo} alt="NAWIC - National Association of Women in Construction" className="h-16 md:h-20 w-auto object-contain" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              PARTNERED FOR <span className="text-primary">SUCCESS</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
