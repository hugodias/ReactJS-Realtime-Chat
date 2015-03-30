module.exports = {

    setRobotName: function (robotName) {
        this.robotName = robotName;
    },

    getRobotName: function () {
        return this.robotName;
    },

    setUsername: function (username) {
        this.username = username;
    },

    getUsername: function () {
        return this.username;
    },

    answers: function () {
        return {
            // Qual a idade do robo
            "idade|anos": "Tenho 946485 anos, voce?",
            // Qual o nome do robo
            "((.*)seu(.*)nome)|((.*)(você|voce)(.*)chama)": "Meu nome é " + this.getRobotName() + ", e o seu?",
            // Comprimentos
            "oi|ola|tudo bem|como vai|blz|joia|sussa|que que pega|e ai": "Oi " + this.getUsername() + " tudo bem?"
        }
    }
}
