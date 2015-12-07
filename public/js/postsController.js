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
    // console.log(response.body);
    console.log(self.all)
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(response) {
        getPosts();
      });
      self.newPost = {}; // clear new post
  } //end addPost
} // end PostsController
