'use strict'
const express = require('express');
const app = express();
const logger = require('morgan');
const newman = require('newman');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// require routes files

///// set up morgan and body-parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/public'));

///// include angular and underscore
app.use('/scripts', express.static(__dirname + '/node_modules/angular'))
app.use('/scripts', express.static(__dirname + '/node_modules/underscore'))

///// require and connect database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/study-group');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error'));
db.once('open', (callback) => {
  console.log('Database connected');
});

///// test route
app.get('/', function(req, res) {
  res.send('Hit test route');
});











///// server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const post = server.address().port;
  console.log('Server running');
});
