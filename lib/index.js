var anybarSocket = require('./anybar-socket');

var AnybarWebpackPlugin = function() {};

AnybarWebpackPlugin.prototype.fail = anybarSocket.bind(null, 'webpack-fail');
AnybarWebpackPlugin.prototype.compile = anybarSocket.bind(null, 'webpack-compile');
AnybarWebpackPlugin.prototype.success = anybarSocket.bind(null, 'webpack-success');
AnybarWebpackPlugin.prototype.exit = anybarSocket.bind(null, 'white');

AnybarWebpackPlugin.prototype.apply = function (compiler) {

    if (process.platform !== 'darwin') {

        return console.log('\x1b[41m\x1b[33m%s\x1b[0m', ' AnybarWebpackPlugin should be used with AnyBar app, which is OS X only! ');
    }

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('done', function (stats) {

        stats.hasErrors() ? _this.fail() : _this.success();
    });

    process.on('SIGINT', function() {

        _this.exit(process.exit.bind(null, 0));
    });
};

module.exports = AnybarWebpackPlugin;
