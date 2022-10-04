const PostController = require('../controllers/post.controller');
module.exports = function (app) {
    app.get('/api/post', PostController.getPost);
    app.post('/api/post/new', PostController.createPost);
    app.get('/api/post/:id', PostController.getOnePost);
    app.put('/api/post/edit/:id', PostController.updatePost);
    app.delete('/api/post/:id', PostController.deletePost);
}