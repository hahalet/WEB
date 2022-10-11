import webPackMerge from 'webpack-merge';
import { webpackCommonConfig } from './webpack.common';
import webpack from 'webpack';
module.exports = webPackMerge(webpackCommonConfig, {
    mode: 'production',
    optimization:{

    },
    plugins: [
        
    ]
});