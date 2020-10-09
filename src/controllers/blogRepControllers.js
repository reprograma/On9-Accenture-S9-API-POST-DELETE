const blogModel = require('../models/blogRepModels')
const helper = require('../helpers/blogRepHelpers');
const { response } = require('express');

//const { response } = require('express')

const getAll = (require, response) => {
    response.status(200).json(blogModel);
}

const criarPost = (require, response) => {
    
    const {id, dataCriacao, titulo, conteudo, etiquetas,} = require.body

  const criarPost = {
      id: helper.criarId(blogModel),
      dataCriacao: helper.criarData(blogModel),
      titulo: titulo,
      conteudo: conteudo,
      etiquetas: etiquetas
  }
  blogModel.push(criarPost);

  response.status(201).json(blogModel);


}

const deletePost = (require, response) => {
    const {id}= require.params

    let filterPosts = blogModel.filter(post => {
        return post.id == id;
    })[0]

    const index = blogModel.indexOf(filterPosts)

    blogModel.splice(index, 1)

    response.json(blogModel);
}

module.exports = {
    getAll,
    criarPost,
    deletePost
}