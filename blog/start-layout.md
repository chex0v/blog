---
title: Сборка вёрстки с помощью webpack
description: Простая конфигурация webpack для сборки вёрстки.
footer: © 2020 Дмитрий Дмитриенко
---

# Сборка вёрстки с помощью [webpack](https://webpack.js.org/)

[Webpack](https://webpack.js.org/) это сборщик проектов для frontend разработки.

Решил для себя сохранить в блоге какой-то базовый скрипт сборщика для вёрстки.
Он умеет брать шаблон html, sass, js файлы и собирать их в html.

Css собирается с префиксами, js проходит через babel.
Уже включен в сборку dev сервер для разработки.

Тут все модули, которые используются.

```
{
  "name": "layout",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "autoprefixer": "^9.7.3",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.3.2",
    "ejs-loader": "^0.3.5",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.13.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss-loader": "^3.0.0",
    "resolve-cwd": "^3.0.0",
    "sass": "^1.23.7",
    "sass-loader": "^8.0.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpack-livereload-plugin": "^2.2.0"
  },
  "dependencies": {
    "file-loader": "^5.0.2",
    "url-loader": "^3.0.0"
  }
}

```
Можете скопировать это в свой файлы package.json, набрать команду
```
npm install 
```
И все зависимости установятся.

webpack и webpack-dev-server находятся в разделе devDependencies, это значит, что они ставятся локально для проекта.

Можно их поставить глобально, если часто будет использоваться данная связка.

Код webpack.config.js ниже.

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'layout.min.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: true
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ]
  },
  optimization: {   
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Layout example',
      template: './src/template/index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,
    liveReload: true
  },
  watch: true
};
```

index.js

```js
import './css/bootstrap-reboot.min.css'
import './css/bootstrap-grid.min.css'
import './sass/main.sass'
```

Тут я для своего проекта импортирую css код и sass.