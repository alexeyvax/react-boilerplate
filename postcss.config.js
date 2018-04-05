const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['ie 11', 'last 2 versions', 'Firefox ESR'],
      cascade: false,
    }),
  ],
};
