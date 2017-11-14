
var audioElm = document.getElementById('mozart');
var buttonStop = document.getElementById('stop');

var funcStop = function(){
  audioElm.pause();
}
buttonStop.addEventListener('click', funcStop);

audioElm.setAttribute('loop', true);
audioElm.play();
