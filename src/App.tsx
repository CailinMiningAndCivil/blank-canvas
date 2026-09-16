import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ContactLauncher } from "./components/ContactLauncher";

const queryClient = new QueryClient();

const CHROMELESS_ROUTES = ["/competition"];

const ContactLauncherUnlessChromeless = () => {
  const { pathname } = useLocation();
  if (CHROMELESS_ROUTES.includes(pathname)) return null;
  return <ContactLauncher />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
        <ContactLauncherUnlessChromeless />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
