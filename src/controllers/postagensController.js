const postagemModel = require('../models/postagensModels');
const helper = require('../helpers/helper');


const getPostagens = (req,res) =>{
    res.status(200).json(postagemModel);

};

const getPostagemId = (req,res) => {
    const id = req.params.id
    const postagem = postagemModel.find(postagem => postagem.id == id)

    res.json(postagem)
};

 const createPost = (requisicao, resposta) =>{

   const { titulo, conteudo, etiquetas } = requisicao.body;

   const novoPost ={
     
     id:  helper.novoId(postagemModel),
     dataCriacao: helper.novaData(postagemModel),
     titulo: titulo,
     conteudo: conteudo, 
     etiquetas: etiquetas, 
        
   }

   postagemModel.push(novoPost);

   resposta.status(401).json(novoPost);
 }

 const deletarPost = (requisicao, resposta) =>{
  const { id } = requisicao.params;

  let postFiltradas = postagemModel.filter(postagem => {
    return postagem.id == id;
  })[0];

  const index = postagemModel.indexOf(postFiltradas);
  
  postagemModel.splice(index, 1)

  resposta.json(postagemModel)
 }

 
 
module.exports = {
    getPostagens,
    getPostagemId,
    createPost,
    deletarPost
}


