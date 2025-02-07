import { getData } from './getData';

export const count = async () => {
  const data = await getData();

  const originalCurrencyInputs = document.querySelectorAll('.from-currency input');
  const finalCurrencyInputs = document.querySelectorAll('.to-currency input');
  const currencyValueInput = document.getElementById('amount-from');
  const currencyResultInput = document.getElementById('amount-to');

  const getSelectedCurrency = (groupName) => {
    const radio = document.querySelector(`input[name="${groupName}"]:checked`);

    return radio.value;
  };

  const convert = () => {
    const originalCurrency = getSelectedCurrency('from-currency');
    const finalCurrency = getSelectedCurrency('to-currency');

    const result = currencyValueInput.value * (data[finalCurrency] / data[originalCurrency]);

    currencyResultInput.value = result.toFixed(2);
  };

  originalCurrencyInputs.forEach((input) => {
    input.addEventListener('change', convert);
  });

  finalCurrencyInputs.forEach((input) => {
    input.addEventListener('change', convert);
  });

  currencyValueInput.addEventListener('input', convert);
};
