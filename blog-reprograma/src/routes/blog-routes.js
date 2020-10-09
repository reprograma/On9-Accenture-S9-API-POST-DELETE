const express = require('express');
const router = express.Router();

const blogsController = require('../controller/blog-controller');

/**
@route GET postagens
@desc Devolver todas postagens contidas no blog
@access Public 
@endpoint http://localhost:porta/todas
**/
router.get('/todas', blogsController.checkPosts);

/**
@route POST postagens
@desc Criar uma nova postagem no blog
@access Public 
@endpoint http://localhost:porta/todas/criar
**/
router.post('/todas/criar', blogsController.createPost);

/**
@route DELETE postagens
@desc  Excluir uma postagem no blog
@access Public
@endpoint http://localhost:porta/todas/:id
**/
router.delete('/todas/:id', blogsController.removePost);

module.exports = router