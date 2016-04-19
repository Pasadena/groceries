var path = require("path");

module.exports = {
    //entry:  __dirname + "/src/app.jsx",
    entry: "index.js",
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
          loader: "babel-loader"
        }
      ]
    }
}
