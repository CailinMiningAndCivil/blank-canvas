import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import RPL from "./pages/courses/RPL";
import TicketsTraining from "./pages/courses/TicketsTraining";
import ShortCourses from "./pages/courses/ShortCourses";
import VOC from "./pages/courses/VOC";
import FullDay from "./pages/courses/FullDay";
import Excavator from "./pages/courses/machines/Excavator";
import WheelLoader from "./pages/courses/machines/WheelLoader";
import Moxy from "./pages/courses/machines/Moxy";
import Roller from "./pages/courses/machines/Roller";
import Watercart from "./pages/courses/machines/Watercart";
import Book from "./pages/Book";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DiscoveryCall from "./pages/DiscoveryCall";
import CTFFunding from "./pages/CTFFunding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/rpl" element={<RPL />} />
          <Route path="/courses/bundles" element={<TicketsTraining />} />
          <Route path="/courses/short-courses" element={<ShortCourses />} />
          <Route path="/courses/voc" element={<VOC />} />
          <Route path="/courses/full-day" element={<FullDay />} />
          <Route path="/courses/excavator" element={<Excavator />} />
          <Route path="/courses/wheel-loader" element={<WheelLoader />} />
          <Route path="/courses/moxy" element={<Moxy />} />
          <Route path="/courses/roller" element={<Roller />} />
          <Route path="/courses/watercart" element={<Watercart />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discovery-call" element={<DiscoveryCall />} />
          <Route path="/ctf-funding" element={<CTFFunding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
