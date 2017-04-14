var express = require('express')
var app = express()

// should really use fs to read this...
var drinks = require('./exercises/1/drinks.json');

//can also use this so route would be 3000/1/drinks.json
// app.use(express.static('./exercises/1/'))


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/drinks', function (req, res) {
  res.json(drinks)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})