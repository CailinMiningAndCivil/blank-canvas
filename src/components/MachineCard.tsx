import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MachineCardProps {
  title: string;
  code: string;
  description: string;
  image: string;
  link: string;
}

export const MachineCard = ({ title, code, description, image, link }: MachineCardProps) => {
  return (
    <Link
      to={link}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-primary text-sm font-medium mb-2">{code}</p>
        <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{description}</p>
        <span className="inline-flex items-center text-primary font-medium border border-primary rounded-lg px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          View Course <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
};
