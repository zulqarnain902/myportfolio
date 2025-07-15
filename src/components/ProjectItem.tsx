"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../../types";

interface ProjectProps {
  project?: Project;
  index?: number;
  totalProjects?: number;
}

const ProjectItem = ({ project, index = 0 }: ProjectProps) => {
  // Staggered animation delay based on index
  const animationDelay = index * 0.1;

  // Return null if project is not provided
  if (!project) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative flex items-center justify-center h-auto w-full  shadow-xl  rounded-xl group hover:bg-gradient-to-r border from-primary to-primaryDark dark:shadow-gray-800 transition-all duration-300 overflow-hidden"
    >
      {/* Project Image with priority for first 3 items */}
      <img
        className="rounded-xl group-hover:opacity-10 transition-opacity duration-300 object-cover h-80"
        src={project.img}
        alt={`Screenshot of ${project.title} project`}
        width={600}
        height={400}
        // priority={index < 3} // Only prioritize first few images
      />

      {/* Hover Overlay Content */}
      <div
        className="flex flex-col items-center justify-center absolute inset-0 text-center 
                 bg-black/40 dark:bg-black/50 
                border border-white/10 dark:border-white/20
                shadow-lg shadow-black/30 dark:shadow-black/50
                transition-all duration-300"
      >
        <motion.h3
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-xl md:text-2xl font-bold text-white tracking-wider"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-4 text-white text-sm md:text-base"
        >
          {project.type}
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View demo of ${project.title}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg px-6 py-3 bg-white text-gray-800 font-bold text-sm cursor-pointer shadow-lg transition-all"
            >
              Live Demo
            </motion.div>
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${project.title}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg px-6 py-3 bg-white text-gray-800 font-bold text-sm cursor-pointer shadow-lg transition-all"
              >
                View Code
              </motion.div>
            </Link>
          )}
        </div>

        {/* Tech Stack Badges */}
        {project.technologies && (
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-white/20 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectItem;
