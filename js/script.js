'use strict';

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const result = document.querySelector('.result');

const cityArr = {
    rus: [
        'Москва',
        'Санк-Петербург',
        'Новосибирск',
        'Екатеринбург',
        'Нижний Новгород',
        'Казань',
        'Челябинск',
    ],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'],
};

countrySelect.addEventListener('change', () => {
    citySelect.style.display = 'block';
    citySelect.innerHTML = '';

    cityArr[countrySelect.value].forEach((city) => {
        const option = document.createElement('option');

        option.textContent = city;
        citySelect.append(option);

        result.textContent = `${
            countrySelect.options[countrySelect.options.selectedIndex]
                .textContent
        } ${cityArr[countrySelect.value][0]}`;
    });
});

citySelect.addEventListener('change', () => {
    result.textContent = `${
        countrySelect.options[countrySelect.options.selectedIndex].textContent
    } ${citySelect.options[citySelect.options.selectedIndex].textContent}`;
});
