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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'client'),
                loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'public'),
                loader: 'raw'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'public'),
                loader: ExtractTextPlugin.extract('style!css', 'css?sourceMap')
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['boot', 'vendors', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            favicon: 'src/public/assets/images/favicon.ico'
        })
    ]
};