const path = require('path');

module.exports = {
  entry: {
    main: ['./planet.js', './planet_operations.js', './index.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
