const express = require("express");
const router = express.Router();

const postagemController = require("../controllers/postagensController");


router.get ("/postagens",postagemController.getPostagens);

router.get("/postagens/:id", postagemController.getPostagemId);

router.post('/postagens', postagemController.createPost);

router.delete('/postagens/:id', postagemController.deletarPost);




module.exports = router