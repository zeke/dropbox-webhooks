"use strict"

require("dotenv").load()
var app = require("express")()

app.get('/', function(req, res) {
  res.send(req.query.challenge)
})

app.post('/', function(req, res) {
  console.log(req.body)
  res.json(req.body)
})

var server = app.listen((process.env.PORT || 5000), function() {
  console.log('Listening on port %d', server.address().port)
})
