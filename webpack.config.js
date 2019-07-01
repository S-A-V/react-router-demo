const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  devServer: {
    port: 3000,
    clientLogLevel: 'none',
    open: true,
    hot: true,
    overlay: true
  },
  mode: 'development'
};
