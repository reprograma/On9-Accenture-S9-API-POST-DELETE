const blogModel = require('../models/blog-models');
const helper = require('../helpers/blog-helpers');


//GET para verificar se as postagens foram inseridas
const checkPosts = (require, response)=>{
    response.status(200).json(blogModel)
    
};

//POST para adicionar nova postagem no blog
const createPost = (require, response)=>{
    let { titulo, conteudo, tags } = require.body;
    
    
    let newPost = {
        id: helper.newId(blogModel),
        dataCriacao: helper.dateCreate(blogModel),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    }
    blogModel.push(newPost);

    response.status(201).json(newPost);
}

//DELETE para remover uma postagem feita através do método POST
const removePost = (require, response)=>{
    const {id} = require.params;

    let filteredPosts = blogModel.filter(post =>{
        return post.id == id;
    })[0];
    
    const index = blogModel.indexOf(filteredPosts);

    blogModel.splice(index, 1)

    response.json(blogModel)
}

module.exports = {
    checkPosts,
    createPost,
    removePost
}