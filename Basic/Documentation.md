#Basic Project documentation

This is the first project. It supports 4 of the serial commands (#M0,#M1,#M6 and #M8). 

###Code Documentation 


   var SP = new SerialPort("/dev/ttyAMA0", {
       baudrate: 57600,
       parser: serialport.parsers.readline("\n")
   }); 

SP is the serial port at ttyAMA0 where the Rapiro is connected. 


//math stuff
function random (low, high) {
    return Math.random() * (high - low) + low;
}


This is the randomizer to switch waving between right and left! 


//web app stuff
app.get('/M1', function(req, res) {
   SP.write("#M1"); //move
   console.log(success);
   res.send(success);
});

app.get('/M0', function(req, res){
  SP.write("#M0"); //hold 
  console.log(success);
  res.send(success);
});

app.get('/Wave', function(req, res) {
  var number = Math.floor(random(1,3));
  if (number == 1) {
      SP.write("#M6"); //wave right
  } else {
    SP.write("#M8"); //wave left
  }
  res.send(success);
});


This is just basic stuff to control the rapiro "over the air". For more information on express visit http://express.com ! 
