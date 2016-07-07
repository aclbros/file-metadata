var express = require("express");
var multer = require("multer");
var path = require("path");
var upload = multer({ dest: 'public/upload'});

var app = express();

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/', upload.single('archive'), function(req, res) {
    res.send({ size: req.file.size });
    res.status(204).end();
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});