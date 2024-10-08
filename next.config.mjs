/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

export default nextConfig;
