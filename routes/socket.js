var Chance = require('chance');
var chance = new Chance();
var r = require('../robot.js');


var users = [];

// export function for listening to the socket
module.exports = function (socket) {
  var name = chance.name();

  users.push(name);

  // send the new user their name and a list of users
  socket.emit('init', {
    name: name,
    users: users
  });

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name: name
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {

    socket.broadcast.emit('send:message', {
      user: name,
      text: data.text
    });

    // Resposta do robo
    setTimeout(function() {
      var serverAnswer;
      // Inicializa o Robo com a pergunta do usuario
      var Robot = r(data.text, name);

      // O rebo responde apenas se consegui chegar a uma conclusao
      // sobre a pergunta do usuario
      if(serverAnswer = Robot.ask() ){
        socket.emit('server:answer', serverAnswer);

        socket.broadcast.emit('server:answer', serverAnswer);
      }

    }, 2000);
  });

  // validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      var oldName = name;
      userNames.free(oldName);

      name = data.name;

      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
  });
};
