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

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const courseLinks = [
  { name: "All Courses", path: "/courses" },
  { name: "$600 Courses", path: "/courses/short-courses" },
  { name: "Bundles", path: "/courses/bundles" },
  { name: "Full Day", path: "/courses/full-day" },
  { name: "RPL (Assessments Only)", path: "/courses/rpl" },
  { name: "VOC (Verification)", path: "/courses/voc" },
];

const machineLinks = [
  { name: "Excavator", path: "/courses/excavator" },
  { name: "Wheel Loader", path: "/courses/wheel-loader" },
  { name: "Articulated Truck (Moxy)", path: "/courses/moxy" },
  { name: "Roller", path: "/courses/roller" },
  { name: "Watercart", path: "/courses/watercart" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
            <Link
              to="/"
              className={cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>
            
            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-1",
                location.pathname.startsWith("/courses")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}>
                Courses <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
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
                <p className="px-2 py-1.5 text-xs text-muted-foreground font-medium">Machine Courses</p>
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
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="https://live.cailintraining.com.au/affiliate-program"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm uppercase tracking-wider transition-colors duration-300 text-muted-foreground hover:text-foreground"
            >
              Affiliates
            </a>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0483951501" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
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
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Home
            </Link>
            
            {/* Courses Section */}
            <div className="space-y-2">
              <span className="font-medium text-lg uppercase tracking-wider text-foreground">
                Courses
              </span>
              <div className="pl-4 flex flex-col gap-2">
                {courseLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "font-medium text-base transition-colors duration-300",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <span className="text-xs text-muted-foreground mt-2 font-medium">Machine Courses</span>
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
              </div>
            </div>

            <a
              href="https://live.cailintraining.com.au/affiliate-program"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="font-medium text-lg uppercase tracking-wider transition-colors duration-300 text-muted-foreground hover:text-foreground"
            >
              Affiliates
            </a>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-4">
              <BookLink>Book Now</BookLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
