var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// Set up inline reloading. This will automatically reload the browser when there's a change to the source.
webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8080");

// Set up webpack-dev-server.
var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
  contentBase: __dirname + '/dist'
});

// Start the server on port 8080.
server.listen(8080);
