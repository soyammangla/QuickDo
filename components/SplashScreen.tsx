"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); // show total 3s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.6, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/splash.jpeg"
          alt="QuickDo Logo"
          width={600}
          height={600}
          className="rounded-2xl shadow-2xl"
          priority
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="mt-6 text-white text-lg md:text-xl font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
      >
        Organize Today, Succeed Tomorrow.
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
