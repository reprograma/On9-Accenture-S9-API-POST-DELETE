let postagensModel = require("../models/postagens-models") //entrando na pasta models/arquivomodels

const helper = require('../helpers/postagens-helpers.js') //entrando na pasta helpers//arquivogelper


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

    response.json({mensagem:`O item de id ${id} foi excluído com sucesso`})

}


//NÃO ESQUECER DE EXPORTAR!!!!!!! 
module.exports = {
    getAllPosts,
    createPost,
    deleteByID
} 

