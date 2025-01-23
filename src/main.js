const getData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'db.json');
  xhr.responseType = 'json';

  xhr.onload = () => {
    console.log(xhr);

    sendData(xhr.response);
  };

  xhr.onerror = () => {
    console.log('error');
  };

  xhr.send();
};

const sendData = (data) => {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.onerror = () => {
    console.log('error');
  };

  xhr.send(JSON.stringify(data));
};

getData();
