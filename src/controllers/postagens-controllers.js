const postagensModel = require("../moldels/postagens-models");
const helper = require("../helpers/helpers");

const todasPostagens = (request, response) => {
    response.status(200).json(postagensModel);
}

const getByTitle = (request, response) => {
    const {titulo} = request.query;
    const dataBase = postagensModel.find(postagem => postagem.titulo == titulo);

    response.json(dataBase);
}

const criarPostagem = (request, response) => {
    const {titulo, conteudo, etiquetas} = request.body;

    const novaPostagem = {
        id: helper.newValue(postagensModel), 
        dataCriacao: helper.newDate(postagensModel), 
        titulo: titulo, 
        conteudo: conteudo,
        etiquetas: etiquetas
    }

    postagensModel.push(novaPostagem);

    response.status(201).json(novaPostagem);
}

const deletarPostagem = (request, response) => {
    const {id} = request.params;

    let postagensFiltradas = postagensModel.filter(postagem => {
        return postagem.id == id;
    }) [0];

    const index = postagensModel.indexOf(postagensFiltradas);

    postagensModel.splice(index, 1);

    response.json(postagensModel);
}

module.exports = {
    todasPostagens,
    getByTitle,
    criarPostagem,
    deletarPostagem
}