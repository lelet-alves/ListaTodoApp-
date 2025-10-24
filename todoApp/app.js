const addButton = document.getElementById('addTask');
const newTaskInput = document.getElementById('new-task');
const todoList = document.querySelector('.todo-list ul');
const completeList = document.querySelector('.complete-list ul');

function createTaskElement(taskText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Apagar";
    deleteButton.classList.add('delete');
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    return li;
}

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const taskElement = createTaskElement(taskText);
        todoList.appendChild(taskElement);
        newTaskInput.value = "";

        taskElement.querySelector('input[type="checkbox"]').addEventListener('change', function () {
            handleTaskCompletion(taskElement);
        });

        taskElement.querySelector('.delete').addEventListener('click', function () {
            handleTaskDeletion(taskElement);
        });
    }
}

function handleTaskCompletion(taskElement) {
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        completeList.appendChild(taskElement);
        checkbox.disabled = true;
    } else {
        todoList.appendChild(taskElement);
        checkbox.disabled = false;
    }
}

function handleTaskDeletion(taskElement) {
    taskElement.remove();
}

addButton.addEventListener('click', addTask);

newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    todoList.innerHTML = "";
    completeList.innerHTML = "";
});
