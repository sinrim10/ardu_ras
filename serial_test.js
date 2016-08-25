/**
 * Created by lsk on 2016-08-25.
 */
/*var SerialPort = require("serialport");
var port = new SerialPort("/dev/tty-usbserial1", {
    baudRate: 57600
});*/

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyACM0", {
    baudRate: 115200
});

serialPort.on("open", function () {
    console.log('open');

    serialPort.on('data', function(data) {
        console.log('data received: ' + data);
    });

    serialPort.write(new Buffer('31','ascii'), function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
    });
});