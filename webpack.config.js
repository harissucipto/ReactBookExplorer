module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,       // regex js mencari segala file js
        exclude: /node_modules/ // keculai segala file dalam folder node_modules
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + '/build', // what should be reload first
    inline: true  // allow all inline automatic update
  }
};
