/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = {
  serverDependencies: [
    '@rainbow-me/rainbowkit',
    '@rainbow-me/rainbowkit/wallets',
  ],
  images: {
    domains: ["images.infinitydigitalassets.io"],
  },
  
    webpack(config, { isServer }) {
      const prefix = config.assetPrefix ?? config.basePath ?? "";
      config.module.rules.push({
        test: /\.mp4|\.webm$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? "../" : ""}static/media/`,
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });
      return config;
    },
  };
