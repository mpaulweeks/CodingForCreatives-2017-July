// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;
var factoryCount = 0;
var factoryCost = 25;
var totalCookieCount = 0;

var spanCookieCount = document.getElementById("cookie-count");
var spanTotalCookieCount = document.getElementById("total-cookie-count");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanGrandmaCost = document.getElementById("grandma-cost");
var spanFactoryCount = document.getElementById("factory-count");
var spanFactoryCost = document.getElementById("factory-cost");
var buttonBuyFactory = document.getElementById("buy-factory");

var divMessage = document.getElementById("message");

var funcUpdateHTML = function(){
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanGrandmaCost.innerHTML = grandmacost;
  spanFactoryCount.innerHTML = factoryCount;
  spanFactoryCost.innerHTML = factorycost;
  spanTotalCookieCount.innerHTML = totalCookieCount;
if (cookieCount > 5){
  divMessage.innerHTML = "You are one smart cookie!"
}
if (cookieCount > 20){
  divMessage.innerHTML = "I smell success in your future!"
}
if (cookieCount > 45){
  divMessage.innerHTML = "Sweeeeeet, bro!!!!"
}
if (cookieCount > 99){
  divMessage.innerHTML = "You got 99 problems, but bakin' ain't one!"
}
}
var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  totalCookieCount = totalCookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if (cookieCount >= grandmaCost) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    grandmaCost = grandmaCost * 2;
  }
}

var funcBuyFactory = function(){
  if (cookieCount >= factoryCost) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount + 1;
    funcUpdateHTML();
    factoryCost = factoryCost * 3;
  }
}
var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount;
  totalCookieCount = totalCookieCount + grandmaCount;
  cookieCount = cookieCount + (factoryCount * 100);
  totalCookieCount = totalCookieCount + (factoryCount * 100);
  funcUpdateHTML();
}

buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonBuyFactory.addEventListener('click', funcBuyFactory);
setInterval(funcLoop, 1000);
