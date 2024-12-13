import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dstal.com.au',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
