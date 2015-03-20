# AnybarWebpackPlugin
[Webpack](http://webpack.github.io/) build status plugin for [AnyBar](https://github.com/tonsky/AnyBar) status indicator for OS X using [nanybar](https://github.com/rumpl/nanybar) node interface.

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
[`NoErrorsPlugin`](http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin) plugin suppresses compilation errors, so if you are using one, be sure to include it after `AnybarWebpackPlugin`.

## ToDo

- [ ] Custom status icons
