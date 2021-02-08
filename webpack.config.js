const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");



module.exports = {
    mode: "production",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist");
      publicPath: 'dist'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/main.[contenthash].css"}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
  {
    test: /\.html$/,
    use: ["html-loader"]
      },
  {
    test: /\.(svg|png|jpg|gif)$/,
    use: {
    loader: "file-loader",
    options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
               }
            }
      }
    ]
  }
};
