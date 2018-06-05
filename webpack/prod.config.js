const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  ENTRY_PATH,
  outputProd,
  rules,
  extensions,
  PUBLIC_FOLDER,
} = require(path.resolve(__dirname, './base.config'));

module.exports = {
  entry: {
    index: ENTRY_PATH,
  },
  output: outputProd,
  performance: {
  //   hints: false
    maxEntrypointSize: 500000,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      })
    ],
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
              options: { minimize: true },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      title: 'React boilerplate',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyURLs: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'styles/style.css',
      allChunks: true,
    }),
    new CleanWebpackPlugin(PUBLIC_FOLDER, { root: path.resolve(__dirname, '..'), beforeEmit: true }),
  ],
};
