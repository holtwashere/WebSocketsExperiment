var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function () {
    console.log("Listening to Requests");
});

app.use(express.static('public'));

// Socket Setup
var io = socket(server);

io.on('connection', function (socket) {
    console.log("Made Socket Connection", socket.id);
});

