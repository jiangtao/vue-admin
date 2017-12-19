let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
let webpackBaseConfig = require('./webpack.base.conf')
const vendors = [
  'vue',
  'vuex',
  'vue-http',
  'vue-router',
  'vt-loading',
  'vt-confirm',
  'vt-alert',
  'vt-field',
  'vt-input',
  'vt-validator',
  'vt-upload',
  'vt-table',
  'vt-select',
  'vt-dropdown',
  'vt-menu',
  'vt-button',
  'vt-radio',
  'vt-checkbox',
  'vt-pagination'
]

module.exports = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: 'dll.[name].[chunkhash].js',
    library: '[name]_[chunkhash]'
  },
  entry: {
    vendor: vendors
  },
  resolve: {
    extensions: ['.js', '.css', '.vue']
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll.manifest.json'),
      name: '[name]_[chunkhash]',
      context: __dirname
    })
  ]
})
