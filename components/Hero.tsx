import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-1 w-full max-w-6xl mx-auto px-6 py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl shadow-xl">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug tracking-tight">
        Organize
        <br />
        Your Day With <span className="text-blue-500">QuickDo</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-300">
        QuickDo is your smart task manager designed to keep you focused,
        productive, and stress-free. Manage daily tasks, plan projects, and
        track deadlines — all in one place.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <span>Get Started</span>
          <FaArrowRight />
        </button>

        <button className="px-6 py-3 border border-gray-500 text-white font-medium rounded-lg hover:bg-gray-800 transition">
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Hero;
