// src/components/ui/TransitionEffect.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionEffect = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-30"
      >
        {/* First layer - primary color */}
        <motion.div
          className="absolute top-0 bottom-0 right-full w-full h-full bg-primary dark:bg-primaryDark"
          initial={{ x: "100%", width: "100%" }}
          animate={{
            x: "0%",
            width: "0%",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          exit={{
            x: ["0%", "100%"],
            width: ["0%", "100%"],
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        />

        {/* Second layer - light/dark background */}
        <motion.div
          className="absolute top-0 bottom-0 right-full w-full h-full bg-light dark:bg-dark"
          initial={{ x: "100%", width: "100%" }}
          animate={{
            x: "0%",
            width: "0%",
            transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
          }}
        />

        {/* Third layer - dark/light background */}
        <motion.div
          className="absolute top-0 bottom-0 right-full w-full h-full bg-dark dark:bg-light"
          initial={{ x: "100%", width: "100%" }}
          animate={{
            x: "0%",
            width: "0%",
            transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default TransitionEffect;
