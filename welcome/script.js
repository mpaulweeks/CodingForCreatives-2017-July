(function (){
  var heros = ['kermit', 'cat'];
  var randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;
})()
