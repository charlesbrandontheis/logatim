module.exports = {
  entry: './index.js',
  output: {
    path: './demo/',
    filename: 'bundle.js',
    library: 'logatim',
    libraryTarget: 'var'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
}
