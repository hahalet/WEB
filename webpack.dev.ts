import webPackMerge from 'webpack-merge';
import { webpackCommonConfig } from './webpack.common';

module.exports = webPackMerge(webpackCommonConfig, {
  performance: {
    hints: 'warning',
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000,
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000,
  },
  devServer: {
    port: 3600,
    // host: '192.168.3.119',
    contentBase: './dist',
    hot: true
  },
});
