import { ChevronUp } from "lucide-react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "./components/ThemeContext";
// import { Certifications } from "./components/Certifications";



export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingCV, setShowFloatingCV] = useState(false);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "journey",
      "projects",
      // "certifications",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Track scroll percentage to display floating button after 40% scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollPercentage = scrollPosition / totalHeight;
        setShowFloatingCV(scrollPercentage > 0.4);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        {/* Navigation Bar */}
        <Navbar activeSection={activeSection} />

        {/* Core Layout Sections */}
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Journey />
          <Projects />
          {/* <Certifications /> */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions Panel */}
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center justify-center">
          <AnimatePresence>
            {showFloatingCV && (
              <motion.button
                onClick={handleScrollToTop}
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/80 bg-white text-neutral-500 shadow-lg hover:bg-neutral-50 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-850 dark:hover:text-white transition-all duration-300 cursor-pointer"
                title="Back To Top"
              >
                <ChevronUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
