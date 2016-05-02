#!/usr/local/bin/node
var SerialPort = require("serialport").SerialPort;
var fs = require('fs');
var hexConv = require('./toHex.js');
var checksum = require('./checksum.js');
var port  = new SerialPort("/dev/cu.usbserial"); //Replace this with your serial port device
var options = process.argv[2];


var volumeCode = "0822010000" + hexConv.toHex(process.argv[3]);
var command  = JSON.parse(fs.readFileSync('options.json', 'utf8'));


command.volume = checksum.hexCheck(volumeCode);



port.on('open', function () {
  port.write(Buffer.from(command[options], 'hex'), function (err, bytesWritten) {
    if (err) {
      return console.log('Error: ', err.message);
    }
    console.log(bytesWritten, 'bytes written');
    process.exit()
  })
});
