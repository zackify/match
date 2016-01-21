var webpack = require('webpack')

module.exports = {
  output: {
    library: 'match',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'match': {
        root: 'match',
        commonjs2: 'match',
        commonjs: 'match',
        amd: 'match'
      }
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  node: {
    Buffer: false
  }
}
