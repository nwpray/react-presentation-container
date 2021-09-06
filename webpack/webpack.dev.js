const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports = base.map(config =>
  merge(config, {
    mode: 'development'
  })
);
