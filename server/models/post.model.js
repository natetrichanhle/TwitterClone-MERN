const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [
            true,
            'Description is required'
        ]
    }
}, { timestamps: true });

module.exports.Post = mongoose.model('Post', PostSchema);