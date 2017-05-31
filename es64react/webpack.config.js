var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: __dirname +'/src/let.js',
    output: {
        path: __dirname + '/build/',
        filename: 'appfinal.js',

    },
    devServer : {
        inline:true,
        port : 3000
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']

                }

            }
        ]
    }
};
