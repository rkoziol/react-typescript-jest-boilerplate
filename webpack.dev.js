const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.min.js',
  },
  target: ["web", "es5"],
  stats: { children: true },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/logo.svg',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
