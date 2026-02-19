import ctfLogo from "@/assets/logos/ctf-logo.svg";
import tafeCentralLogo from "@/assets/logos/tafe-central.svg";
import tafeSouthLogo from "@/assets/logos/tafe-south.svg";
import nrtLogo from "@/assets/logos/nrt-logo.png";
import cailinTrainingLogo from "@/assets/logos/cailin-training-logo.png";
import logo3 from "@/assets/logos/3.svg";
import nawicLogo from "@/assets/logos/nawic-logo.svg";
import chamberLogo from "@/assets/logos/chamber-of-commerce.svg";

const logos = [
  { src: ctfLogo, alt: "CTF Construction Training Fund" },
  { src: tafeCentralLogo, alt: "TAFE Central Region" },
  { src: tafeSouthLogo, alt: "TAFE South" },
  { src: nrtLogo, alt: "Nationally Recognised Training" },
  { src: cailinTrainingLogo, alt: "Cailin Training" },
  { src: logo3, alt: "Partner Logo" },
  { src: nawicLogo, alt: "NAWIC - National Association of Women in Construction" },
  { src: chamberLogo, alt: "Chamber of Commerce" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              PARTNERED FOR <span className="text-primary">SUCCESS</span>
            </h2>
          </div>

          {/* Logos grid */}
          <div className="flex flex-wrap justify-center items-center gap-10 w-full">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-center hover:scale-105 hover:opacity-100 opacity-90 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
