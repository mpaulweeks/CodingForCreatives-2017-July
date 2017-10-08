(function (){
  const heros = ['kermit', 'cat'];
  const randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;

  function renderLinks(roster){
    console.log(roster);
  }
  fetch("http://static.mpaulweeks.com/cfc2017/roster.json")
    .then(response => {
      return response.json();
    })
    .then(json => {
      renderLinks(json);
    });
})()
