const postsModels = require("../models/posts-models");
const helper = require("../helpers/helper");

//GET
const obterPosts = (requisicao, resposta) => {
  resposta.status(200).json(postsModels);
};

//GET
const obterIdPosts = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const post = postsModels.find((post) => post.id == id);

  resposta.json(post);
};

//GET
const obterTituloPost = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = postsModels.find((post) => post.titulo == titulo);

  resposta.json(baseDeDados);
};

//POST
const criarPost = (requisicao, resposta) => {
  let { titulo, conteudo, etiquetas } = requisicao.body;

  let novoPost = {
    id: helper.obterNovoValor(postsModels),
    dataCriacao: helper.novaData(postsModels),
    titulo: titulo,
    conteudo: conteudo,
    etiquetas: etiquetas,
  };

  postsModels.push(novoPost);

  resposta.status(201).json(novoPost);
};

//DELETE
const deletarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;

  const resultadoDelete = postsModels.filter((post) => post.id != id);

  resposta.json(resultadoDelete);
};

module.exports = {
  obterPosts,
  obterIdPosts,
  obterTituloPost,
  criarPost,
  deletarPost,
};
