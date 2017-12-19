let path = require('path')
let webpack = require('webpack')
let autoprefixer = require('autoprefixer')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDevelop = process.env.NODE_ENV === 'develop'

module.exports = {
  entry: {
    main: [path.resolve(process.cwd(), 'src/entry.js')]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  resolve: {
    extensions: ['.js', '.css', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.runtime.common.js',
      'pages': path.resolve(process.cwd(), 'src/pages'),
      'plugins': path.resolve(process.cwd(), 'src/plugins'),
      'components': path.resolve(process.cwd(), 'src/components'),
      'apis': path.resolve(process.cwd(), 'src/apis'),
      'utils': path.resolve(process.cwd(), 'src/utils')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: !isDevelop,
            preserveWhitespace: false,
            postcss: [
              autoprefixer({browsers: ['last 7 versions']})
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: isDevelop ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
}
