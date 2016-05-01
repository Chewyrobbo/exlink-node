#!/usr/local/bin/node
var SerialPort = require("serialport").SerialPort
var fs = require('fs');
var port  = new SerialPort("/dev/cu.usbserial", {
  baudrate: 9600
});
var option = process.argv[2]
var command;
fs.readFile('options.json', 'utf8', function (err, data) {
  if (err) throw err;
  command = JSON.parse(data);
});
port.on('open', function () {
  port.write(Buffer.from(command[option],'hex'), function(err, bytesWritten) {
    if (err) {
      return console.log('Error: ', err.message);
    }
    console.log(bytesWritten, 'bytes written');
    process.exit()
  });
});

