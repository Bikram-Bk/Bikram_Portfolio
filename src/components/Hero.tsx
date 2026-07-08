import { PROFILE_INFO, AVATAR_PATH } from "../data";
import React, { useState, useEffect, useRef } from "react";
import { ArrowDownRight, ArrowDown, MapPin, Mail } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Responsive logic to enable/disable sticky animation
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax subtle light glow reactive movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
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

  // Smooth scroll progression using Framer Motion Spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Scroll Transforms for desktop sticky reveal using the smooth spring progress
  const widthPercent = useTransform(smoothProgress, [0, 0.45], ["50%", "100%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const textX = useTransform(smoothProgress, [0, 0.35], [0, -60]);
  const textScale = useTransform(smoothProgress, [0, 0.35], [1, 0.95]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.45], [0, 0.2]);
  const gradientOpacity = useTransform(smoothProgress, [0.2, 0.45], [1, 0]);

  return (
    <div
      id="home"
      ref={containerRef}
      className={`relative w-full ${isMobile ? "min-h-screen bg-white dark:bg-neutral-950" : "h-[200vh] bg-white dark:bg-neutral-950"} transition-colors duration-500`}
    >
      {/* The Sticky Canvas (pins to screen while user scrolls the container depth) */}
      {/* Mobile gets pt-24 pb-16 to leave a comfortable gap with navbar, desktop gets sticky top-0 h-screen pt-20 */}
      <div
        className={`${isMobile ? "relative pt-24 pb-16 min-h-screen" : "sticky top-0 h-screen pt-20"} w-full flex items-center overflow-hidden`}
      >
        {/* Ambient background studio lights */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Studio light gradient spot 1 */}
          <motion.div
            animate={{
              scale: [1, 1.1, 0.95, 1],
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[10%] left-[5%] h-100 w-100 rounded-full bg-amber-500/10 dark:bg-amber-600/5 blur-[120px]"
          />

          {/* Mouse tracking spotlight */}
          <motion.div
            animate={{
              x: mousePos.x * 50,
              y: mousePos.y * 50,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 25 }}
            className="absolute left-1/3 top-1/3 h-75 w-75 rounded-full bg-[#e75b37]/5 dark:bg-[#e75b37]/5 blur-[100px]"
          />

          {/* Minimal editorial grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto max-w-345 px-6 sm:px-8 lg:px-8 xl:px-12 flex h-full items-center">
          <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8 md:gap-12 items-center">
            {/* Left Column (Content) */}
            <motion.div
              style={
                isMobile
                  ? {}
                  : { opacity: textOpacity, x: textX, scale: textScale }
              }
              onMouseMove={handleMouseMove}
              className="col-span-1 md:col-span-6 flex flex-col justify-center py-4 md:py-0 relative z-20"
            >
              {/* Availability status tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 rounded-full border border-neutral-900/10 bg-white/40 backdrop-blur-xs px-3 py-1 w-fit dark:border-white/10 dark:bg-neutral-900/40 mb-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e75b37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e75b37]"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
                  {PROFILE_INFO.availability}
                </span>
              </motion.div>

              {/* Header Title with Editorial Styling */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] font-sans"
              >
                Crafting digital <br />
                experiences through <br />
                <span className="text-neutral-600 dark:text-neutral-400 font-serif italic font-normal tracking-wide">
                  code
                </span>{" "}
                &amp;{" "}
                <span className="text-[#e75b37] dark:text-[#f06e4d] font-serif italic font-normal">
                  creative design
                </span>
              </motion.h1>

              {/* Bio summary */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-justify text-neutral-600 dark:text-neutral-400"
              >
                Hi, I'm{" "}
                <strong className="text-neutral-950 dark:text-neutral-100 font-bold">
                  {PROFILE_INFO.name}
                </strong>
                , a {PROFILE_INFO.role}. {PROFILE_INFO.shortIntro}
              </motion.p>

              {/* Location Meta */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-4 flex items-center space-x-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
              >
                <MapPin className="h-3.5 w-3.5 text-[#e75b37]" />
                <span>Based in {PROFILE_INFO.location}</span>
              </motion.div>

              {/* Mobile centerpiece image: placed cleanly in normal flow so it never overlaps or collapses */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 mb-2 md:hidden relative w-full aspect-4/3 overflow-hidden rounded-2xl border border-neutral-900/10 dark:border-white/10 shadow-sm"
                >
                  <img
                    src={AVATAR_PATH}
                    alt={PROFILE_INFO.name}
                    className="h-full w-full object-cover object-center filter grayscale contrast-125 brightness-95 dark:brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              )}

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={handleScrollToProjects}
                  className="group inline-flex items-center space-x-2.5 rounded-full bg-[#e75b37] text-white px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#d04a27] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <span>View My Work</span>
                  <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={() => {
                    const contactSec = document.getElementById("contact");
                    if (contactSec) {
                      window.scrollTo({
                        top: contactSec.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="group text-[11px] font-bold uppercase tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200 relative py-1"
                >
                  <span>Let's Talk</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e75b37] transition-all duration-300 group-hover:w-full" />
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex items-center space-x-5 border-t border-neutral-900/5 pt-5 dark:border-white/5"
              >
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors duration-200"
                  aria-label="Email Direct"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Empty grid spacer on desktop */}
            {!isMobile && (
              <div className="hidden md:block md:col-span-6 h-full" />
            )}
          </div>
        </div>

        {/* Desktop Split-Screen Image: NO CIRCLE, sharp rectangle, scroll-reveal width */}
        {!isMobile && (
          <motion.div
            style={{ width: widthPercent }}
            className="absolute right-0 top-0 bottom-0 z-10 hidden md:block overflow-hidden"
          >
            <img
              src={AVATAR_PATH}
              alt={PROFILE_INFO.name}
              className="h-full w-full object-cover object-center filter grayscale contrast-125 brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* Dark dynamic overlay as it expands */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-neutral-950 pointer-events-none"
            />

            {/* Elegant warm-light blending gradient on the left boundary */}
            <motion.div
              style={{ opacity: gradientOpacity }}
              className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#e3e2dd] to-transparent dark:from-neutral-950 pointer-events-none"
            />
          </motion.div>
        )}

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-6 md:left-56 z-20 hidden sm:block">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
          >
            <ArrowDown className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-500" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
