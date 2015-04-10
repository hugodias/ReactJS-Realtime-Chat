var Chance = require('chance');
var chance = new Chance();
var r = require('../robot.js');

var users = [];

module.exports = function (socket) {
  var name = chance.name();

  // Adiciona o usuario na lista de usuarios logados
  users.push(name);

  socket.emit('init', {
    name: name,
    users: users
  });

  socket.broadcast.emit('user:join', {
    name: name
  });

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

      // Pergunta ao robo
      Robot.ask(function(response) {
        socket.emit('server:answer', response);
        socket.broadcast.emit('server:answer', response);
      });

    }, 2000);
  });

  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
  });
};
