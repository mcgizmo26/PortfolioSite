const cors = require('cors');
const express = require('express')
const config = require('./config.js');

const app = module.exports = express();

app.use(express.static(__dirname + './../public'));

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: './public'});
})

app.listen(config.port, function() { console.log('Server initiated on port', config.port); })
