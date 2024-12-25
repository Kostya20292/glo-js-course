'use strict';

const title = document.getElementById('title');
const startBtn = document.getElementById('start');
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPersent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const handlerBtn = document.querySelectorAll('.handler_btn');
const inputRollback = document.querySelector('.rollback input');
const rollbackValue = document.querySelector('.rollback .range-value');

const total = document.getElementById('total');
const totalCount = document.getElementById('total-count');
const totalCountOther = document.getElementById('total-count-other');
const fullTotalCount = document.getElementById('total-full-count');
const totalCountRollback = document.getElementById('total-count-rollback');

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screensCount: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    finalResults: false,
    init: () => {
        appData.addTitle();

        appData.checkScreens();

        startBtn.addEventListener('click', () => {
            if (appData.checkScreens()) {
                if (!appData.finalResults) appData.start();
            }
        });
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        inputRollback.addEventListener('input', () => {
            rollbackValue.textContent = `${inputRollback.value}%`;
            appData.rollback = +inputRollback.value;

            if (appData.finalResults) appData.changeRollback();
        });
    },
    addTitle: () => {
        document.title = title.textContent;
    },
    addScreens: () => {
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName =
                select.options[select.selectedIndex].textContent.trim();

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value,
            });
        });
    },
    checkScreens: () => {
        let buttonDisabled = true;

        screens = document.querySelectorAll('.screen');

        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (!select.value || !input.value) {
                buttonDisabled = false;
            }
        });

        return buttonDisabled;
    },
    addServices: () => {
        otherItemsPersent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: () => {
        const cloneScreen = screens[0].cloneNode(true);
        const cloneInput = cloneScreen.querySelector('input');

        cloneInput.value = '';

        buttonPlus.before(cloneScreen);
    },
    addPrices: () => {
        appData.screenPrice = appData.screens.reduce((sum, screen) => {
            return sum + screen.price;
        }, 0);

        appData.screensCount = appData.screens.reduce((sum, screen) => {
            return sum + screen.count;
        }, 0);

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent +=
                appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice =
            appData.screenPrice +
            appData.servicePricesPercent +
            appData.servicePricesNumber;

        appData.servicePercentPrice = Math.ceil(
            appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
        );
    },
    showResult: () => {
        total.value = appData.screenPrice;
        totalCountOther.value =
            appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
        totalCount.value = appData.screensCount;
    },
    changeRollback: () => {
        inputRollback.addEventListener('input', () => {
            appData.servicePercentPrice = Math.ceil(
                appData.fullPrice -
                    appData.fullPrice * (inputRollback.value / 100)
            );

            totalCountRollback.value = appData.servicePercentPrice;
        });
    },
    start: () => {
        appData.finalResults = true;

        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
    },
};

appData.init();
