var webpack = require('webpack');

// taken from:
// https://github.com/esnunes/riotjs-loader
module.exports = {
  entry: './src/app',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  // config options for webpack-dev-server
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { template: 'jade' } }
    ],
    loaders: [
      { test: /\.js|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
