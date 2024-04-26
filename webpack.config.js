const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script.js", // Specify the entry point of your project
  output: {
    filename: "bundle.js", // Specify the name of the output bundle
    path: path.resolve(__dirname, "dist"), // Specify the output directory
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "assets",
      },
    ],
  },
};
