const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
})
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function subPath(_path) {
  return path.posix.join(config[process.env.BUILD_ENV].SUB_DIR, _path);
}

const webpackConfig = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? '' : 'source-map',
  entry: {
    index: resolve('src/index.js')
  },
  output: {
    filename: subPath('js/[name].[hash:8].js'),
    path: resolve('dist'),
    publicPath: config[process.env.BUILD_ENV].PUBLIC_PATH
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'element-ui': 'ELEMENT',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      // 'vue': 'vue/dist/vue.runtime.min.js',
      // 'vue-router': 'vue-router/dist/vue-router.min.js',
      // 'vuex': 'vuex/dist/vuex.min.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'store': resolve('src/store')
    }
  },
  module: {
    rules: [{
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
        loader: 'happypack/loader?id=happy-babel-js',
        include: resolve('src')
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: subPath('img/[name].[hash:7].[ext]'),
            limit: 500 //单位是byte
          }
        }],
        include: resolve('src')
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: subPath('media/[name].[hash:7].[ext]')
          }
        }],
        include: resolve('src')
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50,
            name: subPath('fonts/[name].[hash:7].[ext]')
          }
        }],
        include: resolve('src')
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendor: {
          test: /node_modules\//,
          name: "vendor",
          priority: 10
        },
        commons: {
          name: "common",
          test: /src\//,
          minChunks: 1,
          minSize: 30000
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'happy-babel-js',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        IMGHOST: JSON.stringify(config[process.env.BUILD_ENV].IMGHOST),
        BUILD_ENV: JSON.stringify(config[process.env.BUILD_ENV].BUILD_ENV),
        API_PATH: JSON.stringify(config[process.env.BUILD_ENV].API_PATH),
        PUBLIC_PATH: JSON.stringify(config[process.env.BUILD_ENV].PUBLIC_PATH)
      }
    }),
    new CopyWebpackPlugin([{
      from: resolve('src/static'),
      to: resolve(`dist/${config[process.env.BUILD_ENV].SUB_DIR}`),
      ignore: ['.*']
    }])
  ]
};

module.exports = webpackConfig;
