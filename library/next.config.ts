import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/branding-design-tokens',
  assetPrefix: '/branding-design-tokens',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: false,
  },
}

export default nextConfig;
