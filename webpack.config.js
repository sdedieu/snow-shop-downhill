const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',   
      publicPath: '/',
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /\.(ico)$/,
          exclude: /node_modules/,
          use: ['file-loader'] // ?name=[name].[ext] is only necessary to preserve the original file name
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
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
       {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "index.css",
        chunkFilename: "index.css"
      }),
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "downhill",
          library: { type: "var", name: "downhill" },
          filename: "remoteEntry.js",
          exposes: {
              './Module': './src/main.js',
          },        

          shared: ["react", "react-dom"]
        })
    ],
    devServer: {
      port: 4203,
      historyApiFallback: true
    }
  }
}