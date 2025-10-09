"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[460px] w-full flex flex-col justify-center items-center text-center px-6 bg-black mt-24 mb-24">
      {/* Top Subheading */}
      <h6 className="text-lg text-white mb-2 tracking-wide">
        Welcome to <span className="font-bold">QuickDo</span>
      </h6>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 max-w-4xl ">
        Plan Smarter, <br /> Work Better with QuickDo
      </h1>

      {/* Paragraph */}
      <p className="text-white text-xl md:text-2xl max-w-2xl">
        Stay on top of your daily tasks with smart reminders and easy
        scheduling. Collaborate with your team in real time — all inside QuickDo
      </p>

      {/* Button */}
      <Link
        href="/signin"
        className="inline-block mt-6 px-6 py-3 bg-neutral-900 text-white font-bold rounded-lg transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Hero;
