const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const src = resolve(__dirname, 'src');
module.exports = env => ({
  context: src,
  entry: './index.js',
  output: {
    filename: env.prod ? '[name].js' : '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: !env.prod,
  },
  devtool: env.prod ? 'source-map' : 'eval',
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', include: resolve(__dirname, 'src') },
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', include: resolve(__dirname, 'src') },
    ],
  },
  externals: {
    'rx': 'Rx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spaceship!',
      template: './index.html',
    }),
  ],
});
