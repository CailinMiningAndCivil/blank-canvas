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
            <div key={award.title} className="flex flex-col items-center">
              <img
                src={award.image}
                alt={`${award.title} ${award.subtitle}`}
                className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
