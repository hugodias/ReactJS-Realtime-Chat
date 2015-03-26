var S = require('string');

module.exports = function(question, username) {

  var robotName = 'Mocha';

  var answers = {
    // Ex: Quantos anos voce tem? | Qual sua idade?
    "idade|anos": "Tenho 946485 anos, voce?",
    "((.*)seu(.*)nome)|((.*)(você|voce)(.*)chama)": "Meu nome é " + robotName + ", e o seu?",
    "oi|ola|tudo bem|como vai|blz|joia|sussa|que que pega|e ai": "Oi " + username + " tudo bem?"
  }

  return {
    ask: function() {

      for (var key in answers) {

        var r = new RegExp(key, "ig");

        if(question.match(r) != null) {
          return answers[key];
        }
      }

      return false;
    }
  };
}
