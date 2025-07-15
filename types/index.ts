export interface Skill {
  name: string;
  level: string;
  icon: string;
}



export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}
// types/index.ts
export interface Project {
  title: string;
  type: string;
  img: string;
  link: string;
  github?: string;
  technologies?: string[];
  description?: string;
  year?: number;
  role?: string;
}