(function (){
  function getWeek(weekNum){
    let css = weekNum == 1 ? ' week-first' : '';
    return `
      <div class="week${css}">
        <div class="week-title">WEEK ${weekNum}</div>
        <div class="contents">
          <a href="https://github.com/mpaulweeks/cfc2017/sample/week${weekNum}">Sample</a>
        </div>
      </div>`;
  }

  var weekData = '';
  for (var i = 1; i <= 3; i++){
    weekData += getWeek(i);
  }
  document.getElementById('week-data').innerHTML = weekData;
})()
