const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts-controller');

/**
@route GET posts
@desc Retornar todos os posts
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get('/posts', postController.obterPosts);

/**
@route GET posts/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/posts/titulo
**/
router.get('/posts/titulo', postController.obterTituloPost);
/**
@route GET posts/:id
@desc Retornar apenas um única post pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.get('/posts/:id', postController.obterIdPost);

/**
@route POST posts
@desc Criar um post
@access Public 
@endpoint http://localhost:porta/posts
**/
router.post('/posts', postController.criarPost);

/**
@route DELETE posts
@desc Deletar um post pelo seu identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.delete('/posts/:id', postController.deletarPost)

module.exports = router;