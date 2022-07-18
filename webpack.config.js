const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

const randomPort = () => {
  return Math.floor(Math.random() * 9999) + 100
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
]

const pages = ['index'];

module.exports = {
  mode,
  target,
  context: path.resolve(__dirname, 'src'),
  entry: pages.reduce((config, page) => {
    config[page] = `./${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    allowedHosts: 'auto',
    open: true,
    hot: false,
    port: randomPort(),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
    },
  },
   plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./${page}.html`,
          filename: `./${page}.html`,
          chunks: [page],
        })
    ),
    [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ]
  ),
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}
