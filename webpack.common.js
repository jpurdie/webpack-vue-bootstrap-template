const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ESLintPlugin = require('eslint-webpack-plugin');

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
  context: path.resolve(__dirname, './src/js'),
  files: '**/*.js',
});

module.exports = {
  entry: {
    app: './src/js/app.js',
    pagetwo: './src/js/pagetwo.js',
  },
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    ESLintPlugin,
  ],
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
