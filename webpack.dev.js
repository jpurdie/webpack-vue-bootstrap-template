const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  performance: {
    hints: 'warning',
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    //    minimize: false,
    //    minimizer: [
    //      (compiler) => {
    //        const TerserPlugin = require('terser-webpack-plugin');
    //        new TerserPlugin({
    //          terserOptions: {
    //            compress: { drop_console: false, },
    //          }
    //        }).apply(compiler);
    //      },
    //    ],
  },
  plugins: [
    // Load .env file for environment variables in JS
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
});
