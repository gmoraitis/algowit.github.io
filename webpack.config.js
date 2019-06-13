const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/assets/scripts/script.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader'},
            { test: /\.html$/, use: 'html-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html', favicon: './src/assets/static/favicon.png'}),
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})
      ]
};