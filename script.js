const arr = ['245', '534', '456', '123', '24', '69', '95'];

arr.forEach((num) => {
    if (num[0] === '2' || num[0] === '4') {
        console.log(num);
    }
});

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} — Делители этого числа: 1 и ${num}`);
    }
}
