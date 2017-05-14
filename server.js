var express = require("express");
var app = express();

app.get('/:time', function (req, res) {
  var param = req.params.time;
  var unix;
  var natural;
  if(Number(param)>0){
    unix = Number(param);
    var date = new Date(unix*1000);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate();
    "December 15, 2015"
    natural = month + " " + day + ", " + year;
  } else {
    unix = (new Date(param)).getTime()/1000;
    natural = param;
  }
  var object = { unix: unix, natural: natural};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(object));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
});