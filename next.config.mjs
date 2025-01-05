/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Suppress linting errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  images: {
    unoptimized: true, // Required for static exports on platforms like GitHub Pages
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  assetPrefix: '/portfolio-website/', // Prefix for static assets
  basePath: '/portfolio-website', // Base path for routes
  trailingSlash: true, // Ensures proper static paths
  output: 'export', // Enables static export
};

export default nextConfig;
