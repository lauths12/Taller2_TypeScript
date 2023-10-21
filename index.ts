import { Serie } from './serie.js';
import { dataSeries } from './data.js';

const seriesTableBody = document.getElementById('series') as HTMLTableSectionElement;
let averageSeasons = document.getElementById('averageSeasons') as HTMLParagraphElement;
let seriesInfo = document.getElementById('seriesInfo') as HTMLDivElement;

loadSeriesTable(dataSeries);

function loadSeriesTable(series: Serie[]) {
  seriesTableBody.innerHTML = '';

  series.forEach((serie, index) => {
    const tr = createTableRow(serie, index);
    seriesTableBody.appendChild(tr);
    tr.addEventListener('click', () => loadCard(serie));
  });

  averageSeasons.innerHTML = `<b>Seasons average:</b> ${calculateAverage(series)}`;
}

function createTableRow(serie: Serie, index: number) {
  const tr = document.createElement('tr');
  tr.classList.add('clickable');
  tr.innerHTML = `
    <td><b>${index + 1}</b></td>
    <td><a href="#Card ${serie.getName()}">${serie.getName()}</a></td>
    <td>${serie.getChannel()}</td>
    <td>${serie.getSeasons()}</td>
  `;
  return tr;
}

function calculateAverage(series: Serie[]) {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
  return (totalSeasons / series.length);
}

function loadCard(serie: Serie) {
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
