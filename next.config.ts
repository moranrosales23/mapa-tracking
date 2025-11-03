import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/mapa-tracking" : "";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
