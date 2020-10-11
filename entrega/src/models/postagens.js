const helper = require('../helpers/helper.js');

const postagens = [
    {
        id: 1,
        dataCriacao: helper.dataAtual(),
        titulo: "Como a pandemia mudou o perfil de renda dos brasileiros",
        conteudo: "Mais pobres conseguem melhora temporária com auxílio emergencial e quem já ganhava mais de dois salários mínimos foi prejudicado, segundo estudo do FGV Social.",
        tags: ["economia", "brasil"]
    },

    {
        id: 2,
        dataCriacao: helper.dataAtual(),
        titulo: "Idoso não é peso: por que viver mais é boa notícia para economia.",
        conteudo: "O aumento da expectativa de vida pode ser uma grande oportunidade para a chamada ‘economia da longevidade’.",
        tags: ["economia", "saúde"]
    },

    {
        id: 3,
        dataCriacao: helper.dataAtual(),
        titulo: "Farsa da meritocracia cria ressentimento explorado por populistas como Trump e Bolsonaro, diz professor de Yale.",
        conteudo: "Mérito é uma farsa. É assim que Daniel Markovits, professor de Direito na Universidade de Yale com um currículo invejável, começa seu livro The Meritocracy Trap (A armadilha da meritocracia, em tradução livre).",
        tags: ["sociedade", "história", "política"]
    }
];

module.exports = postagens;