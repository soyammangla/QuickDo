// "use client";
// import { useState } from "react";

// export default function AuthPage() {
//   const [isSignIn, setIsSignIn] = useState(true); // toggle between Sign In / Sign Up
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (isSignIn) {
//       alert(`Sign In\nEmail: ${email}\nPassword: ${password}`);
//     } else {
//       alert(`Sign Up\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
//       <div className="bg-white dark:bg-neutral-800 p-10 rounded-2xl shadow-xl w-full max-w-md transition-colors duration-300">
//         {/* Tabs */}
//         <div className="flex mb-6 border-b-2 border-gray-200 dark:border-gray-600">
//           <button
//             className={`flex-1 py-2 font-semibold ${
//               isSignIn
//                 ? "border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
//                 : "text-neutral-800 dark:text-white"
//             }`}
//             onClick={() => setIsSignIn(true)}
//           >
//             Sign In
//           </button>
//           <button
//             className={`flex-1 py-2 font-semibold ${
//               !isSignIn
//                 ? "border-b-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white"
//                 : "text-neutral-800 dark:text-white"
//             }`}
//             onClick={() => setIsSignIn(false)}
//           >
//             Sign Up
//           </button>
//         </div>

//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
//           {isSignIn ? "Sign In" : "Sign Up"}
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!isSignIn && (
//             <div>
//               <label
//                 className="block mb-2 text-gray-700 dark:text-gray-200"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Your full name"
//                 className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-neutral-700 text-black dark:text-white transition-colors duration-300"
//               />
//             </div>
//           )}

//           <div>
//             <label
//               className="block mb-2 text-gray-700 dark:text-gray-200"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-black dark:text-white transition-colors duration-300"
//             />
//           </div>

//           <div>
//             <label
//               className="block mb-2 text-gray-700 dark:text-gray-200"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-black dark:text-white transition-colors duration-300"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 rounded-xl font-semibold bg-neutral-800 dark:bg-white text-white dark:text-black transition-colors duration-300"
//           >
//             {isSignIn ? "Sign In" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-center mt-5 text-gray-800 dark:text-white">
//           {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             onClick={() => setIsSignIn(!isSignIn)}
//             className="font-medium hover:underline"
//           >
//             {isSignIn ? "Sign Up" : "Sign In"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import SignInComponent from "@/components/auth/SignInComponent";

const SignIn = () => {
  return <SignInComponent />;
};

export default SignIn;
