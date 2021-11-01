// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    'js/app': ['@babel/polyfill','./App.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devtool:'source-map',
};