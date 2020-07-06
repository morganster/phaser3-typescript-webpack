const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: ["./src/app.ts"],
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "bundle.js",
    chunkFilename: "[name].[chunkhash].js",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    contentBase: "./www",
    publicPath: "/",
    historyApiFallback: true,
    port: 5000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "template.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets", to: "" }],
      options: {
        concurrency: 100,
      },
    }),
  ],
};

module.exports = config;
