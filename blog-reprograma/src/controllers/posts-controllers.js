const postModel = require("../models/posts-models");
const helper = require("../helpers/helper");

const getAll = (req, res) => {
    res.status(200).json(postModel);
};

const getById = (req, res) => {
    const { id } = req.params;
    res.status(200).json(postModel.find((post) => post.id == id));
};

const createPost = (req, res) => {
    let { title, content, tag } = req.body;
    
    let newPost = {
    //using helper
        id: helper.getNewValue(postModel),
        creationDate: helper.newDate(postModel),
        title: title,
        content: content,
        tag: tag,
    };

    postModel.push(newPost);

    res.status(201).json(newPost);
};

const deletePost = (req, res) => {
    const { id } = req.params;

    // delete postModel[id];
    postModel.filter(post => post.id != id);
    res.json({ mensagem: "Post deletado com sucesso!" });
};

module.exports = {
    getAll,
    getById,
    createPost,
    deletePost,
};
