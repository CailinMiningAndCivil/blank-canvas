import cailinLogo from "@/assets/cailin-logo.svg";

const partners = [
  { name: "CTF Construction Training Fund", initials: "CTF" },
  { name: "TAFE WA Central Regional", initials: "TAFE" },
  { name: "TAFE WA South Regional", initials: "TAFE" },
  { name: "NAWIC", initials: "NAWIC" },
  { name: "Chamber of Commerce and Industry WA", initials: "CCI" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* CTF Logo */}
            <div className="flex items-center gap-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <div className="text-sm font-medium leading-tight">
                <span className="text-primary font-bold">CTF</span>
                <br />
                <span className="text-foreground/70 text-xs">Construction<br />Training Fund</span>
              </div>
            </div>

            {/* TAFE Central */}
            <div className="flex items-center gap-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              <span className="font-display text-lg font-bold text-foreground">
                TAFE <span className="text-primary text-xs align-top">WA</span>
              </span>
              <span className="text-foreground/70 text-xs leading-tight">Central<br />Regional</span>
            </div>

            {/* TAFE South */}
            <div className="flex items-center gap-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              <span className="font-display text-lg font-bold text-foreground">
                TAFE <span className="text-primary text-xs align-top">WA</span>
              </span>
              <span className="text-foreground/70 text-xs leading-tight">South<br />Regional</span>
            </div>

            {/* Cailin Logo */}
            <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
              <img src={cailinLogo} alt="Cailin Training" className="h-10 w-auto" />
              <span className="text-foreground/70 text-xs mt-1">Cailin Training RTO 46489</span>
            </div>

            {/* NAWIC */}
            <div className="flex items-center gap-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              <span className="font-display text-lg font-bold text-foreground">NAWIC</span>
            </div>

            {/* CCI WA */}
            <div className="flex items-center gap-1 text-foreground opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-foreground/70 text-xs leading-tight text-right">Chamber of Commerce<br />and Industry <span className="font-bold text-foreground">WA</span></span>
            </div>
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
