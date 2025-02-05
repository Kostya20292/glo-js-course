// функция, которая отвечает за фильтрацию по типу данных. Она принимает тип и массив значений, затем, этот массив фильтрует значения по типу данных и выдает новый массив
const filterByType = (type, ...values) => values.filter((value) => typeof value === type);

// функция, которая скрывает блоки с определенным классов
const hideAllResponseBlocks = () => {
  // получаем массив элементов
  const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));

  // перебираем этот массив и изменяем его стили
  responseBlocksArray.forEach((block) => (block.style.display = 'none'));
};

// функция, которая показывает принимает селектор блока, сообщение, которое вставляется в блок, и спан, который будет выводить сообщение
const howResponseBlock = (blockSelector, msgText, spanSelector) => {
  // функция, которая скрывает блоки с определенным классов
  hideAllResponseBlocks();

  // получаем элемент по селектору и изменияем его стиль
  document.querySelector(blockSelector).style.display = 'block';

  // проверяем, есть ли у нас спан
  if (spanSelector) {
    // в случае есть, меняем его текст на переданный текст
    document.querySelector(spanSelector).textContent = msgText;
  }
};

// функция, которая выводит ошибку и передает в нее текст, переданный в функцию
const showError = (msgText) =>
  // вызывается функция показа блока, в которую передается класс блока, который выводит ошибку, в нее передается текст и идентификатор
  showResponseBlock('.dialog__response-block_error', msgText, '#error');

// функция, которая принимает текст и выводит результат, если он положительный
const showResults = (msgText) => showResponseBlock('.dialog__response-block_ok', msgText, '#ok');

// функция, которая выводит результат, когда его нет
const showNoResults = () => showResponseBlock('.dialog__response-block_no-results');

// функция, которая принимает тип и массив значений
const tryFilterByType = (type, values) => {
  // проверяем код, если что-то в нем неправильно, то отрабатывает блок catch
  try {
    // обрабатываем массив значений функцией eval и выводит сообщение с типом, значениями, которые подходят под этот тип и выводим их через запятую
    const valuesArray = eval(`filterByType('${type}', ${values})`).join(', ');

    // формирует сообщение, если массив не пустой, то выводим строку с типом и значениями, если их нет, то выводим сообщение об отсутвии данных определенного типа
    const alertMsg = valuesArray.length
      ? `Данные с типом ${type}: ${valuesArray}`
      : `Отсутствуют данные типа ${type}`;

    // выводим результат
    showResults(alertMsg);
  } catch (e) {
    // обрабатываем ошибку
    showError(`Ошибка: ${e}`);
  }
};

// получаем кнопку фильтрации
const filterButton = document.querySelector('#filter-btn');

// вешаем обработчик событий на кнопку по клику
filterButton.addEventListener('click', (e) => {
  // получаем инпут с типом
  const typeInput = document.querySelector('#type');

  // получаем инпут с данными
  const dataInput = document.querySelector('#data');

  // проверяем, чтобы инпут с данными не был пустой
  if (dataInput.value === '') {
    // выводим сообщение с текстом
    dataInput.setCustomValidity('Поле не должно быть пустым!');

    // показываем сообщение, что результат не получен
    showNoResults();
  } else {
    // убираем сообщение с текстом об ошибке, так как данные пришли
    dataInput.setCustomValidity('');

    // отменяем стандартное поведение кнопки при нажатии
    e.preventDefault();

    // используя функцию фильтрации по типу, передаем в нее необхожиый тип и данные, избавленных от пробелов
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
  }
});
