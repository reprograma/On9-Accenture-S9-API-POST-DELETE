const express = require("express");
const router = express.Router();
const postagemController = require("../controllers/postagens-controllers");

/* 
@route GET postagens
@desc Retornar todas as postagens
@access Public 
@endpoint http://localhost:porta/postagens
*/
router.get("/postagens", postagemController.todasPostagens);

/*
@route GET postagens/titulo
@desc Retornar apenas postagens pelo titulo
@access Public 
@endpoint http://localhost:porta/postagens/titulo
*/
router.get("/postagens/titulo", postagemController.getByTitle);

/*
@route POST postagens
@desc Criar uma postagem
@access Public 
@endpoint http://localhost:porta/postagens
*/
router.post("/postagens", postagemController.criarPostagem);

/*
@route DELETE postagens
@desc Deletar uma postagem pelo seu id
@access Public 
@endpoint http://localhost:porta/postagens/:id
*/
router.delete('/postagens/:id', postagemController.deletarPostagem);

module.exports = router;