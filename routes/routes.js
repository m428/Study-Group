///// api routes
'use strict';
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let postsController = require('../controllers/posts');
let Post = require('../models/Post');


router.route('/posts')
///// GET show all posts
  .get(postsController.getAllPosts)
///// POST create new post
  .post(postsController.createPost)

router.route('/posts/:id')
///// GET specific post
  .get(postsController.getPost) // TEST
///// UPDATE post
  .put(postsController.editPost) // TEST
///// UPDATE upvote post
  .patch(postsController.upvotePost)
///// DELETE post
  .delete(postsController.deletePost)

module.exports = router
