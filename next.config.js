/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
  
    },
}

module.exports = nextConfig
