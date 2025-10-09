import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-neutral-900 to-black text-white py-10 mt-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">QuickDo</h2>
          <p className="mt-3 text-sm">
            Plan Smarter. Work Better. <br />
            Helping you manage tasks, projects, and deadlines with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-white">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://twitter.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/soyammangla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutal-900 mt-10 pt-6 text-center text-sm flex items-center justify-center space-x-2 text-white">
        <span>Made with</span>
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
          className="inline-flex"
        >
          <IoIosHeart className="text-red-500 text-lg cursor-pointer hover:drop-shadow-[0_0_6px_red]" />
        </motion.span>
        <span>
          by <span className="font-semibold text-white">Soyam</span>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
