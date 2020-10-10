const express = require('express');
const router = express.Router();

const postsController = require("../controller/posts-controller")

/*
@route GET posts
@desc Retornar todas as posts cadastrados no nosso models
@acess Public
@endpoint http://localhost:porta/posts
*/

router.get('/posts', postsController.getAllPosts);

/*
@route POST posts
@desc Criar uma nova postagem no blog
@acess Public
@endpoint http://localhost:porta/posts
*/

router.post('/posts', postsController.createPost);

/*
@route DELETE posts
@desc Deletar alguma postagem no Blog usando o ID
@acess Public
@endpoint http://localhost:porta/posts
*/

router.delete('/posts/:id', postsController.deleteByID);

module.exports = router; 