import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/react-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
