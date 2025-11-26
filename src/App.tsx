import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n/config";
import Index from "./pages/Index";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Careers from "./pages/Careers";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Dubai from "./pages/services/Dubai";
import Sharjah from "./pages/services/Sharjah";
import Egypt from "./pages/services/Egypt";
import News from "./pages/knowledge/News";
import Books from "./pages/knowledge/Books";
import Updates from "./pages/knowledge/Updates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Services Routes */}
          <Route path="/services/dubai" element={<Dubai />} />
          <Route path="/services/sharjah" element={<Sharjah />} />
          <Route path="/services/egypt" element={<Egypt />} />
          
          {/* Knowledge Routes */}
          <Route path="/knowledge/news" element={<News />} />
          <Route path="/knowledge/books" element={<Books />} />
          <Route path="/knowledge/updates" element={<Updates />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
