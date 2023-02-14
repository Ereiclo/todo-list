import Todo from "./todo.js";
import element from "./createElements.js";

// let test = new Todo('compras','arroz');

// console.log(test);

(function () {
    let taskSectionUl = document.querySelector(".tasks-section > ul");
    let todoSectionUl = document.querySelector(".todo-section > ul");
    let createTaskButton = document.querySelector(".tasks > button");
    let createTodoButton = document.querySelector(".todo-section > button");
    let currentTask = null;
    let currentTodos = null;

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
        let newLi = createLiWithElmt(elmt);

        todoSectionUl.appendChild(newLi);

        return newLi;
    }

    function appendTaskSectionUl(elmt) {
        let newLi = createLiWithElmt(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = appendTaskSectionUl();
        newTask.classList.add("task");
        newTask.innerText = task;
        newTask.setAttribute("data-task", task);

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
            newTask.addEventListener('click',changeCurrentTask)
            currentTask = newTask;

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

        appendTaskSectionUl(newInput);
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e) {
        currentTask.classList.remove("focused-task");
        e.currentTarget.classList.add("focused-task");

        currentTask = e.currentTarget;
        loadTodosOfCurrentTask();
        // console.log(currentTask);
    }

    function loadTodosOfCurrentTask(){
        if(!currentTask) return;
        let dataTask = currentTask.getAttribute('data-task');

        currentTodos = Todo.loadTodos(dataTask);

        removeElements(todoSectionUl);
        // console.log(dataTask);

        for(let actualTodoId in currentTodos){
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

            if (i === 0) {
                taskElem.classList.add("focused-task");
                currentTask = taskElem;
                loadTodosOfCurrentTask();
            }
        }
    }


    function removeElements(elm){

        while(elm.firstChild){
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

        newRow.classList.add("todo-row");
        newCheckbox.classList.add("todo-finished");


        newCheckbox.addEventListener('input',(e) => {
            console.log(e.currentTarget.checked);
            let todoId = newRow.getAttribute('data-id');
            let task = currentTask.getAttribute('data-task');

            currentTodos[todoId].checked = e.currentTarget.checked;

            Todo.saveTodo(task,currentTodos[todoId]);
        })

        if (todo && todo.date) {
            newDate.classList.add("todo-date");
            newDate.innerText = todo.date;
        } else {
            newDate.classList.add("todo-date-input");
            newDate.addEventListener('blur', (e) => {
                let date = e.currentTarget.value;
                if(date != ''){
                    let newDiv = element.newDiv();
                    let todoId = newRow.getAttribute('data-id');
                    let task = currentTask.getAttribute('data-task');
                    newDiv.classList.add('todo-date');
                    newDiv.innerText = date;
                    newRow.replaceChild(newDiv,newDate);

                    currentTodos[todoId].date = date;

                    Todo.saveTodo(task,currentTodos[todoId]);

                }
            })
        } 

        newRow.appendChild(newCheckbox);
        newRow.appendChild(newTitle);
        newRow.appendChild(newDate);

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
                    newRow.parentNode.remove();
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
