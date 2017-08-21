
window.Tester(function(T){
  T.assert(
    'True is true?',
    true,
    'Data for true',
  );
  T.refute(
    'False is false?',
    false,
    'Data for false',
  );
});
