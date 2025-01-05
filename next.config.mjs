/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static exports
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  trailingSlash: true, // Ensures proper static paths
  output: 'export',
};

export default nextConfig;
