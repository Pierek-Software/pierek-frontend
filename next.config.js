const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
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
