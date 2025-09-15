"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[460px] w-full flex flex-col justify-center items-center text-center px-6 bg-black mt-24 mb-24">
      {/* Top Subheading */}
      <h6 className="text-lg text-gray-300 mb-2 tracking-wide">
        Welcome to{" "}
        <span className="font-bold hover:text-blue-500">QuickDo</span>
      </h6>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 max-w-4xl ">
        Plan Smarter, <br /> Work Better with QuickDo
      </h1>

      {/* Paragraph */}
      <p className="text-gray-200 text-xl md:text-2xl max-w-2xl">
        Stay on top of your daily tasks with smart reminders and easy
        scheduling. Collaborate with your team in real time — all inside{" "}
        <span className="font-semibold text-blue-400">QuickDo</span>.
      </p>

      {/* Button */}
      <Link
        href="/signin"
        className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Hero;
