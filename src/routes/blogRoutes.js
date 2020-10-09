const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogControllers')


router.get('/all', blogController.getAll)
router.post('/blog', blogController.createPost)
router.delete('/post/:id', blogController.deletePost)


module.exports = router