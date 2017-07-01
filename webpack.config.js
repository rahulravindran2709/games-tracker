const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENTRY_FILENAME = 'app.js'
const SRC_UI_ENTRY_PATH = path.resolve(__dirname, 'src/ui')
const OUTPUT_PATH = path.resolve(__dirname, 'dist')
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
        presets: ['es2015', 'react', 'stage-1']
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Games Tracker',
    inject: 'body',
    template: path.resolve(SRC_UI_ENTRY_PATH, 'index.html')
  })]
}
