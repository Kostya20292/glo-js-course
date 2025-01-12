const input = document.querySelector('input');
const p = document.querySelector('p');

const debounce = (func, delay) => {
  let timer; // Переменная для хранения таймера

  return (...args) => {
    clearTimeout(timer); // Очищаем предыдущий таймер
    timer = setTimeout(() => func(...args), delay); // Устанавливаем новый таймер
  };
};

input.addEventListener(
  'input',
  debounce(() => {
    p.textContent = input.value;
  }, 300)
);
