var anybarSocket = require('./anybar-socket');

var AnybarWebpackPlugin = function() {};

AnybarWebpackPlugin.prototype.fail = anybarSocket.bind(null, 'red');
AnybarWebpackPlugin.prototype.compile = anybarSocket.bind(null, 'yellow');
AnybarWebpackPlugin.prototype.success = anybarSocket.bind(null, 'green');
AnybarWebpackPlugin.prototype.exit = anybarSocket.bind(null, 'white');

AnybarWebpackPlugin.prototype.apply = function (compiler) {

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('should-emit', function (compilation) {

      compilation.errors.length ? _this.fail() : _this.success();
  	});

    compiler.plugin('failed', function() {

        _this.success();
    });

    process.on('SIGINT', function() {

        _this.exit(process.exit.bind(null, 0));
    });
};

module.exports = AnybarWebpackPlugin;
