import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import px2rem from 'postcss-px2rem';
import pxtorem from 'postcss-pxtorem';
import postcss from 'postcss';

export const webpackCommonConfig: webpack.Configuration = {
  mode: 'production',
  entry: {
    index: './src/index.tsx',
    // ios: './src/pages/ios/ios.tsx',
    // cashvnLandPage: './src/pages/cashvnLandPage/cashvnLandPage.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader', // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     // Necessary for external CSS imports to work
          //     // https://github.com/facebook/create-react-app/issues/2677
          //     ident: 'postcss',
          //     plugins: () => [
          //       pxtorem({
          //         rootValue: 37.5,
          //         propWhiteList: [],
          //         minPixelValue: 2,
          //         exclude: /node_modules/i,
          //       }),
          //     ],
          //   },
          // },
          // {
          //   loader: require.resolve('postcss-loader'),
          //   options: {
          //     ident: 'postcss',
          //     postcssOptions: {
          //       plugins: [px2rem({ remUnit: 75 })],
          //     },
          //   },
          // },
          // {
          //   loader: 'px2rem-loader',
          //   options: {
          //     remUni: 75, // 设计图 1 / 10
          //     remPrecision: 8,
          //     min: 2
          //   },
          // },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'newStar',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    // new htmlWebpackPlugin({
    //   title: "CashVN IOS",
    //   template: "./src/pages/ios/ios.html",
    //   filename: "ios.html",
    //   chunks: ['ios']
    // }),
    // new htmlWebpackPlugin({
    //   title: "CashVN",
    //   template: "./src/pages/cashvnLandPage/cashvnLandPage.html",
    //   filename: "cashvnLandPage.html",
    //   chunks: ['cashvnLandPage']
    // }),
  ],
};
