// Global type definitions
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
  icon: string; // This will be the skill-icons identifier
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon?: string;
}
