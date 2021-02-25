var express = require('express');
var app = express();

console.log("Hello World");
let indexPath = __dirname + './views/index.html';
let assetsPath = __dirname + './public';


app.use('/public', express.static(assetsPath));
app.get('/', (req, res) => { res.sendFile(indexPath); });
app.get('/json', (req, res) => { res.json({'message': 'Hello json'}); });


































 module.exports = app;
