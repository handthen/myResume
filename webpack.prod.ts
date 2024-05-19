
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const baseConfig = require("./webpack.config.ts")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(baseConfig, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.module\.(css|scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 在按需加载时，使用下面的选项来保持 CSS 的文件名和路径与原来的 CSS 文件一致
                        publicPath: (resourcePath: string, context: any) => {
                            console.log(resourcePath, context, '--')
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    },
                }, { loader: 'css-loader', options: { modules: true } }, "sass-loader"],
            },
            {
                test: /\.(css|scss)$/,
                exclude: /\.module\.(css|scss)$/, // 排除 .module.scss 文件
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 在按需加载时，使用下面的选项来保持 CSS 的文件名和路径与原来的 CSS 文件一致
                        publicPath: (resourcePath: string, context: any) => {
                            console.log(resourcePath, context, '--')
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    },
                }, { loader: 'css-loader', options: { modules: false } }, "sass-loader"],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:5].css",
            chunkFilename: 'static/css/[name].[contenthash:5].css',
        }),
        new CssMinimizerPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups:{
                
            }
        },
        minimize: true, // 这个选项确保代码被压缩
        minimizer: [
            new TerserPlugin({
                // 在这里可以配置 TerserWebpackPlugin
                terserOptions: {
                    format: {
                        comments: false, // 移除注释
                    },
                },
                extractComments: false, // 不将注释提取到单独的文件中
            }),
        ],
    }

})