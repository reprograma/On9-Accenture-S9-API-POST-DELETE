const postagemModel = require('../models/postagens-models');


const getPostagens = (requisicao, resposta) =>{
    resposta.status(200).json(postagemModel)
}


const criarPostagens = (requisicao, resposta) =>{
    const {titulo, conteúdo, Tags} = requisicao.body;
    const postagemId = postagemModel.map(post => post.id == id);
    const novoId = postagemId.length > 0 ? Math.max.apply(Math, postId) + 1 : 1;

    const novaPostagem = {
        id : novoId,
        dataCriacao : new Date(),
        titulo : titulo,
        conteúdo : conteúdo,
        tags : Tags,
    }

    postagemModel.push(novaPostagem);

    resposta.status(201).json(novaPostagem)
}


const deletarPostagens = (requisicao, resposta) => {
    const {id} = requisicao.params;

    postagemModel.filter(post => post.id != id);

    resposta.status(204).json({mensagem: "Postagem deletada com sucesso! :D"})
}

module.exports = {
    getPostagens,
    criarPostagens,
    deletarPostagens
}