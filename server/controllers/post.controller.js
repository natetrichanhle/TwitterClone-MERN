const { Post } = require('../models/post.model');

module.exports.getPost = (request, response) => {
    Post.find().sort({"name" : 1})
        .then(post => response.json(post))
        .catch(err => response.json(err))
}

module.exports.createPost = (request, response) => {
    const { description } = request.body;
    Post.create({
        description
    })
        .then(post => response.json(post))
        .catch(err => response.status(400).json(err))
}

module.exports.getOnePost = (request, response) => {
    Post.findOne({ _id: request.params.id })
        .then(post => response.json(post))
        .catch(err => response.json(err))
}

module.exports.updatePost = (request, response) => {
    Post.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPost => response.json(updatedPost))
        .catch(err => response.json(err))
}

module.exports.deletePost = (request, response) => {
    Post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}