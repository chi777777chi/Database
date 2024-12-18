/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig