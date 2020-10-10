const postagem = require('../models/postagens-models');
const helper = require('../helpers/postagens-helpers');


const criarPostagem = (req, res) =>{
    const {titulo, conteudo, etiquetas} = req.body;

    const NovaPostagem = {
        id: helper.obterNovoID(postagem),
        dataCriacao: helper.novaData(postagem),
        titulo: titulo,
        conteudo: conteudo,
        etiquetas: etiquetas
    }
    postagem.push(NovaPostagem);

    res.status(201).json(NovaPostagem);
}

const deletarPostagem = (req,res) =>{
    const {id} = req.params;
    
    let postagensFiltradas = postagem.filter( postagem => {
        return postagem.id == id;
    })[0];
    const index = postagem.indexOf(postagensFiltradas);
    postagem.splice(index, 1)
    res.json(postagem)
}

module.exports = {
    criarPostagem,
    deletarPostagem
}
