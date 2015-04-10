var S = require('string');
var AI = require('./intel.js');

module.exports = function(question, username) {

  var robotName = 'Mocha';

  var defaultAnswer = 'Não entendi sua pergunta. Pergunte-me algo sobre Café!';

  // Nome do robo
  AI.setRobotName(robotName);

  // Nome do usuario
  AI.setUsername(username);

  return {
    ask: function(callback) {
      var answer = false;

      // Lista de teorias com perguntas e respostas
      var theories = AI.theories();

      // Faz o loop em todas as perguntas
      for (var key in theories) {

        // Identifica potenciais respostas atraves de expressao regular
        var theory = new RegExp(key, "ig");

        // Retorna apenas se encontrada uma resposta para a pergunta
        if(question.match(theory) !== null) {
          answer = theories[key];
        }
      }

      // Caso nao tenha respondido a pergunta, usa a resposta padrao
      if(!answer)
        answer = defaultAnswer;

      callback(answer);
    }
  };
};
