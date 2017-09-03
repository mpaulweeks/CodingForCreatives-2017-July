
// string manipulation
function pray(message){
  if message === "" {
    return "🙏";
  }
  return message + " 🙏";
}

// string interpolation
function fire(message){
  return `🔥🔥🔥 ${message} 🔥🔥🔥`
}

// while loop
function promptForever(){
  var result = "";
  while (result != "hunter2"){
    result = window.prompt("Please type in hunter2", "");
  }
}

// math funcs
function add(x, y){
  return x + y;
}

function negative(x){
  return x * -1;
}

function subtract(x, y){
  return sum(x, negative(y));
}

function multiply(x, y){
  var sum = 0;
  for (var i = 0; i < y; i++) {
    sum = add(sum, x);
  }
  return sum;
}

// if example
function isEven(x){
  if (x % 2 === 0) {
    return true;
  }
  return false;
}

// fizzbuzz
function isFizzBuzz1(x){
  var result = "";
  if (x % 3 === 0){
    result += "Fizz";
  }
  if (x % 5 === 0){
    result += "Buzz";
  }
  if (result === ""){
    result += x;
  }
  return result;
}

function isFizzBuzz2(x){
  var result = "";
  if (x % 15 === 0){
    result = "FizzBuzz";
  } else if (x % 3 === 0){
    result = "Fizz";
  } else if (x % 5 === 0){
    result = "Buzz";
  } else {
    result = x;
  }
  return result;
}
