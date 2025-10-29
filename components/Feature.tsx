"use client";

import { CiMobile2 } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Feature = () => {
  return (
    <section className="w-[90%] sm:w-[85%] md:w-[80%] max-w-7xl mx-auto py-12 sm:py-16 text-center mb-22 transition-colors duration-300 px-2 sm:px-0">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white leading-snug">
        Everything you need to stay organized
      </h1>
      <p className="text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto text-black dark:text-white px-2">
        Powerful features designed to help you manage tasks efficiently across
        all your devices
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Card 1 */}
        <div className="p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md transition-transform transition-shadow duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
          <CiMobile2 className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
            Mobile First
          </h3>
          <p className="text-sm sm:text-base text-black dark:text-white">
            Fully optimized for mobile with offline sync across all devices for
            a smooth experience
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md transition-transform transition-shadow duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
          <BsLightningChargeFill className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
            Lightning Fast
          </h3>
          <p className="text-sm sm:text-base text-black dark:text-white">
            Instant loading & real-time updates for seamless productivity
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md transition-transform transition-shadow duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
            Team Collaboration
          </h3>
          <p className="text-sm sm:text-base text-black dark:text-white">
            Share tasks and collaborate effortlessly with your team in real-time
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-5 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md transition-transform transition-shadow duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
          <MdSecurity className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
            Secure & Private
          </h3>
          <p className="text-sm sm:text-base text-black dark:text-white">
            End-to-end encryption keeps your data completely safe and private
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
