console.log('SCRIPTS.JS IS HERE TOO');

$(function() {

  // render post function
  var renderPost = function( post ) {
    var $newPost = $( '.post-template' ).clone();
    $newPost.removeClass( 'post-template' );
    $newPost.addClass('post');
    $newPost.find( '.title' ).text( post.title );
    $newPost.find( '.author' ).text( post.author );
    $newPost.find( '.content' ).text( post.content );
    $newPost.find( '.toss-post' ).data('id', post._id);
    $newPost.prop( 'id', post._id );
    return $newPost;

  }

  // Go and get all my adopted puppies
  postsAPI.get().done(function( data ) {
    var $postsContainer = $( '.blog-posts' );
    data.posts.forEach(function( post ) {
      $postsContainer.append( renderPost( post ) );
    });
  });

  // Listen to events
  $( '.blog-posts' ).on('click', '.toss-post', function(e) {
    e.preventDefault();
    var post = $( this );
    postsAPI.remove( post.data( 'id' ) ).done(function(data, status, jqXHR) {
      if (jqXHR.status === 204) {
        $('#' + post.data( 'id' )).fadeOut(1000, function() {
          $(this).remove();
        });
      }else {
        alert('error removinging post!');
      }
    });
  });

  $( '#make-post' ).on('submit', function(e) {
    e.preventDefault();
    var payload = $('#make-post').serializeObject();

    postsAPI.makePost( payload ).done(function( post, status, jqXHR ) {
      var $postsContainer = $( '.blog-posts' );
      var $newPost = renderPost( post );
      $postsContainer.append( $newPost );
      $newPost.hide().fadeIn(1000, function() {
        $(this).css('display', 'inline-block');
      });
    });

  });

});
