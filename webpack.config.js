const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('@babel/polyfill');

module.exports = {

    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                loader: "babel-loader"
            },
            { 
                enforce: "pre",
                test: /\.js$/, 
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
      
    ],
    devtool: "source-map",
};