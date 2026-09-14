import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

interface MachineCardProps {
  title: string;
  code: string;
  description: string;
  image: string;
  link: string;
  alt?: string;
  badge?: string;
}

export const MachineCard = ({ title, code, description, image, link, alt, badge }: MachineCardProps) => {
  const isExternal = link.startsWith("mailto:") || link.startsWith("http://") || link.startsWith("https://");
  const cardClasses = "group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300";
  const cardContent = (
    <>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={1024}
          height={768}
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
            ✨ {badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-primary text-sm font-medium mb-2">{code}</p>
        <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{description}</p>
        <span className="inline-flex items-center text-primary font-medium border border-primary rounded-lg px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {link.startsWith("mailto:") ? (
            <>
              Enquire by Email <Mail className="w-4 h-4 ml-2" />
            </>
          ) : (
            <>
              View Course <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={link}
        className={cardClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      to={link}
      className={cardClasses}
    >
      {cardContent}
    </Link>
  );
};
