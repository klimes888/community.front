// react_start/webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
  entry: {
    'js/app': ['./App.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader',{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        }
      ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/": {
        target: "http://localhost:3000", // 요청 url 앞에 target을 붙여주기, ex) http://localhost:8080/api/rest/myInfo
        // pathRewrite: {"/api": "/"}, // /api에 해당하는 url을 없애기, ex) http://localhost:8080/rest/myInfo
        changeOrigin: true,
      }
    }
  },
};