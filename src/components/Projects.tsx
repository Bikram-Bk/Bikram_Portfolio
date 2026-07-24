import { PROJECTS } from "../data";
import { Project } from "../types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Sparkles, X, ChevronRight } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS;

  return (
    <section
      id="projects"
      className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
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
            Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
          >
            Polished Personal Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400"
          >
            Explore handcrafted works combining clean component architectures
            with fluid, high-fidelity visual execution.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/60 shadow-xs transition-colors hover:border-[#e75b37]/30 dark:border-white/5 dark:bg-neutral-900/65 dark:hover:border-[#e75b37]/30"
              >
                {/* Image & Gradient overlay */}
                <div className="relative aspect-video overflow-hidden bg-neutral-950/5 dark:bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  {project.featured && (
                    <span className="absolute top-3 left-3 inline-flex items-center space-x-1 rounded-full bg-[#e75b37] px-2 py-0.5 text-[8px] font-bold tracking-wider text-white uppercase shadow-xs">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex grow flex-col p-4.5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/60 border border-neutral-900/10 px-1.5 py-0.5 text-[9px] font-bold text-neutral-600 dark:bg-neutral-950/40 dark:border-white/5 dark:text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-bold text-neutral-400 py-0.5">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Title & brief description */}
                  <h3 className="mt-3 text-sm font-bold tracking-tight text-gray-950 dark:text-white group-hover:text-[#e75b37] dark:group-hover:text-[#f06e4d] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* CTAs */}
                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-neutral-900/5 dark:border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-[#e75b37] hover:text-[#d04a27] dark:text-[#f06e4d] dark:hover:text-[#e75b37] flex items-center cursor-pointer uppercase tracking-wider"
                    >
                      View Details
                      <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                    </button>

                    <div className="flex items-center space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        aria-label="Visit GitHub repository"
                        className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                        title="View GitHub Repository"
                      >
                        <svg aria-hidden="true" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white"
                          title="View Live Demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="fixed inset-x-4 top-[8%] bottom-[8%] z-50 mx-auto max-w-2xl overflow-y-auto rounded-2xl border border-neutral-900/10 bg-white p-5 shadow-2xl dark:border-white/5 dark:bg-[#141312] sm:p-7"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/5 text-neutral-500 hover:bg-[#e75b37]/10 hover:text-[#e75b37] dark:bg-white/5 dark:text-neutral-400 dark:hover:bg-[#e75b37]/20"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Hero preview */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-950/5 dark:bg-white/5">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Info and text */}
                <div className="mt-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e75b37] dark:text-[#f06e4d]">
                    Project Detail
                  </span>
                  <h3 className="text-lg font-extrabold text-gray-950 dark:text-white mt-0.5">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {selectedProject.longDescription ||
                      selectedProject.description}
                  </p>

                  {/* Highlights/Key Features */}
                  <div className="mt-5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
                      Key Highlights &amp; Features
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {selectedProject.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs text-neutral-600 dark:text-neutral-400"
                        >
                          <ChevronRight className="mr-1 h-3.5 w-3.5 mt-0.5 shrink-0 text-[#e75b37] dark:text-[#f06e4d]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mt-5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-300">
                      Technologies Stacked
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/60 border border-neutral-900/10 px-2 py-0.5 text-[9px] font-bold text-neutral-600 dark:bg-neutral-950/40 dark:border-white/5 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Trigger */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-5 border-t border-neutral-900/5 dark:border-white/5">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 rounded-full border border-neutral-900/10 bg-white/40 px-4 py-2.5 text-[10px] font-bold tracking-wider uppercase text-neutral-700 hover:bg-neutral-950 hover:text-white dark:border-white/5 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-200"
                    >
                      <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Code Repository</span>
                    </a>

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 rounded-full bg-[#e75b37] px-4 py-2.5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-[#d04a27] transition-all duration-200"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Production Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
