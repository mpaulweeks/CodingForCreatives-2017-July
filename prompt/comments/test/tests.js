
CFC.Comments.FilterAndDisplay = function(){}

CFC.Tester(function (T){
  var exists = T.assert(
    'filterAdminComments is defined',
    typeof filterAdminComments !== 'undefined',
  );
  if (!exists){
    return
  }
  T.assertCollectionEqual(
    'filterAdminComments on empty returns empty',
    [],
    filterAdminComments([]),
  );
});
