const getData = () => {
  return fetch('db.json')
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const sendData = (obj) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

getData()
  .then((data) => sendData(data))
  .then((data) => console.log(data));
