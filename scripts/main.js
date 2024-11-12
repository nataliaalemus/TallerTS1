// src/main.ts
import { Serie } from './serie.js';
const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico...", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman...", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists...", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes...", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based British miniseries...", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")
];
const tableBody = document.querySelector("#seriesTable tbody");
const averageText = document.getElementById("averageText");
const seriesDetailCard = document.querySelector("#seriesDetailCard");
if (tableBody) {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("a");
        nameLink.href = serie.link;
        nameLink.textContent = serie.titulo;
        nameLink.target = "_blank";
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);
        const channelCell = document.createElement("td");
        channelCell.textContent = serie.plataforma;
        row.appendChild(channelCell);
        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.numeroTemporadas.toString();
        row.appendChild(seasonsCell);
        tableBody.appendChild(row);
        row.addEventListener("click", () => {
            if (seriesDetailCard) {
                seriesDetailCard.innerHTML = `
                    <div class="card">
                        <img src="${serie.imagen}" class="card-img-top" alt="${serie.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${serie.titulo}</h5>
                            <p class="card-text">${serie.descripcion}</p>
                            <a href="${serie.link}" class="btn btn-primary" target="_blank">Más información</a>
                        </div>
                    </div>
                `;
            }
        });
    });
    // Calcular el promedio de temporadas, sin decimales
    const totalSeries = series.length;
    const totalSeasons = series.reduce((total, serie) => total + serie.numeroTemporadas, 0);
    const averageSeasons = Math.round(totalSeasons / totalSeries); // Promedio redondeado a entero
    if (averageText) {
        averageText.textContent = `Seasons average: ${averageSeasons}`;
    }
}
