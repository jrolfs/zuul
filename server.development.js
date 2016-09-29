/* eslint no-console: 0 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (error) => {
  if (error) return console.log(error);

  return console.log('Listening at http://localhost:3000/');
});
