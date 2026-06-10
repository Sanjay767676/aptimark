import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/process.html',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/portfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
