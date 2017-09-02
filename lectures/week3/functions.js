
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
