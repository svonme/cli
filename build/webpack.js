/**
 * @file webpack config
 * @description 菜单组件
 * @author svon.me@gmail.com
 */

const path = require('path');
const env = require('./env');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getSassVar() {
  const text = [];
  if (env.VUE_APP_OS_domain) {
    text.push(`$domain: ${env.VUE_APP_OS_domain};`);
  } else {
    text.push(`$domain: null;`);
  }
  text.push(`@import "src/styles/common.scss";`); // ${path.join(__dirname, '..')}/
  const code = text.join('\n');
  console.log(code);
  return code;
}

module.exports = {
  entry: {
    main: path.join(__dirname, '../src','application', 'main')
  },
  mode: 'development', // production
  devtool: 'cheap-eval-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    // publicPath: '//192.168.103.183:8000/dmp/static/'
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".es", ".vue"],
    alias: {
      'src': path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      // 处理 vue 文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 处理 js 文件
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // 处理 css 文件
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ]
      },
      // 处理 scss 文件
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // prependData: getSassVar(),
              additionalData: getSassVar(),
              sassOptions: function() {
                return {
                  includePaths: path.join(__dirname, '..'),
                };
              }
            }
          },
        ]
      }
    ]
  },
  externals: {
    "vue": "Vue",
    "lodash": "_",
    "axios": "axios"
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
  ]
};