var S = require('string');

module.exports = function(question, username) {

  var answers = {
    // Ex: Quantos anos voce tem? | Qual sua idade?
    "idade|anos": "Tenho 946485 anos, voce?",
    "oi|ola|tudo bem|como vai|blz|joia|sussa|que que pega": "Oi " + username + " tudo bem?"
  }

  return {
    ask: function() {

      for (var key in answers) {

        var r = new RegExp(key, "i");

        if(question.match(r) != null) {
          return answers[key];
        }
      }

      return false;
    }
  };
}
