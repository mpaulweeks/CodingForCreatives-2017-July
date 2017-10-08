CFC = window;
CFC.Comments = {};

CFC.Comments.Get = function (key, callback){
  const url = `http://postboard.mpaulweeks.com/comments/cfc/${key}`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      callback(json);
    });
}

CFC.Comments.GenerateHtml = function (comments){
  let commentHtml = '';
  comments.forEach(function (c){
    commentHtml += `
      <div class="comment-container">
        <a class="comment-delete" href="http://postboard.mpaulweeks.com/delete/comment/cfc/${c.key}/${c.id}"></a>
        <div class="comment-name">${c.name}</div>
        <div class="comment-text">${c.text}</div>
      </div>
    `;
  });
  if (commentHtml.length === 0){
    commentHtml = `
      <div class="comments-empty">
        Nobody has left a comment yet.
      </div>
    `;
  }
  return `
    <div class="comments-top-container">
      <div class="comments-top-header">Comments</div>
      ${commentHtml}
    </div>
  `;
}

CFC.Comments.GetAndDisplay = function (key){
  CFC.Comments.FilterAndDisplay(key, "comments-view", function (comments){
    return comments;
  });
}

CFC.Comments.FilterAndDisplay = function (key, selectorId, filterFunc){
  CFC.Comments.Get(key, function (comments){
    const filtered = filterFunc(comments);
    const commentHtml = CFC.Comments.GenerateHtml(filtered)
    document.getElementById(selectorId).innerHTML = commentHtml;
  });
}

CFC.Comments.Setup = function (key){
  if(!!window.performance && window.performance.navigation.type === 2)
  {
    // got here via back button, force reload
    window.location.reload();
  } else {
    var formElm = document.getElementById("comments-form");
    formElm.setAttribute("method", "post");
    formElm.setAttribute("action", `http://postboard.mpaulweeks.com/comments/cfc/${key}`);
    CFC.Comments.GetAndDisplay(key);
  }
}
