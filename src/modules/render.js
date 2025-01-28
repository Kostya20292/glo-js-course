/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import { capitalize } from './capitalize';

export const render = (data) => {
  const container = document.getElementById('cardsContainer');

  container.innerHTML = '';

  data.forEach((card) => {
    const cardFields = Object.keys(card)
      .filter((key) => key !== 'photo')
      .map((key) => {
        return `<p><strong>${capitalize(key)}:</strong> ${
          key === 'movies' ? card[key].join(', ') : card[key]
        }</p>`;
      });

    container.insertAdjacentHTML(
      'beforeend',
      `
        <div class="card">
          <img src="${card.photo}" alt="${card.name}" />
          <div class="card-content">
            <h2>${card.name}</h2>
            ${cardFields.join('')}
          </div>
        </div>
      `
    );
  });
};
