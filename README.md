[![npm version](https://badge.fury.io/js/anybar-webpack.svg)](http://badge.fury.io/js/anybar-webpack)
[![Build Status](https://travis-ci.org/roman01la/anybar-webpack.svg?branch=master)](https://travis-ci.org/roman01la/anybar-webpack)
[![NPM Downloads](https://img.shields.io/npm/dm/anybar-webpack.svg?style=flat)](https://www.npmjs.org/package/anybar-webpack)

# AnyBarWebpackPlugin
[Webpack](http://webpack.github.io/) build status plugin for status bar indicator applications.

![anybar webpack plugin animated gif demo](anybar-webpack.gif)

## Known apps

- [AnyBar](https://github.com/tonsky/AnyBar) on OS X
- [somebar](https://github.com/limpbrains/somebar) on Linux

## Installation

Make sure you have an application installed and running

```
npm i -D anybar-webpack
```

## Usage

Use it in your `webpack.config.js`:

```javascript
var AnyBarWebpackPlugin = require('anybar-webpack');

module.exports = {
    // ...
    plugins: [
        new AnyBarWebpackPlugin()
    ]
    // ...
};
```

## API 

### `new AnyBarWebpackPlugin([port [, host]])`
All arguments are optional. If you want to pass the `host` argument, you need to pass a `port` first.

### `port`
Type: `Number`
Default: `1738`

The port the status bar application is running on.

### `host`
Type: `String`
Default: `'127.0.0.1'`

The host the status bar application is running on.
