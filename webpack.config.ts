import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'


const config: webpack.Configuration = {
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
          loader: 'babel-loader'
        },
        include: [path.resolve(__dirname, 'src')]
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