var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5 ;
var totalCookieCount = 0;
var factoryCount = 0;
var factoryCost = 5 ;


var spanCookieCount = document.getElementById("cookie-count");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanGrandmaCost = document.getElementById("grandma-cost");
var spanTotalCookieCount= document.getElementById("totalcookie-Count");
var spanFactoryCount = document.getElementById("factory-count");
var spanFactoryCost = document.getElementById("factory-cost");

var funcUpdateHTML = function(){
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanGrandmaCost.innerHTML = grandmaCost;
  spanTotalCookieCount.innerHTML = totalCookieCount;
  spanGrandmaCount.innerHTML = factoryCount;
  spanGrandmaCost.innerHTML = factoryCost;


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
    factoryCount = factoryCount + 1;
    funcUpdateHTML();
    grandmaCost = grandmaCost +10;
  }
}
  var funcBuildFactory = function(){
  if (cookieCount >= factoryCost) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount + 1;
    funcUpdateHTML();
    factoryCost = factoryCost * 3;
  }
}

var funcLoop = function(){
  cookieCount = cookieCount + grandmaCount +factoryCount;
  totalCookieCount = totalCookieCount + grandmaCount +factoryCount;
  totalCookieCount = totalCookieCount + (factoryCount * 100);
  funcUpdateHTML();
}

buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonnGetFactory.addEventListener('click', funcGetFactory);
setInterval(funcLoop, 1000);
