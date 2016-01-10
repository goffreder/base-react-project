var webpack = require('webpack');
var name = require('./package.json').name;
var description = require('./package.json').description;
var version = require('./package.json').version;

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-eval-source-map' : null,

    entry: {
        main: [
            __dirname + '/node_modules/babel-core/browser-polyfill.js',
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
            /\/babel-core\/browser-polyfill\.js$/
        ],
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules[\/\\]/,
            loader: 'react-hot!babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|eot|woff2|ttf|svg|woff)$/,
            loader: 'url-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader?outputStyle=compressed'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
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
