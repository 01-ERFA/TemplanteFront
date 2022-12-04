const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {

    mode: 'development',

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 3000
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // favicon: "./src/img/icon.ico",
            template: 'template.html'
        }),
        new Dotenv({systemvars: true})
    ]

}