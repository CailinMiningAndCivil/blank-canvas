import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import cailinLogo from "@/assets/cailin-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img 
                src={cailinLogo} 
                alt="Cailin Mining & Civil" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Australia's only award-winning 1:1 live mine site machine operator training provider based in Perth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Courses", "Careers", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/excavator" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Excavator Training
                </Link>
              </li>
              <li>
                <Link to="/courses/wheel-loader" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Wheel Loader
                </Link>
              </li>
              <li>
                <Link to="/courses/moxy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Articulated Truck (Moxy)
                </Link>
              </li>
              <li>
                <Link to="/courses/roller" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Roller
                </Link>
              </li>
              <li>
                <Link to="/courses/bundles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Training Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <a href="tel:0483951501" className="text-foreground hover:text-primary transition-colors">
                    0483 951 501
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href="mailto:info@cailinminingcivil.com" className="text-foreground hover:text-primary transition-colors">
                    info@cailinminingcivil.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground">Perth, Western Australia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cailin Mining & Civil. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Cailin Training (RTO 46489)
          </p>
        </div>
      </div>
    </footer>
  );
};
