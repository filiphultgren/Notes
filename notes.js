var app = require('express')();
var http = require('http').Server(app);
var React = require('react');

var port = 3000;
app.set('port', (process.env.PORT || port));

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
