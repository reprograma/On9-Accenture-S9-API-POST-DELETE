const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts-controllers');

//@Router GET posts
//@desc Retornar todos os postss 
//@asc
router.get('/posts', controller.getPosts);

//@Router GET Posts
//@query Titulo
//@desc Retornar apenas titulos
//@access Public
router.get('posts/titulos', postController.getPorTitulo);

//@Router GET Post
//@params :id
//@desc Retornar apenas um único post pelo seu id: identificador
//@acess Public
//@endpoint http: //localhost:porta/posts/:id
router.get('posts/:id', postController.getIdPosts);



//@Router POST Posts
//@desc criar um post
//@acess Public
//@endpoint http: //localhost:porta/posts
router.post('/posts', postsController.criarPosts);


//@Router DELETE Posts
//@desc Deletar um Post
//@acess Public
//@endpoint http: //localhost:porta/:id
router.delete('/posts/:id', postController.deletarPosts);


module.exports = {
    getPosts,
    getIdPosts,
    getPorTitulo
}

