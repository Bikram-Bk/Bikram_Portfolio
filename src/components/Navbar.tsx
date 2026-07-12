import { PROFILE_INFO } from "../data";
import { useTheme } from "./ThemeContext";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    // { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200/40 bg-white/70 backdrop-blur-md transition-colors duration-300 dark:border-gray-800/40 dark:bg-gray-950/70"
      >
        <div className="mx-auto flex h-full max-w-345 items-center justify-between px-6 sm:px-8 lg:px-8 xl:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleScrollTo("home")}
              className="group flex items-center space-x-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500">
                {PROFILE_INFO.name}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 hover:text-gray-900 dark:hover:text-white ${isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 z-0 rounded-full bg-gray-100 dark:bg-gray-800/80"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="hidden items-center space-x-4 lg:flex">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/60 bg-white text-gray-600 shadow-xs hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800/60 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-white"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="h-4 w-4 text-amber-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="h-4 w-4 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Download CV button */}
            <motion.a
              href="/Bikram_Luhar_Resume.pdf"
              download="Bikram_Luhar.pdf"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex h-9 items-center justify-center space-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/60 bg-white text-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md dark:border-gray-800/60 dark:bg-gray-900 dark:text-gray-300"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_4px_12px_rgba(231,91,55,0.25)] hover:border-[#e75b37]/40 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-[#e75b37]/40 dark:hover:shadow-[0_4px_12px_rgba(231,91,55,0.15)]"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-[#e75b37]" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-white/95 backdrop-blur-md px-4 py-20 shadow-2xl dark:bg-gray-950/95 lg:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleScrollTo(item.id)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${isActive
                        ? "bg-neutral-100 text-neutral-950 font-bold shadow-xs dark:bg-neutral-900 dark:text-white"
                        : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-950 hover:translate-x-1.5 hover:shadow-xs dark:text-neutral-400 dark:hover:bg-neutral-900/60 dark:hover:text-white"
                        }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e75b37]" />
                      )}
                    </button>
                  );
                })}

                <div className="pt-6">
                  <a
                    href="/Bikram_Luhar_Resume.pdf"
                    download="Bikram_Luhar.pdf"
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white dark:bg-white dark:text-gray-950"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
