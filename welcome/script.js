(function (){
  function getWeek(weekNum){
    return `
      <div class="week">
        <div class="week-title">WEEK ${weekNum}</div>
        <div class="contents">
          <a href="https://github.com/mpaulweeks/cfc2017/tree/master/lectures/week${weekNum}">Lecture</a>
        </div>
      </div>`;
  }
  var perRow = 3;
  for (var x = 0; x < perRow; x++){
    var weekData = '';
    for (var i = 1; i <= perRow; i++){
      weekData += getWeek(i + perRow*x);
    }
    weekData = `<div class="week-row">${weekData}</div>`;
    document.getElementById('week-data').innerHTML += weekData;
  }

  var heros = ['kermit', 'cat'];
  var randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;
})()
