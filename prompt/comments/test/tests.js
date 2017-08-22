
CFC.Comments.FilterAndDisplay = function(){}

CFC.Tester(function (T){
  T.assertCollectionEqual(
    'filterAdminComments on empty returns empty',
    [],
    filterAdminComments([]),
  );

  T.assertCollectionEqual(
    'filterDuplicateComments on empty returns empty',
    [],
    filterDuplicateComments([]),
  );
});
