/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Suppress linting errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
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
  trailingSlash: true, // Ensure static paths end with a slash
  output: 'export', // Enable static export
};

// Attempt to import user-defined configuration and merge it with the default config
(async () => {
  try {
    const userConfig = await import('./v0-user-next.config');
    if (userConfig) {
      Object.assign(nextConfig, userConfig.default || userConfig);
    }
  } catch (e) {
    // Ignore if user config doesn't exist
  }
})();

export default nextConfig;
