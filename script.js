'use strict';

const textInput = document.getElementById('text');
const colorButton = document.getElementById('btn');
const square = document.getElementById('square');
const squareButton = document.getElementById('e_btn');
const rangeInput = document.getElementById('range');
const circle = document.getElementById('circle');

let squareColor;

textInput.addEventListener('input', () => {
    squareColor = textInput.value;
});

colorButton.addEventListener('click', () => {
    square.style.backgroundColor = squareColor;
    squareButton.style.display = 'none';
});

rangeInput.addEventListener('input', () => {
    circle.style.width = `${rangeInput.value}%`;
    circle.style.height = `${rangeInput.value}%`;
});
