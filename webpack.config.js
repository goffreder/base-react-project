var webpack = require('webpack');

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
            test: /\.js$/,
            exclude: /node_modules[\/\\]/,
            loader: 'babel-loader?optional[]=es7.decorators'
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
            React: "react/addons"
        })
    ]
};
