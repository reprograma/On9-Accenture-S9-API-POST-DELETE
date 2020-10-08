const postagemModel = require('../models/postagens-models');

const getPostagens = (requisicao, resposta) =>{
  resposta.status(200).json(postagemModel);
}

const insertPostagem = (requisicao, resposta) => {
    //const { postagem } = requisicao.query;
    console.log(requisicao.body)
}

 // const { id } = requisicao.params;
  
  //const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

  //resposta.status(200).json(tarefa);


module.exports = {
  getPostagens,
  insertPostagem  
}