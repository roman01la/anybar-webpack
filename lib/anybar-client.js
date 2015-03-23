var client = require('dgram').createSocket('udp4');

module.exports = function (command, port, callback) {

    var port = port || 1738,
        host = '127.0.0.1',
        message = new Buffer(command);

    callback = callback || function() {};

    client.on('close', callback);

    client.send(message, 0, message.length, port, host, function() {

        command === 'white' && client.close();
    });
}
