var buttonPrev = document.getElementById("prev");
var buttonNext = document.getElementById("next");

var slides = Array.from(document.getElementsByClassName("slide"));
console.log(slides);
var slideIndex = 0;


var funcPrev = function(){
  if (slideIndex > 0){
    slides[slideIndex].classList.remove("slide-visible");
    slideIndex = slideIndex - 1;
  }
}
var funcNext = function(){
  if (slideIndex < slides.length - 1){
    slideIndex = slideIndex + 1;
    slides[slideIndex].classList.add("slide-visible");
  }
}
var funcKeyDown = function(event){
  console.log(event);
  if (event.code == 'ArrowLeft'){
    funcPrev();
  }
  if (event.code == 'ArrowRight'){
    funcNext();
  }
}


  buttonPrev.addEventListener('click', funcPrev);
  buttonNext.addEventListener('click', funcNext);
