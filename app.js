var express = require('express');
var app = express();
var person = require('./person.js');

//For static files, css/images/javascript/html
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/getPeopleData/:count', function (req, res) {
    //console.log('getPeopleData');
    person.getPeople(req.params.count, function(err, people){
        res.send(people);
    });
});

app.listen(3000, function () {
    console.log('App Listening on port 3000.')
});