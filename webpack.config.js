var path = require("path");

var config = {

  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },

  module: {

    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer:{
    historyApiFallback:true
  },
};

module.exports = config;
