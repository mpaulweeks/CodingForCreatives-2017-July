
var cookieCount = 0;
var cookieCounterDiv = document.getElementById("cookie-counter");
var cashCount = 0;
var cashCounterDiv = document.getElementById("cash-counter");
var grandmaCount = 0;
var grandmaCounterDiv = document.getElementById("grandma-counter");
var grandmaPrice = 10;
var grandmaPriceDiv = document.getElementById("grandma-price");

var bakeButton = document.getElementById("bake");
var sellButton = document.getElementById("sell");
var sellAllButton = document.getElementById("sell-ten");
var buyGrandmaButton = document.getElementById("buy-grandma");

var refreshDisplays = function(){
  cookieCounterDiv.innerHTML = cookieCount;
  cashCounterDiv.innerHTML = cashCount;
  grandmaCounterDiv.innerHTML = grandmaCount;
  grandmaPriceDiv.innerHTML = grandmaPrice;
}
var bakeCookie = function(){
  cookieCount = cookieCount + 1;
  refreshDisplays();
}
var sellCookie = function(){
  if (cookieCount >= 1){
    cookieCount = cookieCount - 1;
    cashCount = cashCount + 3;
    refreshDisplays();
  }
}
var sellAllCookies = function(){
  cashCount = cashCount + (3 * cookieCount);
  cookieCount = 0;
  refreshDisplays();
}
var loopGrandma = function(){
  cookieCount = cookieCount + (grandmaCount * 1);
  refreshDisplays();
}
var buyGrandma = function(){
  if (cashCount >= grandmaPrice){
    grandmaCount = grandmaCount + 1;
    cashCount = cashCount - grandmaPrice;
    grandmaPrice = grandmaPrice + grandmaCount;
    refreshDisplays();
  }
}

refreshDisplays();

bakeButton.addEventListener('click', bakeCookie);
sellButton.addEventListener('click', sellCookie);
sellAllButton.addEventListener('click', sellAllCookies);
buyGrandmaButton.addEventListener('click', buyGrandma);
setInterval(loopGrandma, 1000);
