'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const rollback = 11;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

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

const getAllServicePrices = (price1, price2) => {
    return price1 + price2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = (price, fullPrice) => {
    return price + fullPrice;
};

const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = () => {
    return (
        title.trim().slice(0, 1).toUpperCase() +
        title.trim().slice(1).toLowerCase()
    );
};

const getServicePercentPrices = (price, procent) => {
    return Math.ceil(price - price * (procent / 100));
};

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);
