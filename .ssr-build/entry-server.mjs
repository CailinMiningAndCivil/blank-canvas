import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { useEffect, forwardRef, useState, useRef, useCallback } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLocation, Link, useSearchParams, useParams, useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { ChevronRight, Check, Circle, ChevronDown, Phone, X, Menu, CalendarCheck, Facebook, Instagram, Youtube, Mail, MapPin, ArrowRight, ChevronLeft, Pause, Play, Calendar, GraduationCap, ShieldCheck, CheckCircle, Users, Award, Clock, Briefcase, Banknote, RefreshCw, Zap, FileCheck, AlertCircle, TrendingUp, HelpCircle, Star, ArrowLeft, Tag, Target, Heart, XCircle, User, DollarSign, ExternalLink, Building2, Share2, Link2, Loader2, CheckCircle2, CreditCard, AlertTriangle, Car, Plane, BedDouble, HardHat } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { format } from "date-fns";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};
const BookLink = forwardRef(({ course, children, className, ...props }, ref) => {
  const href = course ? `/book?course=${course}` : "/book";
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href;
  };
  return /* @__PURE__ */ jsx("a", { ref, href, onClick: handleClick, className, ...props, children });
});
BookLink.displayName = "BookLink";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_50px_hsl(28_100%_50%_/_0.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary to-accent text-primary-foreground font-display text-lg tracking-wider uppercase shadow-glow hover:shadow-[0_0_60px_hsl(28_100%_50%_/_0.5)] hover:scale-105",
        heroOutline: "border-2 border-foreground/30 bg-transparent text-foreground hover:border-primary hover:text-primary font-display text-lg tracking-wider uppercase"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size: size2, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size: size2, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const cailinLogo = "/assets/cailin-logo-Dl6BZBfc.svg";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];
const courseLinks = [
  { name: "All Courses", path: "/courses" },
  { name: "$600 Courses", path: "/courses/short-courses" },
  { name: "Bundles", path: "/courses/bundles" },
  { name: "Full Day", path: "/courses/full-day" },
  { name: "Rigid Haul Truck 🆕", path: "/rigid-haul-truck-booking" },
  { name: "RPL (Assessments Only)", path: "/rpl" },
  { name: "VOC (Verification)", path: "/courses/voc" },
  { name: "Free Returns", path: "/free-returns" },
  { name: "Refresher / Hourly Training", path: "/refresher-training" }
];
const machineLinks = [
  { name: "Excavator", path: "/courses/excavator" },
  { name: "Wheel Loader", path: "/courses/wheel-loader" },
  { name: "Articulated Truck (Moxy)", path: "/courses/moxy" },
  { name: "Roller", path: "/courses/roller" },
  { name: "Watercart", path: "/courses/watercart" },
  { name: "Integrated Tool Carrier", path: "/courses/integrated-tool-carrier" },
  { name: "Rigid Haul Truck 🆕", path: "/rigid-haul-truck-booking" }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block border-b border-border/50 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end h-8 gap-4 text-xs", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/free-returns",
          className: "text-muted-foreground hover:text-primary transition-colors font-medium",
          children: "Free Returns →"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/refresher-training",
          className: "text-muted-foreground hover:text-primary transition-colors font-medium",
          children: "Refresher / Hourly →"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: cailinLogo,
            alt: "Cailin Mining & Civil",
            className: "h-12 w-auto"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-8", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              ),
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: cn(
              "font-medium text-sm uppercase tracking-wider transition-colors duration-300 flex items-center gap-1",
              location.pathname.startsWith("/courses") ? "text-primary" : "text-muted-foreground hover:text-foreground"
            ), children: [
              "Courses ",
              /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", className: "w-64", children: [
              courseLinks.map((link) => /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.path,
                  className: cn(
                    "w-full cursor-pointer",
                    location.pathname === link.path && "text-primary"
                  ),
                  children: link.name
                }
              ) }, link.path)),
              /* @__PURE__ */ jsx("div", { className: "border-t border-border my-2" }),
              /* @__PURE__ */ jsx("p", { className: "px-2 py-1.5 text-xs text-muted-foreground font-medium", children: "Machine Courses" }),
              machineLinks.map((link) => /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.path,
                  className: cn(
                    "w-full cursor-pointer text-sm",
                    location.pathname === link.path && "text-primary"
                  ),
                  children: link.name
                }
              ) }, link.path))
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/affiliate",
              className: cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                location.pathname === "/affiliate" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              ),
              children: "Affiliates"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/recruitment",
              className: "font-medium text-sm uppercase tracking-wider transition-colors duration-300 text-muted-foreground hover:text-foreground",
              children: "Careers"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/privatecall",
              className: cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                location.pathname === "/privatecall" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              ),
              children: "Private Call"
            }
          ),
          navLinks.slice(1).map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              to: link.path,
              className: cn(
                "font-medium text-sm uppercase tracking-wider transition-colors duration-300",
                location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              ),
              children: link.name
            },
            link.path
          ))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "0483 951 501" })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "lg:hidden p-2 text-foreground",
            onClick: () => setIsOpen(!isOpen),
            "aria-label": "Toggle menu",
            children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "lg:hidden overflow-y-auto transition-all duration-300",
            isOpen ? "max-h-[calc(100vh-5rem)] pb-6" : "max-h-0 overflow-hidden"
          ),
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 pt-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/",
                onClick: () => setIsOpen(false),
                className: cn(
                  "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                  location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                ),
                children: "Home"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-lg uppercase tracking-wider text-foreground", children: "Courses" }),
              /* @__PURE__ */ jsxs("div", { className: "pl-4 flex flex-col gap-2", children: [
                courseLinks.map((link) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: link.path,
                    onClick: () => setIsOpen(false),
                    className: cn(
                      "font-medium text-base transition-colors duration-300",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: link.name
                  },
                  link.path
                )),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground mt-2 font-medium", children: "Machine Courses" }),
                machineLinks.map((link) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: link.path,
                    onClick: () => setIsOpen(false),
                    className: cn(
                      "font-medium text-sm transition-colors duration-300",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: link.name
                  },
                  link.path
                ))
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/affiliate",
                onClick: () => setIsOpen(false),
                className: cn(
                  "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                  location.pathname === "/affiliate" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                ),
                children: "Affiliates"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/recruitment",
                onClick: () => setIsOpen(false),
                className: "font-medium text-lg uppercase tracking-wider transition-colors duration-300 text-muted-foreground hover:text-foreground",
                children: "Careers"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/privatecall",
                onClick: () => setIsOpen(false),
                className: cn(
                  "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                  location.pathname === "/privatecall" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                ),
                children: "Private Call"
              }
            ),
            navLinks.slice(1).map((link) => /* @__PURE__ */ jsx(
              Link,
              {
                to: link.path,
                onClick: () => setIsOpen(false),
                className: cn(
                  "font-medium text-lg uppercase tracking-wider transition-colors duration-300",
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                ),
                children: link.name
              },
              link.path
            )),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "mt-4", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) })
          ] })
        }
      )
    ] })
  ] });
};
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
function useLocationNoticeDialog() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
function LocationNoticeDialog({
  open,
  onOpenChange
}) {
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CalendarCheck, { className: "w-5 h-5 text-primary" }),
        "Appointment Required"
      ] }),
      /* @__PURE__ */ jsx(DialogDescription, { className: "pt-2 text-left", children: "We do not allow on-site visits or walk-ins. All visits must be by appointment or through course bookings." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pt-2", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsxs(Link, { to: "/book", onClick: () => onOpenChange(false), children: [
        /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4 mr-2" }),
        "Book a Course"
      ] }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          onClick: () => onOpenChange(false),
          className: "w-full",
          children: "Close"
        }
      )
    ] })
  ] }) });
}
const Footer = () => {
  const { open, setOpen } = useLocationNoticeDialog();
  return /* @__PURE__ */ jsxs("footer", { className: "bg-secondary border-t border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: cailinLogo,
              alt: "Cailin Mining & Civil",
              className: "h-10 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Australia's only award-winning 1:1 live mine site machine operator training provider based in Perth." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/CailinTraining", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/cailinminingciviltraining", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@CailinMiningCivil", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors", children: /* @__PURE__ */ jsx(Youtube, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@operatortrainingperth", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl text-foreground mb-6", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            ["Home", "Courses", "Careers", "About", "Contact"].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: item === "Home" ? "/" : `/${item.toLowerCase()}`,
                className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                children: item
              }
            ) }, item)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/free-returns",
                className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                children: "Free Returns"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/refresher-training",
                className: "text-muted-foreground hover:text-primary transition-colors text-sm",
                children: "Refresher / Hourly Training"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl text-foreground mb-6", children: "Our Courses" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/courses/excavator", className: "text-muted-foreground hover:text-primary transition-colors text-sm", children: "Excavator Training" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/courses/wheel-loader", className: "text-muted-foreground hover:text-primary transition-colors text-sm", children: "Wheel Loader" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/courses/moxy", className: "text-muted-foreground hover:text-primary transition-colors text-sm", children: "Articulated Truck (Moxy)" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/courses/roller", className: "text-muted-foreground hover:text-primary transition-colors text-sm", children: "Roller" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/courses/bundles", className: "text-muted-foreground hover:text-primary transition-colors text-sm", children: "Training Bundles" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl text-foreground mb-6", children: "Contact Us" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Phone" }),
                /* @__PURE__ */ jsx("a", { href: "tel:0483951501", className: "text-foreground hover:text-primary transition-colors", children: "0483 951 501" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Email" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-foreground hover:text-primary transition-colors", children: "info@cailinminingcivil.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Location" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setOpen(true),
                    className: "text-foreground hover:text-primary transition-colors cursor-pointer",
                    children: "Perth, Western Australia"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Cailin Mining & Civil. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-muted-foreground text-sm", children: [
          /* @__PURE__ */ jsx(Link, { to: "/termsandconditions", className: "hover:text-primary transition-colors", children: "Terms & Conditions" }),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsx(Link, { to: "/privacypolicy", className: "hover:text-primary transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ jsx("span", { children: "|" }),
          /* @__PURE__ */ jsx("span", { children: "Cailin Training (RTO 46489)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(LocationNoticeDialog, { open, onOpenChange: setOpen })
  ] });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const SITE_URL = "https://www.cailinminingcivil.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/social.jpg`;
const SEO = ({
  title,
  description,
  path,
  image,
  type = "website",
  publishedAt,
  jsonLd
}) => {
  const url2 = `${SITE_URL}${path}`;
  const ogImage = image ? image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}` : DEFAULT_IMAGE;
  const ldArray = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: url2 }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: url2 }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    publishedAt && /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedAt }),
    ldArray.map((ld, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(ld) }, i))
  ] });
};
const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.cailinminingcivil.com/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Google Reviews" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "What Our Students Say" })
    ] }),
    /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "lc_reviews_widget",
        src: "https://link.cailinminingcivil.com/reputation/widgets/review_widget/rHdckncf62VIX9k55LFy",
        frameBorder: "0",
        scrolling: "no",
        style: { minWidth: "100%", width: "100%" },
        title: "Google Reviews"
      }
    )
  ] }) });
};
const MachineCard = ({ title, code, description, image, link, alt, badge }) => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: link,
      className: "group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: alt || title,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          badge && /* @__PURE__ */ jsxs("span", { className: "absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg", children: [
            "✨ ",
            badge
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary text-sm font-medium mb-2", children: code }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-6 line-clamp-2", children: description }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-primary font-medium border border-primary rounded-lg px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: [
            "View Course ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ]
    }
  );
};
const ctfLogo = "/assets/ctf-Chte7ABx.png";
const tafeCentralLogo = "/assets/tafe-central-v4MYiceL.png";
const tafeSouthLogo = "/assets/tafe-south-hnUahM1V.png";
const nrtLogo = "/assets/nrt-wGgaqlk3.png";
const cailinTrainingLogo = "/assets/cailin-training-logo-DBwveD9Y.png";
const partnerLogo = "/assets/partnerlogo-CHvmp3EJ.png";
const nawicLogo = "/assets/nawic-NKdbf6IP.png";
const chamberLogo = "/assets/chamber-of-commerce-BY44GSxU.png";
const logos = [
  { src: ctfLogo, alt: "CTF Construction Training Fund" },
  { src: nrtLogo, alt: "Nationally Recognised Training" },
  { src: cailinTrainingLogo, alt: "Cailin Training" },
  { src: tafeCentralLogo, alt: "TAFE Central Region" },
  { src: tafeSouthLogo, alt: "TAFE South" },
  { src: partnerLogo, alt: "Partner Logo" },
  { src: nawicLogo, alt: "NAWIC - National Association of Women in Construction" },
  { src: chamberLogo, alt: "Chamber of Commerce" }
];
const PartnersSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-10", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl md:text-4xl text-foreground", children: [
      "PARTNERED FOR ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "SUCCESS" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-evenly items-center gap-8 w-full py-4", children: logos.map((logo) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-[120px] sm:w-[140px] lg:w-[150px] h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-center hover:scale-105 transition-transform duration-300",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo.src,
            alt: logo.alt,
            className: "max-h-full max-w-full object-contain brightness-0 invert"
          }
        )
      },
      logo.alt
    )) })
  ] }) }) });
};
const awardWreath1 = "/assets/award-wreath-1-BBm79wGd.png";
const awardWreath2 = "/assets/award-wreath-2-DPE7EVmI.png";
const awardWreath3 = "/assets/award-wreath-3-BgBkUzO_.png";
const awards = [
  {
    image: awardWreath1,
    title: "Business & Leadership",
    subtitle: "Award Winners 2024"
  },
  {
    image: awardWreath2,
    title: "National Crystal Vision",
    subtitle: "Award Winner 2025"
  },
  {
    image: awardWreath3,
    title: "WA Crystal Vision",
    subtitle: "Award Winners 2024"
  }
];
const AwardsSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-16 pb-[10px] bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-3", children: "Award-Winning Training" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-12 md:gap-20", children: awards.map((award) => /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: award.image,
        alt: `${award.title} ${award.subtitle}`,
        className: "w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain"
      }
    ) }, award.title)) })
  ] }) });
};
const videos = [
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681adc6417c9f21e78eb992c.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c7055417f8b6e62837f76.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c711e417f8b04b5838075.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c6cc27fc2d2c38623b104.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04368796628e8d43c81e.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef3b5015b7fb.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba81bcc3fc813.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e730e4ce3c23a.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef28fb15b7f5.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e805b728667cb.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef54c315b7f7.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef22c615b7f6.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e7369d6e3c23b.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba8de8f3fc810.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba80d1e3fc80e.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef251315b7fa.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e043687966223d943c81c.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e7379d1e3c238.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73af9fe3c237.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8084b38667cc.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8004e88667c9.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e80c7248667ca.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860ef75b515b7f9.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436879662076c43c81d.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73288fe3c239.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436b860efe37b15b7f8.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04368796620fb143c81b.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e04361a5e8028be8667c8.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba8f6c43fc80f.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba813273fc812.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba858f43fc811.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436038ba83a593fc814.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/686e0436000e73b281e3c236.mp4",
  "https://assets.cdn.filesafe.space/rHdckncf62VIX9k55LFy/media/681c6bffa418b3236e88bc34.mp4"
];
const VideoCard = ({ src, onPlayChange }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (!videoRef.current) return;
    const willPlay = !isPlaying;
    if (willPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(willPlay);
    onPlayChange(willPlay);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-card bg-card flex-shrink-0", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        ref: videoRef,
        className: "w-full aspect-[9/16] object-cover",
        src,
        playsInline: true,
        preload: "metadata",
        onEnded: () => {
          setIsPlaying(false);
          onPlayChange(false);
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: togglePlay,
        className: `absolute inset-0 flex items-center justify-center transition-opacity ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"} bg-background/20 hover:bg-background/30 transition-colors group`,
        "aria-label": isPlaying ? "Pause video" : "Play video",
        children: /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg", children: isPlaying ? /* @__PURE__ */ jsx(Pause, { className: "w-6 h-6 text-primary-foreground" }) : /* @__PURE__ */ jsx(Play, { className: "w-6 h-6 text-primary-foreground ml-1" }) })
      }
    )
  ] });
};
const VideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [anyVideoPlaying, setAnyVideoPlaying] = useState(false);
  const autoPlayRef = useRef();
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 5;
  }, []);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);
  const maxIndex = Math.max(0, videos.length - visibleCount);
  const next = useCallback(() => {
    setCurrentIndex((prev2) => prev2 >= maxIndex ? 0 : prev2 + 1);
  }, [maxIndex]);
  const prev = useCallback(() => {
    setCurrentIndex((prev2) => prev2 <= 0 ? maxIndex : prev2 - 1);
  }, [maxIndex]);
  useEffect(() => {
    if (anyVideoPlaying) {
      clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(next, 5e3);
    return () => clearInterval(autoPlayRef.current);
  }, [next, anyVideoPlaying]);
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Success Stories" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Hear From Our Graduates" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prev,
          className: "absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md",
          "aria-label": "Previous videos",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: next,
          className: "absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md",
          "aria-label": "Next videos",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "overflow-hidden",
          onTouchStart: handleTouchStart,
          onTouchEnd: handleTouchEnd,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex transition-transform duration-500 ease-in-out",
              style: {
                gap: "16px",
                transform: `translateX(calc(-${currentIndex} * (${100 / visibleCount}% + ${16 / visibleCount}px)))`
              },
              children: videos.map((src, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex-shrink-0",
                  style: { width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})` },
                  children: /* @__PURE__ */ jsx(VideoCard, { src, onPlayChange: setAnyVideoPlaying })
                },
                i
              ))
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1.5 mt-6", children: Array.from({ length: Math.ceil(videos.length / visibleCount) }).map((_, i) => {
        const pageIndex = i * visibleCount;
        const isActive = currentIndex >= pageIndex && currentIndex < pageIndex + visibleCount;
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setCurrentIndex(Math.min(pageIndex, maxIndex)),
            className: `w-2 h-2 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-muted-foreground/30"}`,
            "aria-label": `Go to page ${i + 1}`
          },
          i
        );
      }) })
    ] })
  ] }) });
};
const SaturdayPopup = ({ open, onClose }) => {
  if (!open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-300",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "saturday-title",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/60 hover:bg-background text-foreground transition-colors",
                "aria-label": "Close current offers notice",
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider", children: "Current Offers" })
              ] }),
              /* @__PURE__ */ jsx("h2", { id: "saturday-title", className: "font-display text-2xl leading-tight", children: "Current Offers" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "We are open Saturdays" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "All starter bundles get return for free" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 pt-2", children: [
                /* @__PURE__ */ jsx(Button, { asChild: true, className: "flex-1", onClick: onClose, children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "Book Now" }) }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onClose, className: "flex-1", children: "Maybe Later" })
              ] })
            ] })
          ]
        }
      )
    }
  );
};
const DISCLAIMER_KEY = "cailin-disclaimer-accepted";
const DisclaimerPopup = ({ open: controlledOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const controlled = controlledOpen !== void 0;
  useEffect(() => {
    if (controlled) return;
    const accepted = localStorage.getItem(DISCLAIMER_KEY);
    if (accepted) return;
    const timer = setTimeout(() => {
      setInternalOpen(true);
    }, 1e4);
    return () => clearTimeout(timer);
  }, [controlled]);
  const handleClose = () => {
    localStorage.setItem(DISCLAIMER_KEY, "true");
    if (!controlled) setInternalOpen(false);
    onClose == null ? void 0 : onClose();
  };
  const isOpen = controlled ? controlledOpen : internalOpen;
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 animate-in fade-in duration-300",
      onClick: handleClose,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "disclaimer-title",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleClose,
                className: "absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/60 hover:bg-background text-foreground transition-colors",
                "aria-label": "Close disclaimer notice",
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-primary to-primary/80 px-6 py-5 text-primary-foreground", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider", children: "Important Notice" })
              ] }),
              /* @__PURE__ */ jsx("h2", { id: "disclaimer-title", className: "font-display text-2xl leading-tight", children: "Training, Not Employment" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-foreground text-base leading-relaxed", children: [
                "Cailin Mining & Civil is a ",
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "training company" }),
                ", not an employer. We deliver the most 1:1 seat time in the industry, with unlimited returns that give you genuine, workable experience and references for your resume."
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "More 1:1 machine seat time than any other provider" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "Unlimited returns to build real confidence and skills" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "Training experience and references you can list on your resume" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary mt-0.5", children: "✓" }),
                  /* @__PURE__ */ jsx("span", { children: "We guide and connect students toward work opportunities — we do not hire directly" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-secondary rounded-xl border border-border", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "If you are looking for a job placement, we recommend booking a consultation so we can discuss pathways and how our training can support your application." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2 pt-2", children: [
                /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", className: "flex-1", onClick: handleClose, children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View Courses" }) }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleClose, className: "flex-1", children: "I Understand" })
              ] })
            ] })
          ]
        }
      )
    }
  );
};
const SCRIPT_SRC = "https://link.cailinminingcivil.com/js/form_embed.js";
const DiscoveryCallButton = ({ children, asChild, className }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const Comp = asChild ? Slot : "button";
  useEffect(() => {
    if (!open) return;
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Comp, { className, children }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "flex max-h-[94dvh] w-[calc(100vw-1rem)] max-w-4xl flex-col gap-0 overflow-hidden p-0 sm:w-full", children: [
      /* @__PURE__ */ jsx(DialogHeader, { className: "shrink-0 px-6 pt-6 pb-2", children: /* @__PURE__ */ jsx(DialogTitle, { children: "Book Your Free Consultation" }) }),
      /* @__PURE__ */ jsx("div", { ref: containerRef, className: "min-h-0 flex-1 overflow-y-auto px-2 pb-4", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://link.cailinminingcivil.com/widget/booking/piPnpnZ0UqdmekdW9Jsk",
          className: "h-[82dvh] min-h-[760px] w-full",
          style: { border: "none", overflow: "auto" },
          scrolling: "yes",
          id: "aHGnZe8ngh7CkTC1bmHF_1777611570281",
          title: "Book a Discovery Call"
        }
      ) })
    ] })
  ] });
};
const fleetLineupWide = "/assets/fleet-lineup-wide-DYk4PadJ.jpg";
const excavatorTraining1on1 = "/assets/excavator-training-1on1-C6EuEcRB.jpg";
const excavatorNew = "/assets/excavator-new-Bh_lA3rn.jpg";
const wheelloaderFullBucket = "/assets/wheelloader-full-bucket-Bp1onGh-.jpg";
const articulatedDumptruck = "/assets/articulated-dumptruck-ByxkJ-Mi.jpg";
const rollerNew = "/assets/roller-new-DDtww1C6.jpg";
const watercartNew = "/assets/watercart-new-jkrvNBMM.jpg";
const heroImage$1 = "/assets/rigid-haul-truck-SceO6l7y.jpg";
const features$2 = [
  {
    icon: Users,
    title: "1:1 Training",
    description: "Personal, 1:1 instruction — not 15 students to 1 trainer"
  },
  {
    icon: Award,
    title: "Live Mine Site",
    description: "Real training on a real site — not a concrete yard"
  },
  {
    icon: Clock,
    title: "Maximum Seat Time",
    description: "Full time purchased (no classroom) — not 30-60 minutes like typical providers"
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    description: "Only training recognised as work experience"
  }
];
const impactStats = [
  { value: "$180M+", label: "Income Generated for Students" },
  { value: "2,000+", label: "Students Trained" },
  { value: "60%", label: "Employment Rate" },
  { value: "100+", label: "Affiliate Employers" }
];
const individualMachines$1 = [
  {
    id: "excavator",
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorNew,
    link: "/courses/excavator"
  },
  {
    id: "wheel-loader",
    title: "Front End Loader Ticket",
    code: "RIIMPO304E",
    description: "Master wheeled front-end loader operations for mining and construction roles.",
    image: wheelloaderFullBucket,
    link: "/courses/wheel-loader"
  },
  {
    id: "moxy",
    title: "Moxy Training Perth — Articulated Dump Truck",
    code: "RIIMPO337E",
    description: "Live mine site moxy training in Perth for articulated haul truck operations. Essential for mining and civil sites.",
    image: articulatedDumptruck,
    link: "/courses/moxy-training-perth",
    alt: "Moxy training Perth — articulated dump truck on live mine site"
  },
  {
    id: "roller",
    title: "Roller Ticket",
    code: "RIIMPO317F",
    description: "Roller operator certification for compaction work in construction and road building.",
    image: rollerNew,
    link: "/courses/roller"
  },
  {
    id: "watercart",
    title: "Watercart Ticket",
    code: "RIIMPO206D",
    description: "Bulk water truck operations training for dust suppression and site maintenance.",
    image: watercartNew,
    link: "/courses/watercart"
  },
  {
    id: "rigid-haul-truck",
    title: "Rigid Haul Truck Training",
    code: "Live Mine Site Traineeship",
    description: "Australia's only rigid haul truck traineeship you can pay to attend. Train on a live mine site and learn to operate rigid haul trucks in a real production mining environment.",
    image: heroImage$1,
    link: "/rigid-haul-truck-traineeship",
    alt: "Rigid haul truck training on a live mine site",
    badge: "New"
  }
];
const SATURDAY_POPUP_KEY = "cailin-saturday-popup-shown";
const Index = () => {
  const [saturdayOpen, setSaturdayOpen] = useState(false);
  const handleDisclaimerClose = () => {
    if (!localStorage.getItem(SATURDAY_POPUP_KEY)) {
      setSaturdayOpen(true);
    }
  };
  const handleSaturdayClose = () => {
    setSaturdayOpen(false);
    localStorage.setItem(SATURDAY_POPUP_KEY, "true");
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(DisclaimerPopup, { onClose: handleDisclaimerClose }),
    /* @__PURE__ */ jsx(SaturdayPopup, { open: saturdayOpen, onClose: handleSaturdayClose }),
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Cailin Mining & Civil | Machine Operator Training Perth",
        description: "Australia's only award-winning 1:1 live mine site machine operator training. Get nationally recognised qualifications with unlimited training hours in Perth.",
        path: "/",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cailin Mining & Civil",
            url: "https://www.cailinminingcivil.com",
            telephone: "+61483951501",
            email: "info@cailinminingcivil.com",
            image: "https://www.cailinminingcivil.com/images/social.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Perth",
              addressRegion: "WA",
              addressCountry: "AU"
            },
            areaServed: "Western Australia",
            description: "Australia's only award-winning 1:1 live mine site machine operator training. Nationally recognised qualifications delivered by Cailin Training (RTO 46489)."
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Cailin Mining & Civil",
            url: "https://www.cailinminingcivil.com"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          preload: "auto",
          "aria-hidden": "true",
          className: "absolute inset-0 w-full h-full object-cover",
          src: "https://storage.googleapis.com/msgsndr/rHdckncf62VIX9k55LFy/media/698d915dcfbcd7fc23808e29.mp4"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "The Only 1:1 Training on a Live Mine Site" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight", children: [
          "Real Training.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Real Site." }),
          /* @__PURE__ */ jsx("br", {}),
          "Real Results."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10", children: "Join 2,000+ graduates who've launched their mining & civil careers. 60% employment rate." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View Courses" }) }),
          /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "heroOutline", size: "xl", children: "Book Free Consultation" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-12 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-2", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-3 bg-primary rounded-full" }) }) })
    ] }),
    /* @__PURE__ */ jsx(AwardsSection, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features$2.map((feature, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group",
        style: { animationDelay: `${index * 100}ms` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: feature.description })
        ]
      },
      feature.title
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: impactStats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-4xl md:text-5xl text-primary mb-2", children: stat.value }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm md:text-base", children: stat.label })
    ] }, stat.label)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Who We Are" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Expert Training for Mining & Civil Careers" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-6 leading-relaxed", children: "The only machine training provider in Perth offering 1:1 training on a live mine site. We specialise in delivering civil construction and mining machinery training with job placement assistance." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-8", children: [
          "Practical, job-ready experience on live mine sites",
          "Nationally recognised qualifications",
          "Unlimited training hours to build confidence",
          "Direct job placement assistance",
          "Recognition of Prior Learning (RPL) available"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/about", className: "group", children: [
          "Learn More About Us",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: excavatorTraining1on1,
            alt: "1:1 excavator training with trainer instructing student in cab",
            className: "rounded-2xl shadow-card w-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-4xl", children: "2,000+" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Graduates" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Why We're Different" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Cailin vs Typical Providers" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full bg-card border border-border rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-secondary", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-5 text-muted-foreground font-medium", children: "Typical Providers" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-5 text-primary font-display text-lg", children: "Cailin Mining & Civil" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-5 text-muted-foreground", children: "Up to 9 students per trainer" }),
            /* @__PURE__ */ jsx("td", { className: "p-5 text-foreground font-medium", children: "✓ 1:1 dedicated training" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-5 text-muted-foreground", children: "30-60 minutes seat time" }),
            /* @__PURE__ */ jsx("td", { className: "p-5 text-foreground font-medium", children: "✓ Full time purchased (no classroom)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-5 text-muted-foreground", children: "Training in a concrete yard" }),
            /* @__PURE__ */ jsx("td", { className: "p-5 text-foreground font-medium", children: "✓ Training on a live mine site" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-5 text-muted-foreground", children: "Certificate only" }),
            /* @__PURE__ */ jsx("td", { className: "p-5 text-foreground font-medium", children: "✓ 1:1 free coaching calls with Niamh, free resume update, references, list of employers to build experience" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "What We Offer" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Training Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Get certified on industry-standard machinery with 1:1 experience on a live mine site." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: individualMachines$1.map((machine) => /* @__PURE__ */ jsx(
        MachineCard,
        {
          title: machine.title,
          code: machine.code,
          description: machine.description,
          image: machine.image,
          link: machine.link,
          alt: machine.alt
        },
        machine.id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View All Courses" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: fleetLineupWide,
          alt: "Mining training Perth — fleet of heavy machinery on live mine site",
          className: "rounded-2xl shadow-card w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Mining Training Perth" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Get Your Mining Tickets in Perth" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg mb-6 leading-relaxed", children: [
          "Looking for ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "mine training in Perth" }),
          "? Cailin Mining & Civil is Western Australia's leading provider of hands-on mining training in Perth, delivering nationally recognised certifications on a live mine site — not a car park."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg mb-6 leading-relaxed", children: [
          "Our ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "mining tickets Perth" }),
          " courses cover excavators, front-end loaders, articulated dump trucks, rollers, and watercarts. Every certification is issued under the national RII training package, recognised by employers across Australia."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: [
          "Excavator ticket (RIIMPO320F & RIIMPO301E)",
          "Front End Loader ticket (RIIMPO304E)",
          "Articulated Dump Truck / Moxy ticket (RIIMPO337E)",
          "Roller ticket (RIIMPO317F)",
          "Watercart ticket (RIIMPO206D)"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View All Mining Tickets" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(PartnersSection, {}),
    /* @__PURE__ */ jsx(GoogleReviews, {}),
    /* @__PURE__ */ jsx(VideoSection, {}),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-r from-primary/20 to-accent/20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: "Ready to Start Your Career?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-10", children: "Book a free consultation to learn how we can help you get started in the mining and civil industry." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Book Free Consultation" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsx("a", { href: "tel:0483951501", children: "Call 0483 951 501" }) })
      ] })
    ] }) })
  ] });
};
const HeroImage = ({
  src,
  alt = "Hero background",
  className,
  overlayClassName = "bg-background/85",
  priority = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const img = new Image();
    if (priority) {
      img.fetchPriority = "high";
    }
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
    return () => {
      img.onload = null;
    };
  }, [src, priority]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "absolute inset-0 transition-opacity duration-700",
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-muted via-secondary to-muted" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-shimmer",
              style: {
                backgroundSize: "200% 100%"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        ),
        style: {
          backgroundImage: imageSrc ? `url(${imageSrc})` : void 0
        },
        role: "img",
        "aria-label": alt
      }
    ),
    /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", overlayClassName) })
  ] });
};
const CTFFundingBanner = ({ variant = "full" }) => {
  if (variant === "compact") {
    return /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/ctf-funding",
        className: "flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg hover:bg-primary/20 transition-colors",
        children: [
          /* @__PURE__ */ jsx(Banknote, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground font-medium", children: "CTF Funding Available" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
    /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF (Construction Training Fund) funding may cover your training costs – ask us how" })
    ] }),
    /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
  ] }) }) });
};
const fullDayHero = "/assets/full-day-hero-cH-rd0ez.jpg";
const bundlesHero = "/assets/bundles-hero-BRH4mLEF.png";
const machinesCollage = "/assets/machines-collage-BZDKjJzi.png";
const loaderDumptruckAction = "/assets/loader-dumptruck-action-Nnvvricm.jpg";
const excavatorOperation = "/assets/excavator-operation-sSqGiUQZ.jpg";
const rollerArtistic = "/assets/roller-artistic-DSwbOS3H.jpg";
const version = 1;
const asset_id = "58692914-054b-4c68-a3e3-8868b7f50b08";
const project_id = "394498f4-8e2d-4aa1-93aa-f4b1bc29521d";
const url = "/__l5e/assets-v1/58692914-054b-4c68-a3e3-8868b7f50b08/integrated-tool-carrier.jpg";
const r2_key = "a/v1/394498f4-8e2d-4aa1-93aa-f4b1bc29521d/58692914-054b-4c68-a3e3-8868b7f50b08/integrated-tool-carrier.jpg";
const original_filename = "integrated-tool-carrier.jpg";
const size = 102546;
const content_type = "image/jpeg";
const created_at = "2026-07-13T06:40:43Z";
const itcAsset = {
  version,
  asset_id,
  project_id,
  url,
  r2_key,
  original_filename,
  size,
  content_type,
  created_at
};
const rplPageHero = "/assets/rpl-page-hero-Dre0lqd4.png";
const vocPageHero = "/assets/voc-page-hero-C5vX4k-e.png";
const courseCategories = [
  {
    id: "full-day",
    title: "Full Day Course",
    subtitle: "Unlimited Return Training",
    description: "Master any single machine with unlimited return sessions. Train until you're fully confident — no rushing, no time limits.",
    price: "Starts at $1,200",
    priceNote: "Includes Return for Free eligibility",
    image: fullDayHero,
    link: "/courses/full-day",
    features: ["Return for Free eligibility*", "1:1 instruction", "Live mine site training"],
    icon: RefreshCw
  },
  {
    id: "traineeship",
    title: "Traineeship Style Training",
    subtitle: "By Application Only",
    description: "Longer-duration courses delivered in a live production environment with a mining company. 1 hour flight or 5–6 hour drive from Perth. By application only.",
    price: "Apply",
    priceNote: "Live mine site placement",
    image: heroImage$1,
    link: "/rigid-haul-truck-traineeship",
    features: ["Live production environment", "Extended duration training", "Application required"],
    icon: Briefcase
  },
  {
    id: "short-courses",
    title: "$600 Courses",
    subtitle: "Quick Certification",
    description: "Get a recognised national qualification in just 1.5 hours initial. Perfect for career exploration.",
    price: "$600",
    priceNote: "per machine",
    image: machinesCollage,
    link: "/courses/short-courses",
    features: ["1.5 hours initial", "National qualification", "Upgrade options available"],
    icon: Zap
  },
  {
    id: "bundles",
    title: "Starter Bundles",
    subtitle: "Multi-Ticket Programs",
    description: "Double or triple your employment opportunities. Get 1:1 training on a live mine site. Does not include Return for Free eligibility.",
    price: "$2,500",
    priceNote: "CTF Funding Available",
    image: bundlesHero,
    link: "/courses/bundles",
    features: ["2-3x more employable", "1:1 instruction", "Multiple certifications"],
    icon: Users
  },
  {
    id: "rpl",
    title: "Assessments Only (RPL)",
    subtitle: "Already Experienced?",
    description: "Turn your prior industry experience, expired machine tickets, or international qualifications into recognised Australian qualifications.",
    price: "$350*",
    priceNote: "per machine assessment",
    image: rplPageHero,
    link: "/rpl",
    features: ["Fast-track certification", "No training required", "Valid nationwide"],
    icon: FileCheck
  },
  {
    id: "voc",
    title: "Verification of Competency",
    subtitle: "Already Qualified?",
    description: "Verify your existing competency. Perfect for those with existing qualifications wanting to boost employability.",
    price: "Quick Assessment",
    priceNote: "~30 minutes",
    image: vocPageHero,
    link: "/courses/voc",
    features: ["30-minute assessment", "Professional reference", "Boost your CV"],
    icon: Award
  }
];
const individualMachines = [
  {
    id: "excavator",
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorOperation,
    link: "/courses/excavator"
  },
  {
    id: "wheel-loader",
    title: "Front End Loader Ticket",
    code: "RIIMPO304E",
    description: "Master wheeled front-end loader operations for mining and construction roles.",
    image: wheelloaderFullBucket,
    link: "/courses/wheel-loader"
  },
  {
    id: "moxy",
    title: "Moxy Training Perth — Articulated Dump Truck",
    code: "RIIMPO337E",
    description: "Live mine site moxy training in Perth for articulated haul truck operations. 1:1 instruction with job placement.",
    image: articulatedDumptruck,
    link: "/courses/moxy",
    alt: "Moxy training Perth — articulated dump truck on live mine site"
  },
  {
    id: "rigid-haul-truck",
    title: "Rigid Haul Truck Training",
    code: "Live Mine Site Traineeship",
    description: "Australia's only rigid haul truck traineeship you can pay to attend. Train on a live mine site in a real production environment.",
    image: heroImage$1,
    link: "/rigid-haul-truck-traineeship",
    alt: "Rigid haul truck training on a live mine site",
    badge: "New"
  },
  {
    id: "roller",
    title: "Roller Ticket",
    code: "RIIMPO317F",
    description: "Roller operator certification for compaction work in construction and road building.",
    image: rollerArtistic,
    link: "/courses/roller"
  },
  {
    id: "watercart",
    title: "Watercart Ticket",
    code: "RIIMPO206D",
    description: "Bulk water truck operations training for dust suppression and site maintenance.",
    image: watercartNew,
    link: "/courses/watercart"
  },
  {
    id: "integrated-tool-carrier",
    title: "Integrated Tool Carrier",
    code: "RIIHAN311F",
    description: "$600 short course covering safe fork attachment operation on an Integrated Tool Carrier. Loader qualification required.",
    image: itcAsset.url,
    link: "/courses/integrated-tool-carrier",
    alt: "Integrated Tool Carrier with fork attachment"
  }
];
const features$1 = [
  {
    icon: Users,
    title: "1:1 Training",
    description: "Personal, 1:1 instruction — not 15 students to 1 trainer"
  },
  {
    icon: Award,
    title: "Live Mine Site",
    description: "Real training on a real site — not a concrete yard"
  },
  {
    icon: Clock,
    title: "Maximum Seat Time",
    description: "Full time purchased (no classroom) — not 30-60 minutes like typical providers"
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    description: "Only training recognised as work experience"
  }
];
const Courses = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Machine Operator Courses Perth | Cailin Mining & Civil",
        description: "Nationally recognised machine operator courses in Perth. Excavator, loader, moxy, roller and watercart training with 1:1 live mine site instruction.",
        path: "/courses"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: loaderDumptruckAction, alt: "Loader and dumptruck in action on site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Training Programs" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Machine Operator Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Get nationally recognised qualifications with training options to suit every experience level. From complete beginners to experienced operators seeking certification." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(CTFFundingBanner, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features$1.map((feature, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group",
        style: { animationDelay: `${index * 100}ms` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: feature.description })
        ]
      },
      feature.title
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Choose Your Path" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Select the training option that matches your experience level and career goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: courseCategories.map((category) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: category.link,
          className: "group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-card",
          children: [
            category.image && /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: category.image,
                  alt: category.id === "short-courses" ? "Moxy training Perth — articulated dump truck course" : category.id === "bundles" ? "Mining and civil training course bundles" : category.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(category.icon, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "text-primary font-medium text-sm", children: category.subtitle })
              ] }) })
            ] }),
            !category.image && /* @__PURE__ */ jsx("div", { className: "h-48 bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsx(category.icon, { className: "w-16 h-16 text-primary/50" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors", children: category.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4", children: category.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-primary/10 px-3 py-1 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: category.price }) }),
                /* @__PURE__ */ jsx("div", { className: "bg-secondary px-3 py-1 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: category.priceNote }) })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6", children: category.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: feature })
              ] }, feature)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-primary font-medium", children: [
                "Learn more about this training option ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
              ] })
            ] })
          ]
        },
        category.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Which Option Is Right for You?" }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full bg-card border border-border rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-foreground font-display", children: "Option" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-foreground font-display", children: "Best For" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-foreground font-display", children: "Duration" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-foreground font-display", children: "Price" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: "Full Day Course" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Single machine mastery with Return for Free eligibility" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Unlimited returns*" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-primary font-semibold", children: "Starts at $1,200" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: "$600 Courses" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Career exploration or quick certification" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "1.5 hours initial" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-primary font-semibold", children: "$600" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: "Starter Bundles" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "2-3x more employable — no Return for Free" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Set hours per machine" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-primary font-semibold", children: "$2,500" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: "RPL" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Experienced operators needing certification" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Assessment only" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-primary font-semibold", children: "$350*" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-foreground font-medium", children: "VOC" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "Qualified operators needing reference" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: "~30 mins" }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-primary font-semibold", children: "Quick" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Individual Machine Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Book training for a specific machine. All courses include nationally recognised certification delivered by Cailin Training (RTO 46489)." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: individualMachines.map((machine) => /* @__PURE__ */ jsx(
        MachineCard,
        {
          title: machine.title,
          code: machine.code,
          description: machine.description,
          image: machine.image,
          link: machine.link,
          alt: machine.alt,
          badge: machine.badge
        },
        machine.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Not Sure Which Course Is Right for You?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Book a free consultation and our team will help you choose the best path for your career goals." }),
      /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Book Free Consultation" }) })
    ] }) })
  ] });
};
const rollerInspection = "/assets/roller-inspection-Ch3mhyt0.jpg";
const benefits$8 = [
  "Turn prior experience into recognised qualifications",
  "Fast-track your certification",
  "Competency assessment only - no lengthy training",
  "Valid across all Australian civil and mine sites"
];
const eligibility$1 = [
  "Prior industry experience in machine operation",
  "Expired machine tickets needing renewal",
  "International qualifications requiring Australian recognition",
  "Workplace learning and practical experience"
];
const RPL = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Recognition of Prior Learning (RPL) | Cailin Mining & Civil",
        description: "Turn prior experience, expired tickets or international qualifications into recognised Australian machine operator certifications. From $350 per assessment.",
        path: "/rpl"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: rplPageHero, alt: "Worker inspecting mining equipment on site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Assessments Only" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Recognition of Prior Learning (RPL)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Already have experience and don't require training? Turn your prior industry experience, expired machine tickets, or international qualifications into recognised qualifications across all Australian civil and mine sites." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 px-6 py-3 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-3xl", children: "$350*" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-card border border-border px-6 py-3 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Per Machine Assessment" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your assessment costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn more about CTF funding" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Assessment" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Valid Nationwide" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: rollerInspection,
          alt: "Pre-start inspection and assessment",
          className: "rounded-2xl shadow-card w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-6", children: "How It Works" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
          { step: "1", title: "Apply", desc: "Submit an inquiry to check your eligibility" },
          { step: "2", title: "Get Invited", desc: "Receive your Course Invite if deemed suitable" },
          { step: "3", title: "Get Certified", desc: "Complete your assessment and gain recognition" }
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display text-lg shrink-0", children: item.step }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.desc })
          ] })
        ] }, item.step)) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Benefits" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: benefits$8.map((benefit) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: benefit })
        ] }, benefit)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Who's Eligible?" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: eligibility$1.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "rpl-form", className: "py-20 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://link.cailinminingcivil.com/widget/form/nsriBVOc4K3Y6O26x8zw",
        style: { width: "100%", height: "1200px", border: "none" },
        id: "nsriBVOc4K3Y6O26x8zw",
        title: "RPL Application Form",
        className: "rounded-2xl"
      }
    ) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Prefer to Talk?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Not sure if you qualify? Contact our team for a free assessment of your experience and qualifications." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", children: "Book Consultation" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", children: [
          "Call Us ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-6", children: "*Price subject to eligibility assessment" })
    ] }) }) })
  ] });
};
const trainerRadioSignaling = "/assets/trainer-radio-signaling-BFSWm91O.jpg";
const benefits$7 = [
  "Turn prior experience into recognised qualifications",
  "Fast-track your certification",
  "Competency assessment only - no lengthy training",
  "Valid across all Australian civil and mine sites"
];
const eligibility = [
  "Prior industry experience in machine operation",
  "Expired machine tickets needing renewal",
  "International qualifications requiring Australian recognition",
  "Workplace learning and practical experience"
];
const RPLAd = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Fast-Track RPL Assessment | Cailin Mining & Civil",
        description: "Already an experienced operator? Get fast-tracked Recognition of Prior Learning assessments for nationally recognised machine certifications.",
        path: "/rplad"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: trainerRadioSignaling, alt: "Trainer with radio signaling on mine site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Assessments Only" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Recognition of Prior Learning (RPL)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Already have experience and don't require training? Turn your prior industry experience, expired machine tickets, or international qualifications into recognised qualifications across all Australian civil and mine sites." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 px-6 py-3 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-3xl", children: "$350*" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-card border border-border px-6 py-3 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Per Machine Assessment" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your assessment costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Assessment" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Valid Nationwide" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "rpl-form", className: "py-20 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://link.cailinminingcivil.com/widget/form/g2PmRJY4Hl7Y2npm7W12",
        style: { width: "100%", height: "1200px", border: "none" },
        id: "g2PmRJY4Hl7Y2npm7W12",
        title: "RPL Application Form",
        className: "rounded-2xl"
      }
    ) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: rollerInspection,
          alt: "Pre-start inspection and assessment",
          className: "rounded-2xl shadow-card w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-6", children: "How It Works" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
          { step: "1", title: "Apply", desc: "Submit an inquiry to check your eligibility" },
          { step: "2", title: "Get Invited", desc: "Receive your Course Invite if deemed suitable" },
          { step: "3", title: "Get Certified", desc: "Complete your assessment and gain recognition" }
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display text-lg shrink-0", children: item.step }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.desc })
          ] })
        ] }, item.step)) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Benefits" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: benefits$7.map((benefit) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: benefit })
        ] }, benefit)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Who's Eligible?" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: eligibility.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Prefer to Talk?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Not sure if you qualify? Contact our team for a free assessment of your experience and qualifications." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", children: "Book Consultation" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", children: [
          "Call Us ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-6", children: "*Price subject to eligibility assessment" })
    ] }) }) })
  ] });
};
const loaderMoxyBundle = "/assets/loader-moxy-bundle-CvI378lO.png";
const starterBundleImg = "/assets/starter-bundle-BuP40ntp.jpg";
const loaderDumptruckPair = "/assets/loader-dumptruck-pair-Doarmcoh.jpg";
const interstateBundleImg = "/assets/interstate-bundle-BtT0TRjk.jpg";
const bundles = [
  {
    id: "starter-bundle",
    title: "Starter Bundle",
    subtitle: "Moxy + Watercart + Roller",
    codes: ["RIIMPO337E", "RIIMPO206D", "RIIMPO317F"],
    description: "Perfect for beginners wanting versatility. Get certified in Articulated Haul Truck (Moxy), Watercart, and Roller operations — the most in-demand entry-level combination.",
    price: "$2,500",
    image: starterBundleImg,
    bookingUrl: "https://live.cailintraining.com.au/starter_bundle_moxy_roller_watercart",
    highlight: true,
    badge: "MOST POPULAR",
    hours: [
      { machine: "Moxy", time: "4 hours" },
      { machine: "Roller", time: "1.5–2 hours" },
      { machine: "Watercart", time: "1.5–2 hours" }
    ]
  },
  {
    id: "excavator-loader-bundle",
    title: "Excavator + Loader Bundle",
    subtitle: "Excavator + Wheel Loader",
    codes: ["RIIMPO320F", "RIIMPO304E"],
    description: "Master two of the most versatile machines on any site. Perfect for operators wanting maximum job opportunities across mining and civil.",
    price: "$2,500",
    image: excavatorOperation,
    bookingUrl: "https://live.cailintraining.com.au/excavator-loader-bundle",
    highlight: false,
    hours: [
      { machine: "Excavator", time: "4 hours" },
      { machine: "Wheel Loader", time: "4 hours" }
    ]
  },
  {
    id: "loader-moxy-bundle",
    title: "Loader + Moxy Bundle",
    subtitle: "Wheel Loader + Articulated Truck",
    codes: ["RIIMPO304E", "RIIMPO337E"],
    description: "A powerful combination for material handling roles. Load and haul with confidence on any mining or civil construction site.",
    price: "$2,500",
    image: loaderMoxyBundle,
    bookingUrl: "https://live.cailintraining.com.au/loader_moxy_bundle",
    highlight: false,
    hours: [
      { machine: "Wheel Loader", time: "4 hours" },
      { machine: "Moxy", time: "4 hours" }
    ]
  },
  {
    id: "interstate-bundle",
    title: "Interstate Bundle",
    subtitle: "Moxy + Watercart + Roller",
    codes: ["RIIMPO337E", "RIIMPO206D", "RIIMPO317F"],
    description: "Designed for interstate visitors with accommodation-friendly scheduling. Same great training, flexible timing.",
    price: "$2,500",
    image: interstateBundleImg,
    bookingUrl: "https://live.cailintraining.com.au/interstate_bundle_moxy_roller_watercart",
    highlight: false,
    hours: [
      { machine: "Moxy", time: "4 hours" },
      { machine: "Roller", time: "1.5–2 hours" },
      { machine: "Watercart", time: "1.5–2 hours" }
    ]
  },
  {
    id: "moxy-loader-watercart-bundle",
    title: "Moxy, Loader & Watercart Bundle",
    subtitle: "Articulated Truck + Wheel Loader + Watercart",
    codes: ["RIIMPO337E", "RIIMPO304E", "RIIMPO206D"],
    description: "Master hauling, loading, and site water operations in one program. A versatile combination for civil construction and mining support roles.",
    price: "$2,500",
    image: loaderDumptruckPair,
    bookingUrl: "https://live.cailintraining.com.au/moxy_loader_watercart_bundle",
    highlight: false,
    hours: [
      { machine: "Moxy", time: "4 hours" },
      { machine: "Wheel Loader", time: "4 hours" },
      { machine: "Watercart", time: "1.5–2 hours" }
    ]
  }
];
const benefits$6 = [
  {
    icon: TrendingUp,
    title: "3x More Employable",
    description: "Multiple tickets dramatically increase your job opportunities across sites"
  },
  {
    icon: Users,
    title: "1:1 Training Ratio",
    description: "Personal instruction — not 15 students to 1 trainer"
  },
  {
    icon: Award,
    title: "Live Mine Site",
    description: "Real training on a real site — not a concrete yard"
  }
  /*{
    icon: Clock,
    title: "Unlimited Hours",
    description: "Train until you're confident — no rushed timeframes",
  }, */
];
const TicketsTraining = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Training Bundles | Cailin Mining & Civil Perth",
        description: "Multi-ticket training bundles for mining and civil operators. Double or triple your employability with 1:1 instruction on a live mine site.",
        path: "/courses/bundles"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: bundlesHero, alt: "Fleet of mining machines on site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Full Training Programs" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Training Bundles" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Double or triple your employment opportunities by bundling your courses. Become 2-3x more employable with multiple machine certifications." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-block bg-primary/10 px-8 py-4 rounded-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-4xl", children: "$2,500" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground ml-2", children: "per bundle" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6", children: benefits$6.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 rounded-xl border border-border text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto", children: /* @__PURE__ */ jsx(benefit.icon, { className: "w-6 h-6 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: benefit.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: benefit.description })
    ] }, benefit.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Choose Your Bundle" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Each bundle includes multiple machine certifications, 1:1 training on a live mine site, and professional work referrals to help you secure employment." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: bundles.map((bundle) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl overflow-hidden hover:border-primary transition-colors ${bundle.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            bundle.badge && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold z-10", children: bundle.badge }),
            bundle.image && /* @__PURE__ */ jsx("img", { src: bundle.image, alt: bundle.title, className: "w-full h-48 object-cover" }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-primary text-sm font-medium mb-2", children: bundle.codes.join(" + ") }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: bundle.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-2", children: bundle.subtitle }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm mb-4", children: bundle.description }),
              bundle.hours && /* @__PURE__ */ jsxs("div", { className: "bg-secondary border border-border rounded-xl p-4 mb-4", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-foreground font-semibold text-sm mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
                  " Bundle Includes:"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: bundle.hours.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: h.machine }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: h.time })
                ] }, h.machine)) })
              ] }),
              bundle.id === "starter-bundle" ? /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-primary/10 border border-primary/30 rounded-lg p-3 mb-4", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxs("p", { className: "text-foreground text-xs", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Limited Time Offer:" }),
                  " This bundle includes Free Returns."
                ] })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "This course does not include Return for Free eligibility." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-primary", children: bundle.price }) }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "hero",
                  className: "w-full",
                  onClick: () => {
                    window.open(bundle.bookingUrl, "_blank");
                  },
                  children: [
                    "Book Now ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ]
                }
              )
            ] })
          ]
        },
        bundle.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Not Sure Which Bundle Is Right for You?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Book a free consultation and our team will help you choose the best bundle for your career goals." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Book Free Consultation" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View All Courses" }) })
      ] })
    ] }) })
  ] });
};
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const machines$1 = [
  {
    title: "Excavator Ticket",
    code: "RIIMPO320F & RIIMPO301E",
    description: "Comprehensive excavator training for civil construction. Learn safe operation, loading, trenching, and more.",
    image: excavatorOperation,
    link: "/courses/excavator"
  },
  {
    title: "Front End Loader Ticket",
    code: "RIIMPO304E",
    description: "Master wheeled front-end loader operations for mining and construction roles.",
    image: wheelloaderFullBucket,
    link: "/courses/wheel-loader"
  },
  {
    title: "Watercart Ticket",
    code: "RIIMPO206D",
    description: "Bulk water truck operations training for dust suppression and site maintenance.",
    image: watercartNew,
    link: "/courses/watercart"
  },
  {
    title: "Articulated Haul Truck (Moxy)",
    code: "RIIMPO337E",
    description: "Dump Truck training for articulated haul truck operations. Essential for mining and civil sites.",
    image: articulatedDumptruck,
    link: "/courses/moxy"
  },
  {
    title: "Roller Ticket",
    code: "RIIMPO317F",
    description: "Roller operator certification for compaction work in construction and road building.",
    image: rollerArtistic,
    link: "/courses/roller"
  },
  {
    title: "Integrated Tool Carrier Fork Ticket",
    code: "RIIHAN311F",
    description: "Fork attachment operation on an Integrated Tool Carrier. Prerequisite: Loader qualification required.",
    image: itcAsset.url,
    link: "/courses/integrated-tool-carrier"
  }
];
const faqs$b = [
  {
    question: "How long does the course take?",
    answer: "The course typically takes 1.5 hours initial. Unlimited access is available when you book maximum training time — contact our team for details."
  },
  {
    question: "What are the pre-requisites to undertake this course?",
    answer: "Driver's license - for best results, transferable skills from similar industries are beneficial but this is an awesome way to explore machine operating without making a full day investment."
  },
  {
    question: "What do I learn?",
    answer: "You will have to show to our assessors that you have the fundamental skills required to operate on a mine site through workplace learning. For more info google 'Course assessment criteria' on training.gov."
  },
  {
    question: "What do I receive at the end of the course?",
    answer: "A nationally recognised Statement of Attainment and a professional work referral from us to help you secure employment."
  }
];
const benefits$5 = [
  "Nationally recognised qualification",
  "Professional work referral included",
  "1.5 hours initial assessment",
  "Upgrade options available",
  "Ideal for career exploration"
];
const ShortCourses = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "$600 Short Courses | Cailin Mining & Civil Perth",
        description: "Quick nationally recognised machine operator certification from $600. Perfect for career exploration or fast-tracked tickets.",
        path: "/courses/short-courses"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: machinesCollage, alt: "Mining and civil machinery collage" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Quick Certification" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "$600 Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Get a recognised national qualification and professional work referral needed to secure an operating role in Civil Construction or Mining industry." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-block bg-primary/10 px-8 py-4 rounded-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-4xl", children: "$600" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground ml-2", children: "per machine" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-6 bg-destructive/5 border-b border-destructive/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-destructive shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm", children: "Please note: These courses do not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
    ] }) }) }),
    /* @__PURE__ */ jsx(CTFFundingBanner, {}),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Career Ready" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto", children: benefits$5.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: benefit })
    ] }, benefit)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Available Machines" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Select your machine and book your short course assessment today." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: machines$1.map((machine) => /* @__PURE__ */ jsx(
        MachineCard,
        {
          title: machine.title,
          code: machine.code,
          description: machine.description,
          image: machine.image,
          link: machine.link
        },
        machine.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center", children: [
      /* @__PURE__ */ jsx(Award, { className: "w-10 h-10 text-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-3", children: "Unlimited Access Available" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Get unlimited access when you book maximum training time on each course. Train until you're fully confident with no time limits." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsx(Link, { to: "/courses/full-day", children: "View Full Day Courses" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$b.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Our short courses are the quickest way to get certified and start your career in mining or civil construction." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Contact Us" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsx("a", { href: "tel:0483951501", children: "Call 0483 951 501" }) })
      ] })
    ] }) })
  ] });
};
const graderCabinAccess = "/assets/grader-cabin-access-1PeX23LF.jpg";
const wheelloaderProfile = "/assets/wheelloader-profile-BUfn89Hk.jpg";
const skidSteerLoader = "/assets/skid-steer-loader-7a4O0hrz.jpg";
const dozer = "/assets/dozer-CTMjpFh-.jpg";
const integratedToolCarrier = "/assets/integrated-tool-carrier-DkQTtGAK.jpg";
const machines = [
  {
    name: "Excavator",
    image: excavatorNew,
    bookingUrl: "https://live.cailintraining.com.au/VOC-excavator-book"
  },
  {
    name: "Wheel Loader",
    image: wheelloaderProfile,
    bookingUrl: "https://live.cailintraining.com.au/voc-wheel_loader-book"
  },
  {
    name: "Moxy",
    image: articulatedDumptruck,
    bookingUrl: "https://live.cailintraining.com.au/voc-moxy-book"
  },
  {
    name: "Roller",
    image: rollerNew,
    bookingUrl: "https://live.cailintraining.com.au/voc-roller-book"
  },
  {
    name: "Watercart",
    image: watercartNew,
    bookingUrl: "https://live.cailintraining.com.au/voc-watercart-book"
  },
  {
    name: "Skid Steer Loader",
    image: skidSteerLoader,
    bookingUrl: "https://live.cailintraining.com.au/voc-skid_loader-book"
  },
  {
    name: "Grader",
    image: graderCabinAccess,
    bookingUrl: "https://live.cailintraining.com.au/voc-grader-book"
  },
  {
    name: "Dozer",
    image: dozer,
    bookingUrl: "https://live.cailintraining.com.au/voc-dozer-book"
  },
  {
    name: "Rigid Haul Truck",
    image: heroImage$1,
    bookingUrl: "https://live.cailintraining.com.au/voc-rigid_haul_truck-book"
  },
  {
    name: "Integrated Tool Carrier",
    image: integratedToolCarrier,
    bookingUrl: "https://live.cailintraining.com.au/voc-integratedtoolcarrier-book"
  }
];
const faqs$a = [
  {
    question: "How long does the course take?",
    answer: "VOC assessments typically take about 30 minutes plus the time it takes for the candidate to complete any documentation."
  },
  {
    question: "What are the pre-requisites to undertake this course?",
    answer: "Candidate must present documentation proving previous qualification/experience. You need to have an existing valid qualification for the machine."
  },
  {
    question: "What do I learn?",
    answer: "You will demonstrate to our assessors that you have the fundamental skills required to operate on a mine site through workplace learning. For more info google 'Course assessment criteria' on training.gov."
  },
  {
    question: "What do I receive at the end of the course?",
    answer: "Upon successful completion, you receive a verification of competency that validates your skills to potential employers."
  }
];
const requirements = [
  "Valid driver's license",
  "Existing qualification or certification for the machine",
  "Documentation proving previous experience",
  "Ability to demonstrate practical competency"
];
const benefits$4 = [
  "Quick 30-minute assessment",
  "Industry-recognised verification",
  "Boost your employability",
  "Validate your existing skills"
];
const VOC = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Verification of Competency (VOC) | Cailin Mining & Civil",
        description: "Quick 30-minute Verification of Competency assessments for qualified machine operators. Boost employability with a fresh professional reference.",
        path: "/courses/voc"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: vocPageHero, alt: "Workers inspecting mining equipment on site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Skills Verification" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Verification of Competency (VOC)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Already qualified? Verify your competency to boost your employment prospects." }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold text-lg mb-8", children: "Get Your Competency Verified" }),
        /* @__PURE__ */ jsx("div", { className: "inline-block bg-primary/10 px-8 py-4 rounded-xl", children: /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-4xl", children: "Quick Assessment" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Assessment" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Valid Nationwide" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: graderCabinAccess,
          alt: "Grader cabin access during training",
          className: "rounded-2xl shadow-card w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx(FileCheck, { className: "w-6 h-6 text-primary" }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "What is VOC?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Verification of Competency (VOC) is a practical assessment for operators who already hold recognised qualifications. It verifies that you have the skills required to operate safely and competently on site." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Successful candidates will receive a professional work referral from us, demonstrating to employers that your skills have been recently validated." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground", children: "Requirements" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: requirements.map((req) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: req })
          ] }, req)) })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto", children: benefits$4.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-card border border-border p-4 rounded-xl", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: benefit })
    ] }, benefit)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Available VOC Assessments" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Select your machine and book your VOC assessment. You must have an existing qualification for the machine you wish to be assessed on." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto", children: machines.map((machine) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors",
          children: [
            /* @__PURE__ */ jsx("img", { src: machine.image, alt: machine.name, className: "w-full h-32 object-cover" }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-base text-foreground mb-2", children: machine.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-muted-foreground mb-4", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "~30 mins" })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "hero", size: "sm", className: "w-full", onClick: () => window.open(machine.bookingUrl, "_blank"), children: "Book VOC" })
            ] })
          ]
        },
        machine.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$a.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Questions About VOC?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Not sure if VOC is right for you? Contact our team to discuss your qualifications and requirements." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Contact Us" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsx("a", { href: "tel:0483951501", children: "Call 0483 951 501" }) })
      ] })
    ] }) })
  ] });
};
const returnTimeTable = [
  {
    machine: "Moxy (Articulated Dump Truck)",
    maxTime: "8 hours (1 day)",
    link: null
  },
  {
    machine: "Excavator",
    maxTime: "16 hours (2 days)",
    link: null
  },
  {
    machine: "Loader",
    maxTime: "8 hours (1 day)",
    link: null
  },
  {
    machine: "Roller",
    maxTime: "4 hours (half day)",
    link: "/courses/short-courses",
    linkText: "See $600 Course"
  },
  {
    machine: "Watercart",
    maxTime: "4 hours (half day)",
    link: "/courses/short-courses",
    linkText: "See $600 Course"
  }
];
const features = [
  "1:1 personal instruction",
  "Live mine site training",
  "Nationally recognised qualification",
  "Unlimited return training*"
];
const FullDay = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Full Day Machine Training | Cailin Mining & Civil",
        description: "Master a single machine with unlimited return training sessions. 1:1 live mine site instruction in Perth — starts at $1,200.",
        path: "/courses/full-day"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: fullDayHero, alt: "CAT roller on Cailin Mining site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Unlimited Return Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Full Day Course" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Master any single machine with unlimited return training. Train until you're fully confident and job-ready — no rushing, no time limits." }),
        /* @__PURE__ */ jsxs("div", { className: "inline-block bg-primary/10 px-8 py-4 rounded-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-display text-4xl block", children: "Starts at $1,200" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm mt-1 block", children: "4 hours — Roller / Watercart" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-primary/10 border-y border-primary/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "This course is available by request only — contact us to enquire." })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:0483951501",
          className: "text-primary font-semibold hover:underline",
          children: "0483 951 501"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-6", children: "What's Included" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-12", children: features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: feature })
        ] }, feature)) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "w-6 h-6 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground", children: "Free Return Policy" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "With the Full Day course, you can return for free practice sessions up to the maximum training hours for each machine. Build real experience before your first job." }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 text-foreground font-display text-sm", children: "Machine" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 text-foreground font-display text-sm", children: "Max Free Return Time" }),
              /* @__PURE__ */ jsx("th", { className: "py-3" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: returnTimeTable.map((row) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 text-foreground", children: row.machine }),
              /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: row.maxTime })
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 text-right", children: row.link && /* @__PURE__ */ jsxs(
                Link,
                {
                  to: row.link,
                  className: "inline-flex items-center gap-1 text-primary text-sm hover:underline",
                  children: [
                    row.linkText,
                    " ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
                  ]
                }
              ) })
            ] }, row.machine)) })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-4", children: "*Return training is subject to availability and must be booked in advance." })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: excavatorTraining1on1,
            alt: "One-on-one excavator training",
            className: "w-full rounded-2xl"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8 sticky top-28", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-4", children: "Interested in This Course?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "The Full Day course is available by request only. Get in touch with our team to discuss your training goals and we'll help you get started." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Contact Us to Enquire",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: "or call us directly" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "lg", className: "w-full", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mr-2" }),
            "0483 951 501"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-lg text-foreground mb-3", children: "Quick Summary" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Price:" }),
              /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold", children: "From $1,200" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Duration:" }),
              /* @__PURE__ */ jsx("span", { children: "Full day + free returns" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Format:" }),
              /* @__PURE__ */ jsx("span", { children: "1-on-1 training" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Looking for Other Options?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 max-w-2xl mx-auto", children: "We have training options for every budget and experience level." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/courses/short-courses", children: "$600 Courses" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/courses/bundles", children: "Training Bundles" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View All Courses" }) })
      ] })
    ] }) })
  ] });
};
const trainerExcavatorDistance = "/assets/trainer-excavator-distance-Ff4XPeta.jpg";
const courseOptions$7 = [
  {
    title: "$600 Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_excavator-book",
    highlight: false
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/excavator-1day-course",
    highlight: true,
    badge: "RECOMMENDED"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-excavator-book",
    highlight: false
  }
];
const skills$5 = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Loading and unloading techniques",
  "Trenching and excavation work",
  "Working safely around personnel",
  "GPS-guided operation (optional add-on)"
];
const faqs$9 = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO320F (Conduct civil construction excavator operations) and/or RIIMPO301E (Conduct excavator operations) depending on your training path."
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is required for our full training program. For RPL assessment, you'll need to demonstrate existing competency from previous work experience."
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1.5 hours initial. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe."
  },
  {
    question: "Is GPS training included?",
    answer: "Basic excavator training doesn't include GPS. However, we offer specialist Topcon GPS excavator training as an add-on — we're WA's only private provider."
  }
];
const Excavator = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Excavator Training Perth | RIIMPO320F | Cailin Mining & Civil",
        description: "Get certified to operate excavators in mining and civil construction. RIIMPO320F & RIIMPO301E nationally recognised qualifications in Perth.",
        path: "/courses/excavator",
        jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs$9.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: excavatorOperation, alt: "Excavator in operation" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Excavator Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Get certified to operate excavators in civil construction and mining. Nationally recognised qualification included." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "RIIMPO320F & RIIMPO301E" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn more about CTF funding" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that suits your experience level and goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$7.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: option.highlight ? "hero" : "outline", className: "w-full", onClick: () => {
              if (option.title === "RPL Assessment") {
                window.location.href = "/rpl#rpl-form";
              } else {
                window.open(option.bookingUrl, "_blank");
              }
            }, children: "Book Now" })
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our excavator training covers all aspects of safe and efficient machine operation, preparing you for real-world roles in civil construction and mining." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills$5.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: trainerExcavatorDistance,
          alt: "Excavator training session",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$9.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Your Excavator Ticket?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your excavator training today with Western Australia's leading operator training provider." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const courseOptions$6 = [
  {
    title: "$600 Short Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick excavator certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_excavator-book",
    highlight: false
  },
  {
    title: "Full Day Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 excavator operator training on a live mine site until you're confident and job-ready",
    bookingUrl: "https://live.cailintraining.com.au/excavator-1day-course",
    highlight: true,
    badge: "MOST POPULAR"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced excavator operators needing formal certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-excavator-book",
    highlight: false
  }
];
const testimonials$1 = [
  {
    name: "Chris R.",
    role: "Now working at FMG",
    text: "The live mine site excavator training was incredible. Operating on a real site gave me the confidence I needed. Got placed within three weeks of finishing.",
    rating: 5
  },
  {
    name: "Emma L.",
    role: "Civil Construction Operator",
    text: "I did my excavator operator training in Perth with Cailin and it was the best decision. The 1:1 instruction meant I could learn at my pace without any pressure.",
    rating: 5
  },
  {
    name: "Matt S.",
    role: "Mining Operator — Pilbara",
    text: "Came in with zero experience and left as a certified excavator operator. The trainers are genuinely passionate about getting you work-ready, not just passing a test.",
    rating: 5
  }
];
const faqs$8 = [
  {
    question: "How do I become an excavator operator in Perth?",
    answer: "To become an excavator operator in Perth, you need to complete nationally recognised training and obtain your RIIMPO320F or RIIMPO301E certification. At Cailin Mining & Civil, we offer live mine site excavator training in Perth with 1:1 instruction. No prior experience is required for our full training program — we'll take you from beginner to certified excavator operator, ready for employment across Perth's mining and civil construction sectors."
  },
  {
    question: "What qualifications do I need to be an excavator operator?",
    answer: "You need a nationally recognised Statement of Attainment for RIIMPO320F (Conduct civil construction excavator operations) and/or RIIMPO301E (Conduct excavator operations). Our excavator operator training in Perth covers both units. You'll also need a current White Card (construction induction) for most sites. We can guide you through the full process from training to employment."
  },
  {
    question: "How long does excavator operator training take in Perth?",
    answer: "Training duration depends on your experience level. Our $600 short course runs 1.5 hours initial for those with some background. The full day excavator training in Perth has unlimited hours — we continue until you're genuinely confident and competent. There's no rushed timeframe. RPL assessment is available for experienced operators who just need formal certification."
  },
  {
    question: "What's the job outlook for excavator operators in Perth?",
    answer: "Perth's mining and civil construction sectors are booming, with strong demand for qualified excavator operators across the Pilbara, Goldfields, and metro civil projects. Salaries for excavator operators in Perth typically range from $80,000 to $150,000+ depending on experience and roster. Our 60% job placement rate means we actively connect graduates with employers."
  },
  {
    question: "Is GPS excavator training available?",
    answer: "Yes! We're WA's only private provider of specialist Topcon GPS excavator training. This is a highly sought-after skill that can significantly boost your earning potential as an excavator operator in Perth. It can be added to any of our excavator training packages."
  },
  {
    question: "Is government funding available for excavator training in Perth?",
    answer: "CTF (Construction Training Fund) funding may cover your excavator training costs if you're eligible. We can help you check eligibility and apply — just ask when you book your excavator operator training."
  },
  {
    question: "Can I bundle excavator training with other machine tickets?",
    answer: "Absolutely. We offer multi-machine bundles that include excavator training alongside other tickets like roller, watercart, and wheel loader. Check our bundles page for the best value packages."
  }
];
const ExcavatorTrainingPerth = () => {
  useEffect(() => {
    document.title = "Excavator Operator Training Perth | Excavator Course | Cailin";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Become a certified excavator operator in Perth. Live mine site training, 1:1 instruction, RIIMPO certification. Book now - 0483 951 501");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.cailinminingcivil.com/courses/excavator-training-perth");
    }
    const courseSchema = document.createElement("script");
    courseSchema.type = "application/ld+json";
    courseSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Excavator Operator Training Perth - RIIMPO Certification",
      "description": "Live mine site excavator operator training in Perth. Nationally recognised RIIMPO320F & RIIMPO301E certification with 1:1 instruction and 60% job placement.",
      "provider": {
        "@type": "Organization",
        "name": "Cailin Mining & Civil",
        "url": "https://www.cailinminingcivil.com",
        "telephone": "0483 951 501",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        }
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
            "name": "Live Mine Site, Perth WA"
          }
        }
      ],
      "offers": [
        { "@type": "Offer", "price": "600", "priceCurrency": "AUD", "name": "Short Course" },
        { "@type": "Offer", "price": "2500", "priceCurrency": "AUD", "name": "Full Day Training" },
        { "@type": "Offer", "price": "350", "priceCurrency": "AUD", "name": "RPL Assessment" }
      ],
      "educationalCredentialAwarded": "RIIMPO320F & RIIMPO301E — Conduct Excavator Operations"
    });
    document.head.appendChild(courseSchema);
    const businessSchema = document.createElement("script");
    businessSchema.type = "application/ld+json";
    businessSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cailin Mining & Civil",
      "description": "Perth's leading excavator operator training provider. Live mine site excavator training with 1:1 instruction and nationally recognised RIIMPO certification.",
      "url": "https://www.cailinminingcivil.com",
      "telephone": "+61483951501",
      "image": "https://www.cailinminingcivil.com/images/social.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "Western Australia",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9505,
        "longitude": 115.8605
      },
      "areaServed": {
        "@type": "State",
        "name": "Western Australia",
        "description": "WA mining sites including Pilbara, Goldfields, and Perth metro civil projects"
      },
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Excavator Operator Training Perth",
          "description": "Live mine site excavator training in Perth with RIIMPO320F & RIIMPO301E certification. 1:1 instruction, unlimited hours, and 60% job placement rate.",
          "serviceType": "Vocational Training"
        }
      },
      "priceRange": "$350 - $2,500",
      "openingHours": "Mo-Fr 07:00-17:00",
      "sameAs": [
        "https://www.facebook.com/cailinminingcivil",
        "https://www.instagram.com/cailinminingcivil"
      ]
    });
    document.head.appendChild(businessSchema);
    return () => {
      document.head.removeChild(courseSchema);
      document.head.removeChild(businessSchema);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Excavator Operator Training Perth | Cailin Mining & Civil",
        description: "1:1 live mine site excavator operator training in Perth. RIIMPO320F & RIIMPO301E with unlimited training hours and job placement support.",
        path: "/courses/excavator-training-perth",
        jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs$8.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: excavatorOperation, alt: "Excavator training Perth — excavator operator on live mine site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Perth's Leading Excavator Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Excavator Training Perth — Live Mine Site Certification" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-6", children: "Become a certified excavator operator in Perth with live mine site training. 1:1 instruction, nationally recognised RIIMPO certification, and 60% job placement rate." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-6", children: "RIIMPO320F & RIIMPO301E" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Excavator Training Now" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            " 0483 951 501"
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your excavator training costs — ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Check Eligibility" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Excavator Operator Training Perth" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          "Excavators are the backbone of Perth's mining and civil construction industries. From trenching and excavation to loading haul trucks, a skilled ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "excavator operator in Perth" }),
          " is always in demand. Our excavator training in Perth equips you with the hands-on skills employers are actively seeking."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          "Unlike classroom-based courses, our ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "excavator training in Perth" }),
          " takes place entirely on live mine sites. You'll operate real machines in genuine conditions — learning to handle different soil types, manage bucket loads, work safely around personnel, and communicate via radio with other operators."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          "Upon completion, you'll receive a nationally recognised Statement of Attainment for",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: " RIIMPO320F" }),
          " (civil construction excavator operations) and/or",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: " RIIMPO301E" }),
          " (excavator operations), qualifying you to work as an excavator operator across every mine site and civil project in Australia."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: trainerExcavatorDistance,
          alt: "Excavator operator Perth — trainee operating excavator on mine site",
          className: "w-full rounded-2xl",
          loading: "lazy"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: excavatorTraining1on1,
          alt: "1:1 excavator training Perth — instructor guiding trainee on mine site",
          className: "w-full rounded-2xl",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Why Live Mine Site Training Makes Better Excavator Operators" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Simulation and controlled yards can't replicate the reality of operating an excavator on an active site — the variable terrain, dust, working alongside dump trucks, and time-critical loading cycles. Our excavator training in Perth happens exclusively on live mine sites." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "This approach produces genuinely competent excavator operators. Perth employers know that Cailin graduates arrive on site ready to contribute from day one — which is why we maintain a 60% job placement rate." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          "Operate real excavators on genuine mine site terrain",
          "1:1 instruction — your trainer's full attention, every session",
          "Learn GPS-guided excavation (Topcon specialist training available)",
          "Build job-ready confidence that employers value"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Excavator Training Perth — Course Options & Pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that matches your experience. Every option includes nationally recognised certification." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$6.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Short Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: option.highlight ? "hero" : "outline",
                className: "w-full",
                onClick: () => {
                  if (option.title === "RPL Assessment") {
                    window.location.href = "/rpl#rpl-form";
                  } else {
                    window.open(option.bookingUrl, "_blank");
                  }
                },
                children: "Book Now"
              }
            )
          ]
        },
        option.title
      )) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground text-sm mt-6", children: "* RPL pricing may vary based on evidence and assessment requirements." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Briefcase, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Excavator Operator Jobs in Perth" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mb-8 max-w-3xl mx-auto", children: "Perth's mining boom means qualified excavator operators are in constant demand. Whether you're targeting FIFO roles in the Pilbara and Goldfields or civil construction projects across the Perth metro area, your excavator operator certification opens doors to high-paying careers." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary mb-2", children: "$80K–$150K+" }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "Annual Salary Range" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "For excavator operators in Perth & WA" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary mb-2", children: "60%" }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "Job Placement Rate" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Graduates placed into excavator operator roles" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary mb-2", children: "High Demand" }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: "Industry Outlook" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Excavator operators needed across WA mining" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center text-sm", children: "As a certified excavator operator in Perth, you'll be eligible for roles with major mining companies, civil contractors, and labour hire firms. Our industry connections help place you directly into work." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground text-center mb-12", children: "What Our Excavator Training Graduates Say" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: testimonials$1.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-3", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground text-sm mb-4 italic", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: t.role })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Perth, Western Australia" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Excavator Training Perth — FAQs" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$8.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground text-center mb-8", children: "Related Training Courses" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/courses/roller", children: "Roller Training" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/courses/watercart", children: "Watercart Training" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/courses/wheel-loader", children: "Wheel Loader Training" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/courses/moxy-training-perth", children: "Moxy Training Perth" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/courses/bundles", children: "Training Bundles" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Become a Certified Excavator Operator in Perth?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your excavator training in Perth today with Western Australia's leading operator training provider. Live mine site training, 1:1 instruction, and real job placement." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Excavator Training Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const wheelloaderHero = "/assets/wheelloader-hero-nQbDauAx.jpg";
const wheelloaderTraining = "/assets/wheelloader-training-BG1uXtoC.jpg";
const courseOptions$5 = [
  {
    title: "$600 Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_wheel_loader-book",
    highlight: false
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/loader_day_course",
    highlight: true,
    badge: "RECOMMENDED"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-wheel_loader-book",
    highlight: false
  }
];
const skills$4 = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Loading trucks and stockpiling",
  "Material handling and placement",
  "Operating in confined spaces",
  "Working safely around personnel"
];
const faqs$7 = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO304E (Conduct front end loader operations)."
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is required for our full training program. For RPL assessment, you'll need to demonstrate existing competency from previous work experience."
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1.5 hours initial. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe."
  },
  {
    question: "What industries use wheel loaders?",
    answer: "Wheel loaders are essential in mining, civil construction, quarrying, landscaping, and logistics. It's one of the most versatile and in-demand machine tickets."
  }
];
const WheelLoader = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Front End Loader Training Perth | RIIMPO304E | Cailin",
        description: "Get your front end loader ticket in Perth. RIIMPO304E nationally recognised wheel loader training on a live mine site with 1:1 instruction.",
        path: "/courses/wheel-loader"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: wheelloaderHero, alt: "Wheel loader in operation" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Wheel Loader Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Get certified to operate front-end loaders in mining and civil construction. Nationally recognised qualification included." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "RIIMPO304E" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that suits your experience level and goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$5.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: option.highlight ? "hero" : "outline", className: "w-full", onClick: () => {
              if (option.title === "RPL Assessment") {
                window.location.href = "/rpl#rpl-form";
              } else {
                window.open(option.bookingUrl, "_blank");
              }
            }, children: "Book Now" })
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our wheel loader training covers all aspects of safe and efficient machine operation, preparing you for real-world roles in civil construction and mining." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills$4.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: wheelloaderTraining,
          alt: "Wheel loader training session",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$7.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Your Wheel Loader Ticket?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your wheel loader training today with Western Australia's leading operator training provider." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const dumptruckTrayRaised = "/assets/dumptruck-tray-raised-koU2DX76.jpg";
const courseOptions$4 = [
  {
    title: "$600 Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_moxy-book",
    highlight: false
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/moxy_day_course",
    highlight: true,
    badge: "RECOMMENDED"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-moxy-book",
    highlight: false
  }
];
const skills$3 = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Loading and unloading material",
  "Navigating haul roads safely",
  "Tipping and dumping procedures",
  "Working in all weather conditions"
];
const faqs$6 = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO337E (Conduct articulated haul truck operations)."
  },
  {
    question: "What's the difference between a Moxy and a Dump Truck?",
    answer: "A Moxy (articulated dump truck) has a pivot point between the cab and tray, allowing for better manoeuvrability on rough terrain. It's commonly used in mining and civil construction for hauling material across sites."
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1.5 hours initial. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe."
  },
  {
    question: "Is this included in any bundles?",
    answer: "Yes! The Moxy is included in our Starter Bundle ($2,500) along with Roller and Watercart training — a popular combination for entry-level operators."
  }
];
const Moxy = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Moxy Articulated Dump Truck Training | RIIMPO337E | Cailin",
        description: "Get your moxy (articulated dump truck) ticket in Perth. RIIMPO337E training on a live mine site with 1:1 instruction. Career-ready qualification.",
        path: "/courses/moxy"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: articulatedDumptruck, alt: "Articulated dump truck (Moxy)" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Articulated Truck (Moxy)" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Get certified to operate articulated haul trucks in mining and civil construction. Nationally recognised qualification included." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "RIIMPO337E" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that suits your experience level and goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$4.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: option.highlight ? "hero" : "outline", className: "w-full", onClick: () => {
              if (option.title === "RPL Assessment") {
                window.location.href = "/rpl#rpl-form";
              } else {
                window.open(option.bookingUrl, "_blank");
              }
            }, children: "Book Now" })
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our articulated truck training covers all aspects of safe and efficient machine operation, preparing you for real-world roles in civil construction and mining." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills$3.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: dumptruckTrayRaised,
          alt: "Articulated truck training",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$6.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Your Moxy Ticket?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your articulated truck training today with Western Australia's leading operator training provider." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const catDumptruckLoaderPair = "/assets/cat-dumptruck-loader-pair-DJtVSX6N.jpg";
const heroImage = "/assets/loader-dumptruck-wide-Dl4CcdO9.jpg";
const loaderDumptruckFramed = "/assets/loader-dumptruck-framed-BkhsHszo.jpg";
const courseOptions$3 = [
  {
    title: "$600 Short Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick moxy certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_moxy-book",
    highlight: false
  },
  {
    title: "Full Day Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 moxy training on a live mine site until you're confident and job-ready",
    bookingUrl: "https://live.cailintraining.com.au/moxy_day_course",
    highlight: true,
    badge: "MOST POPULAR"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing formal moxy certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-for-moxy-book",
    highlight: false
  }
];
const testimonials = [
  {
    name: "Jake M.",
    role: "Now working at Roy Hill",
    text: "The live mine site moxy training in Perth made all the difference. I walked onto my first job confident because I'd already operated on a real site. Best investment I've made.",
    rating: 5
  },
  {
    name: "Sarah T.",
    role: "Civil Construction Operator",
    text: "As a woman entering the industry, I was nervous about moxy training. The 1:1 instruction in Perth meant I got personalised attention and never felt rushed. Got my moxy ticket and a job within two weeks.",
    rating: 5
  },
  {
    name: "Daniel K.",
    role: "Mining Operator — Pilbara FIFO",
    text: "Did the full day moxy training in Perth and got placed on a mine site straight after. The trainers actually care about getting you work-ready, not just ticking boxes. Now earning $130K on a 2/1 roster.",
    rating: 5
  },
  {
    name: "Priya N.",
    role: "Civil Operator — Perth Metro",
    text: "I compared every moxy training provider in Perth before choosing Cailin. The live mine site experience is unmatched — I felt prepared from day one on the job. Highly recommend.",
    rating: 5
  }
];
const faqs$5 = [
  {
    question: "What qualification do I get from moxy training in Perth?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO337E — Conduct articulated haul truck operations. This qualification is accepted across all Australian mine sites and civil construction projects. It's the standard moxy ticket required by Perth mining employers."
  },
  {
    question: "How long does moxy training in Perth take?",
    answer: "Our short course runs 1.5 hours initial for those with some experience. Full day moxy training in Perth has unlimited hours — we train until you're genuinely confident and competent. There's no rushed timeframe, unlike other Perth providers who cap seat time at 15–45 minutes."
  },
  {
    question: "What's the difference between a Moxy and a rigid dump truck?",
    answer: "A Moxy (articulated dump truck) has a pivot point between the cab and tray, allowing for superior manoeuvrability on rough, uneven terrain. They're widely used across Perth's mining and civil construction sectors for hauling material across challenging sites where rigid trucks can't safely operate."
  },
  {
    question: "Why is live mine site moxy training in Perth better than simulation?",
    answer: "Simulation can't replicate real terrain, dust, gradient changes, or working alongside other heavy equipment. Our Perth moxy training takes place on an active mine site, so you experience genuine conditions from day one — making you immediately employable. Perth employers specifically value live site experience."
  },
  {
    question: "Do you help with job placement after moxy training?",
    answer: "Yes! We have a 60% job placement rate for our Perth moxy training graduates. Our industry connections across Perth's mining sector mean we actively refer graduates to employers looking for certified moxy operators. Many of our graduates are working within weeks of completing training."
  },
  {
    question: "Is government funding available for moxy training in Perth?",
    answer: "CTF (Construction Training Fund) funding may cover your moxy training costs if you're eligible. Many Perth residents qualify. We can help you check eligibility and apply — just ask when you book your moxy training."
  },
  {
    question: "Can I bundle moxy training with other machine tickets in Perth?",
    answer: "Absolutely. The Moxy is included in our Starter Bundle ($2,500) with Roller and Watercart training — the most popular combination for Perth mining jobs. We also offer custom bundles. Check our bundles page for the best value."
  },
  {
    question: "Where does moxy training take place in Perth?",
    answer: "Our moxy training in Perth takes place on a live, active mine site — not a concrete yard or controlled environment. This is what sets Cailin apart from other Perth training providers. You'll train on real terrain with real equipment, building genuine operational experience."
  },
  {
    question: "What should I bring to moxy training in Perth?",
    answer: "We provide all PPE and safety equipment for your moxy training. Just bring enclosed steel-cap boots, long pants, a long-sleeve shirt, lunch, and plenty of water. Sunscreen and a hat are also recommended for Perth's outdoor conditions."
  }
];
const MoxyTrainingPerth = () => {
  useEffect(() => {
    document.title = "Moxy Training Perth | Articulated Dump Truck Course | Live Mine Site";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Perth's #1 live mine site moxy training. Get certified on real articulated dump trucks. 1:1 instruction, 60% job placement. Book now - 0483 951 501");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.cailinminingcivil.com/courses/moxy-training-perth");
    }
    const courseSchema = document.createElement("script");
    courseSchema.type = "application/ld+json";
    courseSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Moxy Training Perth - Articulated Dump Truck Certification",
      "description": "Live mine site moxy (articulated dump truck) training in Perth. Nationally recognised RIIMPO337E certification with 1:1 instruction.",
      "provider": {
        "@type": "Organization",
        "name": "Cailin Mining & Civil",
        "url": "https://www.cailinminingcivil.com",
        "telephone": "0483 951 501",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        }
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "location": {
            "@type": "Place",
            "name": "Live Mine Site, Perth WA"
          }
        }
      ],
      "offers": [
        { "@type": "Offer", "price": "600", "priceCurrency": "AUD", "name": "Short Course" },
        { "@type": "Offer", "price": "2500", "priceCurrency": "AUD", "name": "Full Day Training" },
        { "@type": "Offer", "price": "350", "priceCurrency": "AUD", "name": "RPL Assessment" }
      ],
      "educationalCredentialAwarded": "RIIMPO337E — Conduct Articulated Haul Truck Operations"
    });
    document.head.appendChild(courseSchema);
    const businessSchema = document.createElement("script");
    businessSchema.type = "application/ld+json";
    businessSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Cailin Mining & Civil",
      "description": "Perth's leading moxy and articulated dump truck training provider. Live mine site training with 1:1 instruction and nationally recognised certification.",
      "url": "https://www.cailinminingcivil.com",
      "telephone": "+61483951501",
      "image": "https://www.cailinminingcivil.com/images/social.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perth",
        "addressRegion": "Western Australia",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9505,
        "longitude": 115.8605
      },
      "areaServed": {
        "@type": "State",
        "name": "Western Australia",
        "description": "WA mining sites including Pilbara, Goldfields, and Perth metro civil projects"
      },
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moxy / Articulated Dump Truck Training",
          "description": "Live mine site moxy training in Perth with RIIMPO337E certification. 1:1 instruction, unlimited hours, and 60% job placement rate.",
          "serviceType": "Vocational Training"
        }
      },
      "priceRange": "$350 - $2,500",
      "openingHours": "Mo-Fr 07:00-17:00",
      "sameAs": [
        "https://www.facebook.com/cailinminingcivil",
        "https://www.instagram.com/cailinminingcivil"
      ]
    });
    document.head.appendChild(businessSchema);
    return () => {
      document.head.removeChild(courseSchema);
      document.head.removeChild(businessSchema);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Moxy Training Perth | Articulated Dump Truck | Cailin",
        description: "Live mine site moxy training in Perth. Articulated dump truck (RIIMPO337E) with 1:1 instruction and job placement support across WA mining.",
        path: "/courses/moxy-training-perth"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: articulatedDumptruck, alt: "Moxy training Perth — articulated dump truck on live mine site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Perth's #1 Live Mine Site Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Moxy Training Perth — Live Mine Site Certification" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-6", children: "Get certified to operate articulated dump trucks on a real mine site in Perth. 1:1 instruction, nationally recognised RIIMPO337E qualification, and 60% job placement rate." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Moxy Training Now" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "xl", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            " 0483 951 501"
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your moxy training costs in Perth — ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Check Eligibility" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What Is Moxy Training in Perth?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "A Moxy — also known as an articulated dump truck — is one of the most widely used machines across Perth's mining and civil construction sectors. These powerful vehicles feature a pivot point between the cab and tray, allowing them to navigate rough, uneven terrain that rigid trucks simply can't handle." }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Moxy training in Perth" }),
          " teaches you to safely operate these machines on real mine sites. You'll learn pre-operational checks, safe loading and unloading procedures, navigating haul roads, tipping techniques, and how to work safely alongside other heavy equipment on Perth's active sites."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Perth is the operational hub for Western Australia's mining industry, making it the ideal location for moxy training. Our training sites are located within easy reach of Perth's northern and southern suburbs, meaning you can complete your certification without travelling to remote locations." }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          "Upon completion of your ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "moxy training in Perth" }),
          ", you'll receive a nationally recognised Statement of Attainment for",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: " RIIMPO337E — Conduct Articulated Haul Truck Operations" }),
          ", which is accepted at every mine site and civil project across Australia."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: dumptruckTrayRaised,
            alt: "Moxy training Perth — articulated dump truck tipping material on mine site",
            className: "w-full rounded-2xl",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: loaderDumptruckFramed,
            alt: "Moxy training Perth — dump truck and loader operating together on site",
            className: "w-full rounded-2xl",
            loading: "lazy"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: loaderDumptruckAction,
          alt: "Moxy training Perth — heavy equipment operating on live mine site",
          className: "w-full rounded-2xl",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Why Perth's Best Moxy Training Happens on a Live Mine Site" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Most moxy training providers in Perth use controlled yards or simulators. While these tick a compliance box, they don't prepare you for the reality of operating on an active mine site — the dust, gradients, radio communication, traffic management, and working alongside excavators and loaders." }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          "At Cailin Mining & Civil, our ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "moxy training in Perth" }),
          " happens exclusively on live mine sites. This means from your first session, you're building real-world skills that Perth mining employers actually value. It's why our graduates have a 60% job placement rate — they arrive on site already experienced."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
          "Perth mining companies like BHP, Rio Tinto, FMG, and Roy Hill specifically seek operators trained on live sites. When you complete your ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "moxy training in Perth" }),
          " with Cailin, your experience is immediately recognised as genuine operational competency — not just a paper qualification."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          "Train on real terrain with genuine Perth mine site conditions",
          "Experience working alongside other heavy equipment operators",
          "Learn radio protocols and traffic management used on WA sites",
          "Build confidence that translates directly to Perth mining employment",
          "1:1 instruction — your trainer's full attention, every session"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Moxy Training Perth — Course Options & Pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the moxy training path that matches your experience. Every option includes nationally recognised certification across Perth's mining sector." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$3.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Short Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: option.highlight ? "hero" : "outline",
                className: "w-full",
                onClick: () => {
                  if (option.title === "RPL Assessment") {
                    window.location.href = "/rpl#rpl-form";
                  } else {
                    window.open(option.bookingUrl, "_blank");
                  }
                },
                children: "Book Now"
              }
            )
          ]
        },
        option.title
      )) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground text-sm mt-6", children: "* RPL pricing may vary based on evidence and assessment requirements." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What's Included in Your Moxy Training in Perth" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
          "1:1 personalised instruction (never group-based)",
          "Training on a live, active mine site in Perth",
          "Nationally recognised RIIMPO337E Statement of Attainment",
          "All PPE and safety equipment provided",
          "Training recognised as work experience",
          "Pre-operational checks and maintenance procedures",
          "Safe loading, hauling, and tipping operations",
          "Radio communication and site safety protocols",
          "Working in all weather and terrain conditions",
          "Unlimited training hours (full day option)"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: catDumptruckLoaderPair,
            alt: "Moxy training Perth — dump truck and loader pair on training mine site",
            className: "w-full rounded-2xl",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroImage$1,
            alt: "Haul truck on Perth mine site — moxy training comparison",
            className: "w-full rounded-2xl",
            loading: "lazy"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Briefcase, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Moxy Operator Job Opportunities in Perth" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Perth is the gateway to Western Australia's booming mining sector — and articulated dump truck operators are in constant demand. From iron ore operations in the Pilbara to gold mines in the Goldfields and lithium projects across the state, certified moxy operators are among the most sought-after roles in Perth." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
        "Entry-level moxy operators in Perth typically earn between ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "$80,000 – $120,000 per year" }),
        ", with experienced operators on FIFO rosters earning ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "$150,000+" }),
        ". The combination of a moxy ticket with complementary qualifications like roller and watercart makes you even more employable across Perth's mining sector."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Major Perth-based employers including BHP, Rio Tinto, FMG, Roy Hill, and numerous labour hire companies are actively recruiting certified moxy operators year-round. Civil construction projects across Perth metro — including road works, subdivisions, and infrastructure projects — also rely heavily on articulated dump truck operators." }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
        "At Cailin Mining & Civil, we don't just provide ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "moxy training in Perth" }),
        " — we actively connect graduates with employers. Our program has a 60% job placement rate because employers trust that our graduates have genuine, hands-on experience from live mine site training."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm font-medium", children: "Pilbara Iron Ore — BHP, Rio Tinto, FMG" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm font-medium", children: "Goldfields — Gold & Nickel Mining" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm font-medium", children: "Perth Metro — Civil Construction & Roads" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm font-medium", children: "Lithium & Critical Minerals Projects" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-12 text-center", children: "What Our Perth Moxy Training Graduates Say" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground text-sm mb-4 italic", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold text-sm", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: t.role })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Why Perth Chooses Cailin for Moxy Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "With over 2,000 graduates and counting, Cailin Mining & Civil is Perth's most trusted provider of moxy training. We're the only training provider in Perth offering genuine 1:1 instruction on a live mine site — not a controlled yard, not a simulator, and not a group session with 15 other students." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Our Perth moxy training is recognised by over 100 affiliate employers across Western Australia. When you graduate from Cailin, you don't just get a certificate — you get a direct pathway to employment through our extensive industry network spanning the Pilbara, Goldfields, and Perth metro regions." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We're a registered training organisation (RTO 46489) delivering nationally recognised qualifications. Our trainers are experienced mining professionals who've spent years operating on WA mine sites — they understand what Perth employers need and train you accordingly." })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImage,
          alt: "Moxy training Perth — wide view of articulated dump truck operations on mine site",
          className: "w-full rounded-2xl",
          loading: "lazy"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "60% Job Placement" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Perth, Western Australia" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4 text-center", children: "Combine Your Moxy Ticket for Maximum Employability in Perth" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center max-w-2xl mx-auto mb-10", children: "Perth mining employers prefer operators with multiple machine tickets. These courses pair perfectly with your moxy training." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/courses/roller", className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "Roller Training" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3", children: "Essential for civil construction and road works across Perth" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "View Course →" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/courses/watercart", className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "Watercart Training" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3", children: "High demand across all WA mine sites for dust suppression" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "View Course →" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/courses/excavator-training-perth", className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "Excavator Training Perth" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3", children: "The most in-demand machine ticket in Perth's mining sector" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "View Course →" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/courses/bundles", className: "bg-card border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "Starter Bundle" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-3", children: "Moxy + Roller + Watercart for $2,500 — best value" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary text-sm font-medium", children: "View Bundles →" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Moxy Training Perth — FAQs" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$5.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Start Your Moxy Training in Perth?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Join hundreds of graduates who've launched mining careers through Perth's leading live mine site moxy training program. Book today or call us for a free consultation." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Moxy Training Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm mt-6", children: [
        "Or call us directly: ",
        /* @__PURE__ */ jsx("a", { href: "tel:0483951501", className: "text-primary font-medium", children: "0483 951 501" })
      ] })
    ] }) })
  ] });
};
const courseOptions$2 = [
  {
    title: "$600 Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_roller-book",
    highlight: false
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/roller_day_course",
    highlight: true,
    badge: "RECOMMENDED"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-roller-book",
    highlight: false
  }
];
const skills$2 = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Compaction techniques and patterns",
  "Working on various soil types",
  "Operating vibratory and static rollers",
  "Working safely on road construction"
];
const faqs$4 = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO317F (Conduct roller operations)."
  },
  {
    question: "What types of rollers will I learn on?",
    answer: "Training covers both vibratory and static rollers commonly used in civil construction and road building projects."
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1.5 hours initial. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe."
  },
  {
    question: "Is this included in any bundles?",
    answer: "Yes! The Roller is included in our Starter Bundle ($2,500) along with Moxy and Watercart training — a popular combination for entry-level operators."
  }
];
const Roller = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Roller Operator Training Perth | RIIMPO317F | Cailin",
        description: "Get your roller ticket in Perth. RIIMPO317F roller operator certification for compaction work in construction and road building.",
        path: "/courses/roller"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: rollerArtistic, alt: "Roller machine" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Roller Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Get certified to operate rollers in civil construction and road building. Nationally recognised qualification included." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "RIIMPO317F" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that suits your experience level and goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$2.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: option.highlight ? "hero" : "outline", className: "w-full", onClick: () => {
              if (option.title === "RPL Assessment") {
                window.location.href = "/rpl#rpl-form";
              } else {
                window.open(option.bookingUrl, "_blank");
              }
            }, children: "Book Now" })
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our roller training covers all aspects of safe and efficient machine operation, preparing you for real-world roles in civil construction and road building." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills$2.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: rollerInspection,
          alt: "Roller training session",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$4.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Your Roller Ticket?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your roller training today with Western Australia's leading operator training provider." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const trainerSiteSafety = "/assets/trainer-site-safety-D_iBA_lW.jpg";
const courseOptions$1 = [
  {
    title: "$600 Course",
    duration: "1.5 hours initial",
    price: "$600",
    description: "Quick certification with nationally recognised qualification",
    bookingUrl: "https://live.cailintraining.com.au/short_course_watercart-book",
    highlight: false
  },
  {
    title: "Full Training",
    duration: "Unlimited hours",
    price: "$2,500",
    description: "1:1 training on a live mine site until you're confident",
    bookingUrl: "https://live.cailintraining.com.au/watercart_day_course",
    highlight: true,
    badge: "RECOMMENDED"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "https://live.cailintraining.com.au/rpl_voc-watercart-book",
    highlight: false
  }
];
const skills$1 = [
  "Safe start-up and shutdown procedures",
  "Pre-operational checks and maintenance",
  "Dust suppression techniques",
  "Water distribution and coverage",
  "Operating on haul roads and site areas",
  "Working safely around other equipment"
];
const faqs$3 = [
  {
    question: "What qualification will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment for RIIMPO206D (Conduct water cart operations)."
  },
  {
    question: "What does a watercart operator do?",
    answer: "Watercart operators are responsible for dust suppression on mining and construction sites. This is a critical role for site safety and environmental compliance."
  },
  {
    question: "How long does training take?",
    answer: "Our $600 course takes 1.5 hours initial. Full training with unlimited hours continues until you're confident and competent — there's no rushed timeframe."
  },
  {
    question: "Is this included in any bundles?",
    answer: "Yes! The Watercart is included in our Starter Bundle ($2,500) along with Moxy and Roller training — a popular combination for entry-level operators."
  }
];
const Watercart = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Watercart Training Perth | RIIMPO206D | Cailin Mining & Civil",
        description: "Bulk water truck operations training in Perth. RIIMPO206D watercart ticket for dust suppression and site maintenance on mining and civil sites.",
        path: "/courses/watercart"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: watercartNew, alt: "Watercart training operations" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Watercart Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Get certified to operate water carts for dust suppression in mining and civil construction. Nationally recognised qualification included." }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "RIIMPO206D" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Choose the training path that suits your experience level and goals." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: courseOptions$1.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: option.highlight ? "hero" : "outline", className: "w-full", onClick: () => {
              if (option.title === "RPL Assessment") {
                window.location.href = "/rpl#rpl-form";
              } else {
                window.open(option.bookingUrl, "_blank");
              }
            }, children: "Book Now" })
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our watercart training covers all aspects of safe and efficient machine operation, preparing you for real-world roles in civil construction and mining." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills$1.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: trainerSiteSafety,
          alt: "Site safety training",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$3.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Get Your Watercart Ticket?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Start your watercart training today with Western Australia's leading operator training provider." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const itcImage = itcAsset.url;
const courseOptions = [
  {
    title: "$600 Course",
    duration: "Short course",
    price: "$600",
    description: "Fork attachment operation on an Integrated Tool Carrier",
    bookingUrl: "https://live.cailintraining.com.au/short_course_integrated_tool_carrier",
    highlight: true,
    badge: "SHORT COURSE"
  },
  {
    title: "RPL Assessment",
    duration: "Assessment only",
    price: "$350*",
    description: "For experienced operators needing certification",
    bookingUrl: "/rpl#rpl-form",
    highlight: false
  }
];
const skills = [
  "Pre-start inspections on the ITC and fork attachment",
  "Safe load handling with the fork attachment",
  "Correct operating procedures for the fork attachment",
  "Hazard awareness and site safety",
  "Safe work practices while using the ITC",
  "Understanding load limits and stability"
];
const faqs$2 = [
  {
    question: "What does this course cover?",
    answer: "This course covers safe operation of the fork attachment on an Integrated Tool Carrier — including pre-start inspections, load handling, operating procedures, hazard awareness, and safe work practices."
  },
  {
    question: "Does this include bucket operation?",
    answer: "No. This course covers fork attachment operation only. Bucket operation falls under the Loader qualification — check out our Front End Loader training if that's what you need."
  },
  {
    question: "Are there prerequisites?",
    answer: "Yes. Participants should already hold a Loader qualification or be competent in operating a loader before enrolling in this course."
  },
  {
    question: "Is a full-day option available?",
    answer: "No. This course is delivered as a short course only — a full-day training option is not available for the Integrated Tool Carrier fork attachment."
  }
];
const IntegratedToolCarrier = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Integrated Tool Carrier (ITC) Fork Training Perth | Cailin",
        description: "ITC fork attachment training in Perth. $600 short course covering pre-start checks, load handling, operating procedures and safe work practices. RPL available.",
        path: "/courses/integrated-tool-carrier"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: itcImage, alt: "Integrated Tool Carrier with fork attachment" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Machine Training" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Integrated Tool Carrier Training" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "Fork attachment operation on an Integrated Tool Carrier (ITC). Learn safe load handling, pre-start inspections and site-ready operating procedures." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary font-medium", children: "RIIHAN311F" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Fork attachment operation only" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left", children: [
      /* @__PURE__ */ jsx(Banknote, { className: "w-8 h-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: "Government Funding Available" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "CTF funding may cover your training costs – ask us how" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "ml-0 md:ml-4", children: /* @__PURE__ */ jsx(Link, { to: "/ctf-funding", children: "Learn More" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-xl p-5", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-destructive shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-foreground", children: [
        /* @__PURE__ */ jsx("strong", { children: "Prerequisite:" }),
        " Participants should already hold a Loader qualification or be competent in operating a loader. This course covers",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "fork operation only" }),
        " — bucket operation falls under the Loader qualification."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Training Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Delivered as a short course only. A full-day training option is not available." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto", children: courseOptions.map((option) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-card border rounded-2xl p-6 ${option.highlight ? "border-primary ring-2 ring-primary/20" : "border-border"} relative`,
          children: [
            option.badge && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold", children: option.badge }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-1", children: option.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: option.duration })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary text-center mb-4", children: option.price }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm text-center mb-4", children: option.description }),
            option.title === "$600 Course" && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 bg-destructive/10 border border-destructive/30 rounded-lg p-3 mb-4", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground text-xs", children: "Please note: This course does not include Return for Free eligibility. Additional training hours may be required before becoming eligible." })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: option.highlight ? "hero" : "outline",
                className: "w-full",
                onClick: () => {
                  if (option.title === "RPL Assessment") {
                    window.location.href = "/rpl#rpl-form";
                  } else {
                    window.open(option.bookingUrl, "_blank");
                  }
                },
                children: "Book Now"
              }
            )
          ]
        },
        option.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What You'll Learn" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "This course is designed for operators who use the fork attachment on an Integrated Tool Carrier. It focuses on the safe, correct and confident use of the fork attachment in a working environment." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: skills.map((skill) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: skill })
        ] }, skill)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: itcImage,
          alt: "Integrated Tool Carrier with fork attachment on site",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "1:1 Training Ratio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "RTO 46489" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Live Mine Site Training" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-12", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs$2.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Book Your ITC Fork Training?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Secure your spot in Perth's most hands-on Integrated Tool Carrier fork attachment course." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(BookLink, { children: "Book Now" }) }),
        /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "xl", children: "Free Consultation" }) })
      ] })
    ] }) })
  ] });
};
const PAGE_BY_TYPE = {
  "3351RT4KM419DB8B8E5C5": "/bookeo/moxy.html",
  "3351CXRKYN19DB8EDB768": "/bookeo/loader.html",
  "3351TY49AP19DB8F33801": "/bookeo/watercart.html",
  "3351LUU3UW19DB8F7B9C5": "/bookeo/roller.html",
  "3351LWH36P19DB8EF9BE4": "/bookeo/excavator.html",
  "3351MPEJXE18EE1709583": "/bookeo/rigid-haul-truck.html"
};
const BookeoWidget = ({ course }) => {
  const [isLoading, setIsLoading] = useState(true);
  const src = course ? PAGE_BY_TYPE[course] : void 0;
  if (!src) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-[400px] items-center justify-center rounded-lg border border-border bg-card p-6 text-center text-muted-foreground", children: "Booking page not available for this machine. Please contact us." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden rounded-lg border border-border bg-white", children: [
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center text-muted-foreground", children: "Loading booking calendar..." }),
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src,
        title: "Bookeo booking calendar",
        onLoad: () => setIsLoading(false),
        className: "w-full",
        style: { minHeight: 1100, height: 1100, border: 0, display: "block" }
      },
      src
    )
  ] });
};
const Book = () => {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course") || void 0;
  useEffect(() => {
    const metas = [
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" }
    ];
    const elements = metas.map(({ httpEquiv, content }) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = httpEquiv;
      meta.content = content;
      document.head.appendChild(meta);
      return meta;
    });
    return () => elements.forEach((el) => el.remove());
  }, []);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Book Machine Operator Training | Cailin Mining & Civil",
        description: "Book your machine operator training in Perth. Choose from excavator, loader, moxy, roller and watercart courses with 1:1 live mine site instruction.",
        path: "/book"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        HeroImage,
        {
          src: heroImage,
          alt: "Mining equipment training",
          overlayClassName: "bg-background/90"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6", children: [
          "Book Your ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Training" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Select your course and preferred date below. All courses include hands-on machine time with our experienced trainers." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(CTFFundingBanner, {}),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsx(BookeoWidget, { course: courseParam }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground text-center mb-8", children: "Prefer to talk with us first?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Call Us" }),
          /* @__PURE__ */ jsx("a", { href: "tel:0483951501", className: "text-primary hover:underline", children: "0483 951 501" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Email Us" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:admin@cailintraining.com.au", className: "text-primary hover:underline text-sm break-all", children: "admin@cailintraining.com.au" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Location" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Perth, Western Australia" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 text-center", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Hours" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Mon-Fri: 7am - 5pm" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground text-center mb-8", children: "Booking FAQs" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "What happens after I book?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "You'll receive a confirmation email with all the details including location, what to bring, and what to expect on the day." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "Can I reschedule my booking?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes, you can reschedule up to 48 hours before your training date at no extra cost. Contact us to arrange a new date." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "Is CTF funding available?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Yes! Construction Training Fund (CTF) funding may cover your training costs. Ask us about eligibility when you book." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "What do I need to bring?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Bring photo ID, closed-toe boots, long pants, and a high-vis shirt. We provide all safety equipment and PPE for training." })
        ] })
      ] })
    ] }) }) })
  ] });
};
const staticBlogPosts = [
  {
    "id": "a3dce566-d2dd-4cfd-b681-9c98a5479fd0",
    "title": "How to Get Your Excavator Ticket in Perth: Complete Training Guide",
    "slug": "excavator-ticket-perth-training-guide",
    "excerpt": "Get your excavator ticket in Perth with hands-on training on a live mine site. Unlimited machine time, one-to-one instruction and exclusive Topcon GPS training.",
    "content": "Get your excavator ticket in Perth with hands-on training on a live mine site. Unlimited machine time, one-to-one instruction, plus exclusive Topcon GPS training. Nationally recognised certification.\n\n## What Is an Excavator Ticket?\n\nAn excavator ticket (formally **RIIMPO320F – Conduct Civil Construction Excavator Operations**) is your nationally recognised qualification to operate hydraulic excavators in mining and civil construction. Without this certification, you cannot legally operate an excavator on Australian worksites.\n\nThe ticket demonstrates you can:\n\n- Perform pre-operational checks and maintenance\n- Operate excavators safely in various conditions\n- Execute trenching, loading and material handling tasks\n- Understand site safety and hazard management\n- Communicate effectively on worksites\n\n## Why Get Your Excavator Ticket in Perth?\n\nPerth sits at the heart of Australia's mining industry, making it an ideal place to train and launch your career. The region offers:\n\n- Strong demand across local civil projects and FIFO mining roles\n- Industry-standard training delivered by people with real site experience\n- Competitive operator wages\n\n## Cailin's Unique Excavator Training Approach\n\nMost providers teach excavator operation on a flat concrete yard. They advertise 8-hour courses where, in reality, you spend 15 to 45 minutes moving the machine while waiting your turn in a group of up to fifteen students. That might earn you a ticket, but it does not prepare you for site conditions.\n\nAt Cailin Mining and Civil, you train on our **live mine site in Caraban** where:\n\n**You experience real conditions:**\n- Variable terrain and ground conditions\n- Actual production environments\n- Real material handling scenarios\n- Site communication protocols in action\n\n**You get unlimited machine time** when you book a full Two-Day course:\n- Practice until you are genuinely confident\n- Develop muscle memory and smooth operation\n- Master the machine at your own pace\n\n**You receive one-to-one instruction:**\n- Personalised feedback specific to your development\n- No waiting for other students\n- Instruction tailored to your learning style\n\n## Perth's Only Topcon GPS Excavator Training\n\nHere is where we truly stand apart: Cailin Mining and Civil offers Western Australia's only private **Topcon GPS excavator training** program.\n\nGPS-guided excavation is becoming standard on major civil projects. Knowing how to operate with GPS technology makes you significantly more employable and opens the door to:\n\n- Specialised civil construction projects\n- Higher pay rates\n- Project supervisor roles\n- Technical operator positions\n\nMost excavator operators do not have GPS training, giving Cailin graduates an immediate competitive edge.\n\n## What You Will Learn in Excavator Training\n\n**Pre-operational procedures:**\n- Visual inspections and walk-around checks\n- Fluid levels and system checks\n- Control familiarity and adjustments\n- Safety equipment verification\n\n**Operating fundamentals:**\n- Smooth control coordination\n- Depth and grade control\n- Bucket positioning and filling\n- Load cycle optimisation\n\n**Advanced techniques:**\n- Trenching to specification\n- Loading trucks efficiently\n- Material sorting and placement\n- Working on slopes and uneven ground\n\n**GPS operations (optional add-on):**\n- Topcon GPS system interface\n- Grade control using GPS guidance\n- Working to digital plans\n- Advanced civil construction techniques\n\n## How Long Does Excavator Training Take?\n\n**For complete beginners:** Typically two days of one-to-one training with unlimited machine time once deemed competent.\n\n**For experienced operators:** If you already operate excavators but need formal certification, we offer competency-based assessments. These can often be completed in a single day at $1,500, a Short Course at $600, or a ticket-only RPL online for $350.\n\n**GPS training:** Additional specialised sessions for those wanting to master Topcon GPS systems.\n\n## What Does an Excavator Ticket Cost?\n\nQuality excavator training in Perth typically sits between $1,500 and $2,500. At Cailin, you are not just paying for the ticket – you are paying for:\n\n- Training on a real mine site, not a practice yard\n- Unlimited machine time to build genuine competency\n- One-to-one instruction from experienced trainers\n- Optional Topcon GPS training that multiplies your value\n\n## Career Opportunities With Your Excavator Ticket\n\nAn excavator ticket opens numerous pathways:\n\n**Entry-level roles:** civil construction excavator operator, mining support operator, earthmoving assistant, demolition operator.\n\n**Experienced operator roles:** GPS operator, production excavator operator (mining), utility installation operator, site supervisor.\n\n## Prerequisites and Requirements\n\nTo enrol in excavator training, you need:\n\n- Minimum 18 years of age\n- Fluent English language skills\n\n## Real Students, Real Results\n\nOur students consistently report feeling more prepared and confident after training with us. Roughly **one in five** students who come to us are retraining after attending another organisation first.\n\nThe difference is simple: they have already operated in variable conditions, with real loads, on actual terrain.\n\n## Book Your Excavator Training Today\n\nReady to get your excavator ticket in Perth with training that actually prepares you for real work?\n\n✓ Perth's only live mine site training facility\n✓ Unlimited machine time – no rushed 15-minute sessions\n✓ One-to-one personalised instruction\n✓ Optional Topcon GPS training (WA's only private program)\n✓ Nationally recognised certification\n\nDo not settle for basic training-yard courses. Train on a live mine site and launch your excavator career with real-world experience.",
    "featured_image": "/blog/excavator-ticket-perth.png",
    "category": "Machine Tickets",
    "published": true,
    "published_at": "2026-04-28T06:57:23.716175+00:00",
    "created_at": "2026-04-28T06:57:23.716175+00:00",
    "updated_at": "2026-04-28T06:57:23.716175+00:00"
  },
  {
    "id": "7af4a90e-8c78-4cc9-bd0f-3ae21e286ede",
    "title": "Loader Tickets Perth: Why Loader Training Pays Off Fast",
    "slug": "loader-tickets-perth",
    "excerpt": "Loader operators earn more, stand out from the crowd and can master the basics in a single day. Here is what real loader training in Perth looks like.",
    "content": `If you are searching for **loader training in Perth** that actually prepares you for the job, you are in the right place. At Cailin Mining and Civil we do not just hand you a ticket and send you on your way. We turn you into a real operator.

Unlike providers running rushed 15-minute "full day" courses, we deliver Australia's first and only one-to-one live mine site training. One trainer, one machine, one student. That is the difference between holding a piece of paper and actually knowing how to run a loader.

## Why Choose Loader Training Over Other Tickets?

The loader is what we call an **advanced unit**. If you already hold your Starter Bundle (roller, water cart and moxy), adding a loader ticket is one of the smartest career moves you can make.

**Higher pay:** Loader operators typically earn more than water cart, moxy and roller operators. One extra course moves you from Level 3 to Level 4 machinery, and the pay packet reflects that.

**Stand out from the crowd:** Plenty of people hold basic Starter Bundle tickets, and many of them came from rushed courses. A genuine loader ticket from Cailin instantly sets you apart.

**It is more achievable than you think:** Many people assume loaders are too difficult to learn quickly. The reality? With natural operator instincts and proper one-to-one instruction, you can pick up the fundamentals in a single day.

## What You Will Learn in Our Perth Loader Course

By the end of your loader training with us, you will be able to:

- Maintain a flat, trimmed floor surface to site standards
- Load trucks productively and efficiently
- Handle material with confidence and precision
- Work at speeds dramatically faster than an excavator for certain tasks

The loader is one of the most versatile machines on any site. Once the skills click, you understand exactly why it is so highly valued.

## Australia's Only One-to-One Live Mine Site Training

Here is what makes Cailin Mining and Civil different from every other loader training provider in Perth:

**One-to-one instruction:** You are not sharing a machine with seven to fifteen other students. You learn at your own pace without waiting around.

**Live mine site experience:** Training in a paddock or concrete yard does not prepare you for the real thing. We train on a working site so you graduate with genuine operational experience.

**Free return practice:** Need more seat time? Come back any time when you book a maximum-time course at no extra cost. We want you confident, not just certified.

## Loader Course Options to Suit Your Experience Level

**Short Course:** Perfect if you have prior experience or just want to see if loader operation feels right for you.

**Half-Day Course:** Ideal for those with some background needing focused skill development.

**Full-Day Course:** Comprehensive training for beginners and anyone wanting full competency. Full Day pricing starts at $1,200. By the end of the day you leave as a genuine loader operator, not just someone with a ticket.

## The Problem With Cheap Loader Tickets in Perth

Let us be honest about what is happening in the training industry. Plenty of providers will sell you a loader ticket after 15 to 45 minutes of so-called "full day" training. You walk away with paperwork but you cannot actually operate the machine.

Companies notice the difference quickly, and so do you the moment you climb into a real cab on a real job. When you train with Cailin Mining and Civil, you get the real thing.

## Get Your Loader Ticket in Perth Today

Stop wasting time and money on training that does not prepare you for real work. We are Perth's only premium one-to-one loader training provider operating on a live mine site.

Whether you are adding to your Starter Bundle or beginning your journey into mining and civil operations, the loader is one of the best investments you can make in your career.

Ready to become a real loader operator? Book your course today.`,
    "featured_image": "/blog/loader-tickets-perth.png",
    "category": "Machine Tickets",
    "published": true,
    "published_at": "2026-04-28T06:57:23.716175+00:00",
    "created_at": "2026-04-28T06:57:23.716175+00:00",
    "updated_at": "2026-04-28T06:57:23.716175+00:00"
  },
  {
    "id": "6d4594ce-b4fa-4a9d-b268-a4221c3239ea",
    "title": "Machine Tickets Perth: Your Complete Guide to Mining and Civil Training",
    "slug": "machine-tickets-perth",
    "excerpt": "A complete guide to machine training in Perth. Live mine site, unlimited machine time and nationally recognised tickets across all major civil and mining equipment.",
    "content": "Looking for **machine training in Perth**? Cailin Mining and Civil offers hands-on training on a real mine site with unlimited machine time. Get job-ready fast with nationally recognised tickets.\n\n## Why Perth Is the Hub for Machine Operator Training\n\nPerth's booming mining and civil construction sectors create constant demand for qualified machine operators. Whether you are breaking into the industry or stacking tickets onto an existing skill set, quality machine training in Perth is your gateway to high-paying FIFO roles and stable career opportunities.\n\nBut here is the problem most providers will not tell you: learning on a concrete yard is nothing like operating on an actual worksite. That is where Cailin Mining and Civil stands apart.\n\n## What Makes Our Machine Training Different?\n\nWe are Perth's only training facility operating on a **live mine site in Caraban**. When you train with us you are not practicing on a flat, obstacle-free yard. You are working on real terrain, with actual materials, under genuine site conditions.\n\n**Our unique training advantages include:**\n\n- **Unlimited machine time** – Most providers give you 15 to 45 minutes of practical time on courses they advertise as 8 hours, with the majority spent in a classroom. We give you as much time on the equipment as you need to feel confident, with paperwork kept separate from on-site training hours.\n- **Time to make mistakes** – You only learn by making mistakes, and that takes time on your own. You cannot make every mistake worth learning from in 15 minutes.\n- **One-to-one instruction** – No groups, no queues, 100% focused on your development.\n- **Live mine site environment** – Train where you will actually work.\n- **Nationally recognised qualifications** – Delivered in partnership with All West Training Services (RTO 51925).\n\n## What Machines Can You Learn to Operate?\n\nWe offer comprehensive training across all major civil construction and mining equipment:\n\n**Earthmoving equipment:**\n\n- Excavators (including GPS training)\n- Front End Loaders\n- Graders\n- Dozers\n- Scrapers\n- Dump Trucks (Moxy / Articulated Haul Trucks)\n- Water Carts\n- Rollers\n- Skid Steers\n- Telehandlers\n- Integrated Tool Carriers\n\nEach course leads to a nationally recognised ticket accepted across Australia's mining and construction sectors.\n\n## How Long Does Machine Training Take?\n\nThis depends on your existing experience and the specific machine:\n\n- **Complete beginners:** Most single-machine courses take 1 to 3 days, depending on experience, with our unlimited training model on Full Day courses (starting at $1,200).\n- **Experienced operators:** If you do not need much time, our Short Course is just $600 – the most affordable premium training in Perth.\n- **Multiple tickets:** Combination packages let you maximise your versatility.\n\nThe beauty of unlimited machine time is that you progress at your pace, not on someone else's schedule.\n\n## What Is the Career Outlook for Machine Operators in WA?\n\nWestern Australia's resources sector continues to drive demand for skilled operators. Entry-level operators can expect:\n\n- **Starting wages:** $35 – $60 per hour\n- **FIFO opportunities:** 2/1 and 3/1 rosters are common in civil FIFO; 8:6 and 2:2 are common in mining\n- **Career progression:** Move into supervisory roles, training, or specialised equipment\n- **Job security:** Long-term projects across the Pilbara, Goldfields and Perth regions\n\n## Real Training That Gets Real Results\n\nThe difference between training on a practice yard versus a live mine site is like learning to drive in an empty car park versus on actual roads with traffic. Both might get you a licence, but only one prepares you for the real thing.\n\nOur students consistently report feeling more confident and job-ready because they have already experienced the conditions they will face on site.\n\n## Ready to Start Your Machine Training in Perth?\n\nWhether you are completely new to the industry or stacking tickets onto your resume, Cailin Mining and Civil delivers the most realistic, comprehensive machine training in Perth.\n\n**Next steps:**\n\n1. Decide which machine tickets align with your career goals\n2. Contact us to discuss your experience level\n3. Book your training on our live mine site\n4. Get unlimited machine time until you are confident\n5. Receive your nationally recognised qualification\n\nDo not settle for basic training-yard courses that leave you unprepared for real site work. Train on a live mine site and start your career with confidence.",
    "featured_image": "/blog/machine-tickets-perth.png",
    "category": "Machine Tickets",
    "published": true,
    "published_at": "2026-04-28T06:57:23.716175+00:00",
    "created_at": "2026-04-28T06:57:23.716175+00:00",
    "updated_at": "2026-04-28T06:57:23.716175+00:00"
  },
  {
    "id": "a0c0d039-f920-4e1f-b84a-d04eb6090461",
    "title": "Moxy Ticket Perth: How to Get Real Seat Time on an Articulated Dump Truck",
    "slug": "moxy-ticket-perth",
    "excerpt": "Thinking about getting your moxy ticket in Perth? Here is what real moxy training looks like, what to avoid, and how to come out genuinely job ready.",
    "content": 'Thinking about getting your moxy ticket in Perth? You are not alone. The moxy is one of the most in-demand machines in civil construction and mining, and adding this ticket to your resume opens doors to well-paying roles right across Western Australia.\n\nBut before you book the first course you find online, there are a few things worth knowing. Not all moxy training is created equal, and the difference between a quality course and a rushed one can be the difference between feeling confident on day one and feeling completely out of your depth.\n\n## What Actually Is a Moxy?\n\nLet us clear something up first. A moxy is an articulated dump truck. The name comes from Moxy, a brand that built these trucks years ago. You will see it spelled a few different ways: MOXY, MOXI or MOXIE. They all refer to the same machine.\n\nThe official qualification is **RIIMPO338F – Conduct Articulated Haul Truck Operations**. You may also hear it called an articulated dump truck ticket or articulated haul truck ticket. Same machine, same ticket.\n\n## Why Get Your Moxy Ticket?\n\nThe moxy is everywhere in civil construction and mining. If you are looking to break into the industry, this is one of the essential entry-level tickets to have on your resume.\n\nEven better, when you combine your moxy ticket with a roller and water cart ticket (what we call the **Starter Bundle**), you make yourself far more versatile on site. These three machines form the foundation of civil construction work, and holding all three means you can step into multiple roles.\n\n## The Problem With Most Moxy Training in Perth\n\nHere is something a lot of providers will not tell you. Many courses advertised as "full day training" actually give you just 15 to 45 minutes on the machine. The rest of the day is spent in a classroom or waiting your turn while other students share the equipment.\n\nSome providers run seven to fifteen students per course. Think about that. If you have eight hours and fifteen students sharing one machine, how much real seat time are you actually getting?\n\nWe see the result every week. People come to us for retraining after attending other providers, holding a ticket but unable to confidently operate the machine. That is not training. That is paperwork.\n\n## What You Actually Need to Learn\n\nOperating a moxy properly is not something you pick up in fifteen minutes. To be genuinely job ready, you need to master:\n\n- Pre-start inspections and the tips that only come from real site experience\n- Loading procedures from different machines\n- The four different types of tipping\n- How to approach a tip safely\n- Manoeuvring on uneven and unpredictable terrain\n\n## How Cailin Mining and Civil Does Moxy Training Differently\n\nAt Cailin Mining and Civil, we are the only training provider in Perth offering genuine **one-to-one** moxy training with unlimited machine time on a live mine site. No groups. No queues. No sharing.\n\n**One-to-one instruction:** It is just you, your trainer and the machine. Every minute is focused on your development.\n\n**Unlimited machine time on full day bookings:** Build the seat time and confidence you need to walk on site ready to work.\n\n**Live mine site training:** You learn on real terrain, not a flat concrete yard. Nothing on your first job will surprise you.\n\n**Video resources included:** Short course students receive pre-start and manoeuvre videos 48 hours before training, with lifetime access so you can revisit them whenever you need.\n\n## Moxy Course Options\n\nWe offer flexible training options to match your experience and goals:\n\n**Short Course:** Ideal for fast learners, people with transferable skills (farmers, tradies, experienced drivers) or anyone wanting to test the controls before committing to a longer course. You can always extend on the day if you want more time.\n\n**Half Day (4 hours):** A solid foundation for those with some experience or natural confidence behind the controls.\n\n**Full Day (8 hours):** Comprehensive training for complete beginners who want to leave fully job ready. Full Day pricing starts at $1,200.\n\n**Starter Bundle (Moxy + Roller + Water Cart):** Our most popular package and the smartest entry point into civil construction.\n\n## Get Your Moxy Ticket in Perth\n\nDo not waste money on a moxy ticket you cannot actually use. Train with Cailin Mining and Civil and leave with real skills, genuine confidence and a qualification that means something on site.\n\nReady to get started? Book your moxy training today.',
    "featured_image": "/blog/moxy-ticket-perth.png",
    "category": "Machine Tickets",
    "published": true,
    "published_at": "2026-04-28T06:57:23.716175+00:00",
    "created_at": "2026-04-28T06:57:23.716175+00:00",
    "updated_at": "2026-04-28T06:57:23.716175+00:00"
  }
];
const Blog = () => {
  const { data: posts, isLoading, error: queryError } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { supabase: supabase2 } = await Promise.resolve().then(() => client);
      const { data, error } = await supabase2.from("blog_posts").select("*").eq("published", true).order("published_at", { ascending: false });
      if (error) {
        console.error("Blog posts fetch error:", error);
        return staticBlogPosts;
      }
      console.log("Blog posts loaded:", (data == null ? void 0 : data.length) ?? 0);
      return (data == null ? void 0 : data.length) ? data : staticBlogPosts;
    },
    staleTime: 0,
    refetchOnMount: "always"
  });
  const visiblePosts = (posts == null ? void 0 : posts.length) ? posts : staticBlogPosts;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Mining & Civil Training Blog | Cailin Mining & Civil",
        description: "Tips, industry news, and success stories from Australia's mining and civil construction sectors. Stay informed with Cailin Mining & Civil.",
        path: "/blog"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: fleetLineupWide, alt: "Mining equipment fleet" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "News & Insights" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Cailin Mining & Civil Blog" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Tips, industry news, and success stories from the mining and civil construction world." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl overflow-hidden border border-border animate-pulse", children: [
      /* @__PURE__ */ jsx("div", { className: "h-48 bg-muted" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-1/4" }),
        /* @__PURE__ */ jsx("div", { className: "h-6 bg-muted rounded w-3/4" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-2/3" })
      ] })
    ] }, i)) }) : visiblePosts.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: visiblePosts.map((post) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/blog/${post.slug}`,
        className: "group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300",
        children: [
          post.featured_image && /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: post.featured_image,
                alt: post.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full", children: post.category }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            post.published_at && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm mb-3", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: format(new Date(post.published_at), "d MMMM yyyy") })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4 line-clamp-2", children: post.excerpt }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-primary font-medium text-sm", children: [
              "Read the full article ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ]
      },
      post.id
    )) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-4", children: "No blog posts yet." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Check back soon for industry tips and news!" })
    ] }) }) })
  ] });
};
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { supabase: supabase2 } = await Promise.resolve().then(() => client);
      const { data, error: error2 } = await supabase2.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
      if (error2) {
        console.error("Blog post fetch error:", error2);
        return staticBlogPosts.find((staticPost) => staticPost.slug === slug) ?? null;
      }
      return data ?? staticBlogPosts.find((staticPost) => staticPost.slug === slug) ?? null;
    },
    enabled: !!slug
  });
  const { data: relatedPosts } = useQuery({
    queryKey: ["related-posts", post == null ? void 0 : post.category, post == null ? void 0 : post.id],
    queryFn: async () => {
      const { supabase: supabase2 } = await Promise.resolve().then(() => client);
      const { data, error: error2 } = await supabase2.from("blog_posts").select("id, title, slug, featured_image, published_at").eq("published", true).eq("category", post.category).neq("id", post.id).order("published_at", { ascending: false }).limit(3);
      if (error2) return [];
      return (data == null ? void 0 : data.length) ? data : staticBlogPosts.filter((staticPost) => staticPost.category === post.category && staticPost.id !== post.id).slice(0, 3);
    },
    enabled: !!(post == null ? void 0 : post.category) && !!(post == null ? void 0 : post.id)
  });
  if (isLoading) {
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-32 pb-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "animate-pulse space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-32" }),
      /* @__PURE__ */ jsx("div", { className: "h-12 bg-muted rounded w-3/4" }),
      /* @__PURE__ */ jsx("div", { className: "h-64 bg-muted rounded-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-4 bg-muted rounded w-2/3" })
      ] })
    ] }) }) }) });
  }
  if (error || !post) {
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-32 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl text-foreground mb-4", children: "Post Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "The blog post you're looking for doesn't exist or has been removed." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Back to Blog" }) })
    ] }) }) });
  }
  const renderContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mt-8 mb-4", children: paragraph.replace("## ", "") }, index);
      }
      if (paragraph.startsWith("### ")) {
        return /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mt-6 mb-3", children: paragraph.replace("### ", "") }, index);
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
        return /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-2 my-4 text-muted-foreground", children: items.map((item, i) => /* @__PURE__ */ jsx("li", { children: item.replace("- ", "") }, i)) }, index);
      }
      return /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: paragraph }, index);
    });
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: `${post.title} | Cailin Mining & Civil Blog`,
        description: (post.excerpt || post.title).slice(0, 160),
        path: `/blog/${post.slug}`,
        type: "article",
        image: post.featured_image || void 0,
        publishedAt: post.published_at || void 0,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.featured_image ? [post.featured_image.startsWith("http") ? post.featured_image : `https://www.cailinminingcivil.com${post.featured_image}`] : void 0,
          datePublished: post.published_at,
          author: { "@type": "Organization", name: "Cailin Mining & Civil" },
          publisher: {
            "@type": "Organization",
            name: "Cailin Mining & Civil",
            logo: { "@type": "ImageObject", url: "https://www.cailinminingcivil.com/favicon.png" }
          },
          mainEntityOfPage: `https://www.cailinminingcivil.com/blog/${post.slug}`
        }
      }
    ),
    /* @__PURE__ */ jsx("article", { className: "min-h-screen pt-32 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate("/blog"),
          className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Blog"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full", children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-3 h-3" }),
            post.category
          ] }),
          post.published_at && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
            format(new Date(post.published_at), "d MMMM yyyy")
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-6", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: post.excerpt })
      ] }),
      post.featured_image && /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: post.featured_image,
          alt: post.title,
          className: "w-full h-80 md:h-96 object-cover rounded-2xl"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-invert max-w-none", children: renderContent(post.content) }),
      relatedPosts && relatedPosts.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-16 pt-12 border-t border-border", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-8", children: "Related Posts" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: relatedPosts.map((related) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/blog/${related.slug}`,
            className: "group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all",
            children: [
              related.featured_image && /* @__PURE__ */ jsx(
                "img",
                {
                  src: related.featured_image,
                  alt: related.title,
                  className: "w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-base text-foreground group-hover:text-primary transition-colors line-clamp-2", children: related.title }),
                related.published_at && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs mt-2", children: format(new Date(related.published_at), "d MMM yyyy") })
              ] })
            ]
          },
          related.id
        )) })
      ] })
    ] }) })
  ] });
};
const femaleTrainerInstructing = "/assets/female-trainer-instructing-B9PigGiA.jpg";
const cabinInteriorControls = "/assets/cabin-interior-controls-B_b_R--3.jpg";
const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in training delivery and student outcomes."
  },
  {
    icon: Users,
    title: "Personal Approach",
    description: "1:1 training ensures every student gets the attention they need to succeed."
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our qualifications are nationally recognised and respected by employers."
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your career success is our priority, from training through to job placement."
  }
];
const milestones = [
  { year: "2015", event: "Cailin established in Sydney" },
  { year: "2019", event: "Cailin Mining & Civil founded in Perth" },
  { year: "2020", event: "Launched mine site training facility" },
  { year: "2021", event: "Launched job placement program" },
  { year: "2023", event: "Leased our own mine site" },
  { year: "2024", event: "Won Western Australia's Crystal Vision Award" },
  { year: "2025", event: "Won Australia's Crystal Vision Award in Sydney" },
  { year: "2025", event: "Became Registered Training Organisation (RTO 46489)" }
];
const About = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "About Cailin Mining & Civil | Perth Machine Training",
        description: "Australia's only award-winning 1:1 live mine site training provider. RTO 46489. Learn our story, values, and how we launch mining and civil careers in Perth.",
        path: "/about"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: fleetLineupWide, alt: "Fleet of mining equipment lined up" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "About Us" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "About Cailin Mining & Civil — Expert Machine Training in Perth" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Australia's only award-winning live mine site machine operator training provider, dedicated to launching careers in the mining and civil construction industries." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Our Story" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Expert Training for Mining & Civil Careers" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "Cailin Mining & Civil was founded with a simple mission: to provide the highest quality machine operator training in Australia. Based in Perth, we are the only training provider offering 1:1 experience on a live mine site." }),
          /* @__PURE__ */ jsx("p", { children: "Our unique approach combines nationally recognised qualifications with unlimited training hours, ensuring our graduates are fully prepared for real-world challenges. We don't just train operators – we launch careers." }),
          /* @__PURE__ */ jsx("p", { children: "As a Registered Training Organisation (Cailin Training RTO 46489), we deliver specialised civil construction and mining machinery training with comprehensive job placement assistance. We've helped generate over $180 million in income for our graduates." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: femaleTrainerInstructing,
            alt: "Female trainer instructing student with radio on mine site",
            className: "rounded-2xl shadow-card w-full"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-4xl", children: "2,000+" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Students Trained" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-r from-primary/10 to-accent/10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-primary", children: "$180M+" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Income Generated for Students" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-primary", children: "2,000+" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Students Trained" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-primary", children: "60%" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Employment Rate" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-primary", children: "100+" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Affiliate Employers" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "What Drives Us" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Our Values" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value) => /* @__PURE__ */ jsxs("div", { className: "bg-card p-8 rounded-2xl border border-border text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(value.icon, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: value.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: value.description })
      ] }, value.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: cabinInteriorControls,
          alt: "Inside the cabin - 1:1 training at the controls",
          className: "rounded-2xl shadow-card w-full"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Why Choose Us?" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What Sets Us Apart" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
          "Only training provider in Perth with live mine site access",
          "Unlimited training hours – practice until you're confident",
          "1:1 personal instruction from experienced operators",
          "Nationally recognised qualifications (RTO 46489)",
          "Only training recognised as work experience",
          "Recognition of Prior Learning (RPL) available",
          "Flexible scheduling to suit your needs"
        ].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0 mt-1" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-card", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Our Journey" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground", children: "Key Milestones" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-secondary p-8 rounded-2xl border border-border", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: milestones.map((milestone, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-primary rounded-full" }),
          index < milestones.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-0.5 h-full bg-border mt-2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pb-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-primary font-semibold", children: milestone.year }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground", children: milestone.event })
        ] })
      ] }, milestone.year)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Registered Training Organisation" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Cailin Training" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "We are a Registered Training Organisation delivering nationally recognised qualifications. All Statements of Attainment are issued by Cailin Training." }),
      /* @__PURE__ */ jsx("div", { className: "inline-block bg-card px-8 py-4 rounded-xl border border-border", children: /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-foreground", children: "RTO 46489" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Start Your Journey?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Contact us today to learn more about our training programs and how we can help launch your career in the mining and civil construction industries." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Get In Touch" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View Courses" }) })
      ] })
    ] }) })
  ] });
};
const workersSiteOffice = "/assets/workers-site-office-DTyrSIyQ.jpg";
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0483 951 501",
    href: "tel:0483951501"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@cailinminingcivil.com",
    href: "mailto:info@cailinminingcivil.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Perth, Western Australia",
    href: null
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Fri: 7am - 5pm",
    href: null
  }
];
const faqs$1 = [
  {
    question: "How long does training take?",
    answer: "Training duration varies depending on the course and your experience level. We offer unlimited training hours, so you can practice until you're confident."
  },
  {
    question: "What qualifications will I receive?",
    answer: "You'll receive a nationally recognised Statement of Attainment issued by Cailin Training (RTO 46489), which is recognised by employers across Australia."
  },
  {
    question: "Do you help with job placement?",
    answer: "Yes! We have 100+ affiliate employers. After completing your training, you'll have access to our recruitment portal with direct job referrals and references. 60% of our graduates secure employment."
  },
  {
    question: "What if I already have experience?",
    answer: "We offer Recognition of Prior Learning (RPL) for experienced operators. This allows you to fast-track your qualification through competency assessment."
  }
];
const Contact = () => {
  const { open, setOpen } = useLocationNoticeDialog();
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Contact Cailin Mining & Civil | Perth WA",
        description: "Contact Cailin Mining & Civil in Perth. Phone 0483 951 501 or email us for course bookings and enquiries. Visits by appointment only.",
        path: "/contact"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: workersSiteOffice, alt: "Workers at site office" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Get In Touch" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Have questions about our training programs? Ready to book a consultation? We're here to help you start your career in mining and civil construction." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: contactInfo.map((info) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(info.icon, { className: "w-6 h-6 text-primary mx-auto mb-3" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-1", children: info.title }),
      info.href ? /* @__PURE__ */ jsx(
        "a",
        {
          href: info.href,
          className: "text-foreground font-medium hover:text-primary transition-colors",
          children: info.value
        }
      ) : info.title === "Location" ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen(true),
          className: "text-foreground font-medium hover:text-primary transition-colors cursor-pointer",
          children: info.value
        }
      ) : /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", children: info.value })
    ] }, info.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-6", children: "Send Us a Message" }),
        /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://link.cailinminingcivil.com/widget/form/3EVcWufambc6Digdx1Ao",
            style: { width: "100%", height: "800px", border: "none" },
            id: "3EVcWufambc6Digdx1Ao",
            title: "Contact Form",
            className: "rounded-2xl"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-6", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs$1.map((faq) => /* @__PURE__ */ jsxs("div", { className: "bg-card p-6 rounded-xl border border-border", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.answer })
        ] }, faq.question)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl border border-border text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Prefer to Talk?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Book a free consultation with our team. We'll answer all your questions and help you choose the right training path for your career goals." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "tel:0483951501", children: [
        /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mr-2" }),
        "Call 0483 951 501"
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(LocationNoticeDialog, { open, onOpenChange: setOpen })
  ] });
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const loaderDumpingAction = "/assets/loader-dumping-action-Bs_xa_mV.jpg";
const SUPABASE_URL$1 = "https://opdxvpqimcfhawcznxyc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const benefits$3 = [
  "Personalised career strategy session with Niamh.",
  "A full recap and action plan emailed to you directly after the call.",
  "Expert advice tailored to your situation.",
  "Perfect if you're outside of Australia.",
  "Ideal if you're not looking for training — just want a job.",
  "Great if you're still exploring your options or not yet ready to invest in a course."
];
const DiscoveryCall = () => {
  const { toast: toast2 } = useToast();
  const [formState, setFormState] = useState("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hasFlights, setHasFlights] = useState("");
  const [isEnglishFluent, setIsEnglishFluent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim() || !hasFlights || !isEnglishFluent) {
      toast2({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const qualified = hasFlights === "yes" && isEnglishFluent === "yes";
    setIsSubmitting(true);
    try {
      const response = await fetch(`${SUPABASE_URL$1}/rest/v1/discovery_call_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          has_flights_or_visa: hasFlights === "yes",
          is_english_fluent: isEnglishFluent === "yes",
          qualified
        })
      });
      if (!response.ok) throw new Error("Submission failed");
      if (qualified) {
        window.location.href = "https://link.cailinminingcivil.com/widget/booking/w0QHdI6U4F0SzOF5pThM";
        return;
      }
      setFormState("not-qualified");
    } catch {
      toast2({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        HeroImage,
        {
          src: trainerSiteSafety,
          alt: "Trainer on mining site",
          priority: true
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4 animate-fade-up", style: { animationDelay: "0.1s" }, children: "Private Coaching Call" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6 animate-fade-up", style: { animationDelay: "0.2s" }, children: "Book Your 1:1 Coaching Call With Niamh" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8 animate-fade-up", style: { animationDelay: "0.3s" }, children: "Get a personalised plan to break into the Mining & Civil industry — no matter where you are in the world." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "lg",
            variant: "hero",
            className: "text-lg py-6 px-8 shadow-glow animate-fade-up",
            style: { animationDelay: "0.4s" },
            onClick: () => {
              var _a;
              return (_a = document.getElementById("booking-widget")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            children: [
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 mr-2" }),
              "Get Started"
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-hero", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold font-display mb-8", children: [
          "What's ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Included" })
        ] }),
        benefits$3.map((benefit, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors",
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground", children: benefit })
            ]
          },
          index
        ))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-28", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-card rounded-xl p-6 md:p-8 shadow-card border border-border", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: loaderDumpingAction,
            alt: "Wheel loader loading articulated truck",
            className: "w-full h-56 object-cover rounded-lg mb-6"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold font-display text-center mb-2", children: "Ready to Map Out Your Path?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center mb-6", children: "Book a 1:1 coaching call with Niamh and walk away with a clear, personalised action plan." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "lg",
            variant: "hero",
            className: "w-full text-lg py-6 shadow-glow",
            onClick: () => {
              var _a;
              return (_a = document.getElementById("booking-widget")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            children: [
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 mr-2" }),
              "Get Started"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground text-center mt-4", children: [
          "*This is not an employment service. For employment opportunities",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/recruitment", className: "text-primary hover:underline font-semibold", children: "view recruitment opportunities" })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "booking-widget", className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      formState === "form" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsxs("h2", { className: "mb-4 font-display text-3xl font-bold text-foreground md:text-4xl", children: [
            "Quick ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Pre-Qualification" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Answer a few quick questions so we can best prepare for your call with Niamh." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "fullName",
                placeholder: "Enter your full name",
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                maxLength: 100,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone Number" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                placeholder: "Enter your phone number",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                maxLength: 20,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                placeholder: "Enter your email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                maxLength: 255,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Label, { children: "Do you have flights booked or a visa secured?" }),
            /* @__PURE__ */ jsxs(RadioGroup, { value: hasFlights, onValueChange: setHasFlights, className: "flex gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "yes", id: "flights-yes" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "flights-yes", className: "cursor-pointer", children: "Yes" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "no", id: "flights-no" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "flights-no", className: "cursor-pointer", children: "No" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Label, { children: "Is your English fluent?" }),
            /* @__PURE__ */ jsxs(RadioGroup, { value: isEnglishFluent, onValueChange: setIsEnglishFluent, className: "flex gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "yes", id: "english-yes" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "english-yes", className: "cursor-pointer", children: "Yes" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "no", id: "english-no" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "english-no", className: "cursor-pointer", children: "No" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              size: "lg",
              variant: "hero",
              className: "w-full text-lg py-6 shadow-glow",
              disabled: isSubmitting,
              children: [
                isSubmitting ? "Submitting..." : "Continue",
                !isSubmitting && /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ]
            }
          )
        ] })
      ] }),
      formState === "not-qualified" && /* @__PURE__ */ jsxs("div", { className: "text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card", children: [
        /* @__PURE__ */ jsx(XCircle, { className: "w-16 h-16 text-destructive mx-auto mb-6" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "Unfortunately, You Don't Qualify Yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Sorry, you must have flights booked or a visa secured and be fluent in English before booking a call." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display mb-4", children: "Take the First Step Today" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Our team is ready to guide you through every step of your training journey." }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          size: "lg",
          variant: "hero",
          className: "shadow-glow",
          onClick: () => {
            var _a;
            return (_a = document.getElementById("booking-widget")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
          },
          children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 mr-2" }),
            "Get Started"
          ]
        }
      )
    ] }) })
  ] });
};
const workTypes = [
  { value: "construction", label: "Construction work", eligible: true },
  { value: "exploration", label: "Exploration for resources", eligible: false },
  { value: "resources_operational", label: "Resources operational work", eligible: false },
  { value: "ships", label: "Building or maintenance of ships", eligible: false },
  { value: "elevators", label: "Work on elevators and escalators", eligible: false },
  { value: "maintenance", label: "Minor/routine maintenance", eligible: false }
];
const workLocations = [
  { value: "sites", label: "Sites" },
  { value: "workshop", label: "Workshop" },
  { value: "combination", label: "Combination of sites and workshop" }
];
const CLOUD_BASE_URL$2 = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY$2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const CONTACT_SUBMISSIONS_ENDPOINT = `${CLOUD_BASE_URL$2}/rest/v1/contact_submissions`;
const NOTIFY_SUBMISSION_ENDPOINT = `${CLOUD_BASE_URL$2}/functions/v1/notify-submission`;
const insertContactSubmission = async (submissionData) => {
  const response = await fetch(CONTACT_SUBMISSIONS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY$2,
      Authorization: `Bearer ${PUBLISHABLE_KEY$2}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify(submissionData)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to save submission");
  }
};
const triggerSubmissionNotification = async (submissionData) => {
  const response = await fetch(NOTIFY_SUBMISSION_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY$2,
      Authorization: `Bearer ${PUBLISHABLE_KEY$2}`
    },
    body: JSON.stringify({
      record: {
        ...submissionData,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...submissionData._ctfFields
      }
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Notify submission failed:", errorText);
  }
};
const CTFEligibilityForm = () => {
  const { toast: toast2 } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    workingInConstruction: "",
    workLocation: "",
    workType: ""
  });
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const selectedWorkType = workTypes.find((w) => w.value === formData.workType);
  const isEligible = formData.workingInConstruction === "yes" && (selectedWorkType == null ? void 0 : selectedWorkType.eligible);
  const handleSubmit = async (e) => {
    var _a, _b;
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast2({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast2({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    const phoneClean = formData.phone.replace(/\s/g, "");
    if (phoneClean.length < 10) {
      toast2({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const eligibilityStatus = isEligible ? "LIKELY ELIGIBLE" : "MAY NOT BE ELIGIBLE";
      const workTypeLabel = ((_a = workTypes.find((w) => w.value === formData.workType)) == null ? void 0 : _a.label) || "Not specified";
      const workLocationLabel = ((_b = workLocations.find((w) => w.value === formData.workLocation)) == null ? void 0 : _b.label) || "Not specified";
      const message = `[CTF Eligibility Check - ${eligibilityStatus}]

Job Title: ${formData.jobTitle || "Not specified"}

Work Status:
- Working in WA construction: ${formData.workingInConstruction === "yes" ? "Yes" : "No"}
- Work location: ${workLocationLabel}
- Type of work: ${workTypeLabel}

This person has submitted the CTF eligibility form and would like more information about funding options.`;
      const submissionData = {
        name: formData.fullName.trim().slice(0, 100),
        email: formData.email.trim().toLowerCase().slice(0, 255),
        phone: formData.phone.trim().slice(0, 20),
        message: message.slice(0, 2e3),
        _ctfFields: {
          job_title: formData.jobTitle || "Not specified",
          working_in_wa: formData.workingInConstruction === "yes" ? "Yes" : "No",
          work_location: workLocationLabel,
          type_of_work: workTypeLabel
        }
      };
      await insertContactSubmission({
        name: submissionData.name,
        email: submissionData.email,
        phone: submissionData.phone,
        message: submissionData.message
      });
      void triggerSubmissionNotification(submissionData);
      toast2({
        title: "Application Submitted!",
        description: isEligible ? "Great news! You appear to be eligible. We'll be in touch soon." : "Thank you for your submission. We'll review your details and contact you."
      });
      setFormData({
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        workingInConstruction: "",
        workLocation: "",
        workType: ""
      });
    } catch (error) {
      console.error("CTF submission failed:", error);
      toast2({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl text-foreground mb-2", children: [
        "CTF ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Eligibility Check" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Complete this preliminary check to see if you may be eligible for CTF funding. To confirm your eligibility and rebate amount, please contact CTF directly." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(User, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Personal Details" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", children: "Full Name *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "fullName",
                placeholder: "Your full name",
                value: formData.fullName,
                onChange: (e) => handleInputChange("fullName", e.target.value),
                maxLength: 100,
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "jobTitle", children: "Job Title" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "jobTitle",
                placeholder: "e.g., Carpenter, Labourer",
                value: formData.jobTitle,
                onChange: (e) => handleInputChange("jobTitle", e.target.value),
                maxLength: 100
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address *" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "email",
                  type: "email",
                  placeholder: "your@email.com",
                  className: "pl-10",
                  value: formData.email,
                  onChange: (e) => handleInputChange("email", e.target.value),
                  maxLength: 255,
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone Number *" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "phone",
                  type: "tel",
                  placeholder: "04XX XXX XXX",
                  className: "pl-10",
                  value: formData.phone,
                  onChange: (e) => handleInputChange("phone", e.target.value),
                  maxLength: 20,
                  required: true
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Work Status Questions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "1. At the time of training, were you working in the WA building and construction industry? *" }),
            /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                value: formData.workingInConstruction,
                onValueChange: (value) => handleInputChange("workingInConstruction", value),
                className: "flex gap-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { value: "yes", id: "construction-yes" }),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "construction-yes", className: "cursor-pointer", children: "Yes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { value: "no", id: "construction-no" }),
                    /* @__PURE__ */ jsx(Label, { htmlFor: "construction-no", className: "cursor-pointer", children: "No" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "2. Was the majority of this work undertaken in: *" }),
            /* @__PURE__ */ jsx(
              RadioGroup,
              {
                value: formData.workLocation,
                onValueChange: (value) => handleInputChange("workLocation", value),
                className: "flex flex-col gap-2",
                children: workLocations.map((location) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { value: location.value, id: `location-${location.value}` }),
                  /* @__PURE__ */ jsx(Label, { htmlFor: `location-${location.value}`, className: "cursor-pointer", children: location.label })
                ] }, location.value))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Label, { className: "text-foreground", children: "3. Select ONE type of work you undertook the majority of the time: *" }),
            /* @__PURE__ */ jsx(
              RadioGroup,
              {
                value: formData.workType,
                onValueChange: (value) => handleInputChange("workType", value),
                className: "flex flex-col gap-2",
                children: workTypes.map((type) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { value: type.value, id: `type-${type.value}` }),
                  /* @__PURE__ */ jsxs(
                    Label,
                    {
                      htmlFor: `type-${type.value}`,
                      className: "cursor-pointer flex items-center gap-2",
                      children: [
                        type.label,
                        type.eligible ? /* @__PURE__ */ jsx("span", { className: "text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium", children: "Eligible" }) : /* @__PURE__ */ jsx("span", { className: "text-xs bg-destructive/20 text-destructive px-2 py-0.5 rounded-full font-medium", children: "Not eligible" })
                      ]
                    }
                  )
                ] }, type.value))
              }
            )
          ] })
        ] })
      ] }),
      formData.workingInConstruction && formData.workType && /* @__PURE__ */ jsx("div", { className: `p-4 rounded-xl border ${isEligible ? "bg-primary/10 border-primary/20" : "bg-destructive/10 border-destructive/20"}`, children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: isEligible ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary shrink-0" }),
        /* @__PURE__ */ jsxs("p", { className: "text-foreground text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Good news!" }),
          " Based on your answers, you appear to be eligible for CTF funding."
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-destructive shrink-0" }),
        /* @__PURE__ */ jsx("p", { className: "text-foreground text-sm", children: "Based on your answers, you may not be eligible for CTF funding. Submit anyway and our team can review your situation." })
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "submit",
          variant: "hero",
          size: "lg",
          className: "w-full",
          disabled: isSubmitting,
          children: [
            isSubmitting ? "Submitting..." : "Submit Eligibility Application",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "bg-secondary rounded-xl p-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-foreground text-sm mb-2", children: "What is CTF Funding?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "The Construction Training Fund provides rebates on approved training costs for eligible workers in WA's construction industry. To confirm your eligibility and rebate amount, please contact CTF directly on (08) 9244 0100. This form is a preliminary check only." })
      ] })
    ] })
  ] });
};
const staffPortraitDumptruck = "/assets/staff-portrait-dumptruck-CnlMRClM.jpg";
const benefits$2 = [
  {
    icon: DollarSign,
    title: "Training Rebates Available",
    description: "CTF provides rebates on approved training costs. Contact CTF directly to confirm your eligibility and rebate amount."
  },
  {
    icon: MapPin,
    title: "Regional Bonus",
    description: "Regional workers can claim up to $1,700 per course, compared to $1,300 for metro workers."
  },
  {
    icon: FileCheck,
    title: "Multiple Claims",
    description: "Claim rebates for as many approved courses as you complete — there's no limit."
  },
  {
    icon: Users,
    title: "Workers & Employers",
    description: "Both individual workers and employers can claim CTF funding for approved training."
  }
];
const eligibilityCriteria = [
  "Work in Western Australia's building and construction industry",
  "Demonstrate primary and substantial involvement in on-site construction, installation, or fabrication",
  "Complete training with a Registered Training Organisation (RTO) like Cailin",
  "Successfully pass the course and obtain certification",
  "Submit claim within 12 months of course completion"
];
const notEligible = [
  "Government department employees (local, state, or commonwealth)",
  "Resources exploration or operational workers",
  "Manufacturing, supply, or transport of building products",
  "Routine maintenance or repair workers (post-construction)",
  "Carpet laying or floor covering contractors"
];
const claimSteps = [
  {
    step: "1",
    title: "Complete Your Training",
    description: "Finish your approved course with Cailin and receive your Statement of Attainment."
  },
  {
    step: "2",
    title: "Gather Documents",
    description: "Collect your proof of payment (paid invoice) and certificate of attainment."
  },
  {
    step: "3",
    title: "Lodge Your Claim",
    description: "Submit your claim through the CTF portal within 12 months of completion."
  },
  {
    step: "4",
    title: "Receive Rebate",
    description: "CTF processes your claim and pays the rebate directly to you or your employer."
  }
];
const faqs = [
  {
    question: "How much can I claim back?",
    answer: "Rebate amounts vary depending on your circumstances. To confirm your eligibility and rebate amount, please contact CTF directly on (08) 9244 0100."
  },
  {
    question: "Are Cailin's courses CTF-approved?",
    answer: "Yes! Cailin Training is a Registered Training Organisation (RTO 46489) and our courses are eligible for CTF funding. Contact us to confirm eligibility for your specific situation."
  },
  {
    question: "Can I claim if I'm currently unemployed?",
    answer: "Yes, but you'll need to secure employment in WA's construction industry within 12 months of completing the training to receive the rebate."
  },
  {
    question: "How long does the claim process take?",
    answer: "CTF processes most claims within a few weeks. Ensure all documentation is complete and accurate to avoid delays."
  },
  {
    question: "Can my employer claim on my behalf?",
    answer: "Yes! Employers can claim CTF rebates for training their employees. They'll need to provide proof of payment and your certificate of attainment."
  }
];
const CTFFunding = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "CTF Funding for Construction Training | Cailin Mining & Civil",
        description: "Construction Training Fund (CTF) rebates can offset your machine operator training costs in WA. Check eligibility and how to claim your rebate.",
        path: "/ctf-funding"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: trainerSiteSafety, alt: "Construction training on site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsx(DollarSign, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary font-medium text-sm", children: "Government Funding Available" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "CTF Funding" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "The Construction Training Fund (CTF) helps WA construction workers offset training costs with rebates on approved courses. To confirm your eligibility and rebate amount, please contact CTF directly." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits$2.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
      /* @__PURE__ */ jsx(benefit.icon, { className: "w-10 h-10 text-primary mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-lg text-foreground mb-2", children: benefit.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: benefit.description })
    ] }, benefit.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "What is the Construction Training Fund?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "The Construction Training Fund (CTF) is a Western Australian government initiative that provides funding for upskilling and short-course training for people who work in construction." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "CTF's Upskilling & Short Course Funding program helps diversify your expertise and build a safer, more sustainable future. To confirm your eligibility and rebate amount, please contact CTF directly." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Our courses at Cailin are delivered by a Registered Training Organisation and qualify for CTF funding — meaning you could get a significant portion of your training costs back." }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "lg", children: /* @__PURE__ */ jsxs("a", { href: "https://ctf.wa.gov.au", target: "_blank", rel: "noopener noreferrer", children: [
          "Visit CTF Website ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: staffPortraitDumptruck,
          alt: "Cailin trainer with equipment",
          className: "w-full rounded-2xl"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "Who's Eligible?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "CTF funding is available to workers in Western Australia's building and construction industry. Here's what you need to qualify." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground", children: "You're Eligible If You:" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: eligibilityCriteria.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-primary shrink-0 mt-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground text-sm", children: item })
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-destructive" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground", children: "Not Eligible:" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: notEligible.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-destructive shrink-0 mt-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-sm", children: item })
          ] }, item)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center mt-8", children: "Not sure if you're eligible? Contact CTF directly on (08) 9244 0100 or ask our team for guidance." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx(CTFEligibilityForm, {}) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-4", children: "How to Claim Your Rebate" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "After completing your training with Cailin, follow these simple steps to claim your CTF rebate." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto", children: claimSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl mb-4", children: step.step }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: step.description })
        ] }),
        index < claimSteps.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary -translate-y-1/2 z-10" })
      ] }, step.title)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsxs("a", { href: "https://ctf.powerappsportals.com/", target: "_blank", rel: "noopener noreferrer", children: [
        "Lodge Claim with CTF ",
        /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground text-center mb-12", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        AccordionItem,
        {
          value: `item-${index}`,
          className: "bg-card border border-border rounded-xl px-6",
          children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-foreground font-medium text-left", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Building2, { className: "w-12 h-12 text-primary mx-auto mb-6" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl text-foreground mb-6", children: "Ready to Start Training?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Book your course with Cailin, then claim your CTF rebate after completion. Our team can help guide you through the process." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "hero", size: "xl", children: /* @__PURE__ */ jsx(Link, { to: "/courses", children: "View Our Courses" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "heroOutline", size: "xl", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mr-2" }),
          "Contact Us"
        ] }) })
      ] })
    ] }) }) })
  ] });
};
const NotFound = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })
  ] }) });
};
const TermsAndConditions = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Terms & Conditions | Cailin Mining & Civil",
        description: "Terms and conditions for using Cailin Mining & Civil's website, services, and training programs in Perth, Western Australia.",
        path: "/termsandconditions"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Legal" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: "Terms & Conditions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: 13 May 2025" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none space-y-10 text-foreground", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "1) Our Role & RTO Relationship" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We deliver training and assessments as a third‑party provider to All West Training Services (RTO 51925). Statements of Attainment are issued by All West upon successful competency and completion of requirements." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "ASSESSMENT ONLY and VOC may be facilitated through All West Training Services in accordance with Australian Skills Quality Authority (ASQA) standards and the Standards for Registered Training Organisations (RTOs) 2015." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "2) Training Services" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "2.1) Course Delivery & Assessments" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We aim to provide the best possible educational experience in mining and civil construction equipment operation; however, competency is determined by qualified assessors in accordance with industry training packages and ASQA requirements." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "You may be assessed as Not Yet Competent for units/assessments and may require further training." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "2.2) Industry-specific Training" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Our courses are designed for mining and civil construction environments. Training includes industry-specific safety protocols, equipment operation standards, and workplace competency requirements relevant to these industries." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "2.3) International Students" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We welcome international students and provide guidance on qualification recognition and employment pathways. We are not migration agents — for official visa advice, consult qualified migration professionals." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "3) Recruitment Services" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "3.1) Talent Pool Participation" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Through our recruitment portal, you may opt-in to join our talent pool of qualified operators. Participation is voluntary and you may withdraw at any time." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "3.2) Candidate Matching" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We connect qualified candidates with employers and recruiters in mining and civil construction industries. Your personal information is not shared without your explicit consent for specific opportunities." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "3.3) Placement Arrangements" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "When successful matches occur between candidates and employers, Cailin Mining & Civil receives a variable placement fee from the employer. Fee structures vary based on role type, duration, and specific arrangements." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "3.4) No Employment Guarantees" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Participation in our talent pool or completion of training courses does not guarantee employment. Job placement depends on industry demand, candidate suitability, and employer requirements." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "4) Safety & Conduct" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Follow all instructions, site rules and safety protocols in accordance with SafeWork Australia guidelines and mining/civil construction industry standards. We may remove a participant for unsafe/inappropriate conduct without refund." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "All training occurs in live work environments with inherent risks associated with heavy machinery and construction activities." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "5) Pricing & Payments" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Prices are in AUD unless stated. Bookings/checkouts may be processed via Bookeo or other gateways. You are responsible for any bank/FX fees. Access may be suspended for failed payments." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "All transactions are subject to the Australian Consumer Law." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "6) Cancellations, Rescheduling & Refunds" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Refund eligibility: cancellations 48 hours or more prior to the start time are eligible for a refund in accordance with the Australian Consumer Law." }),
            /* @__PURE__ */ jsx("li", { children: "Within 48 hours / no‑show: generally non‑refundable; rescheduling may be offered at our discretion and subject to availability/admin fees." }),
            /* @__PURE__ */ jsx("li", { children: "If we cancel or materially reschedule, you can choose a full refund or a new date." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "Nothing here limits your rights under the Australian Consumer Law or guarantees provided under the Competition and Consumer Act 2010 (Cth)." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "7) Certificates & Records" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Statements of Attainment are issued by All West Training Services (RTO 51925) after all requirements are met in accordance with ASQA standards." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "Training records are maintained as required by vocational education legislation for the prescribed retention periods." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "8) Data Protection & Privacy" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "All personal information is handled in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles administered by the Office of the Australian Information Commissioner (OAIC). See our",
            " ",
            /* @__PURE__ */ jsx("a", { href: "/privacypolicy", className: "text-primary hover:underline", children: "Privacy Policy" }),
            " for full details."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "9) Referrals & Affiliate Links" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "9.1) Referral Services" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Referrals: If you click a clearly‑labelled referral link (e.g., résumé services or other partner), you authorise us to share your name and contact details with that partner so they can contact you. Partners are independent businesses. Review their terms and privacy." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "Affiliate links: If you follow an affiliate link and opt‑in on the partner site, that partner handles your data under their Privacy Act 1988 (Cth) obligations. We do not share your personal data with affiliates; we may receive commissions." }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "9.2) Recruitment Referrals" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "When we refer candidates to employers through our recruitment services, such referrals are subject to explicit candidate consent and separate agreements with recruiting partners." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "10) Affiliate Program (for Promoters)" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Enrollment: affiliates sign up via our funnel; we assign a unique link." }),
            /* @__PURE__ */ jsx("li", { children: "Attribution: leads who submit our form via an affiliate link are associated to that affiliate; future purchases by those leads may be commissionable. Attribution windows and rules are as configured in our system; we have sole discretion on final attribution." }),
            /* @__PURE__ */ jsx("li", { children: "Commissions: paid monthly, rate is variable. Commissions exclude refunds/chargebacks; self‑purchases/fraud are not eligible." }),
            /* @__PURE__ */ jsx("li", { children: "Data: affiliates receive no customer PII; only aggregated reporting in compliance with Privacy Act 1988 (Cth)." }),
            /* @__PURE__ */ jsx("li", { children: "Compliance: affiliates must follow applicable laws including the Competition and Consumer Act 2010 (Cth), Privacy Act 1988 (Cth), advertising policies (incl. Google/Meta), and our brand guidelines. We may suspend/terminate participation for non‑compliance or misuse." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "11) Marketing & Advertising" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We use advertising (Google/Meta) so people can find our services and we measure performance using UTMs/GCLID and analytics in accordance with Privacy Act 1988 (Cth) requirements. You can opt‑out of marketing emails at any time." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "12) Intellectual Property" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "All course materials and site content are protected by copyright and other intellectual property laws. You may not reproduce/distribute without permission." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "13) Website Use" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Do not introduce malware, attempt unauthorised access, or misuse the site. We may update content/policies at any time. Use of our website is subject to applicable Telecommunications Act 1997 (Cth) and Cybercrime Act 2001 (Cth) provisions." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "14) Industry Standards & Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Our training services comply with relevant industry standards including:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Australian Skills Quality Authority (ASQA) requirements" }),
            /* @__PURE__ */ jsx("li", { children: "SafeWork Australia guidelines" }),
            /* @__PURE__ */ jsx("li", { children: "Mining and civil construction industry training packages" }),
            /* @__PURE__ */ jsx("li", { children: "Relevant state-based workplace safety legislation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "15) International Students & Visa Considerations" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We provide general information about training eligibility and employment pathways for different visa categories. This information is general in nature and should not be relied upon as migration advice. Consult qualified migration agents for specific visa guidance." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "We comply with Education Services for Overseas Students Act 2000 (EOSA) where applicable." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "16) Liability" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To the extent permitted by law, including the Australian Consumer Law, we exclude liability for indirect/incidental/consequential loss. Our total liability for paid services is capped at the amount paid for the affected service." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "Nothing limits your rights under the Australian Consumer Law or Competition and Consumer Act 2010 (Cth), or liability we cannot exclude by law." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "17) Force Majeure" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We are not liable for delays or failures due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, equipment failures, or industry-specific disruptions affecting mining and civil construction operations." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "18) Dispute Resolution" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "18.1) Internal Resolution" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "We encourage early resolution of disputes. Contact us at",
            " ",
            /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline", children: "info@cailinminingcivil.com" }),
            " to discuss any concerns."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-3 mt-6", children: "18.2) External Options" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-3", children: "Unresolved disputes may be referred to:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Australian Competition and Consumer Commission (ACCC) for consumer matters" }),
            /* @__PURE__ */ jsx("li", { children: "Office of the Australian Information Commissioner (OAIC) for privacy matters" }),
            /* @__PURE__ */ jsx("li", { children: "ASQA for training-related complaints" }),
            /* @__PURE__ */ jsx("li", { children: "Relevant industry ombudsman services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "19) Governing Law" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Western Australia law governs these Terms in accordance with Australian federal legislation including the Competition and Consumer Act 2010 (Cth) and Privacy Act 1988 (Cth). Courts of WA have jurisdiction, subject to any exclusive federal jurisdiction." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "20) Severability" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue in full force and effect." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "21) Updates & Amendments" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We may update these Terms periodically. Continued use of our services after changes constitutes acceptance of updated Terms." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "22) Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "Email: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline", children: "info@cailinminingcivil.com" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-2", children: "Address: 411–423 Caraban Rd, Caraban WA 6041, Australia" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "These Terms & Conditions are governed by Australian law and comply with applicable federal and state legislation including the Competition and Consumer Act 2010 (Cth), Privacy Act 1988 (Cth), and relevant vocational education standards." })
        ] })
      ] })
    ] }) })
  ] });
};
const PrivacyPolicy = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Privacy Policy | Cailin Mining & Civil",
        description: "Read how Cailin Mining & Civil collects, uses and protects your personal information across our website and training services.",
        path: "/privacypolicy"
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Legal" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: 13 May 2025" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "prose prose-invert max-w-none space-y-10 text-foreground", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "1) Who We Are" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: 'Cailin Mining & Civil Pty Ltd ("Cailin", "we", "us") provides mining & civil training in Western Australia and operates as a third‑party training provider for All West Training Services (RTO 51925). Statements of Attainment are issued by All West Training Services.' }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            "Contact: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline", children: "info@cailinminingcivil.com" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Address: 411–423 Caraban Rd, Caraban WA 6041, Australia" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "This Policy explains how we collect, use, share and protect personal information across our website(s), funnels, embedded booking/checkout, recruitment portal, and our AI assistant in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs)." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "2) What We Collect" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Identity & contact:" }),
              " name, email, phone, address, date of birth."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Training data:" }),
              " enrolment details, course selections, RPL/VOC information, assessment outcomes, attendance notes, certification records."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Payment data:" }),
              " processed via Bookeo/payment gateways; we do not store full card numbers."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Support & communications:" }),
              " emails, messages, AI chat content."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Attribution & analytics:" }),
              " UTM parameters, Google Click ID (GCLID), device/browser info, referring URLs, page interactions; identifiers from tags (Google/Meta)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Affiliate/referral:" }),
              " information necessary to attribute referrals and pay commissions; we do not share customer PII with affiliates."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Recruitment & employment data:" }),
              " work history, qualifications, skills assessments, availability, visa status, safety records, previous mining/civil construction experience, references, and other employment-related information."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "International student information:" }),
              " visa type and status, international qualifications for recognition purposes, English language proficiency assessments."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "3) How We Collect It" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "Forms, bookings, checkouts (Wix/GHL/Bookeo)." }),
            /* @__PURE__ */ jsx("li", { children: "Recruitment portal applications and candidate registrations." }),
            /* @__PURE__ */ jsx("li", { children: "Cookies, localStorage, pixels and tags (GA4, Google Ads, Meta, GTM)." }),
            /* @__PURE__ */ jsx("li", { children: "Facebook Lead Ads or partner forms you submit." }),
            /* @__PURE__ */ jsx("li", { children: "Our AI assistant when you interact with it." }),
            /* @__PURE__ */ jsx("li", { children: "Assessment and competency evaluations." }),
            /* @__PURE__ */ jsx("li", { children: "Industry contacts and referral networks." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "4) Why We Use It" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Training Services:" }),
              " Deliver training/assessments; schedule sessions; manage enrolments, RPL, VOC; issue certifications via All West Training Services (RTO 51925)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Payment Processing:" }),
              " Take payments; handle cancellations, rescheduling and refunds."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Support Services:" }),
              " Provide support, answer questions (including via AI assistant)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Marketing & Analytics:" }),
              " Attribution & analytics (UTMs/GCLID) to understand how you found us and which ads/content perform; Marketing (with consent): reminders, updates, offers; you can opt‑out anytime."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Recruitment Services:" }),
              " Operate talent pool and candidate database; match qualified operators with potential employers; facilitate job placements in mining and civil construction industries; receive variable placement fees when successful matches occur."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Compliance & Safety:" }),
              " Maintain records as required by vocational education legislation, workplace safety requirements, and industry standards."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "International Student Support:" }),
              " Assess qualification recognition, provide visa guidance (informational only), and facilitate pathways to employment where permissible."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "5) Recruitment Portal & Talent Pool" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Candidate Registration:" }),
            " Through our recruitment portal, you can opt-in to join our talent pool of workers. This includes candidates who have trained with us and those with external qualifications or experience."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Data Collection:" }),
            " When you join our talent pool, we collect employment history, qualifications, skills, availability, work preferences, and other relevant professional information. This data remains private within our database."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Matching Services:" }),
            " We use this information to identify potential candidates for recruiters and employers seeking trained personnel in mining and civil construction. We do not share your personal details without your explicit consent for specific opportunities."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Placement Fees:" }),
            " Cailin Mining & Civil receives a variable fee for successful candidate placements. Fee structures depend on various factors including role type, duration, and employer arrangements."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Candidate Control:" }),
            " You maintain control over your participation and can update your preferences or withdraw from the talent pool at any time."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "6) Legal Bases & Region Notes" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We follow the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs) administered by the Office of the Australian Information Commissioner (OAIC)." }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "For international students and visitors: If you're in the EU/UK, we rely on consent, contract or legitimate interests as appropriate under GDPR. For other jurisdictions, we apply comparable privacy protections." }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Industry Compliance:" }),
            " We also comply with relevant vocational education regulations administered by ASQA (Australian Skills Quality Authority) and state-specific training authority requirements."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "7) Our AI Assistant" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Our bot helps with course info and support triage. Conversations may be reviewed by trained staff to improve responses. Do not provide payment card details or highly sensitive information in chat. The bot may display affiliate or referral links; see Section 11." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "8) Advertising, Cookies & localStorage" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "We use GA4, Google Ads (incl. auto‑tagging/GCLID), Meta Pixel, and GTM." }),
            /* @__PURE__ */ jsx("li", { children: "Our site stores UTMs and GCLID in localStorage to preserve attribution across pages and when you return." }),
            /* @__PURE__ */ jsx("li", { children: "Our consent banner lets you accept/decline non‑essential tracking; you can also adjust browser settings or clear storage." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "9) Sharing Your Information" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "We may share limited data with:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "All West Training Services (RTO 51925) to arrange enrolments/issuance of Statements of Attainment." }),
            /* @__PURE__ */ jsx("li", { children: "Service providers: hosting (Wix/GHL), Bookeo, email/CRM, analytics/ad platforms (Google/Meta), payment gateways, security/IT." }),
            /* @__PURE__ */ jsx("li", { children: "Recruitment partners: Employers and recruiters only with your explicit consent for specific opportunities." }),
            /* @__PURE__ */ jsx("li", { children: "Industry networks: Professional references and work history verification where consented." }),
            /* @__PURE__ */ jsx("li", { children: "Government agencies: As required by the Privacy Act 1988 (Cth), vocational education legislation, or other applicable laws." }),
            /* @__PURE__ */ jsx("li", { children: "Referral/partner businesses only when you consent (see Section 11)." }),
            /* @__PURE__ */ jsx("li", { children: "Affiliates: we do not share customer personal details with affiliates; only aggregated or masked reporting." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "We do not sell personal data. All data sharing is conducted in accordance with the Australian Privacy Principles." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "10) International Transfers" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Some providers store/process data overseas (including USA, EU). We take reasonable steps to ensure comparable protections in accordance with APP 8 of the Privacy Act 1988 (Cth)." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "11) Referrals, Partners & Affiliate Links" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Click‑to‑consent referrals:" }),
            " In some emails/pages/messages we provide a hyperlink to a third‑party service (e.g., resume writing or other partner). If you click such a link clearly labelled as a referral, you instruct and consent to us sharing your name and contact details with that third party for them to contact you about their services."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Form‑based consent:" }),
            " In other cases you may be asked to submit a partner form yourself; submitting that form authorises the partner to contact you directly."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "Partners are independent businesses. Review their privacy policy/terms before engaging. We are not responsible for their services." }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Affiliate links:" }),
            " We may display affiliate links (including via our AI assistant). If you follow an affiliate link and opt‑in on the partner site, the partner will handle your data under their policies. We do not share your personal data with affiliates; we receive attribution/commissions based on aggregated events."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "12) Industry-specific Considerations" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Mining & Civil Construction:" }),
            " We handle industry-specific data including safety certifications, equipment operation records, site access credentials, and work history relevant to mining and civil construction employment."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Safety Records:" }),
            " We may collect and maintain safety training records, incident reports, and competency assessments as required by industry standards and workplace safety legislation."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Security Clearances:" }),
            " Where relevant to employment opportunities, we may collect information about security clearances or eligibility for restricted site access."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "13) International Students" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Visa Information:" }),
            " We collect visa status information to provide guidance on training eligibility and employment pathways (informational purposes only — we are not migration agents)."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Qualification Recognition:" }),
            " We process international qualifications and work experience for RPL (Recognition of Prior Learning) purposes."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "English Proficiency:" }),
            " We assess English language capabilities as required for training and workplace safety."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Employment Guidance:" }),
            " We provide information about employment opportunities available to different visa categories, but recommend consulting qualified migration agents for official visa advice."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "14) Retention" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Training Records:" }),
            " Student enrollment, assessment, and certification records are retained as required by vocational education legislation administered by ASQA and relevant state authorities, typically for a minimum of 30 years."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Recruitment Data:" }),
            " Candidate profiles are retained while you remain active in our talent pool. Inactive profiles are archived after 2 years of no engagement."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "General Records:" }),
            " Other data is deleted or de‑identified when no longer needed for business or legal purposes."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Right to Deletion:" }),
            " You may request deletion of your personal information, subject to our legal obligations to retain certain training and compliance records."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "15) Security" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We use reasonable administrative, technical and physical safeguards in accordance with APP 11 of the Privacy Act 1988 (Cth). No method is 100% secure; contact us immediately if you suspect misuse." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "16) Your Choices & Rights" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Under the Privacy Act 1988 (Cth) and Australian Privacy Principles, you have rights to:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Access:" }),
              " Request copies of your personal information."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Correction:" }),
              " Request correction of inaccurate or incomplete information."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Complaints:" }),
              " Lodge complaints with us or the Office of the Australian Information Commissioner (OAIC)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Marketing opt‑out:" }),
              " Unsubscribe from marketing communications."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Consent management:" }),
              " Manage tracking consent via our banner or browser settings."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Recruitment control:" }),
              " Update your talent pool preferences or withdraw participation."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "17) Complaints Process" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "If you have concerns about our handling of your personal information:" }),
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal pl-6 space-y-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "Contact us first: ",
              /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline", children: "info@cailinminingcivil.com" })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "External complaints: You can complain to the Office of the Australian Information Commissioner (OAIC) at ",
              /* @__PURE__ */ jsx("a", { href: "https://www.oaic.gov.au", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "www.oaic.gov.au" }),
              " or 1300 363 992."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "18) Changes & Contact" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We may update this Policy periodically. Changes will be posted on our website with updated effective dates." }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mt-4", children: [
            "Questions/requests: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline", children: "info@cailinminingcivil.com" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Postal Address: 411–423 Caraban Rd, Caraban WA 6041, Australia" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mt-4", children: "This Privacy Policy is governed by Australian law and complies with the Privacy Act 1988 (Cth) and Australian Privacy Principles administered by the Office of the Australian Information Commissioner." })
        ] })
      ] })
    ] }) })
  ] });
};
const REDIRECT_URL = "https://live.cailintraining.com.au/thankyougeneral";
const RtoDataSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { httpEquiv: "refresh", content: `2;url=${REDIRECT_URL}` }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-background", children: [
      /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Redirection in Progress" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground animate-pulse", children: "Redirecting to thank you page..." })
    ] })
  ] });
};
const benefits$1 = [
  {
    icon: Briefcase,
    title: "Connect With Top Employers",
    description: "We partner with leading mining and civil companies across Western Australia actively seeking skilled operators."
  },
  {
    icon: Users,
    title: "Personalised Placement",
    description: "Our recruitment team works one-on-one with you to match your skills and experience to the right opportunity."
  },
  {
    icon: Award,
    title: "Industry-Ready Candidates",
    description: "Whether you're a fresh graduate or experienced operator, we help bridge the gap between training and employment."
  }
];
const Recruitment = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Recruitment Portal | Cailin Mining & Civil",
        description: "Looking for work in mining or civil construction? Submit your details to our recruitment portal and connect with industry opportunities.",
        path: "/recruitment"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-20 md:py-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[var(--gradient-hero)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Recruitment Portal" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Your Career In Mining & Civil Starts Here" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl", children: "Submit your details and our recruitment partners will connect you with employers looking for skilled operators across Western Australia." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "hero",
            size: "xl",
            onClick: () => {
              var _a;
              return (_a = document.getElementById("enquiry-form")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            children: [
              "Register Your Interest ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-5 w-5" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-card py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-12 text-center font-display text-3xl font-bold text-foreground md:text-4xl", children: "Why Register With Us?" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-5xl gap-8 md:grid-cols-3", children: benefits$1.map((benefit) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-border bg-background p-8 text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 font-display text-xl font-semibold text-foreground", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: benefit.description })
          ]
        },
        benefit.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "enquiry-form", className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 font-display text-3xl font-bold text-foreground md:text-4xl", children: "Register Your Interest" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fill out the form below and a recruitment partner will be in touch to discuss opportunities that match your experience." })
      ] }),
      /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://link.cailinminingcivil.com/widget/form/iby4GFge0DUMLO4ARaSE",
          style: { width: "100%", height: "100%", border: "none" },
          id: "iby4GFge0DUMLO4ARaSE",
          title: "Recruitment Enquiry Form",
          className: "min-h-[900px] rounded-2xl"
        }
      )
    ] }) }) })
  ] });
};
const affiliateHero = "/assets/affiliate-hero-DUVJVIir.jpg";
const benefits = [
  {
    icon: Share2,
    title: "Share Your Unique Link",
    description: "Once you sign up, you'll receive a personalised referral link via email that you can share with your network."
  },
  {
    icon: Link2,
    title: "Track Your Referrals",
    description: "When someone signs up through your link and books a course, the referral is automatically tracked to you."
  },
  {
    icon: DollarSign,
    title: "Earn 5% Commission",
    description: "You earn 5% of every course sale made through your referral link — it's that simple."
  }
];
const steps = [
  "Sign up using the form below",
  "Receive your unique referral link via email",
  "Share your link with friends, colleagues, or your audience",
  "Earn 5% commission on every course booked through your link"
];
const Affiliate = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Affiliate Program | Cailin Mining & Civil",
        description: "Earn commission by referring students to Cailin Mining & Civil. Join our affiliate program for Perth machine operator training courses.",
        path: "/affiliate"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: affiliateHero, alt: "Workers walking on a mine site" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium tracking-widest uppercase mb-4", children: "Affiliate Program" }),
        /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl text-foreground mb-6", children: "Earn Money Referring Future Operators" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8", children: "Join our affiliate program and earn 5% commission on every course sale made through your referral link." }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "hero",
            size: "xl",
            onClick: () => {
              var _a;
              return (_a = document.getElementById("affiliate-form")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            children: [
              "Become an Affiliate ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-5 w-5" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-card py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-12 text-center font-display text-3xl md:text-4xl font-bold text-foreground", children: "How It Works" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-5xl gap-8 md:grid-cols-3", children: benefits.map((benefit) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-border bg-background p-8 text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 font-display text-xl font-semibold text-foreground", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: benefit.description })
          ]
        },
        benefit.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center font-display text-3xl md:text-4xl font-bold text-foreground", children: "Get Started in 4 Easy Steps" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: steps.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold", children: index + 1 }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground text-lg pt-0.5", children: step })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "affiliate-form", className: "py-16 md:py-24 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 font-display text-3xl md:text-4xl font-bold text-foreground", children: "Sign Up as an Affiliate" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Fill out the form below and we'll send you your unique referral link via email." })
      ] }),
      /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://link.cailinminingcivil.com/widget/form/BQ6mVYXXnRkiLSMQ1ma8",
          style: { width: "100%", height: "100%", border: "none" },
          id: "BQ6mVYXXnRkiLSMQ1ma8",
          title: "Affiliate Signup Form",
          className: "min-h-[900px] rounded-2xl"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground mb-4", children: "Got Questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-8", children: "Reach out to our team and we'll walk you through the affiliate program." }),
      /* @__PURE__ */ jsx(DiscoveryCallButton, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "hero", size: "xl", children: "Contact Us" }) })
    ] }) })
  ] });
};
const CLOUD_BASE_URL$1 = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY$1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const VERIFY_RETURNING_STUDENT_ENDPOINT = `${CLOUD_BASE_URL$1}/functions/v1/verify-returning-student`;
const RETURNING_STUDENT_SUBMISSIONS_ENDPOINT = `${CLOUD_BASE_URL$1}/rest/v1/returning_student_submissions`;
const FREE_RETURN_REDIRECT_URL = "https://live.cailintraining.com.au/free_return_practice";
const cloudHeaders = {
  "Content-Type": "application/json",
  apikey: PUBLISHABLE_KEY$1,
  Authorization: `Bearer ${PUBLISHABLE_KEY$1}`
};
const verifyReturningStudent = async (email) => {
  const response = await fetch(VERIFY_RETURNING_STUDENT_ENDPOINT, {
    method: "POST",
    headers: cloudHeaders,
    body: JSON.stringify({ email })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Verification failed. Please try again.");
  return data;
};
const saveSubmission = async (submission) => {
  try {
    await fetch(RETURNING_STUDENT_SUBMISSIONS_ENDPOINT, {
      method: "POST",
      headers: { ...cloudHeaders, Prefer: "return=minimal" },
      body: JSON.stringify(submission)
    });
  } catch {
  }
};
const ReturningStudent = () => {
  const { toast: toast2 } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notEligible2, setNotEligible] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      toast2({ title: "Please enter your full name", variant: "destructive" });
      return;
    }
    if (!trimmedEmail) {
      toast2({ title: "Please enter your email", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setNotEligible(false);
    try {
      const data = await verifyReturningStudent(trimmedEmail);
      const matched = data.matched ?? false;
      void saveSubmission({ full_name: trimmedName, email: trimmedEmail, matched });
      if (matched && data.hasPromoTag) {
        setRedirecting(true);
        window.open(FREE_RETURN_REDIRECT_URL, "_blank", "noopener,noreferrer");
        return;
      }
      setNotEligible(true);
    } catch (err) {
      console.error("Free returns verification error:", err);
      toast2({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Free Returns | Cailin Mining & Civil",
        description: "Eligible Cailin students can claim a free return session on the machines. Verify your details to continue.",
        path: "/free-returns"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[55vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        HeroImage,
        {
          src: trainerSiteSafety,
          alt: "Cailin trainer on site",
          overlayClassName: "bg-gradient-to-r from-background via-background/90 to-background/60",
          priority: true
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 mx-auto px-4 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up", children: "Already trained with us?" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up", children: [
          "Free ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Returns" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-semibold text-foreground animate-fade-up", children: "Verify your details to claim your free return practice session." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-xl", children: redirecting ? /* @__PURE__ */ jsxs("div", { className: "text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "w-16 h-16 text-primary mx-auto mb-6" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "You're eligible for a Free Return!" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-lg mx-auto mb-6", children: "We've opened your Free Return booking page in a new tab. If it didn't open, click below to continue." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "hero", children: /* @__PURE__ */ jsxs("a", { href: FREE_RETURN_REDIRECT_URL, target: "_blank", rel: "noopener noreferrer", children: [
        "Continue to Free Return Booking",
        /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
      ] }) })
    ] }) : notEligible2 ? /* @__PURE__ */ jsxs("div", { className: "text-center bg-card rounded-xl p-8 md:p-12 border border-border shadow-card", children: [
      /* @__PURE__ */ jsx(XCircle, { className: "w-16 h-16 text-destructive mx-auto mb-6" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "Not Eligible for Free Returns" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-lg mx-auto mb-6", children: "Our records don't show an active Free Return Promo on your account. You can book a Full Day Course now to get qualified." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "hero", children: /* @__PURE__ */ jsxs(Link, { to: "/courses/full-day", children: [
          "Book a Full Day Course Now",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            onClick: () => {
              setNotEligible(false);
              setEmail("");
            },
            children: "Try a different email"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "fullName",
                type: "text",
                placeholder: "Your full name",
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                maxLength: 120,
                required: true,
                autoComplete: "name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                placeholder: "Enter the email used when you booked",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                maxLength: 255,
                required: true,
                autoComplete: "email"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "We'll check our records for an active Free Return Promo." })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              size: "lg",
              variant: "hero",
              className: "w-full text-lg py-6 shadow-glow",
              disabled: isSubmitting,
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 mr-2 animate-spin" }),
                "Checking..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Continue",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
            "Not eligible for Free Returns?",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/courses/full-day", className: "text-primary underline", children: "Book Now" })
          ] })
        ]
      }
    ) }) }) })
  ] });
};
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const MACHINES = [
  { key: "moxy", label: "ADT Moxy", bookeoType: "3351RT4KM419DB8B8E5C5" },
  { key: "loader", label: "Wheel Loader", bookeoType: "3351CXRKYN19DB8EDB768" },
  { key: "watercart", label: "Watercart", bookeoType: "3351TY49AP19DB8F33801" },
  { key: "roller", label: "Roller", bookeoType: "3351LUU3UW19DB8F7B9C5" },
  { key: "excavator", label: "Excavator", bookeoType: "3351LWH36P19DB8EF9BE4" }
];
const ACK_TEXT = "I understand that this booking does not include a qualification, Statement of Attainment, VOC, assessment, or ticket. This booking provides machine operating time and/or refresher training only.";
const CLOUD_BASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const REFRESHER_REQUESTS_ENDPOINT = `${CLOUD_BASE_URL}/rest/v1/refresher_training_requests`;
const RefresherTraining = () => {
  const { toast: toast2 } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [machineKey, setMachineKey] = useState("");
  const [notes, setNotes] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedMachine, setConfirmedMachine] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      toast2({ title: "Please complete name, email and phone", variant: "destructive" });
      return;
    }
    if (!machineKey) {
      toast2({ title: "Please select the machine you need", variant: "destructive" });
      return;
    }
    if (!acknowledged) {
      toast2({ title: "Please tick the acknowledgement to continue", variant: "destructive" });
      return;
    }
    const machine = MACHINES.find((m) => m.key === machineKey);
    if (!machine) return;
    setIsSubmitting(true);
    try {
      const response = await fetch(REFRESHER_REQUESTS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: PUBLISHABLE_KEY,
          Authorization: `Bearer ${PUBLISHABLE_KEY}`,
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          full_name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          machine: machine.label,
          notes: notes.trim() || null,
          acknowledged: true
        })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to save request");
      }
      setConfirmedMachine({ label: machine.label, bookeoType: machine.bookeoType });
    } catch (err) {
      console.error("Refresher submit error:", err);
      toast2({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Refresher / Hourly Machine Training | Cailin Mining & Civil",
        description: "Book additional machine operating time or refresher training with a Cailin trainer. No qualifications or assessments — operating time only.",
        path: "/refresher-training"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[55vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        HeroImage,
        {
          src: trainerSiteSafety,
          alt: "Cailin trainer assisting on machine",
          overlayClassName: "bg-gradient-to-r from-background via-background/90 to-background/60",
          priority: true
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 mx-auto px-4 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up", children: "Extra seat time, refreshers and trainer assistance" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-bold font-display mb-6 animate-fade-up", children: [
          "Refresher / ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Hourly" }),
          " Machine Training"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-semibold text-foreground animate-fade-up", children: "For students who need refresher training, trainer assistance or additional machine operating time." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: `mx-auto ${confirmedMachine ? "max-w-5xl" : "max-w-2xl"}`, children: confirmedMachine ? /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 md:p-8 border border-border shadow-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setConfirmedMachine(null),
            className: "-ml-2",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-1" }),
              "Change details"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-lg md:text-xl font-bold text-foreground", children: [
          confirmedMachine.label,
          " – Refresher / Hourly Booking"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-6 p-4 rounded-lg bg-muted/40 border border-border", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: "Your request has been sent to our team. Please complete your booking below — this is for machine operating time and/or refresher training only." })
      ] }) }),
      /* @__PURE__ */ jsx(BookeoWidget, { course: confirmedMachine.bookeoType })
    ] }) : /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "space-y-6 bg-card rounded-xl p-6 md:p-8 border border-border shadow-card",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 mb-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Request a Refresher / Hourly Session" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "For students who require refresher training, trainer assistance, additional machine operating time, or individuals who are not eligible for Return for Free." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", children: "Full Name" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "fullName",
                  value: fullName,
                  onChange: (e) => setFullName(e.target.value),
                  maxLength: 120,
                  required: true,
                  autoComplete: "name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "phone",
                  type: "tel",
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  maxLength: 40,
                  required: true,
                  autoComplete: "tel"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email Address" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                maxLength: 255,
                required: true,
                autoComplete: "email"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "machine", children: "Machine Required" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "machine",
                value: machineKey,
                onChange: (e) => setMachineKey(e.target.value),
                required: true,
                className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select a machine" }),
                  MACHINES.map((m) => /* @__PURE__ */ jsx("option", { value: m.key, children: m.label }, m.key))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "notes", children: "Additional Notes" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "notes",
                value: notes,
                onChange: (e) => setNotes(e.target.value),
                maxLength: 2e3,
                rows: 4,
                placeholder: "Anything our trainers should know — experience level, focus areas, dates that suit, etc."
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-border bg-muted/30 p-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                checked: acknowledged,
                onCheckedChange: (v) => setAcknowledged(v === true),
                className: "mt-1"
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-foreground", children: [
              /* @__PURE__ */ jsx("strong", { children: "Acknowledgement:" }),
              " ",
              ACK_TEXT
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              size: "lg",
              variant: "hero",
              className: "w-full text-lg py-6 shadow-glow",
              disabled: isSubmitting,
              children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 mr-2 animate-spin" }),
                "Submitting..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Continue to Booking",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
              ] })
            }
          )
        ]
      }
    ) }) }) })
  ] });
};
const RigidHaulTruckApplication = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Rigid Haul Truck Application | Cailin Mining & Civil",
        description: "Apply for the Rigid Haul Truck Traineeship. Submit your details and supporting evidence for review.",
        path: "/rigid-haul-truck-application"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: heroImage$1, alt: "Rigid haul truck", overlayClassName: "bg-background/85" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: [
          "Rigid Haul Truck ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Application" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Submit your application and supporting evidence below. Our team will review and contact approved applicants with a private booking link." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://link.cailinminingcivil.com/widget/form/CrdwHldfXJHsaFElngw2",
        style: { width: "100%", height: "775px", border: "none" },
        id: "inline-CrdwHldfXJHsaFElngw2",
        "data-layout": "{'id':'INLINE'}",
        "data-trigger-type": "alwaysShow",
        "data-trigger-value": "",
        "data-activation-type": "alwaysActivated",
        "data-activation-value": "",
        "data-deactivation-type": "neverDeactivate",
        "data-deactivation-value": "",
        "data-form-name": "Rigid Application Form",
        "data-height": "775",
        "data-layout-iframe-id": "inline-CrdwHldfXJHsaFElngw2",
        "data-form-id": "CrdwHldfXJHsaFElngw2",
        title: "Rigid Application Form"
      }
    ) }) }) }) })
  ] });
};
const SUPABASE_URL = "https://opdxvpqimcfhawcznxyc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZHh2cHFpbWNmaGF3Y3pueHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMTY3NzksImV4cCI6MjA4OTg5Mjc3OX0.fQ32jaRclUNFt-8KsNf0VYLyRZCly4xLYX-f-AxUIzA";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});
const client = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  supabase
}, Symbol.toStringTag, { value: "Module" }));
const auPhoneRegex = /^(\+?61|0)[2-478](?:[ -]?\d){8}$/;
const auPostcodeRegex = /^(0[289][0-9]{2}|[1-9][0-9]{3})$/;
const baseSchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(20).regex(auPhoneRegex, "Enter a valid Australian phone number"),
  postcode: z.string().trim().regex(auPostcodeRegex, "Enter a valid Australian postcode (4 digits)")
});
const RigidScreeningForm = ({ source, qualifiedCta, qualifiedSlot }) => {
  const { toast: toast2 } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [hasExperience, setHasExperience] = useState("");
  const [machines2, setMachines] = useState("");
  const [hasHrLicence, setHasHrLicence] = useState("");
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [hrLicenceFile, setHrLicenceFile] = useState(null);
  const [errors, setErrors] = useState({});
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const uploadFile = async (file, prefix) => {
    if (file.size > MAX_FILE_SIZE) {
      console.error("upload rejected: file exceeds 10MB", file.name, file.size);
      return null;
    }
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${prefix}/${Date.now()}-${safeName}`;
    const { error } = await supabase.storage.from("haul-truck-applications").upload(path, file, { upsert: false });
    if (error) {
      console.error("upload error", error);
      return null;
    }
    return path;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const parsed = baseSchema.safeParse({
      full_name: fullName,
      email,
      phone: phone.replace(/\s+/g, ""),
      postcode
    });
    const newErrors = {};
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        newErrors[issue.path[0]] = issue.message;
      }
    }
    if (!hasExperience) newErrors.hasExperience = "Please answer this question";
    if (hasExperience === "yes") {
      if (!machines2.trim()) newErrors.machines = "List the machines you have operated";
      if (!evidenceFile) newErrors.evidenceFile = "Upload a resume and/or tickets";
    }
    if (hasExperience === "no") {
      if (!hasHrLicence) newErrors.hasHrLicence = "Please answer this question";
      if (hasHrLicence === "yes" && !hrLicenceFile) {
        newErrors.hrLicenceFile = "Upload proof of your HR Licence";
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    try {
      const phoneOk = auPhoneRegex.test(phone.replace(/\s+/g, ""));
      const postcodeOk = auPostcodeRegex.test(postcode);
      let qualified = false;
      let reason = "";
      if (!phoneOk || !postcodeOk) {
        reason = "Phone or postcode is not Australian.";
      } else if (hasExperience === "yes") {
        qualified = Boolean(machines2.trim() && evidenceFile);
        if (!qualified) reason = "Missing machine list or evidence.";
      } else if (hasExperience === "no" && hasHrLicence === "yes") {
        qualified = Boolean(hrLicenceFile);
        if (!qualified) reason = "Missing HR Licence proof.";
      } else {
        reason = "No machinery experience and no HR Licence.";
      }
      let evidencePath = null;
      let hrPath = null;
      if (evidenceFile) evidencePath = await uploadFile(evidenceFile, "evidence");
      if (hrLicenceFile) hrPath = await uploadFile(hrLicenceFile, "hr-licence");
      const record = {
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        postcode: postcode.trim(),
        previous_experience: hasExperience === "yes",
        experience_details: hasExperience === "yes" ? `Machines: ${machines2.trim()}` : hasHrLicence === "yes" ? "No machinery experience. Holds HR Licence." : "No machinery experience. No HR Licence.",
        machines_operated: hasExperience === "yes" ? machines2.trim() : null,
        has_hr_licence: hasExperience === "no" ? hasHrLicence === "yes" : null,
        evidence_file_path: evidencePath,
        hr_licence_file_path: hrPath,
        qualified,
        source
      };
      const { error: insertError } = await supabase.from("haul_truck_applications").insert(record);
      if (insertError) {
        console.error("insert error", insertError);
        throw insertError;
      }
      try {
        await supabase.functions.invoke("notify-submission", {
          body: {
            record: {
              name: fullName.trim(),
              email: email.trim(),
              phone: phone.trim(),
              message: `[Rigid Haul Truck Screening - ${source}]
Postcode: ${postcode}
Experience: ${hasExperience}
Machines: ${machines2 || "n/a"}
HR Licence: ${hasHrLicence || "n/a"}
Qualified: ${qualified ? "YES" : "NO"}${reason ? ` (${reason})` : ""}`
            }
          }
        });
      } catch (err) {
        console.warn("notify-submission failed", err);
      }
      try {
        await supabase.functions.invoke("sync-rigid-application", {
          body: {
            full_name: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            postcode: postcode.trim(),
            previous_experience: hasExperience === "yes",
            machines_operated: hasExperience === "yes" ? machines2.trim() : null,
            has_hr_licence: hasExperience === "no" ? hasHrLicence === "yes" : null,
            evidence_file_path: evidencePath,
            hr_licence_file_path: hrPath,
            qualified,
            source
          }
        });
      } catch (err) {
        console.warn("sync-rigid-application failed", err);
      }
      setResult({ qualified, reason: qualified ? void 0 : reason });
    } catch (err) {
      toast2({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  if (result) {
    if (result.qualified) {
      return /* @__PURE__ */ jsxs("div", { className: "bg-card border-2 border-primary/40 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: "You're pre-qualified" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
            "Thanks ",
            fullName.split(" ")[0],
            " — based on your answers you meet our screening criteria.",
            qualifiedCta.note ? ` ${qualifiedCta.note}` : ""
          ] })
        ] }),
        qualifiedSlot ? /* @__PURE__ */ jsx("div", { className: "mt-4", children: qualifiedSlot }) : /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: qualifiedCta.href,
            target: qualifiedCta.href.startsWith("http") ? "_blank" : void 0,
            rel: qualifiedCta.href.startsWith("http") ? "noopener noreferrer" : void 0,
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition",
            children: [
              source === "booking" ? /* @__PURE__ */ jsx(CreditCard, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" }),
              qualifiedCta.label
            ]
          }
        ) })
      ] });
    }
    return /* @__PURE__ */ jsxs("div", { className: "bg-card border-2 border-border rounded-2xl p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-7 h-7 text-muted-foreground" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: "Application received" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Thanks for applying. Based on the current screening criteria, we are unable to offer you a place at this time. Your details have been recorded and we will be in touch if a suitable opportunity becomes available." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "full_name", children: "Full name *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "full_name",
            value: fullName,
            onChange: (e) => setFullName(e.target.value),
            maxLength: 100,
            required: true
          }
        ),
        errors.full_name && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.full_name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            maxLength: 255,
            required: true
          }
        ),
        errors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Australian phone number *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "phone",
            type: "tel",
            placeholder: "04XX XXX XXX",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
            required: true
          }
        ),
        errors.phone && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.phone })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "postcode", children: "Australian postcode *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "postcode",
            inputMode: "numeric",
            maxLength: 4,
            placeholder: "e.g. 6000",
            value: postcode,
            onChange: (e) => setPostcode(e.target.value.replace(/\D/g, "")),
            required: true
          }
        ),
        errors.postcode && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.postcode })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Do you have machinery / equipment operating experience? *" }),
      /* @__PURE__ */ jsxs(
        RadioGroup,
        {
          value: hasExperience,
          onValueChange: (v) => setHasExperience(v),
          className: "flex gap-6 mt-2",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { id: "exp-yes", value: "yes" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "exp-yes", className: "font-normal cursor-pointer", children: "Yes" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(RadioGroupItem, { id: "exp-no", value: "no" }),
              /* @__PURE__ */ jsx(Label, { htmlFor: "exp-no", className: "font-normal cursor-pointer", children: "No" })
            ] })
          ]
        }
      ),
      errors.hasExperience && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.hasExperience })
    ] }),
    hasExperience === "yes" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-l-2 border-primary/30 pl-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "machines", children: "List the machines you have operated *" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "machines",
            value: machines2,
            onChange: (e) => setMachines(e.target.value),
            placeholder: "e.g. Excavator, Wheel Loader, Dump Truck...",
            rows: 3,
            maxLength: 1e3
          }
        ),
        errors.machines && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.machines })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "evidence", children: "Upload resume and/or tickets *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "evidence",
            type: "file",
            accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
            onChange: (e) => {
              var _a;
              return setEvidenceFile(((_a = e.target.files) == null ? void 0 : _a[0]) || null);
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PDF, JPG, PNG or DOC (max 10MB)" }),
        errors.evidenceFile && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.evidenceFile })
      ] })
    ] }),
    hasExperience === "no" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-l-2 border-primary/30 pl-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Do you hold an HR (Heavy Rigid) Licence? *" }),
        /* @__PURE__ */ jsxs(
          RadioGroup,
          {
            value: hasHrLicence,
            onValueChange: (v) => setHasHrLicence(v),
            className: "flex gap-6 mt-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { id: "hr-yes", value: "yes" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "hr-yes", className: "font-normal cursor-pointer", children: "Yes" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { id: "hr-no", value: "no" }),
                /* @__PURE__ */ jsx(Label, { htmlFor: "hr-no", className: "font-normal cursor-pointer", children: "No" })
              ] })
            ]
          }
        ),
        errors.hasHrLicence && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.hasHrLicence })
      ] }),
      hasHrLicence === "yes" && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "hr-file", children: "Upload proof of HR Licence *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "hr-file",
            type: "file",
            accept: ".pdf,.jpg,.jpeg,.png",
            onChange: (e) => {
              var _a;
              return setHrLicenceFile(((_a = e.target.files) == null ? void 0 : _a[0]) || null);
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Photo or scan of your HR Licence" }),
        errors.hrLicenceFile && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-1", children: errors.hrLicenceFile })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full", disabled: submitting, children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin mr-2" }),
      "Submitting..."
    ] }) : "Submit screening form" }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Can't prove your competency? No problem. You may still qualify by completing training on alternative equipment or obtaining an HR Licence." })
  ] });
};
const RigidHaulTruckBooking = () => {
  useEffect(() => {
    const metas = [
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" }
    ];
    const elements = metas.map(({ httpEquiv, content }) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = httpEquiv;
      meta.content = content;
      document.head.appendChild(meta);
      return meta;
    });
    return () => elements.forEach((el) => el.remove());
  }, []);
  const outcomes = [
    {
      icon: Award,
      title: "RIIMPO338E Qualification",
      body: "Conduct Rigid Haul Truck Operations — nationally recognised on successful completion."
    },
    {
      icon: HardHat,
      title: "Production Mining Experience",
      body: "Not a simulator. Not a paddock. A live, working mine with active crews and real loads."
    },
    {
      icon: Briefcase,
      title: "Real Life Work References",
      body: "Pre-starts, circuits, dump cycles and shutdown — real operational tasks logged on a live production site."
    },
    {
      icon: TrendingUp,
      title: "Potential Work Opportunities",
      body: "Be the first in line for the next rigid haul truck role with the mining company hosting us."
    }
  ];
  const faqs2 = [
    {
      q: "What ticket do I receive?",
      a: "On successful completion you'll be issued RIIMPO338E — Conduct Rigid Haul Truck Operations."
    },
    {
      q: "Is more seat time included?",
      a: "No. This is the 2-day initial. Additional hours or a job offer are negotiated directly with the mining company — that's on you."
    },
    {
      q: "Can I get a refund?",
      a: "Deposit secures your slot. Missed sessions (including PPE failures at pre-start) are non-refundable."
    },
    {
      q: "Where exactly is the site?",
      a: "Site location: Chapman Valley, approximately 20–30 minutes from Geraldton. Exact location is shared upon booking."
    }
  ];
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Rigid Haul Truck Private Booking | Cailin Mining & Civil",
        description: "Private booking and deposit page for approved Rigid Haul Truck 2-Day Initial applicants.",
        path: "/rigid-haul-truck-booking"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: heroImage$1, alt: "CAT 777G rigid haul truck on a live mine site near Geraldton, Western Australia", overlayClassName: "bg-background/85" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary mb-6", children: "Approved Applicants Only" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: [
          "Rigid Haul Truck ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "2-Day Initial" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Walk away with your RIIMPO338E – Conduct Rigid Haul Truck Operations and real-world experience in a production mining environment." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#screening-form",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition",
            children: "Start screening form →"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-primary" }),
          "Complete the quick screening below to unlock the deposit link."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "02 — Outcomes" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "What you walk away with" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: outcomes.map(({ icon: Icon, title, body }, i) => /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-2xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mb-1", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: body })
        ] })
      ] }) }, title)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-muted-foreground text-center max-w-2xl mx-auto", children: "This is a 2-day initial course. Upon completion, participants will receive nationally recognised training and practical experience in a live production environment." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "03 — Logistics" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "Getting there" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Car, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-primary mb-1", children: "Recommended" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Drive from Perth" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Easy, safe drive. You arrive with your own wheels, which makes the 20–30 min run from Geraldton out to Chapman Valley straightforward." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Plane, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Alternative" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Fly in (≈ 1 hr)" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Quick flight from Perth — but you must organise your own transport from Geraldton out to the mine site in Chapman Valley (20–30 min from town) and back, both days." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(BedDouble, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Stay" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Accommodation" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "You must arrange your own accommodation in Geraldton (Gero)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Hours & Site" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "0600 – 1800 Daily" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Site location: Chapman Valley. Exact location shared upon booking." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "04 — Preparation" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "What to bring" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-4", children: "Food & Water" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Snacks"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Plenty of water"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Lunch for the day"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-4", children: "PPE (Mandatory)" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hi-vis long sleeve shirt"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hi-vis long pants"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hard hat"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Steel-cap boots"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Eye protection"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Work gloves"
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "screening-form", className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "05 — Lock it in" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground mb-4", children: "Quick screening, then pay the deposit" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10", children: "$1,500 deposit confirms your slot. The remaining $2,499 is due on commencement, day one. Complete the screening below — qualified applicants are shown the secure Stripe deposit link straight away." }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 mb-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Deposit Today" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-primary", children: "$1,500" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "On Commencement" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-foreground", children: "$2,499" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Total" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-foreground", children: "$3,999" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-left", children: /* @__PURE__ */ jsx(
        RigidScreeningForm,
        {
          source: "booking",
          qualifiedCta: {
            label: "Pick your date below",
            href: "#",
            note: "Choose your preferred course date using the live calendar below. The $1,500 deposit is collected during the Bookeo checkout."
          },
          qualifiedSlot: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-display text-xl text-foreground mb-4 text-center", children: "Select your preferred date" }),
            /* @__PURE__ */ jsx(BookeoWidget, { course: "3351MPEJXE18EE1709583" })
          ] })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "06 — FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-8", children: "Frequently asked" }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs2.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-display text-lg", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: "Need Help?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Call Us" }),
          /* @__PURE__ */ jsx("a", { href: "tel:0483951501", className: "text-primary hover:underline", children: "0483 951 501" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Email Us" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline text-sm break-all", children: "info@cailinminingcivil.com" })
        ] })
      ] })
    ] }) }) })
  ] });
};
const RigidHaulTruckSchedule = () => {
  useEffect(() => {
    const metas = [
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" }
    ];
    const elements = metas.map(({ httpEquiv, content }) => {
      const meta = document.createElement("meta");
      meta.httpEquiv = httpEquiv;
      meta.content = content;
      document.head.appendChild(meta);
      return meta;
    });
    return () => elements.forEach((el) => el.remove());
  }, []);
  const outcomes = [
    {
      icon: Award,
      title: "RIIMPO338E Qualification",
      body: "Conduct Rigid Haul Truck Operations — nationally recognised on successful completion."
    },
    {
      icon: HardHat,
      title: "Production Mining Experience",
      body: "Not a simulator. Not a paddock. A live, working mine with active crews and real loads."
    },
    {
      icon: Briefcase,
      title: "Real Life Work References",
      body: "Pre-starts, circuits, dump cycles and shutdown — real operational tasks logged on a live production site."
    },
    {
      icon: TrendingUp,
      title: "Potential Work Opportunities",
      body: "Be the first in line for the next rigid haul truck role with the mining company hosting us."
    }
  ];
  const faqs2 = [
    {
      q: "What ticket do I receive?",
      a: "On successful completion you'll be issued RIIMPO338E — Conduct Rigid Haul Truck Operations."
    },
    {
      q: "Is more seat time included?",
      a: "No. This is the 2-day initial. Additional hours or a job offer are negotiated directly with the mining company — that's on you."
    },
    {
      q: "Can I get a refund?",
      a: "Deposit secures your slot. Missed sessions (including PPE failures at pre-start) are non-refundable."
    },
    {
      q: "Where exactly is the site?",
      a: "Site location: Chapman Valley, approximately 20–30 minutes from Geraldton. Exact location is shared upon booking."
    }
  ];
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Rigid Haul Truck Booking | Cailin Mining & Civil",
        description: "Book your Rigid Haul Truck 2-Day Initial directly online via our live scheduling calendar.",
        path: "/rigid-haul-truck-schedule"
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroImage, { src: heroImage$1, alt: "CAT 777G rigid haul truck on a live mine site near Geraldton, Western Australia", overlayClassName: "bg-background/85" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary mb-6", children: "Live Booking Calendar" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-4xl md:text-5xl text-foreground mb-4", children: [
          "Rigid Haul Truck ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "2-Day Initial" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Walk away with your RIIMPO338E – Conduct Rigid Haul Truck Operations and real-world experience in a production mining environment." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#booking-widget",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition",
            children: "Pick your date →"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-primary" }),
          "Select an available date below to lock in your slot."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "02 — Outcomes" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "What you walk away with" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: outcomes.map(({ icon: Icon, title, body }, i) => /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-2xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mb-1", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: body })
        ] })
      ] }) }, title)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-muted-foreground text-center max-w-2xl mx-auto", children: "This is a 2-day initial course. Upon completion, participants will receive nationally recognised training and practical experience in a live production environment." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "03 — Logistics" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "Getting there" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Car, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-primary mb-1", children: "Recommended" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Drive from Perth" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Easy, safe drive. You arrive with your own wheels, which makes the 20–30 min run from Geraldton out to Chapman Valley straightforward." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Plane, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Alternative" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Fly in (≈ 1 hr)" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Quick flight from Perth — but you must organise your own transport from Geraldton out to the mine site in Chapman Valley (20–30 min from town) and back, both days." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(BedDouble, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Stay" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Accommodation" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "You must arrange your own accommodation in Geraldton (Gero)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 text-primary mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Hours & Site" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "0600 – 1800 Daily" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Site location: Chapman Valley. Exact location shared upon booking." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "04 — Preparation" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-10", children: "What to bring" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-4", children: "Food & Water" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Snacks"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Plenty of water"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Lunch for the day"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-foreground mb-4", children: "PPE (Mandatory)" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hi-vis long sleeve shirt"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hi-vis long pants"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Hard hat"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Steel-cap boots"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Eye protection"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "✓" }),
              " Work gloves"
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "booking-widget", className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "05 — Lock it in" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground mb-4", children: "Pick your date" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10", children: "Select an available date in the calendar below to book your Rigid Haul Truck 2-Day Initial." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(BookeoWidget, { course: "3351MPEJXE18EE1709583" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-wider text-primary font-semibold mb-2", children: "06 — FAQ" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground mb-8", children: "Frequently asked" }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs2.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${i}`, children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-display text-lg", children: f.q }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: "Need Help?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Call Us" }),
          /* @__PURE__ */ jsx("a", { href: "tel:0483951501", className: "text-primary hover:underline", children: "0483 951 501" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-1", children: "Email Us" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@cailinminingcivil.com", className: "text-primary hover:underline text-sm break-all", children: "info@cailinminingcivil.com" })
        ] })
      ] })
    ] }) }) })
  ] });
};
const ADMIN_KEY_STORAGE = "signature_admin_key";
function SignatureBackfill() {
  const [adminKey, setAdminKey] = useState(() => localStorage.getItem(ADMIN_KEY_STORAGE) ?? "");
  const [contactId, setContactId] = useState("");
  const [force, setForce] = useState(false);
  const [limit, setLimit] = useState("10");
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState("");
  const [nextSearchAfter, setNextSearchAfter] = useState(null);
  const [errors, setErrors] = useState([]);
  function saveKey(v) {
    setAdminKey(v);
    if (v) localStorage.setItem(ADMIN_KEY_STORAGE, v);
    else localStorage.removeItem(ADMIN_KEY_STORAGE);
  }
  async function invoke(body) {
    const { data, error } = await supabase.functions.invoke("extract-student-signature", {
      body,
      headers: adminKey ? { "x-admin-key": adminKey } : {}
    });
    if (error) {
      const response = error == null ? void 0 : error.context;
      let detail = (error == null ? void 0 : error.message) ?? "Edge Function returned an error";
      if (response instanceof Response) {
        const status = response.status;
        const bodyText = await response.clone().text().catch(() => "");
        let bodyMessage = bodyText;
        try {
          const parsed = JSON.parse(bodyText);
          bodyMessage = (parsed == null ? void 0 : parsed.error) ?? (parsed == null ? void 0 : parsed.message) ?? bodyText;
        } catch {
        }
        if (status === 401) {
          detail = "Unauthorized: paste the current signature webhook token into the Admin key field, then try again.";
        } else {
          detail = `Edge Function returned ${status}${bodyMessage ? `: ${bodyMessage}` : ""}`;
        }
      }
      throw new Error(detail);
    }
    return data;
  }
  async function loadErrors() {
    if (!adminKey) {
      setErrors([]);
      return;
    }
    const data = await invoke({ listErrors: true, limit: 100 }).catch(() => null);
    if (!data) return;
    setErrors((data == null ? void 0 : data.errors) ?? []);
  }
  useEffect(() => {
    loadErrors();
    const t = setInterval(loadErrors, 3e4);
    return () => clearInterval(t);
  }, [adminKey]);
  async function run(payload) {
    setBusy(true);
    setLog("Running…");
    try {
      const data = await invoke(payload);
      if (data && typeof data === "object" && "nextSearchAfter" in data) {
        setNextSearchAfter(data.nextSearchAfter ?? null);
      }
      setLog(JSON.stringify(data, null, 2));
      loadErrors();
    } catch (e) {
      setLog(`ERROR: ${(e == null ? void 0 : e.message) ?? String(e)}`);
    } finally {
      setBusy(false);
    }
  }
  async function runFullBackfill() {
    setBusy(true);
    let cursor = nextSearchAfter;
    const totals = {
      scanned: 0,
      processed: 0,
      succeeded: 0,
      skipped: 0,
      failed: 0,
      chunks: 0,
      chunkErrors: 0,
      done: false,
      nextSearchAfter: cursor,
      results: [],
      lastError: null
    };
    const CHUNK_LIMIT = Math.max(1, Math.min(Number(limit) || 3, 3));
    const CHUNK_MAX_PAGES = 2;
    const MAX_CHUNKS = 500;
    const MAX_CONSECUTIVE_ERRORS = 5;
    if (!adminKey.trim()) {
      setLog("ERROR: Paste the current signature webhook token into the Admin key field before running the scan.");
      setBusy(false);
      return;
    }
    setLog("Running full scan…");
    let consecutiveErrors = 0;
    try {
      while (!totals.done && totals.chunks < MAX_CHUNKS) {
        try {
          const data = await invoke({
            backfill: true,
            limit: CHUNK_LIMIT,
            maxPages: CHUNK_MAX_PAGES,
            ...cursor ? { searchAfter: cursor } : {}
          });
          totals.chunks += 1;
          totals.scanned += Number((data == null ? void 0 : data.scanned) ?? 0);
          totals.processed += Number((data == null ? void 0 : data.processed) ?? 0);
          totals.succeeded += Number((data == null ? void 0 : data.succeeded) ?? 0);
          totals.skipped += Number((data == null ? void 0 : data.skipped) ?? 0);
          totals.failed += Number((data == null ? void 0 : data.failed) ?? 0);
          totals.results.push(...Array.isArray(data == null ? void 0 : data.results) ? data.results : []);
          totals.done = Boolean(data == null ? void 0 : data.done);
          cursor = (data == null ? void 0 : data.nextSearchAfter) ?? null;
          totals.nextSearchAfter = cursor;
          setNextSearchAfter(cursor);
          setLog(JSON.stringify(totals, null, 2));
          consecutiveErrors = 0;
          if (!cursor && !totals.done) {
            break;
          }
        } catch (chunkErr) {
          totals.chunkErrors += 1;
          consecutiveErrors += 1;
          totals.lastError = (chunkErr == null ? void 0 : chunkErr.message) ?? String(chunkErr);
          setLog(JSON.stringify(totals, null, 2));
          if (totals.lastError.toLowerCase().includes("unauthorized")) {
            throw new Error(totals.lastError);
          }
          if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
            throw new Error(
              `Stopped after ${consecutiveErrors} consecutive chunk errors. Last: ${totals.lastError}`
            );
          }
          await new Promise((r) => setTimeout(r, 1500));
        }
      }
    } catch (e) {
      setLog(`${JSON.stringify(totals, null, 2)}

ERROR: ${(e == null ? void 0 : e.message) ?? String(e)}`);
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background p-8 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Student Signature Backfill" }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-8", children: [
      "Extracts the signature image from GHL signed PDFs and saves the URL to the",
      " ",
      /* @__PURE__ */ jsx("code", { children: "Signature Student Declaration URL TXT" }),
      " custom field."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { className: "border rounded-lg p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Admin key" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Required to run any action or view errors. Stored locally in your browser." }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "password",
            value: adminKey,
            onChange: (e) => saveKey(e.target.value),
            placeholder: "Paste admin key"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "border rounded-lg p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Run for one contact" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "cid", children: "GHL Contact ID" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "cid",
              value: contactId,
              onChange: (e) => setContactId(e.target.value),
              placeholder: "e.g. abc123XYZ..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              checked: force,
              onChange: (e) => setForce(e.target.checked)
            }
          ),
          "Force re-extract (overwrite existing signature URL)"
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: busy || !contactId,
            onClick: () => run({ contactId, force }),
            children: "Extract signature"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "border rounded-lg p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Backfill all missing" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Filters GHL contacts where ",
          /* @__PURE__ */ jsx("code", { children: "On-Site Course Purchased" }),
          " is not empty, has a signed document URL, and ",
          /* @__PURE__ */ jsx("code", { children: "Signature Student Declaration URL TXT" }),
          " ",
          "is empty. Each chunk scans up to 1,000 contacts to avoid timeouts."
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "lim", children: "Batch limit" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "lim",
              type: "number",
              value: limit,
              onChange: (e) => setLimit(e.target.value),
              className: "w-32"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: busy || !adminKey.trim(),
            onClick: () => run({ backfill: true, limit: Number(limit), maxPages: 10, ...nextSearchAfter ? { searchAfter: nextSearchAfter } : {} }),
            children: "Run next scan chunk"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            disabled: busy || !adminKey.trim(),
            variant: "secondary",
            onClick: runFullBackfill,
            children: "Run full scan"
          }
        ),
        nextSearchAfter && /* @__PURE__ */ jsx(
          Button,
          {
            disabled: busy,
            variant: "outline",
            onClick: () => setNextSearchAfter(null),
            children: "Restart scan from newest"
          }
        )
      ] }),
      log && /* @__PURE__ */ jsxs("section", { className: "border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "Result" }),
        /* @__PURE__ */ jsx("pre", { className: "text-xs bg-muted p-4 rounded overflow-auto max-h-[500px]", children: log })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "border rounded-lg p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold", children: [
            "Extraction errors ",
            errors.length > 0 && /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-sm", children: [
              "(",
              errors.length,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: loadErrors, children: "Refresh" })
        ] }),
        errors.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No errors logged." }) : /* @__PURE__ */ jsx("div", { className: "overflow-auto max-h-[500px]", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "text-left text-xs uppercase text-muted-foreground border-b", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "When" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Contact ID" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Name" }),
            /* @__PURE__ */ jsx("th", { className: "py-2 pr-4", children: "Email" }),
            /* @__PURE__ */ jsx("th", { className: "py-2", children: "Error" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: errors.map((e) => /* @__PURE__ */ jsxs("tr", { className: "border-b align-top", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 whitespace-nowrap text-xs text-muted-foreground", children: new Date(e.created_at).toLocaleString() }),
            /* @__PURE__ */ jsx("td", { className: "py-2 pr-4 font-mono text-xs", children: e.contact_id }),
            /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: e.name || "—" }),
            /* @__PURE__ */ jsx("td", { className: "py-2 pr-4", children: e.email || "—" }),
            /* @__PURE__ */ jsx("td", { className: "py-2 text-xs text-destructive", children: e.error })
          ] }, e.id)) })
        ] }) })
      ] })
    ] })
  ] });
}
const CareersRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.href = "https://live.cailintraining.com.au/join_cailin_portal";
  }
  return null;
};
const AppRoutes = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Index, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses", element: /* @__PURE__ */ jsx(Courses, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rpl", element: /* @__PURE__ */ jsx(RPL, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rplad", element: /* @__PURE__ */ jsx(RPLAd, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/bundles", element: /* @__PURE__ */ jsx(TicketsTraining, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/short-courses", element: /* @__PURE__ */ jsx(ShortCourses, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/voc", element: /* @__PURE__ */ jsx(VOC, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/full-day", element: /* @__PURE__ */ jsx(FullDay, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/excavator", element: /* @__PURE__ */ jsx(Excavator, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/excavator-training-perth", element: /* @__PURE__ */ jsx(ExcavatorTrainingPerth, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/wheel-loader", element: /* @__PURE__ */ jsx(WheelLoader, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/moxy", element: /* @__PURE__ */ jsx(Moxy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/moxy-training-perth", element: /* @__PURE__ */ jsx(MoxyTrainingPerth, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/roller", element: /* @__PURE__ */ jsx(Roller, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/watercart", element: /* @__PURE__ */ jsx(Watercart, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/courses/integrated-tool-carrier", element: /* @__PURE__ */ jsx(IntegratedToolCarrier, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/book", element: /* @__PURE__ */ jsx(Book, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(Blog, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privatecall", element: /* @__PURE__ */ jsx(DiscoveryCall, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/ctf-funding", element: /* @__PURE__ */ jsx(CTFFunding, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/termsandconditions", element: /* @__PURE__ */ jsx(TermsAndConditions, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/privacypolicy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rtodata-success", element: /* @__PURE__ */ jsx(RtoDataSuccess, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/recruitment", element: /* @__PURE__ */ jsx(Recruitment, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/affiliate", element: /* @__PURE__ */ jsx(Affiliate, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/returning-student", element: /* @__PURE__ */ jsx(ReturningStudent, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/free-returns", element: /* @__PURE__ */ jsx(ReturningStudent, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/refresher-training", element: /* @__PURE__ */ jsx(RefresherTraining, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rigid-haul-truck-traineeship", element: /* @__PURE__ */ jsx(Navigate, { to: "/rigid-haul-truck-booking", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/rigid-haul-truck-application", element: /* @__PURE__ */ jsx(RigidHaulTruckApplication, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rigid-haul-truck-booking", element: /* @__PURE__ */ jsx(RigidHaulTruckBooking, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/rigid-haul-truck-schedule", element: /* @__PURE__ */ jsx(RigidHaulTruckSchedule, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/admin/signature-backfill", element: /* @__PURE__ */ jsx(SignatureBackfill, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/practical-assessments", element: /* @__PURE__ */ jsx(Navigate, { to: "/courses", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/cailin-courses", element: /* @__PURE__ */ jsx(Navigate, { to: "/courses", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/e-book", element: /* @__PURE__ */ jsx(Navigate, { to: "/courses", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/groups", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/careers", element: /* @__PURE__ */ jsx(CareersRedirect, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] })
] });
function render(url2) {
  const helmetContext = {};
  const queryClient = new QueryClient();
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url2, children: /* @__PURE__ */ jsx(AppRoutes, {}) }) }) }) })
  );
  const helmet = helmetContext.helmet;
  const head = helmet ? [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString()
  ].join("\n") : "";
  return { html, head };
}
export {
  render
};
