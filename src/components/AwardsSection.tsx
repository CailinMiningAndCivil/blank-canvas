import awardWreath1 from "@/assets/logos/award-wreath-1.png";
import awardWreath2 from "@/assets/logos/award-wreath-2.png";
import awardWreath3 from "@/assets/logos/award-wreath-3.png";

const awards = [
  {
    image: awardWreath1,
    title: "Business & Leadership",
    subtitle: "Award Winners 2024",
  },
  {
    image: awardWreath2,
    title: "National Crystal Vision",
    subtitle: "Award Winner 2025",
  },
  {
    image: awardWreath3,
    title: "WA Crystal Vision",
    subtitle: "Award Winners 2024",
  },
];

export const AwardsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">Award-Winning Training</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {awards.map((award) => (
            <div key={award.title} className="flex flex-col items-center text-center">
              <div className="relative w-[140px] h-[140px] md:w-[170px] md:h-[170px] flex items-center justify-center">
                <img
                  src={award.image}
                  alt={`${award.title} ${award.subtitle}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="relative z-10 px-4 pt-2">
                  <p className="font-display text-sm md:text-base text-primary font-bold leading-tight">
                    {award.title}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                    {award.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
