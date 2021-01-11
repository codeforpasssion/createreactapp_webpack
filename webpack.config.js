const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry : './src/index.js',
    plugins : [new HtmlWebpackPlugin({
        template : './src/index.html'
    })],
    module : {
        rules : [{
            test : /\.(jsx?)$/,
            use : ['babel-loader']
        }]
    },
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    mode : 'development',
    devServer : {
        contentBase : path.join(__dirname,'dist'),
        compress : true,
        port : 9000
    }
}