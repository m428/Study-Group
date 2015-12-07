'use strict';
let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  title: {type: String, required: true}, // may not need to require the title
title: String,
  topic: String,
  upvotes: Number,
  created_at : {type: Date},
  updated_at : {type: Date}
});

module.exports = mongoose.model('Post', postSchema);
