/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "swiperjs.com",
      },
      {
        hostname: "http://64.23.214.163:3008",
      },
    ],
  },
};

export default nextConfig;
