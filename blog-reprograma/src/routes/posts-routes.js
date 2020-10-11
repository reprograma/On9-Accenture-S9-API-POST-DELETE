const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts-controller');

/* @ route GET - posts
 @desc retornar todos os posts 
 @access Public 
 @endpoint http://localhost:porta/posts
*/
router.get('/posts', postsController.getPosts);



/* @ route GET - posts
 @desc retornar o post de acordo com o título
 @access Public 
 @endpoint http://localhost:porta/posts/titulo
*/
router.get('/posts/titulo', postsController.getPostByTitle);

/**@route POST
 * @desc criar postagem
 * @access Public
 * @endpoint http://localhost:porta/posts
 */
router.post('/posts', postsController.criarPost);


 /**@route DELETE posts
  * @desc  deletar postagem
  * @access Public
  * @endpoint http://localhost:porta/posts/:id
  */
router.delete('/posts/:id',postsController.deletePost);


/**@route GET - posts
 * @desc retornar o post de acordo com a id
 * @access Public
 * @endpoint http://localhost:porta/posts/:id
 */
router.get('/posts/:id', postsController.getPostById);

module.exports = router;
