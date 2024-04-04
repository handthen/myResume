
// const aliasPath = require('./tsconfig.json').compilerOptions.paths;
module.exports = (
  function () {
    const path = require("path")
    const webpack = require("webpack")
    const HtmlWebpackPlugin = require("html-webpack-plugin")
    const { CleanWebpackPlugin } = require("clean-webpack-plugin")
    const webpackBar = require('webpackbar')
    const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin")
    return {
      mode: "development",
      entry: __dirname + '/src/main.tsx',//入口文件
      output: {//出口
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash:5].js",
        assetModuleFilename: 'static/images/[name].[contenthash:5][ext]'
      },
      //loader
      module: {
        unknownContextCritical: false,
        //配置loader规则
        rules: [
          // {
          //     test: /\.(png|jpg|gif|webp|jpeg|svg|eot|ttf|woff|woff2)$/,
          //     use: [{
          //         loader: "url-loader",
          //         options: {
          //             limit: 1024 * 100,
          //             name: 'static/images/[name].[hash:8].[ext]',
          //             esModule: true//允许require引入
          //         }
          //     }, {
          //         loader: 'image-webpack-loader',
          //         options: {

          //         },
          //     },]
          // },
          {
            test: /\.(png|jpg|gif|webp|jpeg|svg|eot|ttf|woff|woff2)$/,
            type: 'asset',
            parser: {  //设置解析器
              dataUrlCondition: { //设置解析条件
                maxSize: 50 * 1024
              }
            },
          },
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
              loader: "babel-loader",
              options: {
                cacheDirectory: true,//缓存
              }
            }]

          }]
      },
      //插件
      plugins: [new HtmlWebpackPlugin({
        filename: "index.html",//打包后文件名
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        title: '简历',
        minify: {
          removeComments: true,//移出注释
          collapseWhitespace: true,//删除空白符合换行符
          removeAttributeQuotes: true,//移除属性引号
        }
      }),
      new CleanWebpackPlugin(),//每次打包先清空dist文件夹
      new webpack.ProvidePlugin({
        process: "/config/run_utils"
      }), //webpack5 删除了process buffer 等node补丁 环境变量可以采用如下注入业务环境
      new webpack.DefinePlugin({
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV) //`'${process.env.NODE_ENV}'`
      }),
      // @ts-ignore
      new webpackBar({
        name: "咻咻咻咻-------",
        color: 'green',
        basic: false,
        // reports:[]//自定义
      })
      ],
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
          "@": path.resolve(__dirname, "src"),
        }
      },
      stats: 'errors-only',
      // optimization: {
      //     minimizer: [
      //         new ImageMinimizerWebpackPlugin({
      //             minimizer: {
      //                 implementation: ImageMinimizerWebpackPlugin.imageminGenerate,
      //                 options: {
      //                     plugins: [
      //                         // ["gifsicle", { interlaced: true }],
      //                         // ["jpegtran", { progressive: true }],
      //                         ["optipng", { optimizationLevel: 5 }],
      //                         [
      //                             "svgo",
      //                             {
      //                                 plugins: [
      //                                     "preset-default",
      //                                     "prefixIds",
      //                                     {
      //                                         name: "sortAttrs",
      //                                         params: {
      //                                             xmlnsOrder: "alphabetical",
      //                                         },
      //                                     },
      //                                 ],
      //                             },
      //                         ],
      //                     ],
      //                 },

      //             }
      //         })
      //     ]
      // }
    }
  }
)()