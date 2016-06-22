var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    
    // Allow for hot reloading 
    hot: true,
    
    // Any "not found" file should serve index.html, this allows for
    // SPAs with history API.
    historyApiFallback: true
}).listen(8080, 'localhost', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:8080/');
});
