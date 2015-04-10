var Chance = require('chance');
var r = require('../robot.js');
var User = require('../users.js');

var chance = new Chance();

var UserList = new User();

module.exports = function (socket) {

  // Gera um nome para o usuario que esta entrando
  var name = chance.name();

  // Adiciona ele na lista
  UserList.append(name, function(username, users) {

    // Envia para ele o nome gerado a lista de usuarios ja logados
    socket.emit('init', {
      name: username,
      users: users
    });

    // Avisa aos outros que tem um novo usuario na sala
    socket.broadcast.emit('user:join', {
      name: username
    });

  });

  // Quando o usuario envia uma mensagem
  socket.on('send:message', function (data) {

    var pergunta = data.text;

    // Mostra a mensagem para todos os outros usuarios
    socket.broadcast.emit('send:message', {
      user: name,
      text: pergunta
    });

    setTimeout(function() {
      var serverAnswer;

      // Inicializa o Robo com a pergunta do usuario
      var Robot = r(pergunta, name);

      // Pergunta ao robo
      Robot.ask(function(response) {

        // Envia a resposta para o usuario
        socket.emit('server:answer', response);

        // Envia a resposta para todos na sala
        socket.broadcast.emit('server:answer', response);
      });

    }, 2000);
  });

  socket.on('disconnect', function () {

    // Remove o usuario da lista
    UserList.disconnect(name, function(user_left, users) {

      // Avisa aos outros que o usuario saiu e atualiza a lista de usuarios
      socket.broadcast.emit('user:left', {
        name: user_left,
        users: users
      });
    });

  });
};
