var path = require("path");

module.exports = {
    entry:  __dirname + "/src/app.jsx",
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: "assets",
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "babel-loader"
        }
      ]
    }
}
