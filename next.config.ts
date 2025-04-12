import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['v2.exercisedb.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.exercisedb.io",
        pathname: "/**",
      },
    ],
    
  },
};

export default nextConfig;
