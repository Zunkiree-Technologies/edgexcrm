import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Transpile shared package
  transpilePackages: ["@edge-x-crm/shared"],
};

export default nextConfig;
