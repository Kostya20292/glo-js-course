/* eslint-disable space-before-function-paren */
import { getData } from './getData';
import { render } from './render';

export const filter = async () => {
  const movieFilter = document.getElementById('movieFilter');
  const cards = await getData();

  let movies = new Set();

  render(cards);

  cards.forEach((card) => {
    card.movies?.forEach((movie) => {
      movies.add(movie);
    });
  });

  movies.forEach((movie) => {
    const option = document.createElement('option');
    option.value = movie;
    option.textContent = movie;
    movieFilter.append(option);
  });

  movieFilter.addEventListener('input', () => {
    const filteredData = cards.filter((card) => card.movies?.includes(movieFilter.value));
    render(filteredData);
  });
};
