const postagemModel = require('../models/postagens-models');
const helper = require('../helpers/helper');

const getPostagens = (requisicao, resposta) =>{
  resposta.status(200).json(postagemModel);
}

const inserirPostagem = (requisicao, resposta) => {
  let { titulo, conteudo, etiquetas } = requisicao.body;

   let novaPostagem ={
     //utilizando o helper
     id:  helper.obterNovoValor(postagemModel),
     dataCriacao: helper.novaData(postagemModel),
     titulo: titulo,
     conteudo: conteudo,
     etiquetas: etiquetas, 
     //utilizando o helper    
   }

   postagemModel.push(novaPostagem);

   resposta.status(201).json(novaPostagem);
}

const deletarPostagem = (requisicao, resposta) =>{
  const { id } = requisicao.params;

 postagemModel.filter(postagem => postagem.id != id);

  resposta.json({ mensagem: "Post deletado com sucesso!"})
}
  

module.exports = {
  getPostagens,
  inserirPostagem,
  deletarPostagem  
}