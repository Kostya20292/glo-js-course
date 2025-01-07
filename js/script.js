'use strict';

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageInput = document.getElementById('age');
const childrenInput = document.getElementById('children');
const roleSelect = document.getElementById('role');
const saveButton = document.getElementById('save');
const table = document.getElementById('entity-table-body');

let workers = JSON.parse(localStorage.getItem('workers')) || [];

class Worker {
    constructor(name, surname, age, children) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.children = children;
    }
}

class Plumber extends Worker {
    constructor(name, surname, age, children) {
        super(name, surname, age, children);
        this.role = 'Слесарь';
    }
}

class Driver extends Worker {
    constructor(name, surname, age, children) {
        super(name, surname, age, children);
        this.role = 'Водитель';
    }
}

const clearElements = () => {
    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
    childrenInput.checked = false;
    roleSelect.value = '';
};

const saveToLocalStorage = () => {
    localStorage.setItem('workers', JSON.stringify(workers));
};

const renderTable = () => {
    table.innerHTML = '';

    workers.forEach((item, index) => {
        const tr = document.createElement('tr');

        tr.insertAdjacentHTML(
            'beforeend',
            `
        <td>${item.surname} ${item.name}</td>
        <td>${item.children ? 'Да' : 'Нет'}</td>
        <td>${item.role}</td>
        <td><button class="delete-btn">Удалить</button></td>
        `
        );

        const deleteButton = tr.querySelector('.delete-btn');

        deleteButton.addEventListener('click', () => {
            workers.splice(index, 1);
            saveToLocalStorage();

            renderTable();
        });

        table.append(tr);
    });
};

saveButton.addEventListener('click', (e) => {
    e.preventDefault();

    let newWorker;

    if (roleSelect.value === 'plumber') {
        newWorker = new Plumber(
            nameInput.value,
            surnameInput.value,
            ageInput.value,
            childrenInput.checked
        );
    } else if (roleSelect.value === 'driver') {
        newWorker = new Driver(
            nameInput.value,
            surnameInput.value,
            ageInput.value,
            childrenInput.checked
        );
    } else {
        return;
    }

    workers.push(newWorker);

    renderTable();
    saveToLocalStorage();

    clearElements();
});

renderTable();
