import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb", // Optional
      allowedOrigins: ["*"], // Optional
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
};

export default nextConfig;
