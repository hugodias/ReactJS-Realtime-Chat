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
            "idade|anos": {
              response: "Tenho 946485 anos, voce?",
              image: "http://placehold.it/500x500"
            },
            // Qual o nome do robo
            "((.*)seu(.*)nome)|((.*)(você|voce)(.*)chama)": {
              response: "Meu nome é " + this.getRobotName() + ", e o seu?",
              image: null
            },
            // Comprimentos
            "oi|ola|tudo bem|como vai|blz|joia|sussa|que que pega|e ai": {
              response: "Oi " + this.getUsername() + " tudo bem?",
              image: null
            },
            // Conceito
            "((.*)(o que é|o que|significa|o que|significado)(.*)(café|cafe)(.*))": {
              response: "<p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação</p><p>Em alguns períodos da década de 1980, o café era a segunda mercadoria mais negociada no mundo por valor monetário, atrás apenas do petróleo.2 Este dado estatístico ainda é amplamente citado, mas tem sido impreciso por cerca de duas décadas, devido à queda do preço do café durante a crise do produto na década de 1990, reduzindo o valor total de suas exportações. Em 2003, o café foi o sétimo produto agrícola de exportação mais importante em termos de valor, atrás de culturas como trigo, milho e soja.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/200px-Roasted_coffee_beans.jpg"
            },
            // Onde tem cafe, local
            "((.*)(estado|cidade|local|onde tem|produção|produzido|fazenda|mineiro|minas gerais|brasil)(.*)(café|cafe)(.*))": {
              response: "<p>Minas Gerais é o estado com maior produção de café do Brasil (26,6 milhões de sacas),5 o que corresponde a mais de 50% da produção nacional do produto e 17% da produção mundial. Patrocínio é o maior produtor do país com mais de 10% da produção do Triângulo Mineiro.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coffee_Plantation.jpg/400px-Coffee_Plantation.jpg"
            },
            // Sobre cafe, historia do cafe, onde surgiu cafe, de onde vem o cafe
            "((.*)(história|historia|sobre|de onde vem|onde nasceu|quem criou)(.*)(café|cafe)(.*))": {
              response: "<p>A história do café começou no século IX. O café é originário das terras altas da Etiópia (possivelmente com culturas no Sudão e Quênia) e difundiu-se para o mundo através do Egito e da Europa.6 Mas, ao contrário do que se acredita, a palavra 'café' não é originária de Kaffa — local de origem da planta —, e sim da palavra árabe qahwa, que significa 'vinho'(قهوة), devido à importância que a planta passou a ter para o mundo árabe.7</p><p>Uma lenda conta que um pastor chamado Kaldi observou que seus carneiros ficavam mais espertos ao comer as folhas e frutos do cafeeiro. Ele experimentou os frutos e sentiu maior vivacidade. Um monge da região, informado sobre o fato, começou a utilizar uma infusão de frutos para resistir ao sono enquanto orava.8</p><p>Parece que as tribos africanas, que conheciam o café desde a Antiguidade, moíam seus grãos e faziam uma pasta utilizada para alimentar os animais e aumentar as forças dos guerreiros. Seu cultivo se estendeu primeiro na Arábia, introduzido provavelmente por prisioneiros de guerra, onde se popularizou aproveitando a lei seca por parte do Islã. O Iêmen foi um centro de cultivo importante, de onde se propagou pelo resto do Mundo Árabe.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/CoffeePalestineStereo.jpg/250px-CoffeePalestineStereo.jpg"
            },
            // Tem algum problema em adoçar a água para preparar o café?
            "((.*)(((.*)adoçar(.*)?(agua|água))|((.*)açucar(.*)agua))(.*)(café|cafe)(.*))" : {
              response: "<p>Ao colocar açúcar junto com a água para preparar o cafezinho de cada dia, você acaba alterando o ponto da ebulição, a textura da bebida e o sabor do café. Ele pode virar um verdadeiro xarope. Se você não quer que isso aconteça, adoce o café depois de pronto ou aprenda a apreciar a bebida pura.</p>",
              image: null
            },
            // O Café descafeinado não tem cafeína mesmo?
            "((.*)?(café|cafe)(.*)?(descafeinado)(.*)?(cafeina|cafeína))": {
              response: "<p>O café descafeinado tem cafeína sim, porém bem pouca. Para ser considerado descafeinado, o café precisa ter no máximo  0,1 g/100g de cafeína. Cumpre ressaltar que a quantidade de cafeína no produto varia de acordo com a marca, com o tipo e com o lote do café.</p>",
              image: null
            },
            // Café faz mal à saúde?
            "((.*)?(café|cafe)(.*)?(mal|faz mal|saúde|bem|faz bem|prejudica|saudável|saudavel|saude|problemas|problema))": {
              response: "<p>O café só faz mal quando consumido em altas doses diárias. Quando tomado com equilíbrio, o café é uma boa fonte de energia, mantém o estado de alerta do corpo, além de conter lipídios, sais minerais, vitaminas e antioxidantes essenciais para a saúde.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG"
            },
            // O café é muito calórico?
            "(((café|cafe)(.*)?(calórico|calorico|calorias|engorda|gordo|gordura|gorda|caloria|engordar))|((.*)?(calórico|calorico|calorias|engorda|gordo|gordura|gorda|caloria|engordar)(.*)?(café|cafe)))": {
              response: "<p>As calorias do café são mínimas. Só para se ter ideia, uma xícara de café amargo contém em média 2 kcal. O problema para a dieta são os acompanhamentos do café. Ele se torna mais calórico quando acompanhado de leite, açúcar, creme, chantilly, chocolate, etc.</p>",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/200px-A_small_cup_of_coffee.JPG"
            },
            "((.*)?(mocha|moca)(.*)?)": {
              response: "<p>Moca (em árabe: المخا, pronunciado 'al-Mukhā'') é uma variedade nobre de café da espécie Coffea arabica, que provinha do porto de Moca, no Iêmen. Entre os séculos XV e XVII, Moca foi o mais importante mercado de café do mundo.",
              image: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mocha_Latte_Costa_Rica.JPG/1280px-Mocha_Latte_Costa_Rica.JPG"
            }
          }
        }
      }
