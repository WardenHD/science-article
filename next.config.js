/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'f1tcdn.net'
          },
          {
            protocol: 'https',
            hostname: 'www.vrogue.co'
          },
          {
            protocol: 'https',
            hostname: 'autotrends.org'
          }
        ],
      },
}

module.exports = nextConfig
