const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    index: path.resolve('src/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    library: 'react-presentation-container',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: path.resolve('src')
      }
    ]
  },
  plugins: [new CleanWebpackPlugin('dist')]
};

const serverConfig = { ...clientConfig, target: 'node' };

module.exports = [clientConfig, serverConfig];
