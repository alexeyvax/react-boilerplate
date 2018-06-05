const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  ENTRY_PATH,
  outputDev,
  rules,
  extensions,
  devServer,
} = require(path.resolve(__dirname, './base.config'));

module.exports = {
  entry: ENTRY_PATH,
  output: outputDev,
  module: {
    rules: [
      ...rules,
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]--[hash:base64:5]',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },
  resolve: { extensions },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        WITH_LOG: JSON.stringify(process.env.WITH_LOG),
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer,
};
