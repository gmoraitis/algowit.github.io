const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/assets/scripts/script.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'AlgoWit', template: './src/index.html'})
      ]
};