/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Enable the experimental App Router by defining an `app` directory.
  experimental: {
    appDir: true,
  },
  images: {
    // Allow images to be served from the public folder and remote domains in the future.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;