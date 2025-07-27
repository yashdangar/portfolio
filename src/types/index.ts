export interface Project {
    id: string;
    category: ProjectCategory;
    href?: string;
    github?: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    features: string[];
    techStack: string[];
    date: string;
    repoCount?: number;
    websites?: string[];
  }
  
  export type ProjectCategory = "internship" | "freelance" | "side";
  