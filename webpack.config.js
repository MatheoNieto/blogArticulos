// import * as path from 'path';
// import * as webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
// import '@babel/polyfill';

// const config: webpack.Configuration = {
//   context: __dirname,
//   devtool: 'inline-source-map',
//   entry: ['@babel/polyfill', './src/index.tsx'],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/dist/'
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   module:{
//     rules:[
//       {
//         test: /\.(tsx|ts)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader'
//           },
//           'ts-loader',
//           'awesome-typescript-loader'
//         ]
//       },
//       {
//         test: /\.html$/,
//         use: {
//           loader: 'html-loader',
//         },
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           'css-loader',
//           'sass-loader',
//         ]
//       },
//       {
//         test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: 'assets/[hash].[ext]',
//           },
//         }]
//       },
//       {
//         enforce: 'pre',
//         test: /\.js$/,
//         loader: 'source-map-loader'
//       }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: './index.html',
//     }),
//     new MiniCssExtractPlugin("style.css")
//   ],
// }

// export default config;



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
        // Add '.ts' and '.tsx' as resolvable extensions.
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
    plugins: [
        new HTMLWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
      
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
};