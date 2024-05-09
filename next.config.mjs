/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "64.23.214.163",
      },
    ],
  },
};

export default nextConfig;
