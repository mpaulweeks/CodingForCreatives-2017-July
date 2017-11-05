var currIndex = 0;
var elms = Array.from(document.getElementsByClassName('panel'));

var shiftLeft = function(){
  if (currIndex < elms.length - 1){
    currIndex = currIndex + 1;
    elms[currIndex].classList.add('visible');
  }
}
var shiftRight = function(){
  if (currIndex > 0){
    elms[currIndex].classList.remove('visible');
    currIndex = currIndex - 1;
  }
}
var handleKeyDown = function(event){
  console.log(event);
  if (event.code === 'ArrowLeft') {
    shiftLeft();
  }
  if (event.code === 'ArrowRight') {
    shiftRight();
  }
};

document.getElementById("left").addEventListener('click', shiftLeft);
document.getElementById("right").addEventListener('click', shiftRight);
document.addEventListener('keydown', handleKeyDown);
elms[currI].classList.add('visible');
