let postagensModel = require("../models/postagem-models") 

const helper = require('../helpers/postagem-helpers.js') 


const getAllPosts = (request, response) => {
    response.status(200).json(postagensModel)
}

const createPost = (request, response) => {
    const {titulo, conteudo, tags} = request.body

    const newPost = {
        id: helper.getNewID(postagensModel),
        dataCriacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
    }
    postagensModel.push(newPost)
    response.status(201).json(postagensModel)
}


const deleteByID = (request, response) =>{
    const { id } = request.params

    let filteredList = postagensModel.filter(postagem => postagem.id != id);

    postagensModel = filteredList

    console.log(postagensModel)

    response.json({mensagem:`O ID ${id} foi excluído com sucesso`})

}

module.exports = {
    getAllPosts,
    createPost,
    deleteByID
} 