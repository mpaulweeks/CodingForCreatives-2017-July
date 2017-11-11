
var charSet = 'abcdefghijklmnopqrstuvwxyz';
var divOutput = document.getElementById('output');
var speedBump = 5;

var print = function(message){
  // console.log(message);
  divOutput.innerHTML = `<pre>${message}</pre>` + divOutput.innerHTML;
}

var printIndexes = function(indexes, guess){
  var message = '';
  for (var i = 0; i < guess.length; i++){
    if (i == 0 || guess.length - i > speedBump){
      message += guess[i];
    } else {
      message += '?';
    }
  }
  print(`checked up to ${message}`);
}

var bruteForce = function(checkFunc, chars, indexes){
  // console.log('new process');

  var opts = chars.length;
  var newProcess = false;
  while (!newProcess){
    var guess = '';
    for (var i = 0; i < indexes.length; i++){
      guess = chars[indexes[i]] + guess;
    }

    if (checkFunc(guess)){
      print('--- success ---')
      print(guess);
      return;
    }

    var pos = 0;
    var carry = true;
    while (carry){
      if (pos == indexes.length){
        indexes.push(0);
        carry = false;
      } else {
        if (pos == indexes.length - 1 || pos >= 5){
          printIndexes(indexes, guess);
        }
        if (pos >= 5 || (pos == 4 && indexes.length == 5)){
          newProcess = true;
        }

        indexes[pos] += 1;
        if (indexes[pos] >= opts){
          indexes[pos] = 0;
          pos += 1;
          carry = true;
        } else {
          carry = false;
        }
      }
    }
  }

  setTimeout(function(){
    bruteForce(checkFunc, chars, indexes);
  }, 0);
}

// var params = window.location.search.substr(1).split("=");
// var password = params[params.indexOf('password') + 1] || 'hunter';
// divTarget.innerHTML = password;

document.getElementById('pass-form').addEventListener('submit', function(evt){
  evt.preventDefault();
  divOutput.innerHTML = 'starting up...';
  var password = document.getElementById('target').value;
  var checkFunc = function(guess){
    return guess === password;
  }
  setTimeout(function(){
    bruteForce(checkFunc, charSet, [0]);
  }, 0);
});
