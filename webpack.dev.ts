const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.ts')
const Friendly = require('@nuxt/friendly-errors-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true, //gzip压缩
    port: process.env.PORT,
    hot: true,
    client: {
      progress: true,
    },
    proxy: {
      '/resumn': {
        target: 'http://127.0.0.1:9191',
        changeOrigin: true,
        pathRewrite: { '^/resumn': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/, // 排除 .module.scss 文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),

    // new Friendly({
    //   compilationSuccessInfo: {
    //     messages: [`${process.env.NODE_ENV}  localhost: http://localhost:${process.env.PORT}`, process.env.L_IP_ ? `                        http://${process.env.L_IP_}:${process.env.PORT}` : ''],
    //   },
    // }),
  ],
})
