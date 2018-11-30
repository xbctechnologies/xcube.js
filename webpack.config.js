const webpack = require('webpack');
const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin-next');
const nodeEnv = process.env.ENV_VAR

const WebpackShellPlugin = require('webpack-shell-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
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
};

console.log("Mode : " + nodeEnv)
module.exports = (env, argv) => {
    if (nodeEnv === 'alex') {
        config.output.path = '/Users/alex/office/workspace/xblockchain/xblockchain/src/github.com/xbctechnologies/go-xblockchain/internal/jsve/deps'
        config.plugins = [config.plugins[config.plugins.length - 1]]
        config.plugins.push(new WebpackShellPlugin({onBuildEnd:['make -C /Users/alex/office/workspace/xblockchain/xblockchain/src/github.com/xbctechnologies/go-xblockchain xnode-jsve-build']}))
    }

    return config
};