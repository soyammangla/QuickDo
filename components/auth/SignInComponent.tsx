"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignIn) {
      alert(`Sign In\nEmail: ${email}\nPassword: ${password}`);
    } else {
      alert(`Sign Up\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-300 px-4 sm:px-6">
      <div className="bg-white dark:bg-neutral-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-md">
        {/* Tabs */}
        <div className="flex mb-6 border-b-2 border-gray-200 dark:border-neutral-700">
          <button
            className={`flex-1 py-2 font-semibold ${
              isSignIn
                ? "border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
                : "text-neutral-800 dark:text-gray-300"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${
              !isSignIn
                ? "border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
                : "text-neutral-800 dark:text-gray-300"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {/* Google Sign-In Button */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-neutral-600 py-3 rounded-xl mb-5 hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
        >
          <Image src="/Google.png" alt="Google logo" width={20} height={20} />
          <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
            Sign in with Google
          </span>
        </button>

        <div className="flex items-center mb-5">
          <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-700"></div>
          <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">
            or
          </span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-neutral-700"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isSignIn && (
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 mb-2 text-sm sm:text-base"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 text-gray-800 dark:text-gray-100 text-sm sm:text-base"
              />
            </div>
          )}

          <div>
            <label
              className="block text-black dark:text-gray-200 mb-2 text-sm sm:text-base"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 text-gray-800 dark:text-gray-100 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              className="block text-black dark:text-gray-200 mb-2 text-sm sm:text-base"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 text-gray-800 dark:text-gray-100 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-neutral-800 dark:bg-white text-white dark:text-black hover:opacity-90 transition text-sm sm:text-base"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-black dark:text-gray-200 mt-5 text-sm sm:text-base">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-black dark:text-white font-medium hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
