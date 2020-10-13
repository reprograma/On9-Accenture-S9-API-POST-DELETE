let desafioModel = require("../models/desafio-models")

const helper = require('../helpers/helper')

const getAllPosts = (request, response) => {
    response.status(200).json(desafioModel)
}
const createPost = (request, response) => {
    const {titulo, conteudo, tags} = request.body;

    const newPost = {
        id: helper.getNewID(desafioModel),
        dataCriacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
    }
    desafioModel.push(newPost);
    response.status(201).json(desafioModel)
}

const deleteByID = (request, response) =>{
    const { id } = request.params;

    let filteredList = desafioModel.filter(postagem => postagem.id != id);
    desafioModel = filteredList;
    response.json({mensagem:`O item ${id} foi excluído`})

}

module.exports = {
    getAllPosts,
    createPost,
    deleteByID
} 