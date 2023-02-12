import Todo from "./todo.js";
import element from "./createElements.js";

// let test = new Todo('compras','arroz');

// console.log(test);

(function () {
    let taskSectionUl = document.querySelector(".tasks-section > ul");
    let createTaskButton = document.querySelector(".tasks > button");
    let currentTask = null;

    function appendTaskSectionUl(elmt) {
        let newLi = element.newLi();
        // console.log(element)
        if (elmt) newLi.appendChild(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = appendTaskSectionUl();
        newTask.classList.add("task");
        newTask.innerText = task;

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

            createTask(actualInput.value);
            // newTask.classList.add('.task');
            // newTask.innerText = actualInput.value;
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
        newInput.addEventListener("keydown", (e) => {
            // console.log(e)
            if (e.key === "Enter" || e.key === "Escape") {
                e.currentTarget.blur();
            }
        });

        appendTaskSectionUl(newInput);
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e){

        currentTask.classList.remove('focused-task');
        e.currentTarget.classList.add('focused-task');

        currentTask = e.currentTarget;
        console.log(currentTask);

    }

    function loadTasks() {
        let initialTaskList = Todo.loadTasks();


        for(let i = 0; i < initialTaskList.length;++i){
            
            let task = initialTaskList[i];
            let taskElem = createTask(task);
            taskElem.addEventListener('click',changeCurrentTask);

            if(i === 0){
                taskElem.classList.add('focused-task');
                currentTask = taskElem;

                

            }
        }
    }

    

    createTaskButton.addEventListener("focus", addNewTask);
    loadTasks();
})();
