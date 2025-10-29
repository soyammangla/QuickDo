"use client";

import Link from "next/link";
import ThemeToggle from "./themetoggle";
import { useSession } from "next-auth/react";
import UserAccountNav from "./auth/UserAccountNav";
import SignInButton from "./auth/SignInButton";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md transition-colors duration-300">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold tracking-tight w-full sm:w-auto text-center sm:text-left mb-3 sm:mb-0">
          <Link href="/">QuickDo</Link>
        </div>

        {/* Center - Menu + Theme Toggle */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-4 w-full sm:w-auto mb-3 sm:mb-0">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg font-medium">
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

        {/* Right - Sign In */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <div className="flex items-center bg-neutral-100 border text-black border-neutral-800 rounded-xl font-medium text-xl space-x-6">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
