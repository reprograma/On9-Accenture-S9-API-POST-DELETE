const tarefaModel = require("../models/tarefas-models");
const helper = require("../helpers/helper");

//GET
const obterTarefas = (requisicao, resposta) => {
  resposta.status(200).json(tarefaModel);
};

//GET
const obterIdTarefa = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const tarefa = tarefaModel.find((tarefa) => tarefa.id == id);

  resposta.json(tarefa);
};

//GET
const obterTituloTarefa = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = tarefaModel.find((tarefa) => tarefa.titulo == titulo);

  resposta.json(baseDeDados);
};

//POST
const criarTarefa = (requisicao, resposta) => {
  let { titulo, descricao, prazo, responsavel } = requisicao.body;

  let novaTarefa = {
    //utilizando o helper
    id: helper.obterNovoValor(tarefaModel),
    titulo: titulo,
    descricao: descricao,
    prazo: prazo,
    responsavel: responsavel,
    //utilizando o helper
    dataCriacao: helper.novaData(tarefaModel),
  };

  tarefaModel.push(novaTarefa);

  resposta.status(201).json(novaTarefa);
};

//PUT
const atualizarTarefa = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const filtrarTarefaAtualizada = tarefaModel.filter((tarefa) => {
    return tarefa.id == id;
  })[0];

  const index = tarefaModel.indexOf(filtrarTarefaAtualizada);

  const obterChaves = Object.keys(requisicao.body); //pega as chaves do body

  obterChaves.forEach((chave) => {
    filtrarTarefaAtualizada[chave] = requisicao.body[chave];
  });

  tarefaModel[index] = filtrarTarefaAtualizada;
  resposta.status(200).json(tarefaModel[index]);
};

//PATCH
const atualizarCampo = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const { titulo } = requisicao.body;

  const tarefa = tarefaModel.find((tarefa) => tarefa.id == id);

  tarefa.titulo = titulo;

  resposta.status(200).json(tarefa);
};

//DELETE
const deletarTarefa = (requisicao, resposta) => {
  const { id } = requisicao.params;

  const tarefaFiltrada = tarefaModel.filter((tarefa) => {
    return tarefa.id == id;
  })[0];

  const index = tarefaModel.indexOf(tarefaFiltrada);

  tarefaModel.splice(index, 1);

  resposta.json(tarefaModel);
};

module.exports = {
  obterTarefas,
  obterIdTarefa,
  obterTituloTarefa,
  criarTarefa,
  atualizarTarefa,
  atualizarCampo,
  deletarTarefa,
};
