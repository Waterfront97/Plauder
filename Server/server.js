var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname+ '/www'));

var userlist = [];

io.on('connection', function(socket){
  socket.name = 'User';
  userlist.push(socket.name);

  io.sockets.emit('userlist', userlist);

  socket.on('disconnect', function(){
    var index = userlist.indexOf(socket.name);
    if (index !== -1) userlist.splice(index, 1);
    io.sockets.emit('userlist', userlist);
  });

  socket.on('message', function(msg){
    if(msg.length < 2 || !msg){
      return;
    }
    const d = new Date();
    const timestamp = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    io.sockets.emit('message', socket.name, msg, timestamp);
  });

  socket.on('username', function(newUsername){
    if(newUsername.length > 20 || newUsername.length <= 0){
      return;
    }
    var index = userlist.indexOf(socket.name);
    if (index !== -1) userlist[index] = newUsername;
    socket.name = newUsername;
    io.sockets.emit('userlist', userlist);
  });
});

http.listen(2135, function(){
  console.log('listening on *:2135');
});