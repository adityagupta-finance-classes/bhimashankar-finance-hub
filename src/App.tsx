import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CFAPage from "@/pages/CFAPage";
import NISMPage from "@/pages/NISMPage";
import NewsPage from "@/pages/NewsPage";
import StocksPage from "@/pages/StocksPage";
import MutualFundsPage from "@/pages/MutualFundsPage";
import AIAssistantPage from "@/pages/AIAssistantPage";
import AboutPage from "@/pages/AboutPage";
import ResourcesPage from "@/pages/ResourcesPage";
import DashboardPage from "@/pages/DashboardPage";
import DisclaimerPage from "@/pages/DisclaimerPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/cfa" element={<Layout><CFAPage /></Layout>} />
          <Route path="/nism" element={<Layout><NISMPage /></Layout>} />
          <Route path="/news" element={<Layout><NewsPage /></Layout>} />
          <Route path="/stocks" element={<Layout><StocksPage /></Layout>} />
          <Route path="/mutual-funds" element={<Layout><MutualFundsPage /></Layout>} />
          <Route path="/ai-assistant" element={<Layout hideFooter><AIAssistantPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
          <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
          <Route path="/disclaimer" element={<Layout><DisclaimerPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
          <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
