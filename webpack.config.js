const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (options) => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "mfe4",
    },
    module: {
      rules: [
        {
          test: /\.(ico)$/,
          exclude: /node_modules/,
          use: ["file-loader"], // ?name=[name].[ext] is only necessary to preserve the original file name
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "index.css",
        chunkFilename: "index.css",
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
      }),
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "downhill",
        library: { type: "var", name: "downhill" },
        filename: "remoteEntry.js",
        exposes: {
          "./module": ".//src/index.js",
        },
        shared: ["react", "react-dom", "axios"],
      }),
    ],
    devServer: {
      port: 4203,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
  };
};
