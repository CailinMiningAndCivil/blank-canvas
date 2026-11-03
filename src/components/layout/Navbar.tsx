import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookLink } from "@/components/BookLink";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import cailinLogo from "@/assets/cailin-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CAILIN_CONNEX_URL = "https://resume.cailinconnex.com.au/";

const courseLinks = [
  { name: "All Courses", path: "/courses" },
  { name: "Short Courses", path: "/courses/short-courses" },
  { name: "Bundles", path: "/courses/bundles" },
  { name: "Full Day", path: "/courses/full-day" },
  { name: "Rigid Haul Truck 🆕", path: "/rigid-haul-truck-booking" },
  { name: "RPL (Assessments Only)", path: "/rpl" },
  { name: "VOC (Verification)", path: "/courses/voc" },
  { name: "Free Returns", path: "/free-returns" },
  { name: "Refresher / Hourly Training", path: "/refresher-training" },
];

const machineLinks = [
  { name: "Excavator", path: "/courses/excavator" },
  { name: "Wheel Loader", path: "/courses/wheel-loader" },
  { name: "Articulated Truck (Moxy)", path: "/courses/moxy" },
  { name: "Roller", path: "/courses/roller" },
  { name: "Watercart", path: "/courses/watercart" },
  { name: "Integrated Tool Carrier", path: "/courses/integrated-tool-carrier" },
  { name: "Rigid Haul Truck 🆕", path: "/rigid-haul-truck-booking" },
];

const trainingLinks = [
  { name: "Affiliates", path: "/affiliate" },
  { name: "Migration", path: "/migration" },
];

const aboutLinks = [
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
];

const contactLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Book a Private Call", path: "/privatecall" },
];

type MobileSection = "training" | "about" | "contact" | null;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<MobileSection>(null);
  const location = useLocation();

  const toggleSection = (section: Exclude<MobileSection, null>) =>
    setOpenSection((current) => (current === section ? null : section));

  const isTrainingActive =
    location.pathname.startsWith("/courses") ||
    location.pathname === "/affiliate" ||
    location.pathname === "/migration" ||
    location.pathname === "/rpl" ||
    location.pathname === "/rigid-haul-truck-booking" ||
    location.pathname === "/free-returns" ||
    location.pathname === "/refresher-training";

  const isAboutActive = ["/about", "/blog", "/faq"].some((p) =>
    location.pathname.startsWith(p)
  );

  const isContactActive = ["/contact", "/privatecall"].includes(
    location.pathname
  );

  const desktopLinkClass = (active: boolean) =>
    cn(
      "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  const desktopDropdownTriggerClass = (active: boolean) =>
    cn(
      "font-medium text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-1",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  const mobileLinkClass = (active: boolean) =>
    cn(
      "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  const mobileSubLinkClass = (active: boolean) =>
    cn(
      "font-medium text-base transition-colors duration-300",
      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top utility bar */}
      <div className="hidden lg:block border-b border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-8 gap-4 text-xs">
            <a
              href={CAILIN_CONNEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Free Resume Check →
            </a>
            <Link
              to="/free-returns"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Free Returns →
            </Link>
            <Link
              to="/refresher-training"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Refresher / Hourly →
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={cailinLogo}
              alt="Cailin Mining & Civil"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={desktopLinkClass(location.pathname === "/")}>
              Home
            </Link>

            {/* Training & Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={desktopDropdownTriggerClass(isTrainingActive)}
              >
                Training & Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <p className="px-2 py-1.5 text-xs text-muted-foreground font-medium">
                  Courses
                </p>
                {courseLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.path && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-border my-2" />
                <p className="px-2 py-1.5 text-xs text-muted-foreground font-medium">
                  Machine Courses
                </p>
                {machineLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer text-sm",
                        location.pathname === link.path && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-border my-2" />
                {trainingLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.path && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Career Resources — direct link to Cailin Connex */}
            <a
              href={CAILIN_CONNEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={desktopLinkClass(false)}
            >
              Career Resources
            </a>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={desktopDropdownTriggerClass(isAboutActive)}
              >
                About <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.path && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={desktopDropdownTriggerClass(isContactActive)}
              >
                Contact <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {contactLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className={cn(
                        "w-full cursor-pointer",
                        location.pathname === link.path && "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0483951501"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0483 951 501</span>
            </a>
            <Button asChild variant="hero" size="lg">
              <BookLink>Book Now</BookLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-y-auto transition-all duration-300",
            isOpen ? "max-h-[calc(100vh-5rem)] pb-6" : "max-h-0 overflow-hidden"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass(location.pathname === "/")}
            >
              Home
            </Link>

            {/* Training & Services Section */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => toggleSection("training")}
                className="flex items-center justify-between w-full font-medium text-lg uppercase tracking-wider text-foreground"
                aria-expanded={openSection === "training"}
              >
                Training & Services
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    openSection === "training" && "rotate-180"
                  )}
                />
              </button>
              {openSection === "training" && (
                <div className="pl-4 flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground font-medium">
                    Courses
                  </span>
                  {courseLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkClass(
                        location.pathname === link.path
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <span className="text-xs text-muted-foreground mt-2 font-medium">
                    Machine Courses
                  </span>
                  {machineLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-medium text-sm transition-colors duration-300",
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  {trainingLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkClass(
                        location.pathname === link.path
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Career Resources — direct link to Cailin Connex */}
            <a
              href={CAILIN_CONNEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass(false)}
            >
              Career Resources
            </a>

            {/* About Section */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => toggleSection("about")}
                className="flex items-center justify-between w-full font-medium text-lg uppercase tracking-wider text-foreground"
                aria-expanded={openSection === "about"}
              >
                About
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    openSection === "about" && "rotate-180"
                  )}
                />
              </button>
              {openSection === "about" && (
                <div className="pl-4 flex flex-col gap-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkClass(
                        location.pathname === link.path
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => toggleSection("contact")}
                className="flex items-center justify-between w-full font-medium text-lg uppercase tracking-wider text-foreground"
                aria-expanded={openSection === "contact"}
              >
                Contact
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    openSection === "contact" && "rotate-180"
                  )}
                />
              </button>
              {openSection === "contact" && (
                <div className="pl-4 flex flex-col gap-2">
                  {contactLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkClass(
                        location.pathname === link.path
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:0483951501"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0483 951 501</span>
            </a>
            <Button asChild variant="hero" size="lg" className="mt-2">
              <BookLink>Book Now</BookLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
