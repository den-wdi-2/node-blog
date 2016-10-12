console.log('AND APIRESOURCES.JS TOO');

// creating namespace for modularity
var postsAPI = postsAPI || {};


var makeAjaxCall = function( method, url, payload ) {

  return $.ajax({
    method: method || 'get',
    data: payload || {},
    url: url
  });
}

// GET request to /
postsAPI.get = function() {
  return makeAjaxCall('get','/api/posts');
}

// POST request to /
postsAPI.makePost = function( post ) {
  return makeAjaxCall('post','/api/posts', post);
}

// PUT request to /:id
postsAPI.update = function( postId, changes ) {
  var url = '/api/posts/' + postId;
  return makeAjaxCall('put', url, changes);
}

// DELETE request to /:id
postsAPI.remove = function( postId ) {
  var url = '/api/posts/' + postId;
  return makeAjaxCall('delete', url);
}
