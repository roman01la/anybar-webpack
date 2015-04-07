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

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('done', function (stats) {

        stats.hasErrors() ? _this.fail() : _this.success();
    });

    process.on('SIGINT', _this.exit.bind(null));
};

module.exports = AnybarWebpackPlugin;
