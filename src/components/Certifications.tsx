// import React from 'react';
// import { motion } from 'motion/react';
// import { CERTIFICATIONS } from '../data';
// import { ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

// export const Certifications: React.FC = () => {
//   return (
//     <section id="certifications" className="py-14 bg-white dark:bg-neutral-950 transition-colors duration-500">
//       <div className="container mx-auto max-w-345 px-6 sm:px-8 lg:px-8 xl:px-12">

//         {/* Section Header */}
//         <div className="text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.5 }}
//             className="text-[10px] font-bold tracking-widest text-[#e75b37] dark:text-[#f06e4d] uppercase"
//           >
//             Credentials
//           </motion.p>
//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white"
//           >
//             Certifications &amp; Training
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400"
//           >
//             Verified professional credentials proving theoretical depth, practical specialization, and continuous industry upskilling.
//           </motion.p>
//         </div>

//         {/* Certifications grid */}
//         <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
//           {CERTIFICATIONS.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               whileHover={{ y: -3 }}
//               className="relative overflow-hidden rounded-xl border border-neutral-900/10 bg-white/60 p-4.5 shadow-xs transition-colors hover:border-[#e75b37]/25 dark:border-white/5 dark:bg-neutral-900/65 dark:hover:border-[#e75b37]/25"
//             >
//               {/* Background Glow */}
//               <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#e75b37]/5 blur-xl pointer-events-none" />

//               <div className="flex items-start justify-between">
//                 <div className="flex items-start space-x-4">
//                   {/* Verification shield indicator */}
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e75b37]/10 text-[#e75b37] dark:bg-[#e75b37]/20 dark:text-[#f06e4d]">
//                     <ShieldCheck className="h-4.5 w-4.5" />
//                   </div>

//                   <div>
//                     {/* Badge and verification indicator */}
//                     <div className="flex items-center space-x-1.5">
//                       <span className="inline-flex items-center space-x-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 uppercase">
//                         <span>Verified Badge</span>
//                       </span>
//                       {cert.verificationId && (
//                         <span className="font-mono text-[9px] text-neutral-400 dark:text-neutral-500">
//                           ID: {cert.verificationId}
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="mt-2 text-xs font-bold leading-snug text-gray-950 dark:text-white">
//                       {cert.title}
//                     </h3>

//                     <p className="mt-0.5 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
//                       {cert.issuer}
//                     </p>

//                     {/* Completion Date */}
//                     <div className="mt-3 flex items-center space-x-1 text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
//                       <Calendar className="h-3 w-3" />
//                       <span>Issued {cert.date}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Optional external verification link */}
//                 {cert.credentialUrl && (
//                   <motion.a
//                     href={cert.credentialUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-900/10 bg-white text-neutral-400 hover:border-[#e75b37] hover:text-[#e75b37] dark:border-white/5 dark:bg-neutral-900 dark:text-neutral-500 dark:hover:text-white"
//                     title="Verify Credential"
//                   >
//                     <ArrowUpRight className="h-4 w-4" />
//                   </motion.a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };
