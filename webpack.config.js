var webpack = require('webpack');
var path = require('path')
module.exports = {
    context: path.join(__dirname,'src'),
    entry: [
        './index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'env'] 
                }
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    }

};