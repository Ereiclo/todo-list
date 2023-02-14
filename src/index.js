import Todo from "./todo.js";
import element from "./createElements.js";

// let test = new Todo('compras','arroz');

// console.log(test);

(function () {
    let taskSectionUl = document.querySelector(".tasks-section > ul");
    let todoSectionUl = document.querySelector(".todo-list");
    let createTaskButton = document.querySelector(".tasks > button");
    let createTodoButton = document.querySelector(".todo-section > button");
    let currentTask = null;
    let currentTodos = null;
    let currentTasks = [];
    let currentTaskIndex = null;

    function keydownBlur(e) {
        // console.log(e)
        if (e.key === "Enter" || e.key === "Escape") {
            e.currentTarget.blur();
        }
    }

    function createLiWithElmt(elmt) {
        let newLi = element.newLi();
        // console.log(element)
        if (elmt) newLi.appendChild(elmt);

        return newLi;
    }

    function appendTodoSectionUl(elmt) {
        // let newLi = createLiWithElmt(elmt);

        todoSectionUl.appendChild(elmt);

        return elmt;
    }

    function appendTaskSectionUl(elmt) {
        let newLi = createLiWithElmt(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = element.newDiv();
        newTask.classList.add("task");
        newTask.innerText = task;
        newTask.setAttribute("data-task", task);
        newTask.setAttribute("data-task-index", currentTasks.length);

        let newTaskLi = appendTaskSectionUl(newTask);
        let deleteBtn = element.newButton();
        let newImg = element.newImg("../img/trash.svg");

        deleteBtn.classList.add("delete-btn");
        deleteBtn.appendChild(newImg);
        deleteBtn.setAttribute("data-task-index", currentTasks.length);
        deleteBtn.addEventListener("click", (e) => {
            let eventTaskIndex = e.currentTarget.getAttribute('data-task-index');
            // console.log({currentTask,eventTaskIndex});
            if (currentTask === currentTasks[eventTaskIndex]) {
                // console.log(currentTasks)
                let nextSibling = (+eventTaskIndex + 1) % currentTasks.length;
                // console.log(nextSibling)

                if (nextSibling === eventTaskIndex)
                    nextSibling = null;

                e.currentTarget.classList.remove("focused-task");

                if (nextSibling) {
                    currentTaskIndex = nextSibling;
                    currentTask = currentTasks[nextSibling];
                    currentTask.classList.add("focused-task");
                } else {
                    currentTask = null;
                    currentTaskIndex = null;
                }

                loadTodosOfCurrentTask();
            }

            let task = currentTasks[eventTaskIndex].getAttribute('data-task');
            // console.log(task);
            // return;

            e.currentTarget.parentNode.remove();

            currentTasks.splice(eventTaskIndex,1);
            console.log(currentTasks);
            Todo.removeTask(task);
        });

        newTaskLi.classList.add("task-li");
        newTaskLi.appendChild(deleteBtn);
        currentTasks.push(newTask);

        if(currentTask === null){
            currentTask = newTask;
            currentTask.classList.add('focused-task');
            currentTaskIndex = 0;
            loadTodosOfCurrentTask();
        }

        return newTask;
    }

    function newTaskInputLeave(actualInput) {
        // let actualInput = e.currentTarget;
        // console.log('ewe')
        actualInput.parentNode.remove();
        // actualInput.removeEventListener('blur');

        if (actualInput.value !== "") {
            if (Todo.findTask(actualInput.value)) {
                return;
            }

            let newTask = createTask(actualInput.value);

            // if (currentTask) {
            // currentTask.classList.remove("focused-task");
            // }
            // newTask.classList.add("focused-task");
            newTask.addEventListener("click", changeCurrentTask);
            // currentTask = newTask;

            Todo.saveTask(actualInput.value);
        }
    }

    function addNewTask(e) {
        // if(currentFocusedInput.value) {
        // console.log('uwu')
        // }

        let newInput = element.newInputOfType("text");
        newInput.classList.add("new-task-input");
        newInput.addEventListener("blur", (e) =>
            newTaskInputLeave(e.currentTarget)
        );
        newInput.addEventListener("keydown", keydownBlur);

        let newLi = appendTaskSectionUl(newInput);
        newLi.classList.add('li-input')
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e) {
        console.log(currentTasks);
        if(e.currentTarget === currentTask) return;
        currentTask.classList.remove("focused-task");
        e.currentTarget.classList.add("focused-task");

        currentTask = e.currentTarget;
        currentTaskIndex = e.currentTarget.getAttribute('data-task-index');
        loadTodosOfCurrentTask();
    }

    function loadTodosOfCurrentTask() {
        currentTodos = {};

        removeElements(todoSectionUl);

        if (!currentTask) return;

        let dataTask = currentTask.getAttribute("data-task");

        Object.assign(currentTodos, Todo.loadTodos(dataTask));

        // console.log(dataTask);

        for (let actualTodoId in currentTodos) {
            // console.log(currentTodos[actualTodoId]);
            createTodoDOM(currentTodos[actualTodoId]);
        }
    }

    function loadTasks() {
        let initialTaskList = Todo.loadTasks();

        for (let i = 0; i < initialTaskList.length; ++i) {
            let task = initialTaskList[i];
            let taskElem = createTask(task);
            taskElem.addEventListener("click", changeCurrentTask);
            // currentTasks.push(taskElem);

            if (i === 0) {
                taskElem.classList.add("focused-task");
                currentTask = taskElem;
                currentTaskIndex = 0;
                loadTodosOfCurrentTask();
            }
        }
    }

    function removeElements(elm) {
        while (elm.firstChild) {
            elm.firstChild.remove();
        }
    }

    function createTodoDOM(todo) {
        if (currentTask === null) return;

        let newRow = element.newDiv();
        let newCheckbox = element.newInputOfType("checkbox");
        let newDate =
            todo && todo.date
                ? element.newDiv()
                : element.newInputOfType("date");

        let newTitle = todo ? element.newDiv() : element.newInputOfType("text");
        let deleteBtn = element.newButton();
        let newImg = element.newImg("../img/trash.svg");
        // deleteBtn.innerText = 'x';
        deleteBtn.classList.add("delete-btn");
        deleteBtn.type = "button";
        deleteBtn.appendChild(newImg);

        newRow.classList.add("todo-row");
        newCheckbox.classList.add("todo-finished");

        deleteBtn.addEventListener("click", (e) => {
            let todoId = newRow.getAttribute("data-id");
            let task = currentTask.getAttribute("data-task");

            delete currentTodos[todoId];
            newRow.remove();

            Todo.removeTodo(task, todoId);
        });

        newCheckbox.addEventListener("input", (e) => {
            // console.log(e.currentTarget.checked);
            let todoId = newRow.getAttribute("data-id");
            let task = currentTask.getAttribute("data-task");

            currentTodos[todoId].checked = e.currentTarget.checked;

            Todo.saveTodo(task, currentTodos[todoId]);
        });

        if (todo && todo.date) {
            newDate.classList.add("todo-date");
            newDate.innerText = todo.date;
        } else {
            newDate.classList.add("todo-date-input");
            newDate.addEventListener("blur", (e) => {
                let date = e.currentTarget.value;
                if (date != "") {
                    let newDiv = element.newDiv();
                    let todoId = newRow.getAttribute("data-id");
                    let task = currentTask.getAttribute("data-task");
                    newDiv.classList.add("todo-date");
                    newDiv.innerText = date;
                    newRow.replaceChild(newDiv, newDate);

                    currentTodos[todoId].date = date;

                    Todo.saveTodo(task, currentTodos[todoId]);
                }
            });
        }

        newRow.appendChild(newCheckbox);
        newRow.appendChild(newTitle);
        newRow.appendChild(newDate);
        newRow.appendChild(deleteBtn);

        appendTodoSectionUl(newRow);

        if (!todo) {
            newTitle.classList.add("new-todo-input");
            newTitle.addEventListener("blur", (e) => {
                let title = e.currentTarget.value;
                let task = currentTask.getAttribute("data-task");

                if (title !== "") {
                    let actualDiv = e.currentTarget.parentNode;
                    let newTodo = new Todo(task, title);
                    let newDiv = element.newDiv();

                    // e.currentTarget.remove();
                    // console.log(newTodo);

                    newDiv.classList.add("todo-title");
                    newDiv.innerText = newTodo.title;
                    newRow.setAttribute("data-id", newTodo.id);

                    actualDiv.replaceChild(newDiv, e.currentTarget);

                    currentTodos[newTodo.id] = newTodo;

                    Todo.saveTodo(task, newTodo);

                    // console.log(currentTodos);
                } else {
                    newRow.remove();
                }
            });
            newTitle.addEventListener("keydown", keydownBlur);
            newTitle.focus();
        } else {
            newTitle.classList.add("todo-title");
            newTitle.innerText = todo.title;
            newRow.setAttribute("data-id", todo.id);
            newCheckbox.checked = todo.checked;
        }
    }

    createTaskButton.addEventListener("focus", addNewTask);
    createTodoButton.addEventListener("focus", (e) => createTodoDOM());

    loadTasks();
})();
