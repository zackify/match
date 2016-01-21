var webpack = require('webpack')

module.exports = {
  output: {
    library: 'match',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'match': 'match'
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
