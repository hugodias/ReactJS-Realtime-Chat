var S = require('string');
var AI = require('./intel.js');
module.exports = function(question, username) {

  var robotName = 'Mocha';

  // Nome do robo
  AI.setRobotName(robotName);

  // Nome do usuario
  AI.setUsername(username);
  
  return {
    ask: function() {

      // Faz o loop em todas as perguntas
      for (var key in AI.answers) {

        // Identifica potenciais respostas atraves de expressao regular
        var r = new RegExp(key, "ig");

        // Retorna apenas se encontrada uma resposta para a pergunta
        if(question.match(r) != null) {
          return AI.answers[key];
        }
      }

      return false;
    }
  };
}
