const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

/**
 * Add content has to output
 * @type {{path: string, filename: string, publicPath: string}}
 */
const output = {
  path: paths.build,
  publicPath: '/',
  filename: 'js/[name].[contenthash].bundle.js',
}

const extractCSS = new MiniCssExtractPlugin({
  filename: 'styles/[name].[contenthash].css',
  chunkFilename: '[id].css',
})

const plugins = [extractCSS]

const minimizers = [
  `...`,
  new TerserPlugin(),
  new CssMinimizerPlugin(),
]

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: output,
  plugins: plugins,
  module: { rules: [] },
  optimization: {
    minimize: true,
    minimizer: minimizers,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
