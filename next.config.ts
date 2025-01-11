import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: true,
  },
  experimental: {
    mdxRs: true,
  },
  serverExternalPackages: ["mongoose"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
