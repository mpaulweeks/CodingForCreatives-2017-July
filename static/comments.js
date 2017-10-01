CFC = window;
CFC.Comments = {};

CFC.Comments.Get = function (key, callback){
  // todo rewrite with fetch
  // https://webdesign.tutsplus.com/tutorials/an-example-of-ajax-with-vanilla-javascript--cms-25763
  const request = new XMLHttpRequest();
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

CFC.Comments.SetupComments = function (key){
  const onSuccess = function(){
    CFC.Comments.GetAndDisplay(key);
  };
  const onSubmit = function(event){
    event.preventDefault();
    const formData = new FormData(document.getElementById('comments-form'));
    const postData = {
      "key": key,
      "no_redirect": true,
    };
    for (var entry of formData.entries()){
      postData[entry[0]] = entry[1];
    }
    const request = new Request("http://postboard.mpaulweeks.com/comments", {
      method: 'POST',
      body: Object.keys(postData).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(postData[k])}`).join('&'),
    });
    console.log(request);
    CFC.req = request;
    fetch(request).then(onSuccess);
  }
  document.getElementById('comments-form').addEventListener("submit", onSubmit, false);
  onSuccess();
}
