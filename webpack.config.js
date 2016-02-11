var path = require('path');

var config = {
    entry: {
        javascript: path.resolve(__dirname, 'src/app.js'),
        html: path.resolve(__dirname, 'src/index.html')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: path.resolve(__dirname, 'src')
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    devtool: 'inline-source-maps'
};

module.exports = config;