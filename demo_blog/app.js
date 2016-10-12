var express     = require('express');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/posts_api');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(morgan('dev'));

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/api/posts');

app.use('/', indexRouter);
app.use('/api/posts', postsRouter);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


app.listen(8080, function(){
  console.log("HERE I AM.");
});
