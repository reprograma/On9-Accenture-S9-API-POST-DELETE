const helper = require('../helpers/helper.js');
const postagens = require('../models/postagens.js');

const getAll = (req, res) => {
    res.send(postagens);
};

const getById = (req, res) => {
    const {id} = req.params;
    findId = postagens.find(postagem => postagem.id == id);
    console.log(findId);
    res.send(findId);
};

const getByTitulo = (req, res) => {
    const titulo = req.query.titulo;
    findTitulo = postagens.find(postagem => postagem.titulo == titulo);
    console.log(findTitulo);
    res.send(findTitulo);
};

const criarPostagem = (req, res) => {
    const {titulo, conteudo, tags} = req.body;

    let novaPostagem = {
        id: helper.autoincremento(postagens),
        dataCriacao: helper.dataAtual(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    };

    postagens.push(novaPostagem);

    res.json(novaPostagem);
};

const deletarPostagem = (req, res) => {
    const id = req.params.id;
    res.send({mensagem: 'Postagem deletada com sucesso!'});
};

module.exports = {
    getAll,
    getById,
    getByTitulo,
    criarPostagem,
    deletarPostagem
};