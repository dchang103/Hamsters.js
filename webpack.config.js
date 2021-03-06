const path = require('path');
const webpack = require('webpack');

const web = {
  target: 'web',
  devtool: 'sourcemap',
  entry: [
    './src/hamsters',
  ],
  output: {
    path: path.resolve('./build'),
    filename: 'hamsters.web.min.js',
    library: 'hamsters',
    libraryTarget: 'var'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      }
    ]
  }
};

const node = {
  target: 'node',
  devtool: 'sourcemap',
  entry: [
    './src/hamsters',
  ],
  output: {
    path: path.resolve('./build'),
    filename: 'hamsters.node.min.js',
    library: 'hamsters',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      }
    ]
  }
};

module.exports = [
  web,
  node
];