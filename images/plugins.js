const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SplitByPathPlugin = require('webpack-split-by-path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: JSON.stringify(process.env.TEST),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      AUTH_SERVICE_URL: JSON.stringify(process.env.AUTH_SERVICE_URL),
      BRAINTREE_SERVICE_ID: JSON.stringify(process.env.BRAINTREE_SERVICE_ID),
      BRAINTREE_SERVICE_URL: JSON.stringify(process.env.BRAINTREE_SERVICE_URL),
      GRAPHQL_SERVICE_URL: JSON.stringify(process.env.GRAPHQL_SERVICE_URL),
      GRAPHQL_SERVICE_KEY: JSON.stringify(process.env.GRAPHQL_SERVICE_KEY),
      ITERABLE_API_KEY: JSON.stringify(process.env.ITERABLE_API_KEY),
      ITERABLE_WORKFLOW_URL: JSON.stringify(process.env.ITERABLE_WORKFLOW_URL),
      PRODUCT_SERVICE_URL: JSON.stringify(process.env.PRODUCT_SERVICE_URL),
      SENTRY_SERVICE_URL: JSON.stringify(process.env.SENTRY_SERVICE_URL),
      SENTRY_SERVICE_NODE_URL: JSON.stringify(process.env.SENTRY_SERVICE_NODE_URL),
      WORLDPAY_SERVICE_URL: JSON.stringify(process.env.WORLDPAY_SERVICE_URL),
    },
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/index.html',
  }),
  new CopyWebpackPlugin([
    { from: 'src/static/fonts', to: 'fonts' },
    { from: 'src/static/images', to: 'images' },
    { from: 'src/static/svg', to: 'svg' },
  ]),
  new ExtractTextPlugin({
    disable: process.env.NODE_ENV === 'development',
    filename: 'css/tbt-admin.[hash].css',
  }),
]

const devPlugins = []

const prodPlugins = [
  new SplitByPathPlugin([
    { name: 'vendor', path: [path.join(__dirname, 'node_modules')] },
  ], {
    manifest: 'src-entry',
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    },
  }),
]

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : [])
