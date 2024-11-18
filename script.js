const title = 'glo-js-course';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 100;
const rollback = 11;
const fullPrice = 250000;
const adaptive = true;

// alert('Hello world');

console.log('Hello world');

console.log(`Title type: ${typeof title}`);
console.log(`FullPrice type: ${typeof fullPrice}`);
console.log(`Adaptive type: ${typeof adaptive}`);
console.log(`Screens length: ${screens.length}`);
console.log(
    `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`
);
console.log(
    `Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`
);
console.log(screens.toLowerCase().split(','));
console.log(fullPrice * (rollback / 100));
