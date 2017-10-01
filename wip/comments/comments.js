
function filterAdminComments(comments){
  // return comments, excluding any where name === "admin"
  // your logic goes here
  return comments;
}

function filterDuplicateComments(comments){
  // return comments, excluding any where the same text appears more than once
  // your logic goes here
  return comments;
}

CFC.Comments.FilterAndDisplay('prompt', 'comments-view', filterAdminComments);
