
var cookieCount = 0;
var grandmaCount = 0;
var grandmaPrice = 10;

var divCookieCounter = document.getElementById("cookie-counter");

var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonBuyGrandma = document.getElementById("buy-grandma");

var refreshDisplays = function(){
  divCookieCounter.innerHTML = cookieCount;
}
var bakeCookie = function(){
  cookieCount = cookieCount + 1;
  refreshDisplays();
}
var buyGrandma = function(){
  if (cookieCount >= grandmaPrice){
    grandmaCount = grandmaCount + 1;
    cookieCount = cookieCount - grandmaPrice;
    grandmaPrice = grandmaPrice + grandmaCount;
    refreshDisplays();
  }
}
var loop = function(){
  cookieCount = cookieCount + (grandmaCount * 1);
  refreshDisplays();
}

buttonBakeCookie.addEventListener('click', bakeCookie);
buttonBuyGrandma.addEventListener('click', buyGrandma);
setInterval(loop, 1000);

refreshDisplays();
