var path = require("path");
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "index.js",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "assets",
      filename: 'bundle.js'
    },
    resolve: {
      root: path.resolve(__dirname),
      extensions: ['', '.js', '.jsx'],
      alias: {
        groceries: "src/GroceryList",
      }
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, "/node_modules/"),
          loader: "babel-loader"
        }
      ]
    }
    //,
    //target: 'node',
    //externals: [nodeExternals()],
}
