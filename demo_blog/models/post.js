var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  content: { type: String, required: true }
}, {timestamps: true });


module.exports = mongoose.model('Post', postSchema);
