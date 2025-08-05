import React from "react";
import profile from "../assets/profile.JPG";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-white text-black dark:bg-[#0D1117] dark:text-white flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500">
      {/* ✨ Sparkle effect background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:24px_24px] opacity-5" />
      </motion.div>

      {/* 🎈 Enlarged Floating Profile Image */}
      <motion.img
        src={profile}
        alt="Profile"
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-blue-500 mb-4 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      <span className="text-sm bg-blue-900 text-blue-300 px-3 py-1 rounded-full mb-2 z-10">
        System Engineer
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold z-10">Ng Chun Kiat Nicholas</h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl z-10">
        System Engineer experienced in network security, system hardening. Proficient in full-stack web development and Agile methodologies.
        <span className="text-blue-400"> Node.js</span>,{" "}
        <span className="text-blue-400">Cross Platform</span>, and{" "}
        <span className="text-blue-400">Cloud technologies</span>.
      </p>

      <motion.a
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition z-10"
        href="#contact"
      >
        Work With Me
      </motion.a>
    </section>
  );
}
