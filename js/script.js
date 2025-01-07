'use strict';

const firstValue = document.getElementById('a');
const secondValue = document.getElementById('b');
const buttonPlus = document.getElementById('sum');
const buttonMult = document.getElementById('mult');
const result = document.getElementById('res');

const calculator = {
    sum() {
        return +firstValue.value + +secondValue.value;
    },
    mult() {
        return +firstValue.value * +secondValue.value;
    },
    show() {
        if (this === buttonPlus) {
            result.value = calculator.sum();
        } else {
            result.value = calculator.mult();
        }
    },
};

buttonPlus.addEventListener('click', calculator.show);
buttonMult.addEventListener('click', calculator.show);
