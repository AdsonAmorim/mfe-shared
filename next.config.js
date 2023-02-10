/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const dependencies = require("./package.json").dependencies;

const nextConfig = {
  webpack: (config) => {
    config.experiments = { topLevelAwait: true, layers: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "shared",
        filename: "static/chunks/sharedEntry.js",
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
        exposes: {
          "./button": "./src/components/Button/index.tsx",
        },
        shared: {
          ...dependencies,
          "react-dom": {
            requiredVersion: dependencies["react-dom"],
            singleton: true,
          },
          react: {
            requiredVersion: dependencies["react"],
            singleton: true,
          },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
