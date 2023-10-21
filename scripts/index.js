import { dataSeries } from './data.js';

var seriesTableBody = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
var seriesInfo = document.getElementById('seriesInfo');

loadSeriesTable(dataSeries);

function loadSeriesTable(series) {
  seriesTableBody.innerHTML = ''; 

  series.forEach(function (serie, index) {
    var tr = createTableRow(serie, index);
    seriesTableBody.appendChild(tr);
    tr.addEventListener('click', function () {
      loadCard(serie);
    });
  });

  averageSeasons.innerHTML = "<b>Seasons average:</b> " + calculateAverage(series);
}

function createTableRow(serie, index) {
  var tr = document.createElement('tr');
  tr.classList.add('clickable');
  tr.innerHTML = "\n    <td><b>" + (index + 1) + "</b></td>\n    <td><a href=\"#Card " + serie.getName() + "\">" + serie.getName() + "</a></td>\n    <td>" + serie.getChannel() + "</td>\n    <td>" + serie.getSeasons() + "</td>\n  ";
  return tr;
}

function calculateAverage(series) {
  var totalSeasons = series.reduce(function (sum, serie) {
    return sum + serie.getSeasons();
  }, 0);
  return totalSeasons / series.length;
}


function loadCard(serie) {
  seriesInfo.innerHTML = `
    <div class="card" style="width: 40rem;">
      <img class="card-img-top" src="${serie.getImage()}">
      <div class="card-body">
        <h5 class="card-title">${serie.getName()}</h5>
        <div class="card-content">
          <p>${serie.getDescription()}</p>
        </div>
        <div class="card-action">
          <a href="${serie.getLink()}" target="_blank">${serie.getLink()}</a>
        </div>
      </div>
    </div>
  `;
}


loadSeriesTable(dataSeries);

