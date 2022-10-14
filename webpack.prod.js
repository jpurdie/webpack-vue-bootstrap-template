const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: 'warning',
  },
  rules: [
    {
      test: /\.(css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
  ],
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
});
