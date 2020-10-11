const express = require('express');
const router = express.Router();

const postagemController = require('../controllers/postagens-controllers');

//@route GET Postagens
//@descrição Retornar todas as Postagens
//@access Public
//@endpoint http://localhost:porta/postagens
router.get('/postagens', postagemController.getPostagens);


//@route POST Postagens
//@desc Criar uma postagem
//@access Public
//@endpoint http://localhost:porta/postagens
router.post('/postagens', postagemController.criarPostagens);

//@route DELETE Postagens
//@desc Deletar uma postagem
//@access Public
//@endpoint http://localhost:porta/:id
router.delete('/postagens/:id', postagemController.deletarPostagens);

module.exports = router;
