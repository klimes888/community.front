// react_start/webpack.config.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode:"development",
  devtool:'inline-source-map',

  devServer: {
    proxy: {
      "/api/*": {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        target: `${process.env.COMMUNITY_API}`, // 요청 url 앞에 target을 붙여주기, ex) http://localhost:8080/api/rest/myInfo
        // pathRewrite: {"/api": "/"}, // /api에 해당하는 url을 없애기, ex http://localhost:8080/rest/myInfo
        historyApiFallback:true,
        changeOrigin: true,
      }
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port:8080,
  },
});