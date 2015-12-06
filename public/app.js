'use strict'
angular.module('Post', []). controller('PostCtrl', PostCtrl)

function PostCtrl() {
  this.posts = [
    { title: 'post 1', upvotes: 5},
    { title: 'post 2', upvotes: 10},
    { title: 'post 3', upvotes: 15},
    { title: 'post 4', upvotes: 25},
    { title: 'post 5', upvotes: 0}
  ]

  this.addPost = function() {
    if (this.formPostTitle == undefined || this.formPostTitle == '' ) {
      console.log("IF " + this.formPostTitle + " the formPostTitle is null");
      return;
      } else
      this.posts.push({title: this.formPostTitle, upvotes: 0})
      this.formPostTitle = '';
      console.log("ELSE " + this.formPostTitle + " this is the formPostTitle is not null");
      return;
    } // end addPost
  return this;
} // end PostCtrl
