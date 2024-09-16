const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const path = require("path")
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.vitkac.com",
      },
    ],
  },
  staticPageGenerationTimeout: 120, // Increase the timeout to 120 seconds
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = [
        "@tanstack/react-query", 
        'pino-pretty', 'lokijs', 'encoding',
        ...config.externals,
      ]
    }
    config.infrastructureLogging = {
      level: 'verbose',
    };
    const reactQuery = path.resolve(
      require.resolve("@tanstack/react-query")
    )
    config.resolve.alias["@tanstack/react-query"] = reactQuery
    config.resolve.alias['@/assets'] = path.join(__dirname, 'public/assets');
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config;
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig
