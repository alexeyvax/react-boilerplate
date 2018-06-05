const path = require('path');

const ENTRY_PATH = './src/index.js';
const HOST_NAME = '127.0.0.1';
const PORT = '3333';
const PROXY_TARGET = 'http://localhost:9001';
const PUBLIC_FOLDER = 'build';
const pathName = path.resolve(__dirname, `../${PUBLIC_FOLDER}`);

const outputDev = {
  filename: 'index.js',
  path: pathName,
  publicPath: `http://${HOST_NAME}:${PORT}`,
};

const outputProd = {
  filename: 'scripts/[name].[chunkhash].min.js',
  path: pathName,
  publicPath: './',
};

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
      'style-loader', 'css-loader',
    ],
  },
  {
    test: path.resolve(__dirname, 'public/index.html'),
    use: [
      {
        loader: 'prerender-loader?string',
      },
    ],
  },
];

const extensions = ['.js', '.jsx', '.scss', '.json'];

const devServer = {
  host: HOST_NAME,
  contentBase: `./${PUBLIC_FOLDER}`,
  historyApiFallback: true,
  port: PORT,
  inline: true,
  proxy: {
    '/api': {
      target: PROXY_TARGET,
      cookieDomainRewrite: HOST_NAME,
      autoRewrite: true,
      secure: false,
    },
  },
};

module.exports = {
  ENTRY_PATH,
  outputDev,
  outputProd,
  rules,
  extensions,
  devServer,
  PUBLIC_FOLDER,
};
