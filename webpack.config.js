var path = require("path");

module.exports = {
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "./src/temp/js"),
    filename: "main.js"
  }
}; 
