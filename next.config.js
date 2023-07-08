/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.adidas.com'], // Add the domain of your external image host
  },
};

module.exports = nextConfig;
