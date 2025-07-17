// utils/generateProjects.ts
import { Project } from "../../types";

const projectTitles = [
  "E-Commerce Platform ",
  "Task Management App",
  "Social Media Dashboard",
  "Weather Forecast App",
  "Recipe Finder",
  "Fitness Tracker",
  "Budget Planner",
  "Travel Blog",
  "Job Board",
  "Music Player"
];

const projectTypes = [
  "Web Application",
  "Youtube clone",
  "Full-Stack Project",
  "AI based suggestion system",
  "Open Source Contribution"
  
];

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Express",
  "MongoDB", "Tailwind CSS", "GraphQL", "Firebase", "AWS",
  "Docker", "Jest", "Redux", "Sass", "Python"
];

const getRandomItems = (arr: string[], count: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getRandomImage = () => {
  const width = 600;
  const height = 400;
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/${width}/${height}?random=${randomId}`;
};

export const generateRandomProjects = (count: number): Project[] => {
  return Array.from({ length: count }, (_, i) => ({
    title: projectTitles[i % projectTitles.length] || `Project ${i + 1}`,
    type: projectTypes[Math.floor(Math.random() * projectTypes.length)] || "Web Project",
    img: getRandomImage(),
    link: "https://example.com",
    github: Math.random() > 0.3 ? "https://github.com/zulqarnain902" : undefined,
    technologies: getRandomItems(technologies, Math.floor(Math.random() * 5) + 2),
    description: `This project demonstrates my skills in ${getRandomItems(technologies, 2).join(" and ")}. It includes features like user authentication, responsive design, and API integration.`
  }));
};