let webpack = require('webpack')
let merge = require('webpack-merge')
let webpackBaseConfig = require('./webpack.base.conf')
let dllConfig = require('./webpack.dll.conf')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let fs = require('fs')
let config = {
  output: {
    publicPath: '/',
    filename: 'js/[name].[hash:7].js',
    chunkFilename: 'js/[id].[hash:7].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_ROOT: '"/"',
        ROUTER_ROOT: '"/"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].[hash:7].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'js/vendors.[hash:7].js'
    })
  ]
}

try {
  config.plugins.push(new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./dll.manifest.json')
  }))
} catch (e) {

}

module.exports = merge(webpackBaseConfig, config)
