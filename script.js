'use strict';

const lang = prompt("Введите язык ('ru' или 'en')").toLowerCase();
const days = {
    ru: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

if (lang === 'ru') {
    console.log(
        'Понедельник, Вторник, Среда, Четверг, Пятница, Сууббота, Воскресенье'
    );
} else {
    console.log(
        'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    );
}

switch (lang) {
    case 'ru':
        console.log(
            'Понедельник, Вторник, Среда, Четверг, Пятница, Сууббота, Воскресенье'
        );
        break;
    case 'en':
        console.log(
            'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
        );
        break;
}

console.log(days[lang]);

const namePerson = prompt('Введите имя');

const answer =
    namePerson === 'Артем'
        ? 'Директор'
        : namePerson === 'Алекс'
        ? 'Преподаватель'
        : 'Студент';

console.log(answer);
