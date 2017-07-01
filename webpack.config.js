const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ENTRY_FILENAME = 'app.js'
const SRC_UI_ENTRY_PATH = path.resolve(__dirname, 'src/ui')
const OUTPUT_PATH = path.resolve(__dirname, 'dist')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})
module.exports = {
  entry: [path.resolve(SRC_UI_ENTRY_PATH, ENTRY_FILENAME)],
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(SRC_UI_ENTRY_PATH),
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-1'],
        plugins: [require('babel-plugin-transform-object-rest-spread')]
      }
    }]
  },
  plugins: [devFlagPlugin, new HtmlWebpackPlugin({
    title: 'Games Tracker',
    inject: 'body',
    template: path.resolve(SRC_UI_ENTRY_PATH, 'index.html')
  })]
}
