var S = require('string');

module.exports = function(question) {

  var answers = {
    // Ex: Quantos anos voce tem? | Qual sua idade?
    "idade|anos": "Tenho 946485 anos, voce?"
  }

  return {
    ask: function() {

      for (var key in answers) {

        var r = new RegExp(key, "i");

        if(question.match(r) != null) {
          return answers[key];
        }
      }

      return "Desculpe, não entendi sua pergunta.";
    }
  };
}
