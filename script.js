const num = 266219;
const numArray = String(num).split('');

const result = numArray.reduce((prev, next) => {
    return prev * next;
}, 1);

const newResult = result ** 3;

console.log(num);

console.log(numArray);

console.log(result);

console.log(newResult);

console.log(String(newResult).slice(0, 2));
