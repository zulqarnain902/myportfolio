"use client";
import { motion } from "framer-motion";
import Skill from "./ui/Skill";
import { Skill as SkillType } from "../../types";

const Skills = () => {
  const skills: SkillType[] = [
    { name: "Next.js", level: "90%", icon: "/icons/next.png" },
    { name: "React", level: "90%", icon: "/icons/react.png" },
    { name: "Node.js", level: "85%", icon: "/icons/node.webp" },
    { name: "MongoDB", level: "80%", icon: "/icons/mongodb.png" },
    { name: "Express", level: "80%", icon: "/icons/express-js.png" },
    { name: "Tailwind CSS", level: "85%", icon: "/icons/tailwindcss.png" },
    { name: "TypeScript", level: "75%", icon: "/icons/typescript.png" },
    { name: "GraphQL", level: "70%", icon: "/icons/bootstrap.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[80vh] flex  flex-col text-center md:text-left  max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" uppercase tracking-[20px]  text-2xl">Skills</h3>

      <h3 className=" mt-12 uppercase tracking-[3px] text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-x-5 md:gap-x-15 gap-y-6 mt-32">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill.name} skill={skill} directionLeft />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
