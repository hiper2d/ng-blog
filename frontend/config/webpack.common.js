var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    devtool: 'source-map',

    entry: {
        'polyfills': './src/client/polyfills.ts',
        'vendors': './src/client/vendors.ts',
        'boot': './src/client/boot.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: [ helpers.root('src',' public'), helpers.root('node_modules') ],
                loader: ExtractTextPlugin.extract('style!css', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src',' public', 'assets', 'css'),
                exclude: helpers.root('node_modules'),
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('node_modules'),
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['boot', 'vendors', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/public/index.html'
        })
    ]
};