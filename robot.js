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
    ask: function() {

      var answers = AI.answers();

      // Faz o loop em todas as perguntas
      for (var key in answers) {

        // Identifica potenciais respostas atraves de expressao regular
        var r = new RegExp(key, "ig");

        // Retorna apenas se encontrada uma resposta para a pergunta
        if(question.match(r) != null) {

          return answers[key];
        }
      }

      // Opcional => O robo pode ter uma resposta padrao caso nao encontre uma resposta
      // para a pergunta
      if(defaultAnswer) {
        return defaultAnswer;  
      }
      
      return false;
    }
  };
}
