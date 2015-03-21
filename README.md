# AnybarWebpackPlugin
[Webpack](http://webpack.github.io/) build status plugin for [AnyBar](https://github.com/tonsky/AnyBar) status indicator app for OS X.

![anybar webpack plugin animated gif demo](anybar-webpack.gif)

## Install

Make sure you have [AnyBar](https://github.com/tonsky/AnyBar) installed and running

```
npm i -D anybar-webpack
```

## Usage

Use it in your `webpack.config.js`:

```javascript
var AnybarWebpackPlugin = require('anybar-webpack');

module.exports = {
    // ...
    plugins: [
        new AnybarWebpackPlugin()
    ]
    // ...
};
```

## ToDo

- [x] Custom status icons
