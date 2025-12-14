import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/shaokiat-portfolio',
  assetPrefix: '/shaokiat-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
