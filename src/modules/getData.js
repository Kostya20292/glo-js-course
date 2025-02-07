export const getData = async () => {
  const response = await fetch(
    'https://openexchangerates.org/api/latest.json?app_id=45f293b9fcc542f09896e4f81da3713b'
  );

  const data = await response.json();

  const USD = data.rates.USD;
  const EUR = data.rates.EUR;
  const RUB = data.rates.RUB;

  return {
    USD,
    EUR,
    RUB,
  };
};
