const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./config')

const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function subPath (_path) {
  return path.posix.join(config[process.env.BUILD_ENV].SUB_DIR, _path)
}

const webpackConfig = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? '' : 'source-map',
  entry: {
    index: resolve('src/app.js')
  },
  output: {
    filename: subPath('js/[name].[hash:8].js'),
    path: resolve('dist'),
    publicPath: config[process.env.BUILD_ENV].PUBLIC_PATH
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      src: resolve('src'),
      assets: resolve('src/assets'),
      components: resolve('src/components'),
      store: resolve('src/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        include: resolve('src'),
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve('src')
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: resolve('src')
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: subPath('img/[name].[ext]'),
              limit: 500 // 单位是byte
            }
          }
        ],
        include: resolve('src')
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: subPath('media/[name].[ext]')
            }
          }
        ],
        include: resolve('src')
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50,
              name: subPath('fonts/[name].[ext]')
            }
          }
        ],
        include: resolve('src')
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'async',
          minChunks: 2,
          minSize: 0
        },
        vender: {
          name: 'vendor',
          test: resolve('node_modules'),
          chunks: 'all',
          priority: 10
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IMGHOST: JSON.stringify(config[process.env.BUILD_ENV].IMGHOST),
        BUILD_ENV: JSON.stringify(config[process.env.BUILD_ENV].BUILD_ENV),
        NODE_ENV: JSON.stringify(config[process.env.BUILD_ENV].NODE_ENV),
        API_PATH: JSON.stringify(config[process.env.BUILD_ENV].API_PATH),
        PUBLIC_PATH: JSON.stringify(config[process.env.BUILD_ENV].PUBLIC_PATH),
        MOBILE_HOST: JSON.stringify(config[process.env.BUILD_ENV].MOBILE_HOST)
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('src/static'),
        to: resolve(`dist/${config[process.env.BUILD_ENV].SUB_DIR}`),
        ignore: ['.*']
      }
    ])
  ]
}

module.exports = webpackConfig
