"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeCom() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 md:p-8">
      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {/* Profile Card */}
        <div className=" rounded-3xl  shadow-[0_0_12px_rgba(59,130,246,0.5)] overflow-hidden p-8 md:p-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold  mb-2"
            >
              Afzaal Suleman
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary dark:text-primary-400 mb-4"
            >
              Fullstack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6 max-w-lg"
            >
              I build scalable, responsive full-stack web applications using
              modern technologies like React, Next.js, Node.js, Express,
              MongoDB, and Tailwind CSS.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-primary border border-gray-300 dark:border-gray-600 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
          {/* Circular Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-48 w-48 md:h-56 md:w-56 rounded-full border-4 border-white shadow-lg overflow-hidden"
          >
            <Image
              src="/profile.png" // Replace with your image path
              alt="Profile Picture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Skills/Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
            (skill, i) => (
              <motion.div
                key={skill}
                whileHover={{ y: -5 }}
                className="border border-gray-400  p-4 rounded-xl text-center shadow-[0_0_12px_rgba(59,130,246,0.5)]"
              >
                <div className="text-2xl mb-2">✨</div>
                <h3 className="font-medium">{skill}</h3>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
