'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    asking: () => {
        do {
            appData.title = prompt('Как называется ваш проект?');
        } while (!appData.isString(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            let price;

            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (!appData.isString(name));

            do {
                price = +prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price) || price === 0);

            appData.screens.push({ id: i, name, price });
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let servicePrice;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (!appData.isString(name));

            do {
                servicePrice = +prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(servicePrice) || servicePrice === 0);

            appData.services[`${name}${i}`] = +servicePrice;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: () => {
        appData.screenPrice = appData.screens.reduce((sum, screen) => {
            return sum + screen.price;
        }, 0);

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    isNumber: (num) => !isNaN(parseFloat(num)) && isFinite(num),
    isString: (str) =>
        typeof str === 'string' && str.trim() !== '' && isNaN(Number(str)),
    getRollbackMessage: (price) => {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price >= 15000 && price <= 30000) {
            return 'Даем скидку в 5%';
        } else if (price <= 15000 && price >= 0) {
            return 'Скидка не предусмотрена';
        } else if (price < 0) {
            return 'Что то пошло не так';
        }
    },
    getFullPrice: () =>
        (appData.fullPrice = appData.screenPrice + appData.allServicePrices),
    getTitle: () =>
        (appData.title =
            appData.title.trim().slice(0, 1).toUpperCase() +
            appData.title.trim().slice(1).toLowerCase()),
    getServicePercentPrices: () =>
        (appData.servicePercentPrice = Math.ceil(
            appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
        )),
    start: () => {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    logger: () => {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screenPrice);
    },
};

appData.start();
