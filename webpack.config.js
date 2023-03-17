const path = require("path");

module.exports = {
  mode: "development",
  entry: "./script.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "./"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
