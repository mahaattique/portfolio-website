/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

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
  assetPrefix: isProd ? '/portfolio-website/' : '', // Prefix for static assets
  basePath: isProd ? '/portfolio-website' : '', // Base path for routes
  trailingSlash: true, // Ensures proper static paths
  output: 'export', // Enables static export
  experimental: {
    // Optional: Only include if stability is not an issue
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
