const week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
];
const element = document.querySelector('body');
const data = new Date();
const currentDay = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(
    data
);

console.log(currentDay);

week.forEach((item) => {
    const appendElement = document.createElement('p');
    appendElement.textContent = item;
    if (item.toLocaleLowerCase() === currentDay) {
        appendElement.style.fontWeight = 'bold';
    }

    if (item === 'Суббота' || item === 'Воскресенье') {
        appendElement.style.fontStyle = 'italic';
    }

    element.appendChild(appendElement);
});
