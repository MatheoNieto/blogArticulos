import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import '@babel/polyfill';

const config: webpack.Configuration = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module:{
    rules:[
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          'ts-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]',
          },
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'assets/[name].css',
    // }),
  ],
}

export default config;