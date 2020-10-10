let postsModel = require("../model/posts-model")

const helper = require('../helpers/posts-helper')


const getAllPosts = (request, response) => {
    response.status(200).json(postsModel)
}

const createPost = (request, response) => {
    const {titulo, conteudo, tags} = request.body;

    const newPost = {
        id: helper.getNewID(postsModel),
        dataCriacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags,
    }
    postsModel.push(newPost);
    response.status(201).json(postsModel)
}


const deleteByID = (request, response) =>{
    const { id } = request.params;

    let filteredList = postsModel.filter(postagem => postagem.id != id);

    postsModel = filteredList;

    console.log(postsModel)

    response.json({mensagem:`O item de id ${id} foi excluído`})

}

module.exports = {
    getAllPosts,
    createPost,
    deleteByID
} 