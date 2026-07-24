import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE } from '../data';
import { Briefcase, BookOpen, ChevronRight } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">

        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-widest text-[#e75b37] dark:text-[#f06e4d] uppercase"
          >
            My Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
          >
            Professional &amp; Learning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400"
          >
            An honest, transparent timeline showcasing rapid learning velocity, hands-on internship experience, and structural engineering growth.
          </motion.p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-neutral-900/10 dark:bg-white/5 md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-10 md:space-y-12">
            {TIMELINE.map((item, index) => {
              const isInternship = item.type === 'internship';
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }}
                  className={`relative w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                    }`}
                >
                  {/* Icon Node Dot */}
                  <div className={`absolute left-0 top-1 md:top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition-colors ${isEven
                    ? 'md:left-0 md:-translate-x-1/2'
                    : 'md:left-auto md:right-0 md:translate-x-1/2'
                    } ${isInternship
                      ? 'border-[#e75b37]/30 bg-[#e75b37]/10 text-[#e75b37] dark:border-[#e75b37]/50 dark:bg-[#e75b37]/20 dark:text-[#f06e4d]'
                      : 'border-neutral-900/10 bg-white/60 text-neutral-500 dark:border-white/5 dark:bg-neutral-900/60 dark:text-neutral-400'
                    }`}>
                    {isInternship ? <Briefcase className="h-3.5 w-3.5" /> : <BookOpen className="h-3.5 w-3.5" />}
                  </div>

                  {/* Card Container */}
                  <div className="relative overflow-hidden rounded-xl border border-neutral-900/10 bg-white/60 p-4.5 shadow-xs transition-colors hover:border-[#e75b37]/20 dark:border-white/5 dark:bg-neutral-900/65 dark:hover:border-[#e75b37]/20">

                    {/* Corner Accent for Internship */}
                    {isInternship && (
                      <div className="absolute top-0 right-0 rounded-bl-lg bg-[#e75b37]/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#e75b37] dark:bg-[#e75b37]/20 dark:text-[#f06e4d]">
                        Work Experience
                      </div>
                    )}

                    {/* Meta info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-gray-950 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                          {item.subtitle}
                        </p>
                      </div>
                      <span className="mt-1 inline-block self-start rounded-full bg-neutral-900/5 px-2 py-0.5 text-[8px] font-bold tracking-wider text-neutral-500 dark:bg-white/5 dark:text-neutral-400 sm:mt-0 uppercase">
                        {item.duration}
                      </span>
                    </div>

                    {/* Brief description */}
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specific details/achievements */}
                    {item.points && item.points.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start text-[11px] text-neutral-600 dark:text-neutral-400">
                            <ChevronRight className="mr-1 h-3 w-3 mt-0.5 shrink-0 text-[#e75b37] dark:text-[#f06e4d]" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech badge footer */}
                    {item.tech && item.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1 pt-3 border-t border-neutral-900/5 dark:border-white/5">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/60 border border-neutral-900/10 px-1.5 py-0.5 text-[9px] font-bold text-neutral-600 dark:bg-neutral-950/40 dark:border-white/5 dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
