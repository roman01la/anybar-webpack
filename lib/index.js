var anyBarClient = require('./anybar-client');
var notifier = require('node-notifier');
var path = require('path');

var fail = anyBarClient.bind(null, 'webpack-fail'),
    compile = anyBarClient.bind(null, 'webpack-compile'),
    success = anyBarClient.bind(null, 'webpack-success'),
    exit = anyBarClient.bind(null, 'white');

var AnyBarWebpackPlugin = function (port, host) {

    var self = this;

    var failBinded = fail.bind(this, port, host);
    this.fail = function(projectName, errorName) {
        failBinded();
        notifier.notify({
            title: 'Webpack Build Status',
            subtitle: 'Project: ' + projectName,
            message: errorName,
            icon: path.join(__dirname, 'icons/webpack-fail@2x.png')
        });
    };

    this.compile = compile.bind(this, port, host);
    this.success = success.bind(this, port, host);
    this.exit = exit.bind(this, port, host);
};

AnyBarWebpackPlugin.prototype.apply = function (compiler) {

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('done', function (stats) {
        stats.hasErrors() ?
            _this.fail(
                stats.compilation.options.name,
                stats.compilation.errors[0].name) :
            _this.success();
    });

    process.on('SIGINT', _this.exit.bind(null));
};

module.exports = AnyBarWebpackPlugin;
