const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname),
      outName: 'commands',
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000,
  },
  experiments: {
    asyncWebAssembly: true,
  },
};