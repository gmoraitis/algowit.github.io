const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({title: 'AlgoWit', template: 'src/index.html'})],

    module: {
        rules: [
          {test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'},
          {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
          {test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'},
          {test: /\.html$/, use: 'html-loader'}]
      } 

};