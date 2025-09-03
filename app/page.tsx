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
    const timer = setTimeout(() => setLoading(false), 3000); // 3 sec splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="text-black">
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
