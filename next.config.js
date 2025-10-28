/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'note-taking-app-jet.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'activity-logger.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.bummaries.app',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
