import React from 'react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';

export const Skills: React.FC = () => {
  // Helper to get real brand logo images
  const getSkillLogo = (name: string) => {
    switch (name) {
      case 'HTML5':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-10 w-10 object-contain" alt="HTML5" referrerPolicy="no-referrer" />;
      case 'CSS3':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-10 w-10 object-contain" alt="CSS3" referrerPolicy="no-referrer" />;
      case 'JavaScript':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-10 w-10 object-contain" alt="JS" referrerPolicy="no-referrer" />;
      case 'TypeScript':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="h-10 w-10 object-contain" alt="TS" referrerPolicy="no-referrer" />;
      case 'React':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-10 w-10 object-contain animate-[spin_20s_linear_infinite]" alt="React" referrerPolicy="no-referrer" />;
      case 'Next.js':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-10 w-10 object-contain dark:invert" alt="Next" referrerPolicy="no-referrer" />;
      case 'Tailwind CSS':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-10 w-10 object-contain" alt="Tailwind" referrerPolicy="no-referrer" />;
      case 'shadcn/ui':
        return <img src="https://avatars.githubusercontent.com/u/139895814?s=100&v=4" className="h-10 w-10 rounded-full object-contain dark:invert" alt="shadcn" referrerPolicy="no-referrer" />;
      case 'Hono':
        return (
          <svg viewBox="0 0 24 24" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
            {/* Outer flame in vibrant red-orange */}
            <path
              d="M12.445.002a45.529 45.529 0 0 0-5.252 8.146 8.595 8.595 0 0 1-.555-.53 27.796 27.796 0 0 0-1.205-1.542 8.762 8.762 0 0 0-1.251 2.12 20.743 20.743 0 0 0-1.448 5.88 8.867 8.867 0 0 0 .338 3.468c1.312 3.48 3.794 5.593 7.445 6.337 3.055.438 5.755-.333 8.097-2.312 2.677-2.59 3.359-5.634 2.047-9.132a33.287 33.287 0 0 0-2.988-5.59A91.34 91.34 0 0 0 12.615.053a.216.216 0 0 0-.17-.051Z"
              fill="#E36002"
            />
            {/* Inner flame in light orange-peach */}
            <path
              d="M12.109 3.908a50.93 50.93 0 0 1 4.794 6.552c.448.767.817 1.57 1.108 2.41.606 2.386-.044 4.354-1.951 5.904-1.845 1.298-3.87 1.683-6.072 1.156-2.376-.737-3.75-2.335-4.121-4.794a5.107 5.107 0 0 1 .242-2.266c.358-.908.79-1.774 1.3-2.601l1.446-2.121a397.33 397.33 0 0 0 3.254-4.24Z"
              fill="#FFA05E"
            />
          </svg>
        );
      case 'PostgreSQL':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="h-10 w-10 object-contain" alt="Postgres" referrerPolicy="no-referrer" />;
      case 'Prisma ORM':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" className="h-10 w-10 object-contain dark:invert" alt="Prisma" referrerPolicy="no-referrer" />;
      case 'Git':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="h-10 w-10 object-contain" alt="Git" referrerPolicy="no-referrer" />;
      case 'GitHub':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="h-10 w-10 object-contain dark:invert" alt="Github" referrerPolicy="no-referrer" />;
      case 'VS Code':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="h-10 w-10 object-contain" alt="VS Code" referrerPolicy="no-referrer" />;
      case 'Postman':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="h-10 w-10 object-contain" alt="Postman" referrerPolicy="no-referrer" />;
      case 'Vercel':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" className="h-10 w-10 object-contain dark:invert" alt="Vercel" referrerPolicy="no-referrer" />;
      case 'Netlify':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" className="h-10 w-10 object-contain" alt="Netlify" referrerPolicy="no-referrer" />;
      case 'Expo':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg" className="h-10 w-10 object-contain dark:invert" alt="Expo" referrerPolicy="no-referrer" />;
      case 'Overleaf':
        return <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/overleaf.svg" className="h-10 w-10 object-contain dark:invert" alt="Overleaf" referrerPolicy="no-referrer" />;
      case 'Swagger':
        return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" className="h-10 w-10 object-contain" alt="Swagger" referrerPolicy="no-referrer" />;
      default:
        return (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e75b37]/15 font-mono text-xs font-bold text-[#e75b37]">
            {name.slice(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  // Helper to ensure marquee has enough elements to loop seamlessly
  const getLoopingSkills = (skillsList: Skill[]) => {
    if (skillsList.length === 0) return [];
    let result = [...skillsList];
    while (result.length < 12) {
      result = [...result, ...skillsList];
    }
    return result;
  };

  const displaySkills = getLoopingSkills(SKILLS);
  const halfLength = Math.ceil(displaySkills.length / 2);
  const firstHalf = displaySkills.slice(0, halfLength);
  const secondHalf = displaySkills.slice(halfLength);

  return (
    <section id="skills" className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
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
            Technical Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
          >
            Capabilities &amp; Core Toolkit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400"
          >
            An interactive canvas showcasing the languages, libraries, databases, and frameworks in my current digital stack.
          </motion.p>
        </div>
      </div>

      {/* Skills Marquee lanes (placed outside constrained container for edge-to-edge flow) */}
      <div className="mt-10 relative w-full overflow-hidden py-4">
        {/* Left Fade Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-linear-to-r from-white via-white/85 to-transparent dark:from-neutral-950 dark:via-neutral-950/85 pointer-events-none" />
        {/* Right Fade Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-linear-to-l from-white via-white/85 to-transparent dark:from-neutral-950 dark:via-neutral-950/85 pointer-events-none" />

        <div className="space-y-4">
          {/* Row 1: Scrolling Left */}
          <Marquee
            direction="left"
            speed={35}
            pauseOnHover={true}
            gradient={false}
            className="py-1"
          >
            {firstHalf.map((skill, index) => (
              <div
                key={`${skill.name}-row1-${index}`}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-900/10 bg-white/60 p-4 shadow-2xs hover:shadow-sm transition-all duration-300 hover:scale-[1.06] hover:border-[#e75b37]/30 dark:border-white/5 dark:bg-neutral-900/60 dark:hover:border-[#e75b37]/30 w-27.5 sm:w-32.5 h-27.5 sm:h-30 shrink-0 mx-2 sm:mx-3 cursor-pointer"
              >
                {/* Logo wrapper with subtle ambient float */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900/5 dark:bg-white/5 p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {getSkillLogo(skill.name)}
                </div>

                <div className="mt-2.5 text-center w-full">
                  <h3 className="text-[10px] sm:text-xs font-bold tracking-tight text-neutral-800 dark:text-neutral-200 truncate px-1">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Row 2: Scrolling Right */}
          <Marquee
            direction="right"
            speed={30}
            pauseOnHover={true}
            gradient={false}
            className="py-1"
          >
            {secondHalf.map((skill, index) => (
              <div
                key={`${skill.name}-row2-${index}`}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-900/10 bg-white/60 p-4 shadow-2xs hover:shadow-sm transition-all duration-300 hover:scale-[1.06] hover:border-[#e75b37]/30 dark:border-white/5 dark:bg-neutral-900/60 dark:hover:border-[#e75b37]/30 w-27.5 sm:w-32.5 h-27.5 sm:h-30 shrink-0 mx-2 sm:mx-3 cursor-pointer"
              >
                {/* Logo wrapper with subtle ambient float */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900/5 dark:bg-white/5 p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {getSkillLogo(skill.name)}
                </div>

                <div className="mt-2.5 text-center w-full">
                  <h3 className="text-[10px] sm:text-xs font-bold tracking-tight text-neutral-800 dark:text-neutral-200 truncate px-1">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
