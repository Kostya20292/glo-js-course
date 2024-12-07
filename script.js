'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: () => {
        this.title = prompt(
            'Как называется ваш проект?',
            'Калькулятор верстки'
        );
        this.screens = prompt(
            'Какие типы экранов нужно разработать?',
            'Простые, Сложные'
        );

        do {
            this.screenPrice = +prompt('Сколько будет стоить данная работа?');
        } while (!isNumber(this.screenPrice) || this.screenPrice === 0);

        this.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    isNumber: (num) => !isNaN(parseFloat(num)) && isFinite(num),
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
    getAllServicePrices: () => {
        let sum = 0;
        let servicePrice;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt(
                    'Какой дополнительный тип услуги нужен?'
                );
            } else if (i === 1) {
                this.service2 = prompt(
                    'Какой дополнительный тип услуги нужен?'
                );
            }

            do {
                servicePrice = +prompt('Сколько это будет стоить?');
            } while (!isNumber(servicePrice) || servicePrice === 0);

            sum += servicePrice;
        }

        return sum;
    },
    getFullPrice: () => this.screenPrice + this.allServicePrices,
    getTitle: () =>
        this.title.trim().slice(0, 1).toUpperCase() +
        this.title.trim().slice(1).toLowerCase(),
    getServicePercentPrices: () =>
        Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100)),
    start: () => {
        this.asking();
        this.allServicePrices = getAllServicePrices();
        this.fullPrice = getFullPrice();
        this.servicePercentPrice = getServicePercentPrices();
        this.title = getTitle();

        logger();
    },
    logger: () => {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
    },
};

appData.start();
