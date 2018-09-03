var webpack = require('webpack');
var path = require('path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin-next');

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
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'XCube'
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new UglifyJSPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
    // node: {
    //     fs:"empty"
    // }
}