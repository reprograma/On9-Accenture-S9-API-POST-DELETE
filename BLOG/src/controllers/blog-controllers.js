const postModel = require('../models/post-models');

const getPost = (requisicao, resposta) =>{
  resposta.status(200).json(postModel);
}

// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const getIdPost = (requisicao, resposta) =>{
  const { id } = requisicao.params;
  
  const posts = postModel.find(post => post.id == id);

  resposta.status(200).json(post);

}

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler
const getPorTitulo = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  
  const post = postModel.find(post => post.titulo == titulo);

  resposta.status(200).json(post);

}



const criarPost = (requisicao, resposta) => {
  console.log("requisicao", requisicao);
  //const {body}  = requisicao;
  // const{titulo, conteudo, etiquetas} = body;

  const {titulo, conteudo, etiquetas} = requisicao.body;
  
  const postId = postModel.map(post => post.id == id);

  const novoId = postId.length > 0 ? Math.max.apply(Math, postId) + 1 :1;
  
  
  
  
  const novoPost = {
    id: novoId,
    titulo: titulo,
    conteudo: conteudo,
    etiquetas: etiquetas,
    dataCriacao: new Date()
  }

  postModel.push(novoPost);

  resposta.status(201).json(novoPost);

}


const deletarPost = (requisicao, resposta) => {
  const {id} = requisicao.params;

  const postModel.filter(post => post.id != id);

  if(!post) resposta.status(404).json({ mensagem: "Post não foi excluido"});

  resposta.status(204).json({ mensagem: "Post deletado com sucesso"});

 }


 module.exports = {
  getPost, 
  getIdPost,
  getPorTitulo,
  criarPost,
  deletarPost
}


