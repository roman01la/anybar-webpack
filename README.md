# AnybarWebpackPlugin
[Webpack](http://webpack.github.io/) build status plugin for [AnyBar](https://github.com/tonsky/AnyBar) status indicator app on OS X or [somebar](https://github.com/limpbrains/somebar) on Linux.

![anybar webpack plugin animated gif demo](anybar-webpack.gif)

## Install

Make sure you have [AnyBar](https://github.com/tonsky/AnyBar) or [somebar](https://github.com/limpbrains/somebar) installed and running

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

If you are running AnyBar or somebar on different port than default 1738, pass port number to `AnybarWebpackPlugin` constructor function.
