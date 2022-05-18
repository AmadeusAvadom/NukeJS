const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const Dotenv = require('dotenv').config();

let mode = process.env.NODE_ENV || "development";
let port = process.env.PORT || 8000;

module.exports = {
    mode: "development",
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: 'build/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve( __dirname, 'public/index.html' ),
            minify: false,
        }),
    ],
    devServer: {
        port,
        historyApiFallback: true,
        allowedHosts: ["all"]
    },
    stats: "errors-only",
    devtool: 'source-map'
}