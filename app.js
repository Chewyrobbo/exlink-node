var SerialPort = require("serialport").SerialPort
var port  = new SerialPort("/dev/cu.usbserial", {
  baudrate: 9600
});

var command = {}
command.powerToggle =  new Buffer('082200000000D6','hex');


port.on('open', function () {
  port.write(command.powerToggle, function(err, bytesWritten) {
    if (err) {
      return console.log('Error: ', err.message);
    }
console.log("Power Toggled.");
    console.log(bytesWritten, 'bytes written');
    process.exit()
  });
});

