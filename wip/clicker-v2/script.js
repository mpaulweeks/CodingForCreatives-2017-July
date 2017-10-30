
var cookieCount = 0;
var grandmaCount = 0;
var grandmaPrice = 10;

var divCookieCounter = document.getElementById("cookie-counter");

var buttonBakeCookie = document.getElementById("bake-cookie");
var buttonBuyGrandma = document.getElementById("buy-grandma");

var bakeCookie = function(){
  cookieCount = cookieCount + 1;
  divCookieCounter.innerHTML = cookieCount;
}
var buyGrandma = function(){
  if (cookieCount >= grandmaPrice){
    grandmaCount = grandmaCount + 1;
    cookieCount = cookieCount - grandmaPrice;
    divCookieCounter.innerHTML = cookieCount;
  }
}
var loop = function(){
  cookieCount = cookieCount + (grandmaCount * 1);
  divCookieCounter.innerHTML = cookieCount;
}

buttonBakeCookie.addEventListener('click', bakeCookie);
buttonBuyGrandma.addEventListener('click', buyGrandma);
setInterval(loop, 1000);
