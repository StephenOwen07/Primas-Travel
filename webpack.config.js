var path = require("path");

module.exports = {
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "./src/temp/js"),
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015"] 
        },
        test:/\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}; 
