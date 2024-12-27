'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

// const todoData = [];
let todoData;

const render = () => {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    todoData.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = `
            <span class="text-todo">${item.text}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
            </div>
        `;

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-remove').addEventListener('click', () => {
            delete todoData[index];
            render();
            localStorage.setItem('todo', JSON.stringify(todoData));
        });

        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed;
            render();
            localStorage.setItem('todo', JSON.stringify(todoData));
        });
    });
};

const loadFromLocalStorage = () => {
    if (localStorage.getItem('todo') == undefined) {
        todoData = [];
    } else {
        todoData = JSON.parse(localStorage.getItem('todo'));
    }
    render();
};

todoControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodo = {
        text: headerInput.value.trim(),
        completed: false,
    };

    if (headerInput.value.trim()) todoData.push(newTodo);

    localStorage.setItem('todo', JSON.stringify(todoData));

    headerInput.value = '';

    render();
});

loadFromLocalStorage();
