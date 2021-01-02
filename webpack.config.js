const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')




module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/images/[contenthash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: true
        })
    ],
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    
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
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
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