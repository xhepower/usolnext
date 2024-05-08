/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "http://64.23.214.163:3008"], // Agrega 'localhost' como dominio permitido para las imágenes
  },
};

export default nextConfig;
