// const aliasPath = require('./tsconfig.json').compilerOptions.paths;
module.exports = (function () {
  const path = require('path')
  const webpack = require('webpack')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const webpackBar = require('webpackbar')

  function getDevConfig() {
    const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
    const compileLoader =
      process.env.NODE_ENV == 'development'
        ? {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx', // 开启对 JSX 的支持
              target: 'es2015', // 设置编译目标为 ES2015 语法
            },
          }
        : {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, //缓存
            },
          }

    return {
      compileLoader,
      plugins: [new TsconfigPathsPlugin()],
    }
  }

  const { compileLoader, plugins } = getDevConfig()

  return {
    mode: 'development',
    entry: __dirname + '/src/main.tsx', //入口文件
    output: {
      //出口
      path: path.resolve(__dirname, 'dist',),
      filename: 'js/[name].[contenthash:5].js',
      clean: true,
      // assetModuleFilename: "static/images/[name].[contenthash:5][ext]",
    },
    //loader
    module: {
      unknownContextCritical: false,
      //配置loader规则
      rules: [
        {
          test: /\.(png|jpg|gif|webp|jpeg|svg)$/,
          type: 'asset',
          generator: {
            filename: 'static/images/[contenthash][ext][query]',
          },
          parser: {
            //设置解析器
            dataUrlCondition: {
              //设置解析条件
              maxSize: 50 * 1024,
            },
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          type: 'asset',
          generator: {
            filename: 'static/fonts/[contenthash][ext][query]',
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [compileLoader],
        },
      ],
    },
    //插件
    plugins: [
      new webpackBar({
        name: '嘤嘤嘤-------',
        color: 'green',
        basic: false,
        // reports:[]//自定义
      }),
      //webpack5 删除了process buffer 等node补丁 环境变量可以采用如下注入业务环境
      // new webpack.ProvidePlugin({
      //   process: 'process/browser',
      // }),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV), //`'${process.env.NODE_ENV}'`
        BASE_URL: '/api',
      }),
      // @ts-ignore

      // new ForkTsCheckerWebpackPlugin({
      //   async: false, // 设置为 false 以使错误在 Webpack 构建过程中被报告
      //   typescript: {
      //     configFile: path.resolve(__dirname, 'tsconfig.json'),
      //   },
      // }),
      new HtmlWebpackPlugin({
        filename: 'index.html', //打包后文件名
        template: './public/index.html',
        favicon: './public/favicon.ico',
        title: 'resumn',
        minify: {
          removeComments: true, //移出注释
          collapseWhitespace: true, //删除空白符合换行符
          removeAttributeQuotes: true, //移除属性引号
        },
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      plugins: [...plugins],
    },
    stats: 'errors-only',
    // cache: { type: 'filesystem' },
  }
})()
