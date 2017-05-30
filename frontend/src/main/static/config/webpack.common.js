var webpack = require('webpack');
var helpers = require('./helpers');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        'polyfills': './client/polyfills.ts',
        'vendors': './client/vendors.ts',
        'boot': './client/boot.ts'
    },

    resolve: {
        extensions: ['.js', '.ts', '.scss'],
        modules: [
            helpers.root('.'),
            helpers.root('node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: helpers.root('tsconfig.json')}
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/, //compiling loading component styles in stylesUrls
                include: helpers.root('client'),
                loader: 'to-string-loader!css-loader!sass-loader'
            },
            {
                test: /\.scss$/, //compiling and loading global styles
                include: helpers.root('public'),
                loader: 'css-loader!sass-loader'
            },
            {
                test: /\.css$/, //loading global styles
                include: helpers.root('public'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('src'), // location of your src
            {} // a map of your routes
        ),

        new CommonsChunkPlugin({
            name: ['boot', 'vendors', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/assets/images/favicon.ico'
        })
    ]
};