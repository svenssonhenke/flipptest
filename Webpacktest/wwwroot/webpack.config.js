const path = require("path");
const nodeExternals = require("webpack-node-externals");

const webConfig = {
  entry: { main: "./src/EntryPoints/ClientApp.js" },
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/client"),
    publicPath: "dist/"
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

const nodeConfig = {
  target: "node",
  entry: "./src/EntryPoints/ServerApp.js",
  mode: "development",
  output: {
    libraryTarget: "commonjs2",
    filename: "server.js",
    path: path.resolve(__dirname, "dist/server")
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = [webConfig, nodeConfig];
