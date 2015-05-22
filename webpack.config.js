var webpack = require('webpack');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

    entry: "./app/App.js",

    output: {
        path: '__build__',
        publicPath: '__build__',
        filename: 'build.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader'
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"' + process.env.NODE_ENV + '"'
            }
        }),
        new webpack.ProvidePlugin({
            React: "react"
        })
    ]
};
