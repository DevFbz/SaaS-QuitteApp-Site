/* ============================================================
   QUITTE App — Dark Editorial Luxury
   Routes: Home, Funcionalidades, Como Funciona, Preços, Sobre
   ============================================================ */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Funcionalidades from "./pages/Funcionalidades";
import ComoFunciona from "./pages/ComoFunciona";
import Precos from "./pages/Precos";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import { useEffect } from "react";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location} className="page-enter">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/funcionalidades" component={Funcionalidades} />
          <Route path="/como-funciona" component={ComoFunciona} />
          <Route path="/precos" component={Precos} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/blog" component={Blog} />
          <Route path="/carreiras" component={Carreiras} />
          <Route path="/contato" component={Contato} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
