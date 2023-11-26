/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    // unoptimized: true,
    // loader: "custom",
    // loaderFile: "my-loader.js",
    remotePatterns: [{ protocol: "http", hostname: "localhost", port: "1337", pathname: "/uploads/**" }],
  },
};
