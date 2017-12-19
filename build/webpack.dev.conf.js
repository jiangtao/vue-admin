let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
let webpackBaseConfig = require('./webpack.base.conf')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"develop',
        API_ROOT: '"/"',
        ROUTER_ROOT: '"/"'
      }
    })
  ],
  devServer: {
    noInfo: true
  },
  server: {
    port: 6464, // server port
    proxy: {
      // host: 'http://10.150.20.96:18095/', // online test
      host: 'http://192.168.18.104:8080', // proxy url
      match: /^\/paydayloan-manager/ // proxy match regexp
    }
  }
})
