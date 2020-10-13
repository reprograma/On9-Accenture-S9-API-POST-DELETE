const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts-controller");

/**
@route GET posts
@desc Retornar todos os posts
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get("/posts", postsController.obterPosts);

/**
@route GET posts/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/posts/titulo ========== http://localhost:porta/posts/titulo?titulo=Meetup Online
**/
router.get("/posts/titulo", postsController.obterTituloPost);

/**
@route GET posts/:id
@desc Retornar apenas um único post pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/posts/:id =========== http://localhost:porta/posts/1
**/
router.get("/posts/:id", postsController.obterIdPosts);

/**
@route POST posts
@desc Criar um post
@access Public 
@endpoint http://localhost:porta/posts ========= body json
**/
router.post("/posts", postsController.criarPost);

/**
@route DELETE posts
@desc Deletar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/posts/:id
**/
router.delete("/posts/:id", postsController.deletarPost);

module.exports = router;
