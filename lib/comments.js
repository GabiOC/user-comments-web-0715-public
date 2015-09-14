'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here

function hideErrors(){
  $("#com-name-error").hide();
  $("#com-email-error").hide();
  $("#comment-error").hide();
}

function hideForm(){
  $("#add-comment").hide();
}

function addCommentListener(){
  $("#show-comment-form").click(function(){
    $("#add-comment").show();
  })
}

function cancelListener(){
  $("#cancel").click(function(){
    hideForm();
  })
}

function submitCommentListener(){
  $('input[type="submit"]').click(function(){
    if(!validName()){
      $("#com-name-error").show();
    }
    if(!validEmail()){
      $("#com-email-error").show();
    }
    if(!validComment()){
      $("#comment-error").show();
    }
    if(validName() && validEmail() && validComment()){
      addComment();
    }
  })
}

function validName(){
  return $("#comment-name").val().length > 3;
}

function validEmail(){
  var pattern = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/
  var email = $("#com-email").val()
  return (pattern.test(email));
}

function validComment(){
  return $("#comment").val().length > 1;
}

function addComment(){
  $("#posts").append('<div class="newcomment"><span class="name">' + $("comment-name").val() + '</span> <span class="email">' + $("com-email").val() + '</span> <span class="date">09/03/2012</span> <p class="comment">' + $("comment").val() + '</p></div>');
}
