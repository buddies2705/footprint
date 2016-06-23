var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var url = req.param('url');
	console.log(url)
	res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({'count':'1'}));
});

app.listen(process.env.PORT || 4730);
