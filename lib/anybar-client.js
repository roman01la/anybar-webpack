var client = require('dgram').createSocket('udp4'),
    defaultHost = '127.0.0.1',
    defaultPort = 1738;

client.on('close', process.exit.bind(null, 0));

module.exports = function (command, port, host) {

    var port = port || defaultPort,
        host = host || defaultHost,
        message = new Buffer(command);

    client.send(message, 0, message.length, port, host, function() {

        command === 'white' && client.close();
    });
};
