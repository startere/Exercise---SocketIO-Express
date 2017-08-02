var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running.");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection: ' + socket.id);

    socket.on('mouseCoords', mouseFunc);

    function mouseFunc(data){
        socket.broadcast.emit('mouseCoords', data);
        console.log(data);
        
    }
}