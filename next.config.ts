import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
    domains: ['drive.google.com'],
  },
};

export default withNextIntl(nextConfig);
