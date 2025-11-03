import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/mapa-tracking",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
