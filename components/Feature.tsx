import { CiMobile2 } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Feature = () => {
  return (
    <section className="w-[80%] mx-auto py-16 text-white text-center">
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
        <div className="p-6 bg-neutral-900 rounded-xl shadow hover:shadow-lg transition">
          <CiMobile2 className="text-4xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
          <p className="text-gray-400">
            Optimized for mobile with offline sync across all devices
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-neutral-900 rounded-xl shadow hover:shadow-lg transition">
          <BsLightningChargeFill className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p className="text-gray-400">
            Instant loading and real-time updates for seamless productivity
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-neutral-900 rounded-xl shadow hover:shadow-lg transition">
          <FaUsers className="text-4xl text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
          <p className="text-gray-400">
            Share tasks and collaborate with your team in real-time
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-neutral-900 rounded-xl shadow hover:shadow-lg transition">
          <MdSecurity className="text-4xl text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
          <p className="text-gray-400">
            End-to-end encryption keeps your data safe and private
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
