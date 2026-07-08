import React from "react";
import { STATISTICS } from "../data";
import { motion } from "motion/react";
import { Award, Briefcase, Code2, BookOpen } from "lucide-react";

export const About: React.FC = () => {
  // Map icons to statistical elements
  const icons = [
    <Code2 className="h-5 w-5 text-indigo-500" />,
    <Briefcase className="h-5 w-5 text-emerald-500" />,
    <Award className="h-5 w-5 text-amber-500" />,
    <BookOpen className="h-5 w-5 text-purple-500" />,
  ];

  return (
    <section
      id="about"
      className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-345 px-6 sm:px-8 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-widest text-[#e75b37] dark:text-[#f06e4d] uppercase"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
          >
            Driven by Craftsmanship &amp; Clean Code
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
          {/* Detailed Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-sm leading-relaxed text-justify text-neutral-600 dark:text-neutral-400 md:col-span-7"
          >
            <p>
              I am a passionate{" "}
              <strong className="text-gray-950 dark:text-white font-semibold">
                Frontend Developer
              </strong>{" "}
              with a growing interest in{" "}
              <strong className="text-gray-950 dark:text-white font-semibold">
                Full-Stack Development
              </strong>
              . I enjoy building modern, responsive, and accessible web applications while
              writing clean, maintainable, and scalable code.
            </p>

            <p>
              My primary focus is developing intuitive user interfaces with{" "}
              <strong className="text-[#e75b37] dark:text-[#f06e4d]">
                React &amp; TypeScript
              </strong>
              . I value performance, usability, and thoughtful design to create seamless
              user experiences across different devices.I am also strengthening my backend skills with Node.js, Prisma, and
              PostgreSQL to better understand full-stack application development and build
              complete, reliable solutions.
            </p>

            <p>
              As a recent graduate, I bring curiosity, adaptability, and a strong
              commitment to continuous learning. I am eager to contribute, collaborate with
              teams, and grow as a software developer by building impactful digital
              experiences.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-5">
            {STATISTICS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-xl border border-neutral-900/10 bg-white/60 p-4 shadow-xs transition-colors dark:border-white/5 dark:bg-neutral-900/60"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-[#e75b37]/5 blur-xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                    {stat.value}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e75b37]/10 dark:bg-[#e75b37]/20">
                    {React.cloneElement(icons[index], {
                      className: "h-4 w-4 text-[#e75b37] dark:text-[#f06e4d]",
                    })}
                  </div>
                </div>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
