var express = require('express');
var router = express.Router();

var Post = require('../../models/post');

// Get
router.get('/', function(req, res){
  Post.find({}, function(err, dbPosts){
    res.json({ posts: dbPosts})
  });
});

// Show One
router.get('/:id', function(req, res){
  Post.findById( req.params.id, function( err, dbPosts){
    res.json( dbPost );
  });
});

// Post
router.post('/', function(req, res){
  Post.create(req.body.post, function(err, post){
    res.json(post);
  });
});

// Put
router.put('/:id', function(req, res) {
  console.log('updating!');
  Post.findByIdAndUpdate(req.params.id, req.body.posts , { new: true }, function(err, posts) {
    res.json(post);
  });
});


// Delete

router.delete('/:id', function(req, res) {
  console.log('deleting!');
  Post.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
