const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.data.pierek.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
