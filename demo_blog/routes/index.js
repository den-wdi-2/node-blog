var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {title: 'OMG Welcome 2 My Lyfe.'});
})

module.exports = router;
