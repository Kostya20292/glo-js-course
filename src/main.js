const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');

task1.innerHTML = task1.innerHTML.replace(/[а-яА-я]*функ[а-яА-я]+/g, (str) => {
  return `<strong>${str}</strong>`;
});

task2.innerHTML = task2.innerHTML.replace(/\d{2}:\d{2}/g, (str) => {
  return `<b>${str}</b>`;
});

document.body.innerHTML = document.body.innerHTML.replace(/"([^"]+)"/g, '<mark>"$1"</mark>');

document.body.innerHTML = document.body.innerHTML.replace(
  /http:\/\/([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g,
  '<a href="http://$1">$1</a>'
);

const colorMatches = document.body.innerHTML.match(/#[A-Fa-f0-9]{6}\b/g);
if (colorMatches) {
  console.log(colorMatches);
}

document.body.innerHTML = document.body.innerHTML.replace(
  /http:\/\/([a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/[a-zA-Z0-9/._-]+)\b/g,
  '<a href="http://$1">$1</a>'
);
