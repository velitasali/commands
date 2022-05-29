const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: [
      path.join(__dirname, 'pkg'),
      path.join(__dirname, 'public'),
    ],
    watchFiles: [
      'js/*',
      'pkg/*.js',
      'public/',
    ],
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    asyncWebAssembly: true,
  },
};