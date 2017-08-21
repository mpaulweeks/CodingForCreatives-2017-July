
window.GetComments = function(key, callback){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
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

window.GenerateCommentHtml = function(comments){
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

window.GetAndDisplayComments = function(key, selectorId){
  window.GetComments(key, function(comments){
    document.getElementById(selectorId).innerHTML = GenerateCommentHtml(comments);
  });
}
