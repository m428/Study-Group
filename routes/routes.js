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
  .get(postsController.getPost)
// ///// UPDATE post
// .patch(postsController.editPost);
// ///// UPDATE upvote post
// .patch(postsController.upvotePost);
// ///// DELETE
// .delete(postsController.deletePost);

module.exports = router
