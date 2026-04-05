/* ============================================================
   QUITTE App — Dark Editorial Luxury
   Routes: home, funcionalidades, Como Funciona, Preços, sobre
   ============================================================ */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/notfound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import home from "./pages/home";
import funcionalidades from "./pages/funcionalidades";
import comofunciona from "./pages/comofunciona";
import precos from "./pages/precos";
import sobre from "./pages/sobre";
import blog from "./pages/blog";
import carreiras from "./pages/carreiras";
import contato from "./pages/contato";
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
      <CustomCursor />
      <Navbar />
      <main key={location} className="page-enter">
        <Switch>
          <Route path="/" component={home} />
          <Route path="/funcionalidades" component={funcionalidades} />
          <Route path="/como-funciona" component={comofunciona} />
          <Route path="/precos" component={precos} />
          <Route path="/sobre" component={sobre} />
          <Route path="/blog" component={blog} />
          <Route path="/carreiras" component={carreiras} />
          <Route path="/contato" component={contato} />
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
