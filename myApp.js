var express = require('express');
var app = express();

console.log("Hello World");
let indexPath = __dirname + './views/index.html';
let assetsPath = __dirname + './public';

express.static(assetsPath);

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});


































 module.exports = app;
