"use client";
import { useState } from "react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true); // toggle between Sign In / Sign Up
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        {/* Tabs */}
        <div className="flex mb-6 border-b-2 border-gray-200">
          <button
            className={`flex-1 py-2 font-semibold ${
              isSignIn
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 font-semibold ${
              !isSignIn
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isSignIn && (
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold transition ${
              isSignIn
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-5">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-600 font-medium hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
