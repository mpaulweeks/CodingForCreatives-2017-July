(function (){
  function getWeek(weekNum){
    return `
      <div class="week">
        <div class="week-title">WEEK ${weekNum}</div>
        <div class="contents">
          <a href="https://github.com/mpaulweeks/cfc2017/tree/master/prompt/week${weekNum}">Assignment</a>
        </div>
      </div>`;
  }
  var weekData = '';
  for (var i = 1; i <= 3; i++){
    weekData += getWeek(i);
  }
  document.getElementById('week-data').innerHTML = weekData;

  let heros = [
    'kermit',
    'cat',
  ];
  let randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;
})()
