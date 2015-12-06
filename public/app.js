angular.module('Post', []). controller('PostCtrl', PostCtrl)

function PostCtrl() { 
  this.helloWorld = "Hello world"
  return this;
}
