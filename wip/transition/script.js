
var currI = 0;
var elms = Array.from(document.getElementsByClassName('panel'));

var fixPosition = function(){
  for (var i = 0; i < elms.length; i++){
    if (i < currI){
      elms[i].style.left = "-100%";
    }
    if (i == currI){
      elms[i].style.left = "0%";
    }
    if (i > currI){
      elms[i].style.left = "100%";
    }
  }
}
var shiftLeft = function(){
  if (currI < elms.length - 1){
    currI = currI + 1;
    fixPosition();
  }
}
var shiftRight = function(){
  if (currI > 0){
    currI = currI - 1;
    fixPosition();
  }
}

fixPosition();
document.getElementById("left").addEventListener('click', shiftLeft);
document.getElementById("right").addEventListener('click', shiftRight);
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    shiftLeft();
  }
  if (event.code === 'ArrowRight') {
    shiftRight();
  }
});
