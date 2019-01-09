const path = require('path');
const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const {
  rootDir,
  rules,
  extensions,
  alias,
  plugins,
} = require(path.resolve(__dirname, './base.config'));

module.exports = {
  output: {
    path: `${rootDir}/build`,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true,
              importLoaders: 2,
              minimize: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions,
    alias,
  },
  performance: {
    maxEntrypointSize: 500000,
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    ...plugins,
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: `${rootDir}/public/index.html`,
      filename: 'index.html',
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
  ],
};
