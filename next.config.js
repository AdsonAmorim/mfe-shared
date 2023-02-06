/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "shared",
        filename: "static/chuncks/sharedEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
        exposes: {
          "./button": "./src/components/Button",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
