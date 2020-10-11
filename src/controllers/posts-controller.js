const postModel = require("../models/posts-models");
const helper = require("../helpers/helper");

const obterPosts = (requisicao, resposta) => {
  resposta.status(200).json(postModel);
};

// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const obterIdPost = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const post = postModel.find((post) => post.id == id);

  resposta.json(post);
};

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const obterTituloPost = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = postModel.find((post) => post.titulo == titulo);

  resposta.json(baseDeDados);
};

const criarPost = (requisicao, resposta) => {
  const { titulo, conteudo, etiqueta } = requisicao.body;

  const novoPost = {
    //utilizando o helper
    id: helper.obterNovoValor(postModel),
    titulo: titulo,
    conteudo: conteudo,
    etiqueta: etiqueta,
    //utilizando o helper
    dataCriacao: helper.novaData(postModel),
  };

  postModel.push(novoPost);

  resposta.status(201).json(novoPost);
};

const deletarPost = (requisicao, resposta) => {
  const { id } = requisicao.params;

  let postsFiltrados = postModel.filter((post) => {
    return post.id == id;
  })[0];

  const index = postModel.indexOf(postsFiltrados);

  postModel.splice(index, 1);

  resposta.json(postModel);
};

module.exports = {
  obterPosts,
  obterIdPost,
  obterTituloPost,
  criarPost,
  deletarPost,
};
