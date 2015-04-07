var anyBarClient = require('./anybar-client');

var fail = anyBarClient.bind(null, 'webpack-fail'),
    compile = anyBarClient.bind(null, 'webpack-compile'),
    success = anyBarClient.bind(null, 'webpack-success'),
    exit = anyBarClient.bind(null, 'white');

var AnyBarWebpackPlugin = function (port) {

    this.fail = fail.bind(this, port);
    this.compile = compile.bind(this, port);
    this.success = success.bind(this, port);
    this.exit = exit.bind(this, port);
};

AnyBarWebpackPlugin.prototype.apply = function (compiler) {

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('done', function (stats) {

        stats.hasErrors() ? _this.fail() : _this.success();
    });

    process.on('SIGINT', _this.exit.bind(null));
};

module.exports = AnyBarWebpackPlugin;
