const path = require('path');
const webpack = require('webpack');

const staticDir = path.join(__dirname, 'static');

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
    ]
};

const prodConfig = Object.assign({}, baseConfig, {

    // Use 'source-map' in prod mode, generate source maps
    devtool: 'source-map'

});

const devConfig = Object.assign({}, baseConfig, {

    // Use 'eval' in dev mode, speed up development
    devtool: 'eval',

    entry: [
        // Automatic Refresh (inline mode)
        // https://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
        'webpack-dev-server/client?http://localhost:8080',

        // Hot Module Replacement entry point
        // (with manual refreshes - https://github.com/webpack/webpack/issues/418)
        'webpack/hot/only-dev-server',

        ...baseConfig.entry
    ],

    plugins: [
        ...baseConfig.plugins,

        // Hot Module Replacement
        // https://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
