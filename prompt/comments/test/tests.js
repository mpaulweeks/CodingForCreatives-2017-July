
CFC.Comments.FilterAndDisplay = function(){}

CFC.Tester(function (T){
  var exists = T.assert(
    'filterComments is defined',
    typeof filterComments !== 'undefined',
  );
  if (!exists){
    return
  }
  T.assertCollectionEqual(
    'filterComments on empty returns empty',
    [],
    filterComments([]),
  );
});
