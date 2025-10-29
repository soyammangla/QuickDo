"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50 px-4 text-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 2 }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/splash.jpeg"
          alt="QuickDo Logo"
          width={820}
          height={820}
          className="rounded-2xl shadow-xl w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] h-auto mx-auto"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-6 text-white text-base sm:text-lg md:text-xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2 }}
      >
        Organize Today, Succeed Tomorrow.
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
