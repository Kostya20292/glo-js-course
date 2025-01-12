export const daysFunc = () => {
  const date = new Date();
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const day = days[date.getDay()];
  const hours = date.getHours();
  const newYearDay = new Date('31 december 2025').getTime();
  const daysToNewYear = (newYearDay - date.getTime()) / 1000;

  let str;

  if (hours >= 0 && hours < 6) {
    str = 'Доброй ночи';
  } else if (hours >= 6 && hours < 12) {
    str = 'Доброе утро';
  } else if (hours >= 12 && hours < 18) {
    str = 'Добрый день';
  } else {
    str = 'Добрый вечер';
  }

  console.log(str);
  console.log(`Сегодня: ${day}`);
  console.log(`Текущее время: ${date.toLocaleTimeString('en')}`);
  console.log(`До нового года осталось ${Math.floor(daysToNewYear / 3600 / 24)} дня`);
};
