"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-300 px-4 sm:px-6">
      <div className="bg-white dark:bg-neutral-800 p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/Google.png" // 🔹 place Google logo image in /public
            alt="Google Logo"
            width={60}
            height={60}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Welcome to Quickdo
        </h1>

        {/* Subtitle */}
        <p className="text-black-600 dark:text-white-300 mb-8 text-sm sm:text-base">
          Sign in securely using your Google account to continue.
        </p>

        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-neutral-600 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
        >
          <Image
            src="/Google.png"
            alt="Google logo"
            width={22}
            height={22}
            className="rounded-full shadow-md"
          />
          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
            Continue with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-black-500 dark:text-white-400 text-xs mt-8">
          By continuing, you agree to Quickdo’s{" "}
          <Link
            href="/terms"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Terms
          </Link>{" "}
          &{" "}
          <Link
            href="/privacy"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
