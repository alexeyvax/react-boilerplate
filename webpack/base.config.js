const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ShowStatusBuild = require('status-build-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const HOST_NAME = '127.0.0.1';
const PORT = '3000';
const PROXY_TARGET = `http://${HOST_NAME}:9000`;
const PUBLIC_FOLDER = 'build';
const rootDir = path.resolve(__dirname, '../');

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.(css)$/,
    use: [
      'style-loader',
      'css-loader',
    ],
  },
];

const heart = `
                       ♥  ♥           ♥  ♥
                     ♥       ♥     ♥       ♥
                   ♥            ♥            ♥
                  ♥                           ♥
                   ♥          BUILD          ♥
                    ♥                       ♥
                      ♥       PASSED      ♥
                        ♥               ♥
                          ♥           ♥
                            ♥       ♥
                              ♥   ♥
                                ♥
`;

const brokenHeart = `
                       ♥  ♥           ♥  ♥
                     ♥       ♥     ♥       ♥
                   ♥          ♥   ♥          ♥
                  ♥            ♥  ♥           ♥
                   ♥   BUILD  ♥  ♥   FAILED  ♥
                    ♥          ♥  ♥         ♥
                      ♥         ♥  ♥      ♥
                        ♥      ♥  ♥     ♥
                          ♥   ♥  ♥    ♥
                            ♥  ♥  ♥ ♥
                              ♥   ♥
                                ♥
`;

const plugins = [
  new CleanWebpackPlugin(
    `${rootDir}/build`, {
    root: rootDir,
    beforeEmit: true,
  }),
  new ShowStatusBuild({
    success: heart,
    failed: brokenHeart,
    showErrorsNumber: true,
  }),
  new FaviconsWebpackPlugin({
    logo: `${rootDir}/public/favicon.png`,
    prefix: 'icons-[hash]/',
    emitStats: false,
    statsFilename: 'iconstats-[hash].json',
    persistentCache: true,
    inject: true,
    background: '#fff',
    title: 'React App Boilerplate',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false
    }
  }),
];

const extensions = ['.js', '.jsx', '.scss', '.json'];

const alias = {
  common: path.join(__dirname, '../src/styles/common.scss'),
};

module.exports = {
  rootDir,
  HOST_NAME,
  PORT,
  PUBLIC_FOLDER,
  PROXY_TARGET,
  rules,
  extensions,
  alias,
  plugins,
};
