const express = require('express');
const router = express.Router();

const postagensController = require("../controllers/postagens-controllers")

/*
@route GET postagens
@desc Retornar todas as postagens cadastrados no nosso models
@acess Public
@endpoint http://localhost:porta/postagens
*/

router.get('/postagens', postagensController.getAllPosts);

/*
@route POST postagens
@desc Criar uma nova postagem no blog
@acess Public
@endpoint http://localhost:porta/postagens
*/

router.post('/postagens', postagensController.createPost);

/*
@route DELETE postagens
@desc Deletar alguma postagem no Blog usando o ID
@acess Public
@endpoint http://localhost:porta/postagens
*/

router.delete('/postagens/:id', postagensController.deleteByID);

module.exports = router;