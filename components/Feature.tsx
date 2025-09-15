import { CiMobile2 } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Feature = () => {
  return (
    <section className="w-[80%] max-w-7xl mx-auto py-16 text-white text-center mb-22">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Everything you need to stay organized
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Powerful features designed to help you manage tasks efficiently across
        all your devices
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl shadow transition-transform transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 cursor-pointer group">
          <CiMobile2 className="text-4xl text-blue-400 mx-auto mb-4 transition-transform duration-300 group-hover:rotate-6" />
          <h3 className="text-xl font-semibold mb-2 text-white">
            Mobile First
          </h3>
          <p className="text-gray-400">
            Optimized for mobile with offline sync across all devices
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl shadow transition-transform transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 cursor-pointer group">
          <BsLightningChargeFill className="text-4xl text-yellow-400 mx-auto mb-4 transition-transform duration-300 group-hover:-rotate-6" />
          <h3 className="text-xl font-semibold mb-2 text-white">
            Lightning Fast
          </h3>
          <p className="text-gray-400">
            Instant loading and real-time updates for seamless productivity
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl shadow transition-transform transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 cursor-pointer group">
          <FaUsers className="text-4xl text-green-400 mx-auto mb-4 transition-transform duration-300 group-hover:translate-y-1" />
          <h3 className="text-xl font-semibold mb-2 text-white">
            Team Collaboration
          </h3>
          <p className="text-gray-400">
            Share tasks and collaborate with your team in real-time
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-xl shadow transition-transform transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 cursor-pointer group">
          <MdSecurity className="text-4xl text-red-400 mx-auto mb-4 transition-transform duration-300 group-hover:rotate-12" />
          <h3 className="text-xl font-semibold mb-2 text-white">
            Secure & Private
          </h3>
          <p className="text-gray-400">
            End-to-end encryption keeps your data safe and private
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
