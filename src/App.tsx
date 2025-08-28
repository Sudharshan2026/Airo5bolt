import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Footer from "./components/Footer";
import PrimaryHero from "./components/PrimaryHero";
import CollegeMap from "./components/CollegeMap";
import WhyJoinUs from "./components/WhyJoinUs";
import Preloader from "./components/Preloader";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import { FloatingNav } from "./components/FloatingNav";

// Lazy load the page components
const Rules = lazy(() => import("./components/Rules"));
const OrganizersPage = lazy(() => import("./components/OrganizersPage"));
const Results = lazy(() => import("./components/Results"));
const Team1HackathonPage = lazy(() => import("./components/Team1HackathonPage"));
const AiroHackathonPage = lazy(() => import("./components/AiroHackathonPage"));

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      
      // Use setTimeout to ensure the element is rendered
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If element not found, retry after a short delay
        const timeoutId = setTimeout(() => {
          scrollToElement();
        }, 100);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent preloader from showing again
    if (!sessionStorage.getItem("hasLoaded")) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        <FloatingNav />
        <main className="flex-grow">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <>
                  <PrimaryHero />
                  <div>
                  </div>
                  <div>
                    <Events />
                  </div>
                  <div>
                    <WhyJoinUs />
                  </div>
                  <div>
                    <CollegeMap />
                  </div>
                  <div>
                    <FAQ />
                  </div>
                  <div>
                    <Footer />
                  </div>
                </>
              } />
              <Route path="/team" element={<div><OrganizersPage /> <Footer /> </div>} />
              <Route path="/guidelines" element={<div><Rules /> <Footer /> </div>} />
              <Route path="/results" element={<div><Results /> <Footer /></div>} />
              <Route path="/team1-hackathon-chennai" element={<Team1HackathonPage />} />
              <Route path="/airo-hackathon" element={<AiroHackathonPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
