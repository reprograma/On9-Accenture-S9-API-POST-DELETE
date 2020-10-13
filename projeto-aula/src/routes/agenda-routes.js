const express = require("express");
const router = express.Router();

const agendaController = require("../controllers/agenda-controller");

/**
@route GET agenda
@desc Retornar todos os contatos
@access Public 
@endpoint http://localhost:porta/agenda
**/
router.get("/agenda", agendaController.obterAgenda);

/**
@route POST agenda
@desc Criar uma contato
@access Public 
@endpoint http://localhost:porta/agenda
**/
router.post("/agenda", agendaController.criarAgenda);

/**
@route DELETE agenda
@desc Deletar um contato pelo seu identificador
@access Public 
@endpoint http://localhost:porta/agenda/:id
**/
router.delete("/agenda/:id", agendaController.deletarAgenda);

module.exports = router;
