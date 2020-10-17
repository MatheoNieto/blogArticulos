// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.ts',
//   devtool: 'inline-source-map',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', 'js'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(tsx|ts)$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.js$/,
//         use: ["source-map-loader"],
//         enforce: "pre"
//       },
//       {
//         test: /\.html$/,
//         use: {
//           loader: 'html-loader',
//         },
//       },
//       {
//         test: /\.styl$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           'css-loader',
//           'stylus-loader',
//         ]
//       },
//       {
//         test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: 'assets/[hash].[ext]',
//           },
//         }],

//       },
//     ],
//   },
//   devServer: {
//     historyApiFallback: true,
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'assets/[name].css',
//     }),
//   ],

// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports ={
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test: /\.(tsx|ts)$/,
        use: {
          loader: 'ts-loader'
        },
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
}