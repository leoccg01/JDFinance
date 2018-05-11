const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除
const ExtractTextPlugin = require("extract-text-webpack-plugin");//css提取
module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins=[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './app/views/index.html'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  if(env.production){
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {    //读取环境变量
          NODE_ENV: '"production"' //生产环境
        }
      }),
      new ExtractTextPlugin("style.css", {ignoreOrder: true})
    )
  }
  return {
    entry:['./app/js/viewport.js','./app/js/main.js'],
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },{
          test: /\.(gif|png|jpe?g|svg)$/i,
              loader: 'url-loader',
              options: {
                bypassOnDebug: true,
              },
        },{
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            extractCSS: true,
            loaders: env.production?{
              css: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
              scss: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
            }:{
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            }
          }
        }, {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
    resolve: {
      extensions: [       //配置可以省略的后缀名
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
