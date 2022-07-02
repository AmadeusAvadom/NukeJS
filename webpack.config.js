const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const Dotenv = require('dotenv').config();

let mode = process.env.NODE_ENV || "development";
let port = process.env.PORT || 8000;

module.exports = {
    mode: "development",
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist' ),
        filename: 'build/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            }
        ],
        
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
    target: "web",
    stats: "errors-only",
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
}