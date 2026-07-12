import { Project, TimelineItem, Skill } from "./types";

import portfolioImage from "./assets/images/portfolio_image.jpg";
import developerTools from "./assets/images/developer_tools.png";
import evently from "./assets/images/Evently.png";
import faceMaskDetection from "./assets/images/Face_Mask_Detection.png";
import githubReadmeDesigner from "./assets/images/Github_Readme_Designer.png";
import jsonPackageAnalyzer from "./assets/images/JSON_Package_Analyzer.png";
import textGenerationUsingLSTM from "./assets/images/Text_Generation_Using_LSTM.png";

export const AVATAR_PATH = portfolioImage;

export const PROFILE_INFO = {
  name: "Bikram Luhar",
  role: "Frontend Developer | Full Stack Enthusiast",
  location: "Kathmandu, Nepal",
  availability: "Available for Roles & Freelance",
  shortIntro:
    "Crafting visually striking, accessible, and high-performance digital experiences. Specializing in modern React architecture with a passion for creative interactive UI and full-stack integration.",
  email: "bikrambk2244@gmail.com",
  github: "https://github.com/Bikram-Bk",
  linkedin: "https://www.linkedin.com/in/bikramluhar/",
};

export const STATISTICS = [
  { value: "10+", label: "Projects Completed" },
  { value: "1", label: "Full-time Internship" },
  { value: "100+", label: "Git Commits Made" },
  { value: "12+", label: "Technologies Explored" },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", level: "Expert", icon: "Html5" },
  { name: "CSS3", category: "frontend", level: "Expert", icon: "Css3" },
  { name: "JavaScript", category: "frontend", level: "Expert", icon: "Js" },
  { name: "TypeScript", category: "frontend", level: "Advanced", icon: "Ts" },
  { name: "React", category: "frontend", level: "Expert", icon: "React" },
  { name: "Next.js", category: "frontend", level: "Advanced", icon: "Next" },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    icon: "Tailwind",
  },
  { name: "shadcn/ui", category: "frontend", level: "Expert", icon: "Shadcn" },
  {
    name: "Hono",
    category: "backend",
    level: "Foundational Knowledge",
    icon: "Hono",
  },
  { name: "Expo", category: "frontend", level: "Advanced", icon: "Expo" },

  // Database (Working Knowledge)
  {
    name: "PostgreSQL",
    category: "database",
    level: "Working Knowledge",
    icon: "Postgres",
  },
  {
    name: "Prisma ORM",
    category: "database",
    level: "Working Knowledge",
    icon: "Prisma",
  },

  // Tools
  { name: "Git", category: "tools", level: "Advanced", icon: "Git" },
  { name: "GitHub", category: "tools", level: "Advanced", icon: "Github" },
  { name: "VS Code", category: "tools", level: "Expert", icon: "Vscode" },
  { name: "Postman", category: "tools", level: "Advanced", icon: "Postman" },
  { name: "Vercel", category: "tools", level: "Advanced", icon: "Vercel" },
  { name: "Netlify", category: "tools", level: "Advanced", icon: "Netlify" },
  { name: "Overleaf", category: "tools", level: "Advanced", icon: "Overleaf" },
  { name: "Swagger", category: "tools", level: "Advanced", icon: "Swagger" },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    title: "Frontend Development Intern",
    subtitle: "Riddhasoft Pvt. Ltd.",
    type: "internship",
    duration: "May 2025 - Jul 2025",
    description:
      "Completed a frontend development internship, building responsive user interfaces and integrating backend APIs in a collaborative development environment.",
    points: [
      "Developed responsive UI components using React.js and Tailwind CSS.",
      "Integrated REST APIs using Swagger documentation for seamless data flow.",
      "Collaborated with backend developers to connect frontend features with APIs.",
      "Fixed UI bugs, improved application responsiveness, and enhanced overall user experience.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
      "Swagger",
      "Git",
    ],
  },
  {
    id: "t2",
    title: "Built Evently - Full Stack Mobile Application",
    subtitle: "Final Year Project",
    type: "learning",
    duration: "Late 2025",
    description:
      "Designed and developed 'Evently', a cross-platform event planner application as the final semester project using a modern full-stack architecture.",
    points: [
      "Built the mobile application using React Native with Expo.",
      "Developed backend APIs using Hono and Node.js.",
      "Designed and managed PostgreSQL database with Prisma ORM.",
      "Implemented JWT authentication, event management features, and interactive maps.",
    ],
    tech: [
      "React Native",
      "Expo",
      "Hono",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    id: "t3",
    title: "Learned TypeScript & Modern UI Development",
    subtitle: "Self Learning",
    type: "learning",
    duration: "Early 2025",
    description:
      "Strengthened frontend engineering by adopting TypeScript, reusable UI components, and modern development practices.",
    points: [
      "Learned TypeScript for writing safer and more maintainable code.",
      "Built reusable components using shadcn/ui and Tailwind CSS.",
      "Improved understanding of accessibility and responsive design principles.",
    ],
    tech: ["TypeScript", "Tailwind CSS", "shadcn/ui", "Accessibility"],
  },
  {
    id: "t4",
    title: "Started Learning React",
    subtitle: "Frontend Foundation",
    type: "learning",
    duration: "Late 2024",
    description:
      "Learned component-based development, React Hooks, state management, and modern JavaScript fundamentals.",
    tech: ["React", "JavaScript (ES6+)", "CSS3"],
  },
  {
    id: "t5",
    title: "Started Web Development",
    subtitle: "Learning Journey",
    type: "learning",
    duration: "Early 2024",
    description:
      "Began exploring web development by learning the core technologies used to build modern websites.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Developer Toolbox",
    description:
      "A polished collection of browser-based developer utilities for formatting, encoding, hashing, and transforming data through a unified interface.",
    longDescription:
      "A modern client-side toolkit built with Next.js that simplifies everyday development tasks. It includes JSON formatting, JWT decoding, Base64 encoding, URL utilities, Regex testing, UUID generation, hashing tools, and a searchable dashboard designed for developer productivity.",
    image: developerTools,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: "frontend",
    githubUrl: "https://github.com/Bikram-Bk/Developer-Tools",
    liveUrl: "https://developer-tools-steel.vercel.app/",
    featured: true,
    keyFeatures: [
      "JSON, JWT, UUID and Regex utilities",
      "Hashing, Base64 and URL encoding tools",
      "Privacy-focused client-side processing",
      "Searchable developer dashboard",
      "Responsive interface with theme support",
    ],
  },
  {
    id: "p2",
    title: "JSON Package Analyzer",
    description:
      "A modern developer utility for analyzing package.json files with dependency insights, project metadata, and interactive statistics.",
    longDescription:
      "A browser-based application that helps developers inspect package.json files through an intuitive interface. It parses dependencies, scripts, metadata, and version statistics locally, ensuring privacy while providing fast and accurate project analysis.",
    image: jsonPackageAnalyzer,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    githubUrl: "https://github.com/Bikram-Bk/JSON-Package-Analyzer",
    liveUrl: "https://json-package-analyzer.vercel.app/",
    featured: true,
    keyFeatures: [
      "Local package.json parsing and validation",
      "Dependency and script analysis",
      "Project metadata and version insights",
      "JSON export and copy functionality",
      "Responsive developer-friendly interface",
    ],
  },
  {
    id: "p3",
    title: "GitHub README Designer",
    description:
      "An interactive README generator that enables developers to build professional GitHub documentation with live Markdown preview.",
    longDescription:
      "A modern documentation builder developed with Next.js that guides users through creating polished GitHub README files. It offers editable Markdown output, live preview, responsive layouts, and customizable project sections for streamlined documentation.",
    image: githubReadmeDesigner,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Markdown"],
    category: "frontend",
    githubUrl: "https://github.com/Bikram-Bk/Github-README-Designer",
    liveUrl: "https://github-readme-designer.vercel.app/",
    featured: true,
    keyFeatures: [
      "Guided README generation workflow",
      "Real-time Markdown preview",
      "Editable documentation before export",
      "Support for badges, scripts and documentation",
      "Dark and light theme support",
    ],
  },
  {
    id: "p4",
    title: "Evently",
    description:
      "A production-ready cross-platform event management application for discovering, planning, and organizing cultural events with a seamless mobile experience.",
    longDescription:
      "A full-stack mobile application built using React Native and Expo that streamlines event planning through secure authentication, planner dashboards, advanced event filtering, interactive chat, favorites, notifications, and reusable UI components.",
    image: evently,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
    ],
    category: "mobile",
    githubUrl: "https://github.com/Bikram-Bk/Evently_App_Frontend",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "Cross-platform mobile application with Expo",
      "Secure authentication and planner dashboard",
      "Advanced event search and filtering",
      "Interactive chatbot and notifications",
      "Reusable UI components with dark mode support",
    ],
  },
  {
    id: "p5",
    title: "Face Mask Detection Using SSD",
    description:
      "A computer vision project that detects masked and unmasked faces using the Single Shot Detector (SSD) deep learning model.",
    longDescription:
      "A deep learning application built with Python and OpenCV that leverages a pretrained SSD model for real-time face detection and mask classification. The project demonstrates image preprocessing, object detection, and computer vision workflows.",
    image: faceMaskDetection,
    tags: ["Python", "OpenCV", "SSD", "Deep Learning", "Computer Vision"],
    category: "ai-ml",
    githubUrl: "https://github.com/Bikram-Bk/Face-Mask-Detection-Using-SSD",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "SSD-based face detection",
      "Mask and non-mask classification",
      "OpenCV image processing pipeline",
      "Deep learning inference",
      "Real-time detection support",
    ],
  },
  {
    id: "p6",
    title: "Text Generation Using LSTM",
    description:
      "A natural language processing project that generates coherent text sequences using Long Short-Term Memory neural networks.",
    longDescription:
      "An NLP application that trains an LSTM model on textual datasets to learn language patterns and generate context-aware text. It demonstrates text preprocessing, sequence modeling, neural network training, and text generation.",
    image: textGenerationUsingLSTM,
    tags: ["Python", "TensorFlow", "Keras", "LSTM", "NLP"],
    category: "ai-ml",
    githubUrl: "https://github.com/Bikram-Bk/Text-Generation-Using-LSTM",
    liveUrl: "",
    featured: true,
    keyFeatures: [
      "Text preprocessing pipeline",
      "LSTM-based sequence modeling",
      "Neural network training",
      "Context-aware text generation",
      "Natural language processing workflow",
    ],
  },
];

// export const CERTIFICATIONS: Certification[] = [
//   {
//     id: "c1",
//     title: "Meta Front-End Developer Professional Certificate",
//     issuer: "Meta (Coursera)",
//     date: "Feb 2026",
//     credentialUrl: "https://coursera.org",
//     verificationId: "META-FED-9901X"
//   },
//   {
//     id: "c2",
//     title: "Advanced React & State Management Patrons",
//     issuer: "Frontend Masters",
//     date: "Dec 2025",
//     credentialUrl: "https://frontendmasters.com",
//     verificationId: "FM-ADV-RX81"
//   },
//   {
//     id: "c3",
//     title: "TypeScript Deep Dive & Design Patterns",
//     issuer: "Ultimate Courses",
//     date: "Sep 2025",
//     credentialUrl: "https://ultimatecourses.com",
//     verificationId: "UC-TS-DEEP-442"
//   },
//   {
//     id: "c4",
//     title: "Full-Stack Development Foundations",
//     issuer: "freeCodeCamp",
//     date: "June 2025",
//     credentialUrl: "https://freecodecamp.org",
//     verificationId: "FCC-FSD-3829"
//   }
// ];
