const postModel = require('../models/blog-models');
const helper = require('../helpers/helper');

// get de todas postagens
const obterPost = (req, res) =>{
    res.status(200).json(postModel);
}

// Obter post pelo id
// /:id
const obterIdPost = (req, res) =>{
    const { id } = req.params;
    const postagem = postModel.find(post => post.id == id);

    res.json(postagem)
}

//Criando postagens
const criarPost = (req, res) =>{
    let {dataCriacao, titulo, conteudo, tags} = req.body;

    let novoPost = {
        id: helper.obterNovoValor(postModel),
        dataCriacao: helper.novaData(postModel),
        titulo: titulo,
        conteudo: conteudo,
        tags: []
    }
    postModel.push(novoPost);

    res.status(201).json(novoPost)
}

const deletarPost = (req, res) =>{
    const { id } = req.params;
 
   postModel.filter(post => post.id != id);
 
    res.json({ mensagem: "Postagem deletada com sucesso!"})
  }


module.exports={
    obterPost,
    obterIdPost,
    criarPost,
    deletarPost
}