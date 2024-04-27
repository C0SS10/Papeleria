/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panamericana.vtexassets.com'
      }
    ]
  }
};

export default nextConfig;
