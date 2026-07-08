export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: "frontend" | "mobile" | "ai-ml";
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  keyFeatures: string[];
}

// export interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   date: string;
//   credentialUrl?: string;
//   verificationId?: string;
// }

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'internship' | 'learning';
  duration: string;
  description: string;
  points?: string[];
  tech?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: 'Expert' | 'Advanced' | 'Foundational Knowledge' | 'Working Knowledge';
  icon: string;
}
