"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./themetoggle";
import { useSession } from "next-auth/react";
import UserAccountNav from "./auth/UserAccountNav";
import SignInButton from "./auth/SignInButton";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <Link href="/">QuickDo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 sm:gap-8">
            <ul className="flex gap-4 sm:gap-8 text-base sm:text-lg font-medium">
              <li>
                <Link href="/" className="transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/task" className="transition">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="transition">
                  Calendar
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>

          {/* Right Section - Theme Toggle, Sign In, and Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Sign In */}
            <div className="hidden md:flex">
              <div className="flex items-center bg-neutral-100 border text-black border-neutral-800 rounded-xl font-medium text-xl space-x-6">
                {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text="Sign In" />
                )}
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <ul className="flex flex-col gap-4 text-base font-medium mb-6">
              <li>
                <Link
                  href="/"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/task"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="transition"
                  onClick={() => setIsOpen(false)}
                >
                  Calendar
                </Link>
              </li>
            </ul>

            {/* Mobile Sign In */}
            <div className="w-full">
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <SignInButton text="Sign In" />
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
