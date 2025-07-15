import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "../../../types";

interface SkillProps {
  skill: SkillType;
  directionLeft?: boolean;
}

const Skill = ({ skill, directionLeft }: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -50 : 50, // Reduced movement for mobile
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-50px 0px -100px 0px", // Adjusted for mobile
          amount: "some", // Requires only part to be visible
        }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
          className="rounded-full object-contain"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-12 md:h-12 xl:w-16 xl:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm font-bold text-black opacity-100">
            {skill.level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
