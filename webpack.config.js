const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const babelPluginTransformRestSpread = require('babel-plugin-transform-object-rest-spread');
const babelPluginClassProperties = require('babel-plugin-transform-class-properties');

const ENTRY_FILENAME = 'app.js';
const SRC_UI_ENTRY_PATH = path.resolve(__dirname, 'src/ui');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');

const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});
module.exports = {
  entry: ['webpack-hot-middleware/client', path.resolve(SRC_UI_ENTRY_PATH, ENTRY_FILENAME)],
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      SRC_UI_ENTRY_PATH, path.resolve('./node_modules'),
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(SRC_UI_ENTRY_PATH),
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-1'],
        plugins: [babelPluginTransformRestSpread, babelPluginClassProperties],
      },
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [devFlagPlugin, new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
      title: 'Games Tracker',
      inject: 'body',
      template: path.resolve(SRC_UI_ENTRY_PATH, 'index.html'),
    })],
};
