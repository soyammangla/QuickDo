"use client";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 w-full max-w-7xl mx-auto px-6 py-24 bg-gradient-to-tr from-blue-700 via-black to-purple-800 text-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug tracking-tight">
          Plan Smarter, <br />
          Work Better with <span className="text-blue-400">QuickDo</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-10 text-gray-300">
          Stay on top of your tasks with AI-powered reminders, project tracking,
          and collaboration tools — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:scale-105 transform transition flex items-center space-x-2 shadow-lg">
            <Link href="/signin" className="flex items-center space-x-2">
              <span>Get Started</span>
              <FaArrowRight />
            </Link>
          </button>

          <button className="px-6 py-3 border border-gray-400 text-white font-medium rounded-lg hover:bg-gray-800 transition">
            <Link href="/signin">Sign In</Link>
          </button>
        </div>
      </motion.div>

      {/* Right Image / Illustration */}
      <motion.img
        src="/Hero (2).jpeg"
        alt="QuickDo App Preview"
        className="flex-1 w-full max-w-[550px] h-[550px] z-10 rounded-2xl shadow-2xl object-cover"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      />

      {/* Decorative Gradient Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
