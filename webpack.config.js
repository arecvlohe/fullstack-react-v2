const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "babel-polyfill",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",
    path.resolve(__dirname, "client", "index.js")
  ],

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    historyApiFallback: true,
    stats: {
      modules: false
    }
  }
};
