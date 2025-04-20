import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rules from "./pages/Rules";
import Lessons from "./pages/Lessons";
import BeginnerStrategies from "./pages/strategies/BeginnerStrategies";
import Openings from "./pages/strategies/Openings";
import Midgame from "./pages/strategies/Midgame";
import Endgame from "./pages/strategies/Endgame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/strategies/beginners" element={<BeginnerStrategies />} />
          <Route path="/strategies/openings" element={<Openings />} />
          <Route path="/strategies/midgame" element={<Midgame />} />
          <Route path="/strategies/endgame" element={<Endgame />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
