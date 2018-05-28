var webpack = require('webpack');
var path = require('path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        xcube: "./lib/xcube.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: '[name].[chunkhash].min.js'
        // publicPath: '/js/',
        filename: '[name].min.js',
    },
    plugins: [
        new WebpackCleanupPlugin(),
        // new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new UglifyJSPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js'],
    },
}