const path = require('path');
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
  module: { rules },
  resolve: { extensions },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './config/index.html' }),
  ],
  devServer,
};
