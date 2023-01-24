const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json", ".hbs", ".handlebars"],
    fallback: {
      fs: false,
    },
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  devServer: {
    compress: true,
    port: 1234,
    open: true,
  },
  module: {
    rules: [
      { test: /\.svg$/, type: "asset/inline" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.h(andle)?b(ar)?s$/, loader: "handlebars-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
