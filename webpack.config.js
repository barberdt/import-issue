const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  devServer: {
    port: '9000',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: { cache: true },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
