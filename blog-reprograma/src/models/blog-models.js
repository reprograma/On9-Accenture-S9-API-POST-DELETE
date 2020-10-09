const helper = require('../helpers/helper');

const postagem = [
    {
        id: 1,
        dataCriacao: helper.novaData(),
        titulo: "primeira postagem",
        conteudo: "boas vindas as leitoras",
        tags: ["artigo", "mulheres na tecnologia", "blog novo"]
    },
    {
        id: 2,
        dataCriacao: helper.novaData(),
        titulo: "Nodejs",
        conteudo: "Introduçao ao Nodejs",
        tags: ["artigo", "mulheres na tecnologia", "introducao", "nodejs"]

    },
];

module.exports = postagem;