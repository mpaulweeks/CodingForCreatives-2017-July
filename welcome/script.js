(function (){
  const heros = ['kermit', 'cat'];
  const randomHero = heros[Math.floor(Math.random() * heros.length)];
  document.getElementById('hero').style.backgroundImage = `url(welcome/${randomHero}.gif)`;

  function renderLinks(roster){
    console.log(roster);
    var headHtml = '<th class="projects-name">name</th>';
    roster.projects.forEach(p => {
      headHtml += `
        <th>
          <a target="_blank" href="https://github.com/mpaulweeks/cfc2017/tree/master/homework/${p}">${p}</a>
        </th>
      `;
    });
    var bodyHtml = '';
    roster.students.forEach(s => {
      var sHtml = `<td class="projects-name">${s}</td>`;
      roster.projects.forEach(p => {
        if (p === 'final'){
          const fi = roster.finals[s];
          if (fi){
            sHtml += `
              <td class="projects-cell">
                <a target="_blank" href="https://github.com/mpaulweeks/cfc2017/tree/master/students/${s}/${p}">docs</a>
                <a target="_blank" href="https://github.com/${fi.github}/${fi.repo}">code</a>
                <a target="_blank" href="https://${fi.github}.github.io/${fi.repo}/">site</a>
              </td>`;
          }
        } else {
          sHtml += `
            <td class="projects-cell">
              <a target="_blank" href="https://github.com/mpaulweeks/cfc2017/tree/master/students/${s}/${p}">code</a>
              <a target="_blank" href="http://cfc2017.mpaulweeks.com/students/${s}/${p}">site</a>
            </td>`;
        }
      });
      bodyHtml += `<tr>${sHtml}</tr>`;
    });
    document.body.innerHTML += `
      <div class="projects-container">
        <table>
          <thead>
            <tr>
              ${headHtml}
            </tr>
          </thead>
          <tbody>
            ${bodyHtml}
          </tbody>
        </table>
      </div>
    `;
  }
  fetch("http://static.mpaulweeks.com/cfc2017/roster.json?v=" + (new Date()).toISOString())
    .then(response => {
      return response.json();
    })
    .then(json => {
      renderLinks(json);
    });
})()
