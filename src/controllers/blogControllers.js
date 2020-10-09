const blogModel = require('../models/blogModels')
const helper = require('../helpers/blogHelpers')

// quando eu quiser ver todos os meus elemntos que estao dentro do model
const getAll = (require, response) => {
    response.status(200).json(blogModel);
}

// criando o post

const createPost = (require, response) => {

    const {id, todayData, tittle, content, label} = require.body
    
    const newPost = {
        id: helper.createId(blogModel),
        todayData: helper.createData(blogModel),
        tittle: tittle,
        content: content,
        label: label
    }
    
    blogModel.push(newPost);

    response.status(201).json(blogModel);

}

const deletePost = (require, response) => {
    const id = require.params.id
    
    let filterPosts = blogModel.filter(post => {
        return post.id == id; 
    })
    //[0]

     const index = blogModel.indexOf(filterPosts)

    blogModel.splice(index, 1);

    response.json(blogModel);
}


module.exports = {
    getAll,
    createPost,
    deletePost
}