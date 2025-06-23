import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // output: "export",
  experimental: {
    serverActions: {}, // ✅ fixed
  },
};

export default nextConfig;
