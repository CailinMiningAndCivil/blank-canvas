import ctfLogo from "@/assets/logos/ctf-logo.svg";
import tafeCentralLogo from "@/assets/logos/tafe-central.svg";
import tafeSouthLogo from "@/assets/logos/tafe-south.svg";
import nrtLogo from "@/assets/logos/nrt-logo.png";
import cailinTrainingLogo from "@/assets/logos/cailin-training-logo.png";
import logo3 from "@/assets/logos/3.svg";
import nawicLogo from "@/assets/logos/nawic-logo.svg";
import chamberLogo from "@/assets/logos/chamber-of-commerce.svg";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-14">
            <img src={ctfLogo} alt="CTF Construction Training Fund" className="h-10 md:h-14 w-auto object-contain" />
            <img src={tafeCentralLogo} alt="TAFE Central Region" className="h-10 md:h-14 w-auto object-contain" />
            <img src={tafeSouthLogo} alt="TAFE South" className="h-10 md:h-14 w-auto object-contain" />
            <img src={cailinTrainingLogo} alt="Cailin Training" className="h-10 md:h-14 w-auto object-contain" />
            <img src={logo3} alt="Partner Logo" className="h-10 md:h-14 w-auto object-contain" />
            <img src={nrtLogo} alt="Nationally Recognised Training" className="h-10 md:h-14 w-auto object-contain" />
            <img src={nawicLogo} alt="NAWIC - National Association of Women in Construction" className="h-10 md:h-14 w-auto object-contain" />
            <img src={chamberLogo} alt="Chamber of Commerce" className="h-10 md:h-14 w-auto object-contain" />
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
