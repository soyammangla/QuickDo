"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <div className="min-h-[460px] w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 mt-16 mb-16 sm:mt-24 sm:mb-24">
        {/* Top Subheading */}
        <h6 className="text-base sm:text-lg text-black dark:text-white mb-2 tracking-wide">
          Welcome to <span className="font-bold">QuickDo</span>
        </h6>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 max-w-4xl">
          Plan Smarter, <br className="hidden sm:block" /> Work Better with
          QuickDo
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl text-black dark:text-white">
          Stay on top of your daily tasks with smart reminders and easy
          scheduling. Collaborate with your team in real time — all inside
          QuickDo.
        </p>

        {/* Button */}
        <Link
          href="/signin"
          className="inline-block mt-6 px-6 py-3 bg-black dark:bg-neutral-800 text-white font-bold rounded-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
