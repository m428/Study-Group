'use strict'
const express = require('express');
const app = express();
const logger = require('morgan');
const newman = require('newman');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const routes = require('./routes/routes');

///// set up morgan and body-parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/public'));

///// include angular and underscore
app.use('/scripts', express.static(__dirname + '/node_modules'))
app.use(routes);

///// require and connect database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/study-group');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error'));
db.once('open', (callback) => {
  console.log('Database connected');
});

///// server
const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const post = server.address().port;
  console.log('Server running');
  console.log("Express server", this.address().port, app.settings.env);
});
