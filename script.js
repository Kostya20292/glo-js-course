'use strict';

const rollback = 11;

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = () => {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt(
        'Какие типы экранов нужно разработать?',
        'Простые, Сложные'
    );

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const showTypeOf = (variable) => {
    console.log(variable, typeof variable);
};

const getRollbackMessage = (price) => {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price >= 15000 && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (price <= 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else if (price < 0) {
        return 'Что то пошло не так';
    }
};

const getAllServicePrices = () => {
    let sum = 0;
    let servicePrice;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            servicePrice = +prompt('Сколько это будет стоить?');
        } while (!isNumber(servicePrice));

        sum += servicePrice;
    }

    return sum;
};

const getFullPrice = (price, fullPrice) => {
    return price + fullPrice;
};

const getTitle = () => {
    return (
        title.trim().slice(0, 1).toUpperCase() +
        title.trim().slice(1).toLowerCase()
    );
};

const getServicePercentPrices = (price, procent) => {
    return Math.ceil(price - price * (procent / 100));
};

asking();

const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);
