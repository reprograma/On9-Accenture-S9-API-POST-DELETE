const express = require('express');
const router = express.Router();
const postagemController = require('../controllers/postagens-controllers');

//@route POST postagem
//@desc criar postagem
//@accs publico
router.post('/postagem', postagemController.criarPostagem);

//@route DELETE
//@desc deletar uma postagem 
//@accs publico
router.delete('/postagem/:id', postagemController.deletarPostagem);

module.exports = router;