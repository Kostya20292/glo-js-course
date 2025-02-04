import { getData } from './getData';

export const render = async () => {
  try {
    const data = await getData();
    const select = document.querySelector('select');
    const container = document.querySelector('div');

    let carInfo = {};

    data.forEach((car) => {
      const option = document.createElement('option');
      option.textContent = car.brand;
      option.value = car.brand;

      select.append(option);
    });

    select.addEventListener('input', () => {
      container.innerHTML = '';

      carInfo = data.find((car) => car.brand === select.value);

      container.insertAdjacentHTML(
        'beforeend',
        `
      <p>Тачка ${carInfo.brand} ${carInfo.model}</p>
      <p>Цена: ${carInfo.price}</p>
      `
      );
    });
  } catch (e) {
    console.log(e.message);
  }
};
