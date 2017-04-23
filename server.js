// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var fs = require('fs');

var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
    fs.readFile('../api-design-node/index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.get('/data', function(req, res) {
    res.send(jsonData);
});

app.listen(3000, function() {
    console.log('Server running on 3000');
});