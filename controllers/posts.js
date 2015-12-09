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
  // let req.body = reqBody;
  let post = new Post(req.body);
  console.log(post);
  if (post.title == undefined) {
    console.log("No request body sent to createPost in posts.js")
    return;
  } else {
    post.upvotes = 0;
    post.save(function(error) {
      if (error) res.send({message: 'Post not saved: ' + error});
      res.send({post: post});
      console.log('new post saved')
    });
  }
}

///// GET - specific post - TEST
function getPost(req, res) {
  console.log('inside viewPost')
  let id = req.params.id;
  Post.findById({_id: id}, function (error, post) {
    if (error) res.send({message: 'Post not found: ' + error});
    res.send({post: post});
  });
}

///// UPDATE - edit post - TEST
function editPost(req, res) {
  let id = req.params.id;
  Post.findById({_id: id}, function(error, post) {
    if(error) res.send({message: 'Could not find post:' + error});
    if(req.body.title) post.title = req.body.title;
    post.save(function(error) {
      if(error) res.send({messsage: 'Could not update post:' + error});
      res.send({message: 'Post updated', post: post});
    });
  });
} // end editPost

///// UPDATE - upvote posts - TEST
function upvotePost(req, res) {
  let id = req.params.id;
  Post.findById({_id: id}, function(error, post) {
    if(error) res.send({message: 'Could not find post:' + error});
    post.upvotes = post.upvotes++;
    post.save(function(error) {
      if(error) res.send({messsage: 'Could not update post:' + error});
      res.send({message: 'Post updated', post: post});
    });
  });
} // end upvotePost


///// DELETE
function deletePost(req, res) {
  let id = req.params.id;
  Post.remove({_id: id}, function(error) {
    if(error) res.send({message: 'Could not find post:' + error});
    res.send({messge: 'Post deleted'});
  });
} // end deletePost

module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  getPost: getPost,
  editPost: editPost,
  upvotePost: upvotePost,
  deletePost: deletePost
}



// console.logs will display in terminal
