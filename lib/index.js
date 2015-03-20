var nanybar = require('nanybar');

var AnybarWebpackPlugin = function() {};

AnybarWebpackPlugin.prototype.fail = nanybar.bind(nanybar, 'red');
AnybarWebpackPlugin.prototype.compile = nanybar.bind(nanybar, 'yellow');
AnybarWebpackPlugin.prototype.success = nanybar.bind(nanybar, 'green');

AnybarWebpackPlugin.prototype.apply = function (compiler) {

    var _this = this;

    compiler.plugin('compile', function() {

        _this.compile();
    });

    compiler.plugin('should-emit', function(compilation) {

      compilation.errors.length ? _this.fail() : _this.success();
  	});

    compiler.plugin('failed', function() {

        _this.success();
    });
};

module.exports = AnybarWebpackPlugin;
