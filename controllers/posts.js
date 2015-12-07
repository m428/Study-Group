'use strict'
let Post = require('../models/Post');
let routes = require('../routes/routes');
let jwt = require('jsonwebtoken');
// install express-jwt to protect routes
let express = require('express');
let app = express();


///// GET
function getAllPosts(req, res) {
  Post.find(function(error, posts) {
    if (error) res.send({message: 'Posts not found'})
    res.send({posts: posts});
  });
}

///// POST
function createPost(req, res) {
  console.log('in POST in controllers/posts.js');
  console.log(req.body);
  let post = new Post(req.body);
  post.upvotes = 0;
  post.save(function(error) {
    if (error) res.send({message: 'Post not saved: ' + error});
    res.send({post: post});
  });
}

///// GET - specific post
function getPost(req, res) {
  let id = request.params.id;
  Post.findById({_id: id}, function (error, post) {
    if (error) res.send({message: 'Post not found: ' + error});
    res.send({post: post});
  });
}

///// UPDATE
// function editPost

///// UPDATE
// function upvotePost

///// DELETE
// function deletePost

module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  getPost: getPost
}
// editPost
// upvotePost
// deletePost
