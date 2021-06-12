/* eslint-disable no-undef */

const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  
  plugins: [new Dotenv()],

  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;