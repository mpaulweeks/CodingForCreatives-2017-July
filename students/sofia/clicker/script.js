// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;
var factoryCount = 0;
var factoryCost = 10;
var lifetimeCookieCount = 0;

var spanCookieCount = document.getElementById("cookie-count");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanGrandmaCost = document.getElementById("grandma-cost")
var spanFactoryCost = document.getElementById("factory-cost")
var spanFactoryCount = document.getElementById("factory-count")
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var buttonBuyFactory = document.getElementById("buy-factory")

var funcUpdateHTML = function(){
  if (cookieCount > 50){
    spanMessage.innerHTML = "Yum! Cookiez 4 every1"
  }
}

var funcUpdateHTML = function(){
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanGrandmaCost.innerHTML = grandmaCost;
  spanFactoryCost.innerHTML = factoryCost;
  spanFactoryCount.innterHTML = factoryCount;
}

var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  lifetimeCookieCount = lifetimeCookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if (cookieCount >= grandmaCost) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    grandmaCost = grandmaCost +1;
    funcUpdateHTML();
  }
}

var funcBuyFactory = function(){
  if (cookieCount >= factoryCost) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount + 1;
    factoryCost = factoryCost +1;
    funcUpdateHTML();
  }
}

var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount + (factoryCount*10)
  lifetimeCookieCount = lifetimeCookieCount + grandmaCount + (factoryCount*10)

  funcUpdateHTML();
}

buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonBuyFactory.addEventListener('click', funcBuyFactory);
setInterval(funcLoop, 1000);
funcUpdateHTML();
