//success variable
var success = "Command sent!"
//express stuff
var express = require("express");
var app = express();
//serialport stuff
var serialport = require("serialport")
var SerialPort = serialport.SerialPort; //object constructor
var SP = new SerialPort("/dev/ttyAMA0", {
    baudrate: 57600,
    parser: serialport.parsers.readline("\n")
});

sp.on("open", function () {
  console.log("SP opened");
});

//math stuff
function random (low, high) {
    return Math.random() * (high - low) + low;
}



app.get('/M1', function(req, res) {
   sp.write("#M1"); //move
   console.log(success)
   res.send(success)
});

app.get('/M2', function(req, res){
  sp.write("#M2"); //backwards
  console.log(success)
});

app.get('/Wave', function(req, res) {
  var number = Math.floor(random(1,3));
  if (number == 1) {
      sp.write("#M6"); //wave right
  } else {
    sp.write("#M8"); //wave left 
  }
});
