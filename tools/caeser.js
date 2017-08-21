window.Caeser = {};

window.Caeser.ShiftChar = function (char, delta){
  var charCode = char.toUpperCase().charCodeAt();
  var offset = 'A'.charCodeAt();
  charCode = charCode + delta;
  charCode = ((charCode - offset + 260) % 26) + offset;
  return String.fromCharCode(charCode);
}

window.Caeser.ShiftWord = function (word, delta){
  var shifted = "";
  for (var i = 0; i < word.length; i++){
    shifted += window.Caeser.ShiftChar(word.substring(i, i+1), delta);
  }
  return shifted;
}
