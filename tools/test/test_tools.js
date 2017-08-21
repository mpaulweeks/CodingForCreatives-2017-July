
window.Tester(function (T){
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

  T.assertEqual(
    'Caeser.ShiftChar A to C',
    'C',
    window.Caeser.ShiftChar('A', 2),
  );
  T.assertEqual(
    'Caeser.ShiftChar B to A',
    'A',
    window.Caeser.ShiftChar('B', -1),
  );
  T.assertEqual(
    'Caeser.ShiftChar A around to A again',
    'A',
    window.Caeser.ShiftChar('A', 26),
  );
  T.assertEqual(
    'Caeser.ShiftChar forces capital',
    'A',
    window.Caeser.ShiftChar('a', 0),
  );

  T.assertEqual(
    'Caeser.ShiftWord MOON to ACCB',
    'ACCB',
    window.Caeser.ShiftWord('MOON', -12),
  );
});
