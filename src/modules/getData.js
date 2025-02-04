export const getData = async () => {
  const response = await fetch('../../cars.json');
  const data = await response.json();

  return data.cars;
};
