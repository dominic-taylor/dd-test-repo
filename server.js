var express = require('express')
var app = express()

var drinks = require('./exercises/1/drinks.json');

app.get('/', function (req, res) {
  res.send('Hello World!. Check out /3000 for the bar!')
})

app.get('/drinks', function (req, res) {
  res.json(drinks)
})

app.listen(3000, function () {
  console.log('Now serving drinks on port 3000!')
})