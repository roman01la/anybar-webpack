var dgram = require('dgram');
var anyBarClient = require('../lib/anybar-client');

var cmd = 'test',
    port = 1799,
    host = '0.0.0.0';

var testMsg = 'Should receive command: ' + cmd;

var server = dgram.createSocket('udp4', function (msg) {

    if (msg.toString('utf-8') !== cmd) {

        throw new Error(testMsg);
    }
    else {

        console.log(testMsg);
        server.close();
        process.exit(0);
    }
});

server.bind(port);

anyBarClient(cmd, port, host);
