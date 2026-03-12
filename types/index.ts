export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export interface Skill {
  icon: string;
  name: string;
  items: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactLinks {
  email: string;
  github: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
}
