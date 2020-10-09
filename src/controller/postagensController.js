const helper = require('../helpers/helper.js');
const postagens = require('../model/postagens.js');

const getAll = (req, res) => {

    res.status(200).send(postagens);
}

const getById = (req, res) => {
    const { id } = req.params;
    findId = postagens.find(postagem => postagem.id == id);
    console.log(findId);
    res.status(200).send(findId);

}

const getByTitulo = (req, res) => {
    const titulo = req.query.titulo;
    findTitulo = postagens.find(postagem => postagem.titulo == titulo);
    console.log(findTitulo);
    res.status(200).send(findTitulo);
}
const criarPostagem = (req, res) => {
    const { titulo, conteudo, tags } = req.body;

    let novaPostagem = {
        id: helper.idIncremento(postagens),
        dataCriacao: helper.dataMomento(),
        titulo: titulo,
        conteudo: conteudo,
        tags: tags
    }

    postagens.push(novaPostagem);

    res.status(201).json(novaPostagem);
}

const deletarPostagem = (req, res) => {
    const id = req.params.id;
    res.status(200).send({ mensagem: 'deletado com sucesso' });
}

module.exports = { getAll, getById, getByTitulo, criarPostagem, deletarPostagem }