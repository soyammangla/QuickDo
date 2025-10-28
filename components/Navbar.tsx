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
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">QuickDo</Link>
        </div>

        {/* Center - Menu + Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-8 text-lg font-medium">
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
        <div>
          <div className="flex items-center bg-neutral-100 border text-black border-neutral-800 rounded-xl font-medium text-xl space-x-6 ">
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
