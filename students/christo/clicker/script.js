var toyCount = 0;
var totalToyCount = 0;
var elfCount = 0;
var elfCost = 5;
var factoryCount = 0;
var factoryCost = 20;

var spanToyCount = document.getElementById("toy-count");
var spanTotalToyCount = document.getElementById("total-toy-count");
var buttonMakeToy = document.getElementById("make-toy");
var buttonEnlistElf = document.getElementById("enlist-elf");
var spanElfCount = document.getElementById("elf-count");
var spanElfCost = document.getElementById("elf-cost");
var spanFactoryCount = document.getElementById("factory-count");
var spanMessageProgress = document.getElementById("message-progress");
var spanFactoryCost = document.getElementById("factory-cost");
var buttonBuildFactory = document.getElementById("build-factory");

var funcUpdateHTML = function(){
  spanToyCount.innerHTML = toyCount;
  spanElfCount.innerHTML = elfCount;
  spanElfCost.innerHTML = elfCost;
  spanFactoryCount.innerHTML = factoryCount;
  spanFactoryCost.innerHTML = factoryCost;
  spanTotalToyCount.innerHTML = totalToyCount;
  if (totalToyCount > 100) {
    spanMessageProgress.innerHTML = "Ok, that's a good start!"
  }
  if (totalToyCount > 2000) {
      spanMessageProgress.innerHTML = "Great job! Keep it up!"
    }
    if (totalToyCount > 10000) {
      spanMessageProgress.innerHTML = "GO SANTA GO!"
    }
    if (totalToyCount > 100000) {
      spanMessageProgress.innerHTML = "JOY TO THE WORLD!"
    }
    if (totalToyCount > 300000) {
      spanMessageProgress.innerHTML = "HO-HO-HOLY SHIT! WE DID IT!"
    }
}

var funcMakeToy = function(){
  toyCount = toyCount + 1;
  totalToyCount = totalToyCount + 1;
  funcUpdateHTML();
}
var funcEnlistElf = function(){
  if (toyCount >= elfCost) {
    toyCount = toyCount - elfCost;
    elfCount = elfCount + 1;
    funcUpdateHTML();
    elfCost = elfCost * 2;
  }
}

var funcBuildFactory = function(){
  if (toyCount >= factoryCost) {
    toyCount = toyCount - factoryCost;
    factoryCount = factoryCount + 1;
    funcUpdateHTML();
    factoryCost = factoryCost * 3;
  }
}

var funcLoop = function(){
  toyCount = toyCount + elfCount;
  totalToyCount = totalToyCount + elfCount;
  toyCount = toyCount + (factoryCount * 100);
  totalToyCount = totalToyCount + (factoryCount * 100);
  funcUpdateHTML();
}



buttonMakeToy.addEventListener('click', funcMakeToy);
buttonEnlistElf.addEventListener('click', funcEnlistElf);
buttonBuildFactory.addEventListener('click', funcBuildFactory);
setInterval(funcLoop, 1000);
