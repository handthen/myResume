const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.ts')
const Friendly = require('@nuxt/friendly-errors-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: __dirname + '/src/main.tsx', //入口文件
  devServer: {
    historyApiFallback: true,
    compress: true, //gzip压缩
    port: process.env.PORT,
    hot: true,
    client: {
      progress: true,
    },
    // open: true,
    // proxy: {
    //     "/api": {
    //         target: "https://image.baidu.com",
    //         // target:'https://i.maoyan.com',
    //         changeOrigin: true,
    //         pathRewrite: { "^/api": "" },
    //     },
    // }
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
    new HtmlWebpackPlugin({
      filename: 'index.html', //打包后文件名
      template: './public/index.html',
      favicon: './public/favicon.ico',
      title: '简历',
      minify: {
        removeComments: true, //移出注释
        collapseWhitespace: true, //删除空白符合换行符
        removeAttributeQuotes: true, //移除属性引号
      },
    }),
    new ESLintPlugin(),
    // new Friendly({
    //   compilationSuccessInfo: {
    //     messages: [`${process.env.NODE_ENV}  localhost: http://localhost:${process.env.PORT}`, process.env.L_IP_ ? `                        http://${process.env.L_IP_}:${process.env.PORT}` : ''],
    //   },
    // }),
  ],
})
