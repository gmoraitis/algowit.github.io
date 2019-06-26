const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const 
  NODE_ENV = process.env.NODE_ENV || 'development',
  IS_DEVELOPMENT = NODE_ENV === 'development',
  IS_PRODUCTION = NODE_ENV == 'production';

if (IS_DEVELOPMENT) {
  
  module.exports = {
    mode: 'development',
    entry: './src/assets/scripts/script.js',
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html', favicon: './src/assets/static/favicon.png'}),
      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})
    ],
    module: {
      rules: [
        {test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'},
        {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'},
        {test: /\.html$/, use: 'html-loader'}
      ]
    } 
  };

}
else if (IS_PRODUCTION) {
  
  module.exports = {
    mode: 'production',
    entry: './src/assets/scripts/script.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'), 
    },
    optimization: {minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]},
    plugins: [
      new HtmlWebpackPlugin({title:'AlgoWit', template: './src/index.html', favicon: './src/assets/static/favicon.png', minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
      }}),
      new MiniCssExtractPlugin({filename: "style.css"}),
      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}) 
    ],
    module: {
      rules: [
      {test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'},
      {test: /\.html$/, use: 'html-loader'},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']}, 
      ]
    }    
  };
  
}


