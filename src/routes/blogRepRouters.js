const express = require('express');
const routers = express.Router();
const blogRepController = require('../controllers/blogRepControllers')

routers.get('/all', blogRepController.getAll)
routers.post('/blog', blogRepController.criarPost)
routers.delete('/post/:id', blogRepController.deletePost)

module.exports = routers