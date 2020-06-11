const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]' // Keeps original file name
      },
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Phaser',
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}