'use strict';

const getResult = (x, y) => {
    let result;

    const a = Math.pow(x, y).toString().split('');

    result = Math.pow(x, y)
        .toString()
        .split('')
        .reduce((sum, val) => +sum + +val, 0);

    return result;
};

console.log(getResult(4, 8));
