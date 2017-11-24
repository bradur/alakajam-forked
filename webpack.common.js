const path = require('path')

const rootPathTo = pathFromRoot => path.resolve(__dirname, pathFromRoot)

const outputPath = rootPathTo('static/js')

const babelOptions = {
  presets: [
    [
      'env',
      {
        // https://github.com/babel/babel/tree/master/experimental/babel-preset-env#usebuiltins
        // Requires babel-core >= 7 (otherwise just true and false are supported).
        // TODO Once Babel 7 stabilizes, set to 'usage' and remove require('babel-polyfill') from main.js
        // useBuiltIns: 'usage'
        useBuiltIns: true
      }
    ]
  ]
}

module.exports = {
  entry: {
    site: './assets/js/site.js'
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: '/static/js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: rootPathTo('static/js'),
        loader: 'babel-loader',
        options: babelOptions
      }
    ]
  },
  context: __dirname,
  target: 'web',
  // https://webpack.js.org/configuration/stats/
  stats: {
    chunks: false,
    colors: true,
    modules: false,
    performance: false,
    warnings: true
  }
}
