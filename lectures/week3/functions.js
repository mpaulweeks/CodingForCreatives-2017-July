
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
function promptLoop(){
  var result = "";
  while (result != "hunter2"){
    result = window.prompt("Please type in hunter2", "");
  }
}
