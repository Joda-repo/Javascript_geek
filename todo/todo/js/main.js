'use strict'

const storage = window.localStorage;

// Массив задач
let taskList = [];

// Ф-я конструктор для создания задач
function Task(title, done = false) {
    this.title = title;
    this.done = done;
}

function save() {
    storage.setItem('taskList', JSON.stringify(taskList));
};

function load() {
    taskList = JSON.parse(storage.getItem('taskList')) || [];
}

function saveAndReload() {
    save();
    drawTasks();
}

// Отрисовка списка задач =====================================

function drawTasks() {
    const $taskList = document.querySelector('#task-list');
    $taskList.textContent = '';
    taskList.forEach(function (task, i) {
        drawTask(task, i, $taskList);
    })
}


function drawTask(task, id, $container) {
    // непосредственно отрисовка =======
    const html = `<div id="item-${id}" class="task-item ${task.done ? 'done' : ''}">
        <input type="checkbox" ${task.done ? 'checked="checked"' : ''}>
        <p class="task-item__title">${task.title}</p>
        <button data-id="${id}" class="task-item__btn">delete</button>
    </div>`
    $container.insertAdjacentHTML('beforeend', html);
    // =================================

    // Установка обработчика для чекбокса ===================
    const $item = $container.querySelector(`#item-${id}`);
    const $chBox = $item.querySelector('input');

    $chBox.addEventListener('click', function() {
        task.done = !task.done;
        saveAndReload();
    })
    // ======================================================
}

// =======================================================================

// Добавление новой задачи ===============================================
const $addTaskBtn = document.querySelector('#add-task-btn');
const $newTaskInput = document.querySelector('#new-task');

$addTaskBtn.addEventListener('click', function() {
    taskList.push(new Task($newTaskInput.value));
    $newTaskInput.value = '';
    saveAndReload();
});
// =======================================================================


// Удаление задач ========================================================
const $taskList = document.querySelector('#task-list');

$taskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        const index = Number(e.target.dataset.id);
        taskList = taskList.filter(function (task, i) {
          return i !== index
        });
        saveAndReload();
    }
})

// ========================================================================

load();
drawTasks();






