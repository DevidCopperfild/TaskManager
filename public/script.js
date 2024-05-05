document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector(".create-button");
    const taskInput = document.querySelector(".task-input");
    let taskList = document.querySelector(".task-list");

    // Если список задач не существует, создаем его
    if (!taskList) {
        taskList = document.createElement("ul");
        taskList.classList.add("task-list");
        document.querySelector(".form").appendChild(taskList);
    }

    createButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const taskList = document.querySelector(".task-list");
            taskList.appendChild(taskItem); // Добавляем задачу в конец списка
            taskInput.value = "";
        }
    });
});