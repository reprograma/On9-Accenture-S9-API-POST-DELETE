const express = require('express');
const router = express.Router();

const postagemController = require('../controllers/postagens-controllers.js');

//@route GET postagens
//@desc Trazer todas as postagens do blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.get('/postagens', postagemController.getPostagens);


//@route POST postagens
//@desc Realizar postagens no blog Reprograma
//@access Public 
//@endpoint http://localhost:porta/tarefas
router.post('/postagens', postagemController.insertPostagem);

/*
//@route DELETE postagens
//@desc Deletar postagens no blog Reprograma
//@access Public
//@endpoint http://localhost:porta/postagens
router.delete('/postagens', postagemController.deletePostagens);
*/

module.exports = router; 
