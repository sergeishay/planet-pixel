/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.planet-pixel.co.il',

      },
    ],
  },
}

module.exports = nextConfig
