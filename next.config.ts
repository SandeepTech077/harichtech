const nextConfig = {
  // output: 'export', // keep this for static export
  reactStrictMode: true,
  images: {
    // unoptimized: true, // ✅ disables server image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
