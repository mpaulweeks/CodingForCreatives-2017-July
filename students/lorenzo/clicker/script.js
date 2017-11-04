// 0.1251|98|0|15|0|100|0|500|0|2000|0|7000|0|50000|0|1000000|0|123456789

var cookieCount = 0;
var grandmaCount = 0;
var grandmaCost = 5;
var factoryCount = 0;
var factoryCost = 25;
var spaceshipCount = 0;
var spaceshipCost = 50;
var italiangrandmaCount = 0;
var italiangrandmaCost = 100;
var totalCookieCount = 0;

var spanCookieCount = document.getElementById("cookie-count");
var spanGrandmaCount = document.getElementById("grandma-count");
var spanFactoryCount = document.getElementById("factory-count");
var spaceshipCount = document.getElementById("spaceship-count");
var italiangrandmaCount = document.getElementById("italiangrandma-count");
var spanTotalCookieCount = document.getElementById("total-cookie-count");
var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonEnlistGrandma = document.getElementById("enlist-grandma");
var buttonBuyFactory = document.getElementById("buy-factory");
var buttonBuyspaceship = document.getElementById("buy-spaceship");
var buttonpraisegrandma = document.getElementById("praise-grandma");
var divMessage = document.getElementById("message");

var funcUpdateHTML = function(){
  if (cookieCount > 5){
    divMessage.innerHTML = "mangia bimbo MANGIA!"
  }
  if (cookieCount > 10){
    divMessage.innerHTML = "hai magiato la pappa?!? ne vuoi ancora?"
  }
  if (grandmaCount > 3){
    divMessage.innerHTML = "ancora ancora ANCORA!"
  }
  if (spaceshipCount > 2){
    divMessage.innerHTML = "vooooooooooolaaare"
  }
  if (cookieCount > 20){
    divMessage.innerHTML = "Maaaaaaanaatteeeee"
  }
  if (cookieCount > 100){
    divMessage.innerHTML = "you are now chocolate intolerant"
  }
  spanCookieCount.innerHTML = cookieCount;
  spanGrandmaCount.innerHTML = grandmaCount;
  spanFactoryCount.innerHTML = factoryCount;
  spanSpaceshipCount.innerHTML = spaceshipCount;
  spanItaliangrandmaCount.innerHTML = italiangrandmaCount;
  spanTotalCookieCount.innerHTML = totalCookieCount;
}



var funcBakeCookie = function(){
  cookieCount = cookieCount + 1;
  funcUpdateHTML();
}
var funcEnlistGrandma = function(){
  if (cookieCount >= grandmaCost) {
    cookieCount = cookieCount - grandmaCost;
    grandmaCount = grandmaCount + 1;
    grandmaCost = grandmaCost +3;
    funcUpdateHTML();
  }
}
var funcLoop = function(){
  cookieCount = cookieCount + (grandmaCount*2) + (factoryCount*5) + (spaceshipCount*20) + (italiangrandmaCount*50);
  totalCookieCount = totalCookieCount + (grandmaCount*2) + (factoryCount*5) + (spaceshipCount*20) + (italiangrandmaCount*50);
  funcUpdateHTML();
}
var funcbuyfactory = function(){
  if (cookieCount >= factoryCost) {
    cookieCount = cookieCount - factoryCost;
    factoryCount = factoryCount + 1;
    factoryCost = factoryCost + 10;
    funcUpdateHTML();
    }
  }
    var funcbuyspaceship = function(){
      if (cookieCount >= spaceshipCost) {
        cookieCount = cookieCount - spaceshipCost;
        spaceshipCount = spaceshipCount + 1;
        spaceshipCost = spaceshipCost + 30;
        funcUpdateHTML();
        }
  }
        var funcpraisegrandma = function(){
          if (cookieCount >= italiangrandmaCost) {
            cookieCount = cookieCount - italiangrandmaCost;
            italiangrandmaCount = italiangrandmaCount + 1;
            italiangrandmaCost = italiangrandmaCost + 300;
            funcUpdateHTML();
            }
  }


buttonBakeCookie.addEventListener('click', funcBakeCookie);
buttonEnlistGrandma.addEventListener('click', funcEnlistGrandma);
buttonBuyFactory.addEventListener('click', funcbuyfactory);
buttonBuyspaceship.addEventListener('click', funcbuyspaceship);
buttonpraisegrandma.addEventListener('click', funcpraisegrandma);


setInterval(funcLoop, 1000);
