const helper = require("../helpers/helper");

const posts = [
  {
    id: 1,
    dataCriacao: helper.novaData(),
    titulo: "Inscrições abertas",
    conteudo: "Inscrições abertas para a nova turma de Back-End da Reprograma.",
    etiquetas: ["Curso", "Bootcamp", "Mulheres na Tecnologia"],
  },
  {
    id: 2,
    dataCriacao: helper.novaData(),
    titulo: "Meetup Online",
    conteudo:
      "Você tem interesse em trabalhar com universo mágico dos dados mas ainda não sabe por onde começar? Então vem participar do nosso #41 meetup online.",
    etiquetas: ["Meetup", "Tecnologia", "Programação"],
  },
];

module.exports = posts;
