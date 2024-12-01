'use strict';

const isNumber = (num) => {
    return !isNaN(num) && isFinite(num);
};

const guessNumber = () => {
    const randomNumber = Math.round(Math.random() * 100);
    let count = 10;
    let userAnswer;

    console.log(randomNumber);

    const playGame = () => {
        let userNumber = +prompt('Угадай число от 1 до 100');

        if (userNumber === 0) {
            return alert('Игра окончена');
        }

        if (!isNumber(userNumber)) {
            do {
                userNumber = +prompt('Введи число!');
            } while (!isNumber(userNumber));
        }

        if (userNumber > randomNumber && count > 1) {
            count--;
            alert(`Загаданное число меньше, осталось попыток ${count}`);
            playGame();
        }

        if (userNumber < randomNumber && count > 1) {
            count--;
            alert(`Загаданное число больше, осталось попыток ${count}`);
            playGame();
        }

        if (userNumber === randomNumber) {
            userAnswer = confirm(
                'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
            );

            if (userAnswer) guessNumber();
        }

        if (count === 1) {
            userAnswer = confirm('Попытки закончились, хотите сыграть еще?');
            count--;

            if (userAnswer) guessNumber();
        }
    };

    playGame();
};

guessNumber();
