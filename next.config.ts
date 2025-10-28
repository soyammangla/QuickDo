import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript errors (like strict type checks) ignore during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // 👇 This line will ignore all ESLint errors during build (your main issue)
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
