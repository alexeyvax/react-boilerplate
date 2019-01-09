const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  rootDir,
  HOST_NAME,
  PORT,
  PUBLIC_FOLDER,
  PROXY_TARGET,
  rules,
  extensions,
  alias,
  plugins,
} = require(path.resolve(__dirname, './base.config'));

module.exports = {
  output: {
    filename: 'index.js',
    path: `${rootDir}/${PUBLIC_FOLDER}`,
    publicPath: `http://${HOST_NAME}:${PORT}`,
  },
  module: {
    rules: [
      ...rules,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true,
              camelCase: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions,
    alias,
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    ...plugins,
    new HtmlWebpackPlugin({
      inject: false,
      template: `${rootDir}/public/index.html`,
      filename: 'index.html',
    }),
  ],
  devServer: {
    host: HOST_NAME,
    contentBase: `${rootDir}/${PUBLIC_FOLDER}`,
    historyApiFallback: true,
    port: PORT,
    open: true,
    proxy: {
      '/api': {
        target: PROXY_TARGET,
        cookieDomainRewrite: HOST_NAME,
        autoRewrite: true,
        secure: false,
      },
    },
  },
};
