'use strict';

const stringFunction = (str) => {
    str = str.trim();

    if (typeof str !== 'string') {
        return 'Аргумент не является строкой';
    }

    return str.length >= 30 ? str.slice(0, 30) + '...' : str;
};

console.log(stringFunction('   Приветsdfsdfsddsfsdfsdfsdfsdfsdfsfsdfsdf   '));
