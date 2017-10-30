// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;

var spanCookieCount = document.getElementById("cookie-count");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");

var funcUpdateHTML = function(){
  spanCookieCount.innerHTML = cookieCount;
}

var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if (cookieCount >= grandmaCost) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    funcUpdateHTML();
  }
}
var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount;
  funcUpdateHTML();
}

buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
setInterval(funcLoop, 1000);
