
var count = 0;
var counter = document.getElementById("counter");
var bakeButton = document.getElementById("bake");

var bakeCookie = function(){
  count = count + 1;
  counter.innerHTML = count;
}

bakeButton.addEventListener('click', bakeCookie);
