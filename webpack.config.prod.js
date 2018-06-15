// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = webpackMerge(webpackBase,{
    mode:'production',
    devtool: 'source-map',
    plugins:[
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // 只对入口文件处理
            cacheGroups: {
                vendor: { 
                    test: /node_modules\//,
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                },
                commons: { 
                    test: /common\/|components\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
});
