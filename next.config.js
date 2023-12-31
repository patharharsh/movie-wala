/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "https://image.tmdb.org/t/p/original/",
      },
    ],
  },
};

module.exports = nextConfig;
