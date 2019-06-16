const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
    return path.join(__dirname, './', dir);
}

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('node_modules/webpack-dev-server/client')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
			},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [],
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './', 'dist'), // dist 根目录
        hot: true,   // 是否开启热替换，无须手动刷新浏览器
        port: 8888,    // 端口
        open: false,    // 是否自动打开浏览器
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}