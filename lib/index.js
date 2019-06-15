var anyBarClient = require('./anybar-client');
var notifier = require('node-notifier');
var path = require('path');

var setRed = anyBarClient.bind(null, 'red'),
  setYellow = anyBarClient.bind(null, 'yellow'),
  setGreen = anyBarClient.bind(null, 'green'),
  exitClean = anyBarClient.bind(null, 'close'),
  exitDirty = anyBarClient.bind(null, 'exclamation');

var AnyBarWebpackPlugin = function(port, host, opts) {
  var self = this;
  // assume single run, close on done.
  this.closeOnDone = true;

  var enableNotifications;

  opts = opts || {};

  if (typeof port === 'object') {
    opts = port;
    port = undefined;
  }

  enableNotifications = opts.enableNotifications;

  this.fail = function(projectName, errorName) {
    setRed.call(this, port, host, self.closeOnDone ? this.exitDirty : () => {});

    if (enableNotifications === true) {
      notifier.notify({
        title: 'Webpack Build Status',
        subtitle: 'Project: ' + projectName,
        message: errorName,
        icon: path.join(__dirname, 'icons/webpack-fail@2x.png'),
      });
    }
  };

  this.compile = setYellow.bind(this, port, host);
  this.success = setGreen.bind(this, port, host);
  this.exitClean = exitClean.bind(this, port, host);
  this.exitDirty = exitDirty.bind(this, port, host);
};

AnyBarWebpackPlugin.prototype.apply = function(compiler) {
  var _this = this;

  compiler.hooks.compile.tap('AnyBarWebpackPlugin', function() {
    _this.compile();
  });

  compiler.hooks.done.tap('AnyBarWebpackPlugin', function(stats) {
    stats.hasErrors()
      ? _this.fail(
          stats.compilation.options.name,
          stats.compilation.errors[0].name
        )
      : // When watching, we don't want to exit on compile done. But on single
        // run, we do want to exit now.
    _this.success(_this.closeOnDone ? _this.exitClean : () => {});
  });

  compiler.hooks.watchRun.tap('AnybarWebpackPlugin', function() {
    // we're in watch mode so don't close done
    _this.closeOnDone = false;
  });

  process.on('SIGINT', _this.exitClean);
};

module.exports = AnyBarWebpackPlugin;
