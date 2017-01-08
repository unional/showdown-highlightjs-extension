'use strict';
const path = require('path')
const pascalCase = require('pascal-case')
const webpack = require('webpack')
const pjson = require('./package.json')

const packageName = pjson.name
const filename = (packageName.indexOf('@') === 0? packageName.slice(1): packageName).split('/').join('-')
const version = pjson.version
const ns = pascalCase(filename) // or specify manually

module.exports = {
  externals: {
    TODO: list external dependencies, e.g.:
    // lodash: '_'
  },
  devtool: 'inline-source-map',
  entry: {
    [filename]: './dist/commonjs/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${filename}.js`,
    library: ns,
    libraryTarget: 'var'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`${filename}.js, version: ${version}, generated on: ${new Date().toDateString()}`)
  ]
}
