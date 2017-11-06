// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;
var factoryCount = 0;
var factoryCost = 20;
var totalCookieCount = 0;


//button
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var buttonBuyFactory = document.getElementById("factory-buy")


var spanCookieCount = document.getElementById("cookie-count");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanGrandmaCost = document.getElementById("grandma-cost");
var spanFactoryCount = document.getElementById("factory-count");
var spanFactoryCost = document.getElementById("factory-cost");
var spanTotalCookieCount = document.getElementById("total-cookie");

var divMessage = document.getElementById("message");



var funcUpdateHTML = function(){
  if (totalCookieCount > 20) {
    divMessage.innerHTML = "You've got this";
  }
  if (totalCookieCount > 30) {
    divMessage.innerHTML = "These are better than Insomnia cookies";
  }
  if (totalCookieCount > 50) {
    divMessage.innerHTML = "Okay, now stop wasting your time and do something useful with your life";
  }
  if (totalCookieCount > 200) {
    divMessage.innerHTML = "Seriously get off before I turn off the internet";
  }
  if (totalCookieCount > 500) {
    divMessage.innerHTML = "Get a life";
  }
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanGrandmaCost.innerHTML = grandmaCost;
  spanFactoryCount.innerHTML = factoryCount;
  spanFactoryCost.innerHTML = factoryCost;
  spanTotalCookieCount.innerHTML = totalCookieCount;
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
    grandmaCost = grandmaCost + 10 ;
    funcUpdateHTML();
  }
}

var funcBuyFactory = function(){
  if (cookieCount >= factoryCost) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount +1;
    factoryCost = factoryCost + 20;
    funcUpdateHTML();
  }
}

var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount + (factoryCount*5);
  totalCookieCount = totalCookieCount + grandmaCount + (factoryCount*5);
  funcUpdateHTML();
}


buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonBuyFactory.addEventListener('click', funcBuyFactory);

setInterval(funcLoop, 1000);
funcUpdateHTML();
