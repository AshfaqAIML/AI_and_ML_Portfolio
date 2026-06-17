// types/index.ts

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  description: string;
  status: "done" | "current" | "future";
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
  type: "research" | "project" | "learning" | "opensource";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Recommendation {
  id: string;
  quote: string;
  name: string;
  title: string;
  relation: string;
  placeholder?: boolean;
}
