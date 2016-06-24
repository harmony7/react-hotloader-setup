const path = require('path');
const webpack = require('webpack');

const staticDir = path.join(__dirname, 'static');
const srcDir = path.join(__dirname, 'src');

const baseConfig = {

    entry: [
        './src/index'
    ],

    output: {
        path: staticDir,
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        // Inject node prod/dev mode into "process.env.NODE_ENV" to optimize output
        // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],

    module: {
        loaders: [
            // Use Babel to transpile ES2015 + ES2017 async syntax
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: srcDir,
                query: {
                    presets: ['es2015-native-modules'],
                    plugins: ['transform-runtime', 'transform-async-to-generator']
                }
            }
        ]
    }    
};

const prodConfig = Object.assign({}, baseConfig, {

    // Use 'source-map' in prod mode, generate source maps
    devtool: 'source-map'

});

const devConfig = Object.assign({}, baseConfig, {

    // Use 'eval' in dev mode, speed up development
    // devtool: 'eval',
    devtool: 'inline-source-map'

});

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
