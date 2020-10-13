const express = require("express");
const router = express.Router(); //pegando a função router

const tarefaController = require("../controllers/tarefas-controllers");

//@route GET Tarefas
//@desc Retorna todas as tarefas
//@acces Public
//@endpoint http://localhost:porta/tarefas
router.get("/tarefas", tarefaController.getTarefas);

//@route GET Tarefas
//@query Titulo
//@desc Retorna apenas títulos
//@acces Public
//@endpoint http://localhost:porta/tarefas/titulo?titulo=Ler um livro
router.get("/tarefas/titulo", tarefaController.getByTitle);

//@route GET Tarefas
//@params :id
//@desc Retorna apenas uma única tarefa pelo seu id: identificador
//@acces Public
//@endpoint http://localhost:porta/tarefas/1
router.get("/tarefas/:id", tarefaController.getById);

//@route POST Tarefas
//@desc Criar uma tarefa
//@access Public
//@endpoint http://localhost:porta/tarefas
router.post("/tarefas", tarefaController.addTarefas);

//@route DELETE Tarefas
//@desc Deletar uma tarefa
//@access Public
//@endpoint http://localhost:porta/:id
router.delete("/tarefas/:id", tarefaController.deletarTarefas);

module.exports = router;
