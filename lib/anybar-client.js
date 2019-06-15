/*eslint no-console: 0*/
var client = require('dgram').createSocket('udp4'),
  defaultHost = '127.0.0.1',
  defaultPort = 1738;

module.exports = function(command, port, host, cb = () => {}) {
  port = port || defaultPort;
  host = host || defaultHost;
  const message = Buffer.from(command);

  if (command === 'close') {
    return client.close();
  }

  client.send(message, 0, message.length, port, host, function() {
    if (command === 'exclamation') {
      client.close();
    }
    return cb();
  });
};
