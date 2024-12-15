'use strict';

const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];

const hoursForms = ['час', 'часа', 'часов'];
const minutesForms = ['минута', 'минуты', 'минут'];
const secondsForms = ['секунда', 'секунды', 'секунд'];

const currentDate = () => {
    const today = new Date();
    const date = today.getDate();
    const day = days[today.getDay()];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    let dateAnotherFormat;
    let monthAnotherFormat;

    let hoursFormatFirst;
    let hoursFormatSecond;
    let minutesFormatFirst;
    let minutesFormatSecond;
    let secondsFormatFirst;
    let secondsFormatSecond;

    let dateFirstFormat;
    let dateSecondFormat;

    const declension = (number, words) => {
        if (number % 100 >= 11 && number % 100 <= 19) {
            return words[2];
        }
        if (number % 10 === 1) {
            return words[0];
        }
        if ([2, 3, 4].includes(number % 10)) {
            return words[1];
        }
        return words[2];
    };

    const formatDate = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    const appendOnPage = () => {
        const body = document.body;

        body.innerHTML = `<p>${dateFirstFormat}</p>
        <p>${dateSecondFormat}</p>`;
    };

    dateAnotherFormat = formatDate(date);
    monthAnotherFormat = formatDate(today.getMonth() + 1);

    hoursFormatFirst = declension(hours, hoursForms);
    minutesFormatFirst = declension(minutes, minutesForms);
    secondsFormatFirst = declension(seconds, secondsForms);

    hoursFormatSecond = formatDate(hours);
    minutesFormatSecond = formatDate(minutes);
    secondsFormatSecond = formatDate(seconds);

    dateFirstFormat = `Сегодня ${day} ${date} ${month} ${year} года ${hours} ${hoursFormatFirst} ${minutes} ${minutesFormatFirst} ${seconds} ${secondsFormatFirst}`;
    dateSecondFormat = `${dateAnotherFormat}.${monthAnotherFormat}.${year} - ${hoursFormatSecond}:${minutesFormatSecond}:${secondsFormatSecond}`;

    appendOnPage();
};

setInterval(currentDate, 1000);

currentDate();
