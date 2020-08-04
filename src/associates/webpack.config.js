/**
 * Webpack Configuration File
 * @type {[type]}
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const npmPackage = path.resolve(__dirname, 'node_modules');

module.exports = {
  // What am i?
  name: 'SAA Associates Directory',
  // Allows for map files.
  devtool: 'none',
  // What build?
  entry: './src/index.js',
  // Where put build?
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'lib')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      'decanter-img': path.resolve(npmPackage + "/decanter/core/src/img"),
      '@fortawesome': path.resolve(npmPackage + '@fortawesome')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          // Creates the main.css
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};
