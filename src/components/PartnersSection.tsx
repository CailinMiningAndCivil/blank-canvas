import ctfLogo from "@/assets/logos/ctf.png";
import tafeCentralLogo from "@/assets/logos/tafe-central.png";
import tafeSouthLogo from "@/assets/logos/tafe-south.png";
import nrtLogo from "@/assets/logos/nrt.png";
import cailinTrainingLogo from "@/assets/logos/cailin-training-logo.png";
import partnerLogo from "@/assets/logos/partnerlogo.png";
import nawicLogo from "@/assets/logos/nawic.png";
import chamberLogo from "@/assets/logos/chamber-of-commerce.png";

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
          <div className="flex flex-wrap justify-evenly items-center gap-8 w-full py-4">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="w-[120px] sm:w-[140px] lg:w-[150px] h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
