const express = require('express');
const router = express.Router();

const postagensController = require("../controllers/postagem-controller")


//@route GET postagens
//@desc Retornar todas as postagens 
//@acess Public
router.get('/postagem', postagensController.getAllPosts);


//@route POST postagens
//@desc Criar uma nova postagem 
//@acess Public/
router.post('/postagem', postagensController.createPost);

//@route DELETE postagens
//@desc Deletar alguma postagem no Blog usando o ID
//@acess Public
router.delete('/postagem/:id', postagensController.deleteByID);

module.exports = router