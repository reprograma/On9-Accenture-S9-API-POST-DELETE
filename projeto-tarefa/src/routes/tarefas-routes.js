const express = require("express");
const router = express.Router();

const tarefaController = require("../controllers/tarefas-controller");

/**
@route GET tarefas
@desc Retornar todas as tarefas
@access Public 
@endpoint http://localhost:porta/tarefas
**/
router.get("/tarefas", tarefaController.obterTarefas);

/**
@route GET tarefas/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/tarefas/titulo
**/
router.get("/tarefas/titulo", tarefaController.obterTituloTarefa);
/**
@route GET tarefas/:id
@desc Retornar apenas uma única tarefa pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.get("/tarefas/:id", tarefaController.obterIdTarefa);

/**
@route POST tarefas
@desc Criar uma tarefa
@access Public 
@endpoint http://localhost:porta/tarefas
**/
router.post("/tarefas", tarefaController.criarTarefa); //lembrar de editar o body no insomnia

/**
@route PUT tarefas
@desc Atualizar uma tarefa
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.put("/tarefas/:id", tarefaController.atualizarTarefa); //lembrar de editar o body no insomnia

/**
@route PATCH tarefas
@desc Atualizar o título da tarefa
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.patch("/tarefas/:id", tarefaController.atualizarCampo); //lembrar de editar somente o título no body

/**
@route DELETE tarefas
@desc Deletar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.delete("/tarefas/:id", tarefaController.deletarTarefa);

module.exports = router;
