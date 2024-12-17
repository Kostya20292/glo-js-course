'use strict';

const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElement = document.querySelector('ul');

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value.trim();

    if (inputValue) {
        const listItem = document.createElement('li');

        listItem.textContent = inputValue;
        listElement.append(listItem);

        inputElement.value = '';
    }
});
