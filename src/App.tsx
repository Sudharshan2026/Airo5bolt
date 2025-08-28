import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import PrimaryHero from "./components/PrimaryHero";
import { FloatingNav } from "./components/FloatingNav";

const Events = lazy(() => import("./components/Events"));
const WhyJoinUs = lazy(() => import("./components/WhyJoinUs"));
const CollegeMap = lazy(() => import("./components/CollegeMap"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));
const OrganizersPage = lazy(() => import("./components/OrganizersPage"));
const Rules = lazy(() => import("./components/Rules"));
const Results = lazy(() => import("./components/Results"));
const Team1HackathonPage = lazy(() => import("./components/Team1HackathonPage"));
const AiroHackathonPage = lazy(() => import("./components/AiroHackathonPage"));

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timeoutId = setTimeout(() => {
          scrollToElement();
        }, 100);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [location]);

  return null;
}

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <FloatingNav />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={
                <>
                  <PrimaryHero />
                  <Events />
                  <WhyJoinUs />
                  <CollegeMap />
                  <FAQ />
                  <Footer />
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
    </Router>
  );
}

export default App;
