'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const todoData = [];

const render = () => {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    todoData.forEach((item) => {
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

        li.querySelector('.todo-complete').addEventListener('click', () => {
            item.completed = !item.completed;
            render();
        });
    });
};

todoControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodo = {
        text: headerInput.value,
        completed: false,
    };

    todoData.push(newTodo);
    headerInput.value = '';

    render();
});
