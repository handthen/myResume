const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.ts');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const cryptoUtil = require('crypto');

const isModuleCSS = (module) => {
  return (
    // mini-css-extract-plugin
    module.type === `css/mini-extract` ||
    // extract-css-chunks-webpack-plugin (old)
    module.type === `css/extract-chunks` ||
    // extract-css-chunks-webpack-plugin (new)
    module.type === `css/extract-css-chunks`
  );
};

const maxAsyncRequest = 20;
const minSize = 1024 * 20;
module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.module\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 在按需加载时，使用下面的选项来保持 CSS 的文件名和路径与原来的 CSS 文件一致
              publicPath: (resourcePath: string, context: any) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          { loader: 'css-loader', options: { modules: true } },
          'sass-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/, // 排除 .module.scss 文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 在按需加载时，使用下面的选项来保持 CSS 的文件名和路径与原来的 CSS 文件一致
              publicPath: (resourcePath: string, context: any) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          { loader: 'css-loader', options: { modules: false } },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:5].css',
      chunkFilename: 'static/css/[name].[contenthash:5].css',
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minSize,
      maxAsyncRequests: maxAsyncRequest,
      maxInitialRequests: maxAsyncRequest,
      cacheGroups: {
        default: false,
        defaultVendors: false,
        lib: {
          chunks: 'all',
          test(module) {
            const identifier = module.identifier();
            return module.size() > minSize && /node_modules[\\\\/]/.test(identifier);
          },
          name(module) {
            const hash = cryptoUtil.createHash('sha1');
            if (isModuleCSS(module)) {
              module.updateHash(hash);
            } else {
              if (!module.libIdent) {
                throw new Error(`Encountered unknown module type: ${module.type}. Please check webpack.prod.ts.`);
              }
              hash.update(module.libIdent({ context: path.join(__dirname, '../') }));
            }
            return `lib.${hash.digest('hex').substring(0, 8)}`;
          },
          priority: 3,
          minChunks: 1,
          reuseExistingChunk: true,
        },
        shared: {
          chunks: 'all',
          test(module) {
            const identifier = module.identifier();
            return module.size() > minSize && !/node_modules[\\\\/]/.test(identifier);
          },
          name(module, chunks = []) {
            const hash = cryptoUtil.createHash('sha1');
            hash.update(chunks.reduce((chunkStr, chunk: any) => (chunkStr += chunk.name), ''));
            return `shared.${hash.digest('hex').slice(0, 8)}${isModuleCSS(module) ? '.css' : ''}`;
          },
          priority: 1,
          minChunks: 1,
          reuseExistingChunk: true,
        },
      },
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
  },
});
