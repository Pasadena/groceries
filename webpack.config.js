var path = require("path");
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
      "index.js"
    ],
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "assets",
      filename: 'bundle.js'
    },
    resolve: {
      root: path.resolve(__dirname),
      extensions: ['', '.js', '.jsx', '.json'],
      alias: {
        groceries: "src/GroceryList",
        lists: "src/PreviousGroceryLists"
      }
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, "/node_modules/"),
          loader: "babel-loader"
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ],
      noParse: /lie\.js$/
    }
}
