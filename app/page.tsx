"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasShown = sessionStorage.getItem("splashShown");

    if (hasShown) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
