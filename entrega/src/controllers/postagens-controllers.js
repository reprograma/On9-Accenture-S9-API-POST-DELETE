let postagensModel = require("../models/postagens-models")

const helper = require('../helpers/postagens-helpers')


const getAllPosts = (request, response) => {
    response.status(200).json(postagensModel)
}

const createPost = (request, response) => {
    const {titulo, conteudo, tags} = request.body;

    const newPost = {
        id: helper.getNewID(postagensModel),
        dataCriacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
    }
    postagensModel.push(newPost);
    response.status(201).json(postagensModel)
}


const deleteByID = (request, response) =>{
    const { id } = request.params;

    let filteredList = postagensModel.filter(postagem => postagem.id != id);

    postagensModel = filteredList;

    console.log(postagensModel)

    response.json({mensagem:`O item de id ${id} foi devidamente excluído`})

}

module.exports = {
    getAllPosts,
    createPost,
    deleteByID
}