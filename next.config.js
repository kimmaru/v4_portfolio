/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'standalone', // Optional: for Docker builds, Vercel handles it automatically
}

module.exports = nextConfig
