const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: 'ts-loader'
      }, {
        test: /\.s(a|c)ss$/,
        loader: [
           isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      sourceMap: isDevelopment
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: isDevelopment
                    }
                  }
                ]
              }
        , {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {}
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
  ]
}