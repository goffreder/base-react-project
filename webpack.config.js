var webpack = require('webpack');
var name = require('./package.json').name;
var description = require('./package.json').description;
var version = require('./package.json').version;

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-eval-source-map' : null,

    entry: {
        main: [
            'babel-polyfill',
            './app/App.js'
        ]
    },

    output: {
        path: '__build__',
        publicPath: '__build__',
        filename: 'build.js'
    },

    devServer: {
        hot: true
    },

    module: {
        noParse: [
            /\/babel-polyfill\/dist\/polyfill\.js$/
        ],
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'react-hot!babel'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: '"' + process.env.NODE_ENV + '"'
                },
                appData: {
                    name: '"' + name + '"',
                    description: '"' + description + '"',
                    version: '"' + version + '"'
                }
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'app', 'components']
    }
};
