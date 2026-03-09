import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dstal.com.au',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com"
      },
            {
        protocol: "https",
        hostname: "miasfavorite.com"
      }
    ],
    domains: ['drive.google.com', 'img.youtube.com'],
  },
};

export default withNextIntl(nextConfig);
