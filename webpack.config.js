
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: './src/application/main'
  },
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        enforce: "pre", 
        test: /\.(t|j)sx?$/, 
        exclude: /node_modules/, 
        use: [
          {
            loader: 'eslint-loader',
          }
        ]
      },
      { 
        test: /\.(t|j|e)sx?$/, 
        use: [
          { 
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ], 
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'src')
        ],
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',//?sourceMap&minimize
          {
            loader: 'sass-loader',
            // options: {
            //   data: '',
            //   sourceMap: true,
            //   sourceMapContents: true
            // }
          },
          // 'css-loader?modules',
        ]
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
      filename: 'index.html',
    })
  ],
  performance: {
    hints: false
  },
  devServer: {
    clientLogLevel: 'warning',
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    inline: true,
    hot: true, //实时刷新
    publicPath: '/',
    historyApiFallback : false,
    hotOnly: true,
    progress: true,
    host: '0.0.0.0',
    port: 8080
  }
};