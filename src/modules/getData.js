/* eslint-disable space-before-function-paren */
export const getData = async () => {
  const response = await fetch('dbHeroes.json');
  const data = await response.json();

  return data;
};
