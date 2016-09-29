const path = require('path');
const webpack = require('webpack');
const CopyWepbackPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool: 'inline-source-maps',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/javascript/index'
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/build'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWepbackPlugin([{ from: './src/assets' }])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }], 'react', 'stage-1'],
          plugins: ['react-hot-loader/babel']
        }
      }
    ]
  }
};
