var buttonHelper = document.getElementById("helper-open");
var divHelper = document.getElementById("helper");
var buttonPrev = document.getElementById("prev");
var buttonNext = document.getElementById("next");
var spanArtTitle = document.getElementById("art-title");

var slides = Array.from(document.getElementsByClassName("slide"));
console.log(slides);
var slideIndex = 0;



var funcPrev = function(){
  if (slideIndex > 0){
    slides[slideIndex].classList.remove("slide-visible");
    slideIndex = slideIndex - 1;
    funcUpdateHTML();
  }
}
var funcNext = function(){
  if (slideIndex < slides.length - 1){
    slideIndex = slideIndex + 1;
    slides[slideIndex].classList.add("slide-visible");
    funcUpdateHTML();
  }
}
var funcKeyDown = function(event){
  console.log(event);
  if (event.code == 'ArrowLeft'){
    funcPrev();
    funcUpdateHTML();
  }
  if (event.code == 'ArrowRight'){
    funcNext();
    funcUpdateHTML();
  }
}

var funcUpdateHTML = function(){
slideIndex.innerHTML = "slideIndex";
if (slideIndex == 0) {
  spanArtTitle.innerHTML = "The Dreamers (2017)"
}
if (slideIndex == 1) {
  spanArtTitle.innerHTML = "Magnetism (2017)"
}
if (slideIndex == 2) {
  spanArtTitle.innerHTML = "Ammihil (2016)"
}
if (slideIndex == 3) {
  spanArtTitle.innerHTML = "Stardust (2015)"
}
if (slideIndex == 4) {
  spanArtTitle.innerHTML = "Red Shift (2017)"
}
}

buttonPrev.addEventListener('click', funcPrev);
buttonNext.addEventListener('click', funcNext);
document.addEventListener('keydown', funcKeyDown);
console.log("hello world")
