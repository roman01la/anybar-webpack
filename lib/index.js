var anybarClient = require('./anybar-client');

var fail = anybarClient.bind(null, 'webpack-fail'),
    compile = anybarClient.bind(null, 'webpack-compile'),
    success = anybarClient.bind(null, 'webpack-success'),
    exit = anybarClient.bind(null, 'white');

var AnybarWebpackPlugin = function (port) {

    this.fail = fail.bind(this, port);
    this.compile = compile.bind(this, port);
    this.success = success.bind(this, port);
    this.exit = exit.bind(this, port);
};

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
