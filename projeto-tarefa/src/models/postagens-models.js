const helper = require('../helpers/postagens-helpers');

const postagem = [
  { 
    id: 1, 
    dataCriacao: helper.novaData(),
    titulo: "partiu",
    conteudo: "viagem ao litoral nordestino",
    etiquetas:["trip", "ne", "praias"]
  },
  { 
    id: 2, 
    dataCriacao: helper.novaData(),
    titulo: "estudar",
    conteudo: "estudar programacao com a Reprograma",
    etiquetas:["code", "mulheres", "tecnologia"]
  }
  
];

module.exports = postagem;