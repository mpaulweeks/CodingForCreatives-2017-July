
var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;

var spanCookieCount = document.getElementById("cookie-count");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanGrandmaCost = document.getElementById("grandma-cost");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");

var funcUpdateHTML = function(){
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanGrandmaCost.innerHTML = grandmaCost;
}

var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if (cookieCount >= grandmaCost) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    grandmaCost = grandmaCost * 2;
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
funcUpdateHTML();
