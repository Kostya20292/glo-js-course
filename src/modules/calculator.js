/* eslint-disable no-mixed-operators */
import { animate } from './helpers';

export const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');

  let currentTotal = 0;

  const animateValue = (start, end) => {
    const range = end - start;

    animate({
      duration: 500,
      timing: (timeFraction) => timeFraction,
      draw: (progress) => {
        const value = Math.floor(start + range * progress);
        total.textContent = value;
      },
    });
  };

  const countCalc = () => {
    const calcTypeValue = +calcType.value;
    const calcSquareValue = +calcSquare.value;

    let totalValue;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animateValue(currentTotal, totalValue);
    currentTotal = totalValue;

    total.textContent = animateValue;
  };

  calcBlock.addEventListener('input', countCalc);
};
