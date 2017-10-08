(function (){
  const heros = ['kermit', 'cat'];
  const randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;

  function renderLinks(roster){
    console.log(roster);
    var bodyHtml = '';
    roster.students.forEach(s => {
      var sHtml = `<td class="projects-name">${s}</td>`;
      roster.projects.forEach(p => {
        sHtml += `<td class="projects-cell"><a target="_blank" href="https://github.com/mpaulweeks/cfc2017/tree/master/students/${s}/${p}">${p}</a></td>`;
      });
      bodyHtml += `<tr>${sHtml}</tr>`;
    });
    document.body.innerHTML += `
      <div class="projects-container">
        <table>
          <tbody>
            ${bodyHtml}
          </tbody>
        </table>
      </div>
    `;
  }
  fetch("http://static.mpaulweeks.com/cfc2017/roster.json")
    .then(response => {
      return response.json();
    })
    .then(json => {
      renderLinks(json);
    });
})()
