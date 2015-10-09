var PORT = 8080;
var express = require('express');

var app = express();

app.use(express.static(__dirname+'styles'));
app.use(express.static(__dirname+'app/assets'));
app.use(express.static(__dirname+'app/views'));
app.use(express.static(__dirname+'bower_components'));

app.get('/', function(req,res) {
    res.sendfile(__dirname+'/index.html');
});

var server = app.listen(PORT, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s',host,port);
});