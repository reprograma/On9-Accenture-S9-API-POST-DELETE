const { response } = require("../app");
const tarefaModel = require("../models/tarefas-models");

//GET
const getTarefas = (request, response) => {
  response.status(200).json(tarefaModel);
};

const getById = (request, response) => {
  const { id } = request.params;
  const tarefa = tarefaModel.find((tarefa) => tarefa.id == id);

  response.status(200).json(tarefa);
};

const getByTitle = (request, response) => {
  const { titulo } = request.query;
  const tarefa = tarefaModel.find((tarefa) => tarefa.titulo == titulo);

  response.status(200).json(tarefa);
};

//POST
const addTarefas = (request, response) => {
  const { titulo, descricao, prazo, responsavel } = tarefaModel.request.body;

  const tarefaId = tarefaModel.map((tarefa) => tarefa.id == id);

  const novoId = tarefaId.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;

  const novaTarefa = {
    id: novoId,
    titulo: titulo,
    descricao: descricao,
    prazo: prazo,
    responsavel: responsavel,
    dataCriacao: new Date(),
  };

  tarefaModel.push(novaTarefa);

  response.status(201).json(novaTarefa);
};

//DELETE
const deletarTarefas = (request, response) => {
  const { id } = request.params;

  tarefaModel.filter((tarefas) => tarefas.id != id);

  //if(!tarefa) response.status(404).json( { mensagem: 'Tarefa não foi excluída.'})

  response.status(204).json({ mensagem: "Tarefa deletada com sucesso" });
};

module.exports = {
  getTarefas,
  getById,
  getByTitle,
  addTarefas,
  deletarTarefas,
};
