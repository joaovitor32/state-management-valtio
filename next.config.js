/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: 'https://localhost:7104',
  },
};

module.exports = nextConfig;
