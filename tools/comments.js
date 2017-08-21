window.Comments = {};

window.Comments.Get = function (key, callback){
  // https://webdesign.tutsplus.com/tutorials/an-example-of-ajax-with-vanilla-javascript--cms-25763
  var request = new XMLHttpRequest();
  request.onreadystatechange = function (){
    if(request.readyState === 4) {
      if(request.status === 200) {
        const comments = JSON.parse(request.responseText);
        callback(comments);
      }
    }
  };
  request.open('Get', `http://postboard.mpaulweeks.com/comments/${key}`);
  request.send();
}

window.Comments.GenerateHtml = function (comments){
  let commentHtml = '';
  comments.forEach(function (c){
    commentHtml += `
      <div class="comment-container">
        <div class="comment-name">${c.name}</div>
        <div class="comment-text">${c.text}</div>
      </div>
    `;
  })
  return `
    <div class="comments-top-container">
      <div class="comments-top-header">Comments</div>
      ${commentHtml}
    </div>
  `;
}

window.Comments.GetAndDisplay = function (key, selectorId){
  window.Comments.FilterAndDisplay(key, selectorId, function (comments){
    return comments;
  });
}

window.Comments.FilterAndDisplay = function (key, selectorId, filterFunc){
  window.Comments.Get(key, function (comments){
    var filtered = filterFunc(comments);
    var commentHtml = window.Comments.GenerateHtml(filtered)
    document.getElementById(selectorId).innerHTML = commentHtml;
  });
}
