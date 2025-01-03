'use strict';

const title = document.getElementById('title');
const startButton = document.getElementById('start');
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
const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
const resetButton = document.getElementById('reset');
const cmsCheckbox = document.getElementById('cms-open');
const cmsBlock = document.querySelector('.hidden-cms-variants');
const cmsSelect = cmsBlock.querySelector('select');
const cmsInput = cmsBlock.querySelector('.main-controls__input input');

let screens = document.querySelectorAll('.screen');

const appData = {
    screens: [],
    screenPrice: 0,
    screensCount: 0,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    finalResults: false,
    cmsPercent: 0,
    cmsPrice: 0,
    init() {
        this.addTitle();
        this.checkScreens();

        startButton.addEventListener('click', () => {
            if (this.checkScreens()) {
                const numberInputs = document.querySelectorAll(
                    '.screen .main-controls__input input'
                );
                const selectElements = document.querySelectorAll(
                    '.screen .main-controls__select select'
                );

                resetButton.style.display = 'flex';
                startButton.style.display = 'none';

                this.start();
                this.disabledElements(numberInputs);
                this.disabledElements(selectElements);
                this.disabledElements(checkboxElements);
                this.disabledCmsElements();
            }
        });
        buttonPlus.addEventListener('click', this.addScreenBlock);

        inputRollback.addEventListener('input', () => {
            rollbackValue.textContent = `${inputRollback.value}%`;
            this.rollback = +inputRollback.value;

            if (this.finalResults) this.changeRollback();
        });

        cmsCheckbox.addEventListener('input', this.addCms);

        resetButton.addEventListener('click', () => {
            resetButton.style.display = 'none';
            startButton.style.display = 'block';

            this.reset();
        });
    },
    addTitle() {
        document.title = title.textContent;
    },
    addScreens() {
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
    checkScreens() {
        let buttonDisabled = true;

        screens = document.querySelectorAll('.screen');

        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (!select.value || !input.value) {
                buttonDisabled = false;
            }

            if (cmsCheckbox.checked) {
                if (
                    !cmsSelect.value ||
                    (cmsSelect.value === 'other' && !cmsInput.value)
                ) {
                    buttonDisabled = false;
                }
            }
        });

        return buttonDisabled;
    },
    addServices() {
        otherItemsPersent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=number]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=number]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock() {
        const cloneScreen = screens[0].cloneNode(true);
        const cloneInput = cloneScreen.querySelector('input');

        cloneInput.value = '';

        buttonPlus.before(cloneScreen);
    },
    addPrices() {
        this.screenPrice = this.screens.reduce((sum, screen) => {
            return sum + screen.price;
        }, 0);

        this.screensCount = this.screens.reduce((sum, screen) => {
            return sum + screen.count;
        }, 0);

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent +=
                this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.cmsPrice = this.screenPrice * (this.cmsPercent / 100);

        this.fullPrice =
            this.screenPrice +
            this.servicePricesPercent +
            this.servicePricesNumber +
            this.cmsPrice;

        this.servicePercentPrice = Math.ceil(
            this.fullPrice - this.fullPrice * (this.rollback / 100)
        );
    },
    addCms() {
        if (cmsCheckbox.checked) {
            cmsBlock.style.display = 'flex';

            cmsSelect.addEventListener('change', () => {
                if (cmsSelect.value === 'other') {
                    cmsInput.parentNode.style.display = 'block';

                    cmsInput.addEventListener('input', () => {
                        appData.cmsPercent = +cmsInput.value;
                    });
                } else {
                    appData.cmsPercent = +cmsSelect.value;

                    cmsInput.parentNode.style.display = 'none';
                }
            });
        } else {
            cmsBlock.style.display = 'none';
        }
    },
    showResult() {
        total.value = this.screenPrice;
        totalCountOther.value =
            this.servicePricesPercent +
            this.servicePricesNumber +
            this.cmsPrice;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
        totalCount.value = this.screensCount;
    },
    changeRollback() {
        inputRollback.addEventListener('input', () => {
            this.servicePercentPrice = Math.ceil(
                this.fullPrice - this.fullPrice * (inputRollback.value / 100)
            );

            totalCountRollback.value = this.servicePercentPrice;
        });
    },
    disabledElements(elements) {
        elements.forEach((element) => (element.disabled = true));
    },
    disabledCmsElements() {
        cmsCheckbox.disabled = true;
        cmsSelect.disabled = true;
        cmsInput.disabled = true;
    },
    activeElements(elements) {
        elements.forEach((element) => (element.disabled = false));
    },
    activeCmsElements() {
        cmsCheckbox.disabled = false;
        cmsSelect.disabled = false;
        cmsInput.disabled = false;
    },
    resetValues() {
        this.screens = [];
        this.screenPrice = 0;
        this.screensCount = 0;
        this.rollback = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
        this.servicesPercent = {};
        this.servicesNumber = {};
        this.finalResults = false;
        this.cmsPercent = 0;
        this.cmsPrice = 0;
    },
    clearElements() {
        const numberInputs = document.querySelectorAll(
            '.screen .main-controls__input input'
        );
        const selectElements = document.querySelectorAll(
            '.screen .main-controls__select select'
        );

        numberInputs.forEach((input) => (input.value = ''));
        selectElements.forEach((element) => (element.value = ''));
        cmsInput.value = '';
        cmsSelect.value = '';

        checkboxElements.forEach((element) => {
            element.checked = false;
        });

        cmsBlock.style.display = 'none';
        cmsInput.parentNode.style.display = 'none';

        inputRollback.value = 0;
        rollbackValue.textContent = '0%';

        total.value = 0;
        totalCountOther.value = 0;
        fullTotalCount.value = 0;
        totalCountRollback.value = 0;
        totalCount.value = 0;
    },
    deleteElements() {
        const screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            if (index !== 0) {
                screen.remove();
            }
        });
    },
    start() {
        this.finalResults = true;

        this.addScreens();
        this.addServices();
        this.addPrices();
        this.showResult();
    },
    reset() {
        const numberInputs = document.querySelectorAll(
            '.screen .main-controls__input input'
        );
        const selectElements = document.querySelectorAll(
            '.screen .main-controls__select select'
        );

        this.activeElements(numberInputs);
        this.activeElements(selectElements);
        this.activeElements(checkboxElements);
        this.activeCmsElements();
        this.resetValues();
        this.clearElements();
        this.deleteElements();
    },
};

appData.init();
