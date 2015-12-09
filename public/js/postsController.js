'use strict'
angular.module('StudyGroup', [])
  .controller('PostsController', PostsController)
PostsController.$inject = ['$http']; // use $http to make requests

function PostsController($http) {
  let self = this;
  self.all = [];
  self.createPost = createPost;
  self.newPost = {};
  self.getPosts = getPosts;
  self.viewPost = viewPost; // must match function name below
  self.singlePost = {};
  self.deletePost = deletePost;

  getPosts();

///// display all posts
  function getPosts() {
    $http // ajax call
      .get('http://localhost:3000/posts')
      .then(function(response) { // promise w/ chained response
        self.all = response.data.posts; // receive json object
      });
  } // end getPosts

///// add post
  function createPost() {
    console.log("inside createPost")
    console.log(self.all)
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(response) {
        getPosts();
      });
      self.newPost = {}; // clear new post
  } //end addPost

///// show single post
  function viewPost(post) {
    console.log("inside viewPost - postsController.js")
    console.log(post)
    console.log(post._id)
    $http
      .get('http://localhost:3000/posts/' + post._id)
      // .get('http://localhost:3000/posts/5665deb67e9e5ba31eb48499')
      .then(function(response) {
      self.singlePost = response.data.post[0];
    });
    // self.singlePost = {};
} //end viewPost

///// edit post - TEST
  function editPost(post) {
    $http
      .put('http://localhost:3000/posts/' + post._id, self.singlePost)
      .then(function(response) {
        getPosts();
      });
  } // end editPost

///// upvote post - TEST
function upvotePost(post) {
  $http
    .put('http://localhost:3000/posts/' + post._id)
    .then(function(response) {
      getPosts();
    });
  }

///// delete post
function deletePost(post) {
  console.log('inside deletePost')
  $http
    .delete('http://localhost:3000/posts/' + post._id)
    .then(function(response) {
      getPosts();
    });
  } // end deletePost
} // end PostsController

// console.logs display in browser console
