const webpack = require('webpack');
const path = require('path');
const {
  ENTRY_PATH,
  outputProd,
  rules,
  extensions,
} = require(path.resolve(__dirname, './base.config'));

module.exports = {
  entry: ENTRY_PATH,
  output: outputProd,
  module: { rules },
  resolve: { extensions },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
