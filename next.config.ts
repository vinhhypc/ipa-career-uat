import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dfile-uat-int.ipas.com.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dfile.ipas.com.vn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
