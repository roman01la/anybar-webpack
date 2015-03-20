var dgram = require('dgram');

module.exports = function (command, cb, port) {

    var port = port || 1738,
        host = '127.0.0.1',
        message = new Buffer(command);

    var client = dgram.createSocket('udp4');

    client.send(message, 0, message.length, port, host, function (err, bytes) {

      client.close();
      cb && cb(err);
    });
}
