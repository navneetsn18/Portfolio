const express = require('express');
var app = express();
const path = require('path');

app.use('/public', express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));
app.use('/cv', express.static('cv'));

app.get("/contact", function(req, res) {
    res.sendFile('./public/contact.html', {
        root: path.join(__dirname + '/')
    });
});

app.get("/about", function(req, res) {
    res.sendFile('./public/about.html', {
        root: path.join(__dirname + '/')
    });
});

app.get("/project", function(req, res) {
    res.sendFile('./public/project.html', {
        root: path.join(__dirname + '/')
    });
});

app.get("/", function(req, res) {
    res.sendFile('./public/portfolio.html', {
        root: path.join(__dirname + '/')
    });
}).listen(process.env.PORT || 3000);
console.log("Hey! I m Up.")