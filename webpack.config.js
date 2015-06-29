var webpack = require('webpack');
var name = require('./package.json').name;
var description = require('./package.json').description;
var version = require('./package.json').version;

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,

    entry: "./app/App.js",

    output: {
        path: '__build__',
        publicPath: '__build__',
        filename: 'build.js'
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js[x]$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader?optional[]=es7.decorators'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader'
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
            React: "react/addons"
        })
    ]
};
