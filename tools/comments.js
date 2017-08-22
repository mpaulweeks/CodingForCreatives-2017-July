CFC = window;
CFC.Comments = {};

CFC.Comments.Get = function (key, callback){
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

CFC.Comments.GenerateHtml = function (comments){
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

CFC.Comments.GetAndDisplay = function (key, selectorId){
  CFC.Comments.FilterAndDisplay(key, selectorId, function (comments){
    return comments;
  });
}

CFC.Comments.FilterAndDisplay = function (key, selectorId, filterFunc){
  CFC.Comments.Get(key, function (comments){
    var filtered = filterFunc(comments);
    var commentHtml = CFC.Comments.GenerateHtml(filtered)
    document.getElementById(selectorId).innerHTML = commentHtml;
  });
}
