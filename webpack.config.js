const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')




module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: true
        })
    ],

    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    }
    
    resolve: {
        extensions: ['.jsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
}