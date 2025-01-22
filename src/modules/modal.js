import { animate } from './helpers';

export const modal = () => {
  const popup = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  const popupAnimateClose = () => {
    animate({
      duration: 1000, // Длительность закрытия (в миллисекундах)
      timing: (timeFraction) => 1 - timeFraction, // Уменьшение прозрачности (от 1 до 0)
      draw: (progress) => {
        popup.style.opacity = progress;
        if (progress === 0) {
          popup.style.display = 'none';
        }
      },
    });
  };

  const popupAnimateOpen = () => {
    popup.style.display = 'block'; // Устанавливаем display перед началом анимации
    animate({
      duration: 1000, // Длительность открытия (в миллисекундах)
      timing: (timeFraction) => timeFraction, // Увеличение прозрачности (от 0 до 1)
      draw: (progress) => {
        popup.style.opacity = progress;
      },
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (document.documentElement.clientWidth >= 768) {
        popupAnimateOpen();
      } else {
        popup.style.display = 'block';
        popup.style.opacity = 1;
      }
    });
  });

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      if (document.documentElement.clientWidth >= 768) {
        popupAnimateClose();
      } else {
        popup.style.display = 'none';
        popup.style.opacity = 0;
      }
    }
  });
};
